import path from 'node:path';

export function stripQueryAndHash(value) {
  return value.split('#', 1)[0].split('?', 1)[0];
}

export function extractAttributeUrls(html) {
  const urls = [];
  const pattern = /\b(?:href|src)\s*=\s*(["'])(.*?)\1/gi;
  for (const match of html.matchAll(pattern)) urls.push(match[2].trim());
  return urls;
}

export function routeCandidates(value, distDir) {
  const pathname = decodeURIComponent(stripQueryAndHash(value)).replace(/^\/+/, '');
  if (!pathname) return [path.join(distDir, 'index.html')];

  const normalized = path.normalize(pathname);
  if (normalized.startsWith('..') || path.isAbsolute(normalized)) return [];

  const absolute = path.join(distDir, normalized);
  if (pathname.endsWith('/')) return [path.join(absolute, 'index.html')];
  if (path.extname(pathname)) return [absolute];
  return [absolute, `${absolute}.html`, path.join(absolute, 'index.html')];
}

export function visibleText(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--([\s\S]*?)-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function zeroMetricPlaceholders(html) {
  const values = [];
  for (const match of html.matchAll(/<strong\b[^>]*>([\s\S]*?)<\/strong>/gi)) {
    const text = visibleText(match[1]).replace(/\s+/g, '');
    if (/^(?:0K|0%|\$0M)$/i.test(text)) values.push(text);
  }
  return values;
}

export function privacyArtifactViolations(relativePath, content = '') {
  const violations = [];
  const normalizedPath = relativePath.replaceAll('\\', '/').toLowerCase();

  if (normalizedPath.includes('sample-receipt.jpg') || /sample-receipt\.jpg/i.test(content)) {
    violations.push('removed receipt asset');
  }

  const sensitiveReceiptPatterns = [
    ['retail transaction identifier', /\b(?:TC|TR|ST|OP|TE)#\s*\d{4,}\b/i],
    ['masked payment-card suffix', /\b(?:VISA|MASTERCARD|AMEX|DISCOVER)(?:\s+(?:CREDIT|DEBIT))?\s+(?:\*|X){2,}\d{4}\b/i],
    ['payment authorization code', /\b(?:AUTH(?:ORIZATION)?|APPROVAL)\s*(?:CODE|#|NO\.?)\s*[:#]?\s*[A-Z0-9]{6,}\b/i],
  ];

  for (const [label, pattern] of sensitiveReceiptPatterns) {
    if (pattern.test(content)) violations.push(label);
  }

  return violations;
}

export function metaContent(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const nameFirst = new RegExp(`<meta\\b[^>]*(?:name|property)=["']${escaped}["'][^>]*content=["']([^"']*)["'][^>]*>`, 'i');
  const contentFirst = new RegExp(`<meta\\b[^>]*content=["']([^"']*)["'][^>]*(?:name|property)=["']${escaped}["'][^>]*>`, 'i');
  return html.match(nameFirst)?.[1] ?? html.match(contentFirst)?.[1] ?? '';
}

export function canonicalHref(html) {
  const relFirst = /<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i;
  const hrefFirst = /<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i;
  return html.match(relFirst)?.[1] ?? html.match(hrefFirst)?.[1] ?? '';
}
