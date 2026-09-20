import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import {
  canonicalHref,
  extractAttributeUrls,
  fetchExternalLinkStatus,
  governedImpactClaimViolations,
  metaContent,
  privacyArtifactViolations,
  routeCandidates,
  stripQueryAndHash,
  visibleText,
  zeroMetricPlaceholders,
} from './validators.mjs';

test('identifies external link checks and retries servers that reject HEAD', async () => {
  const calls = [];
  const statuses = [415, 206];
  let cancelledBodies = 0;
  const fetchImpl = async (url, options) => {
    calls.push({ url, ...options });
    return {
      status: statuses.shift(),
      body: { cancel: async () => { cancelledBodies += 1; } },
    };
  };

  const status = await fetchExternalLinkStatus('https://publisher.example/article.pdf', { fetchImpl, timeoutMs: 50 });

  assert.equal(status, 206);
  assert.deepEqual(calls.map((call) => call.method), ['HEAD', 'GET']);
  assert.equal(calls[0].headers['User-Agent'], 'PortfolioLinkValidator/1.0 (+https://github.com/smgpulse007/smgpulse007.github.io)');
  assert.equal(calls[1].headers.Range, 'bytes=0-0');
  assert.equal(cancelledBodies, 2);
});

test('does not download an external URL when HEAD succeeds', async () => {
  const calls = [];
  const fetchImpl = async (url, options) => {
    calls.push({ url, ...options });
    return { status: 200, body: null };
  };

  assert.equal(await fetchExternalLinkStatus('https://publisher.example/', { fetchImpl, timeoutMs: 50 }), 200);
  assert.deepEqual(calls.map((call) => call.method), ['HEAD']);
});

test('preserves definitive external failures without an unnecessary GET', async () => {
  const calls = [];
  const fetchImpl = async (url, options) => {
    calls.push({ url, ...options });
    return { status: 404, body: null };
  };

  assert.equal(await fetchExternalLinkStatus('https://publisher.example/missing', { fetchImpl, timeoutMs: 50 }), 404);
  assert.deepEqual(calls.map((call) => call.method), ['HEAD']);
});

test('reports a failed ranged GET after a method-specific HEAD rejection', async () => {
  const statuses = [415, 404];
  const fetchImpl = async () => ({ status: statuses.shift(), body: null });

  assert.equal(await fetchExternalLinkStatus('https://publisher.example/missing.pdf', { fetchImpl, timeoutMs: 50 }), 404);
});

test('retries a HEAD transport failure with a bounded GET', async () => {
  const methods = [];
  const fetchImpl = async (_url, options) => {
    methods.push(options.method);
    if (options.method === 'HEAD') throw new TypeError('fetch failed');
    return { status: 206, body: null };
  };

  assert.equal(await fetchExternalLinkStatus('https://publisher.example/article.pdf', { fetchImpl, timeoutMs: 50 }), 206);
  assert.deepEqual(methods, ['HEAD', 'GET']);
});

test('extracts local link attributes without inventing URLs', () => {
  const html = '<a href="/work/#proof">Work</a><img src="/assets/proof.svg"><meta content="/ignored">';
  assert.deepEqual(extractAttributeUrls(html), ['/work/#proof', '/assets/proof.svg']);
});

test('maps pretty URLs and assets to static build candidates', () => {
  const dist = path.resolve('dist');
  assert.deepEqual(routeCandidates('/work?mode=evidence#proof', dist), [
    path.join(dist, 'work'),
    path.join(dist, 'work.html'),
    path.join(dist, 'work', 'index.html'),
  ]);
  assert.deepEqual(routeCandidates('/work/#proof', dist), [path.join(dist, 'work', 'index.html')]);
  assert.deepEqual(routeCandidates('/assets/proof.svg', dist), [path.join(dist, 'assets', 'proof.svg')]);
  assert.deepEqual(routeCandidates('../../secret', dist), []);
});

test('detects crawler-visible zero metrics but ignores CSS percentages', () => {
  const html = '<style>left:0%</style><strong>0<!-- -->K</strong><strong>$<!-- -->0<!-- -->M</strong><strong>90%</strong>';
  assert.deepEqual(zeroMetricPlaceholders(html), ['0K', '$0M']);
});

test('rejects removed receipt artifacts and sensitive retail identifiers', () => {
  assert.deepEqual(privacyArtifactViolations('public/assets/sample-receipt.jpg'), ['removed receipt asset']);
  assert.deepEqual(privacyArtifactViolations('src/data/example.ts', 'const row = "TC# 123456 VISA CREDIT XXXX1234";'), [
    'retail transaction identifier',
    'masked payment-card suffix',
  ]);
  assert.deepEqual(privacyArtifactViolations('src/data/example.ts', 'const row = "AUTH CODE: A1B2C3";'), ['payment authorization code']);
  assert.deepEqual(privacyArtifactViolations('src/data/safe.ts', 'const row = "synthetic total: 12.34";'), []);
  assert.deepEqual(privacyArtifactViolations('src/data/safe.ts', 'Reviewers remain the approval authority.'), []);
});

test('extracts canonical and robots metadata in either attribute order', () => {
  const html = '<meta content="noindex,follow" name="robots"><link href="https://example.com/work/" rel="canonical">';
  assert.equal(metaContent(html, 'robots'), 'noindex,follow');
  assert.equal(canonicalHref(html), 'https://example.com/work/');
});

test('normalizes HTML to searchable visible text', () => {
  assert.equal(visibleText('<p>Let&#39;s <b>talk</b> &amp; build.</p>'), "Let's talk & build.");
  assert.equal(stripQueryAndHash('/work/?x=1#proof'), '/work/');
});

test('accepts the governed backlog and closure claims', () => {
  const failures = governedImpactClaimViolations({
    renderedHome: '<article><strong>7K</strong><p>case backlog cleared</p></article><article><strong>20%</strong><p>automated closure improvement</p></article>',
    homeSource: '<strong>7K</strong><p>case backlog cleared</p><strong>20%</strong><p>automated closure improvement</p>',
    claimSource: "value: '7K', label: 'case backlog cleared'\nvalue: '20%', label: 'automated closure improvement'",
  });
  assert.deepEqual(failures, []);
});

test('rejects the false documents-per-day claim and missing governed claims', () => {
  const failures = governedImpactClaimViolations({
    renderedHome: '<article><strong>7K</strong><p>documents/day</p></article>',
    homeSource: '<strong>7K</strong><p>documents/day</p>',
    claimSource: "value: '7K', label: 'documents/day'",
  });
  assert.ok(failures.some((failure) => failure.includes('dist/index.html: denied false claim')));
  assert.ok(failures.some((failure) => failure.includes('src/pages/index.astro: denied false claim')));
  assert.ok(failures.some((failure) => failure.includes('7k case backlog cleared')));
  assert.ok(failures.some((failure) => failure.includes('20% automated closure improvement')));
  assert.ok(failures.some((failure) => failure.includes('required governed value/label pair')));
});
