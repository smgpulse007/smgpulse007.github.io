export type DeployTarget =
  | 'local'
  | 'hostinger-staging'
  | 'hostinger-production'
  | 'github-pages-mirror';

const target = (import.meta.env.PUBLIC_DEPLOY_TARGET ?? 'local') as DeployTarget;

const defaults: Record<DeployTarget, { siteUrl: string; canonicalUrl: string; robots: string }> = {
  local: {
    siteUrl: 'http://localhost:4321',
    canonicalUrl: 'http://localhost:4321',
    robots: 'noindex,nofollow',
  },
  'hostinger-staging': {
    siteUrl: 'http://localhost:4321',
    canonicalUrl: 'http://localhost:4321',
    robots: 'noindex,nofollow',
  },
  'hostinger-production': {
    siteUrl: 'https://shaileshdudala.com',
    canonicalUrl: 'https://shaileshdudala.com',
    robots: 'index,follow',
  },
  'github-pages-mirror': {
    siteUrl: 'https://smgpulse007.github.io',
    canonicalUrl: 'https://shaileshdudala.com',
    robots: 'noindex,follow',
  },
};

const selected = defaults[target] ?? defaults.local;

export const siteConfig = {
  target,
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? selected.siteUrl,
  canonicalUrl: import.meta.env.PUBLIC_CANONICAL_URL ?? selected.canonicalUrl,
  robots: import.meta.env.PUBLIC_ROBOTS ?? selected.robots,
  isMirror: target === 'github-pages-mirror',
  isStaging: target === 'hostinger-staging',
  isProduction: target === 'hostinger-production',
} as const;

export function absoluteUrl(path: string, canonical = false) {
  return new URL(path, canonical ? siteConfig.canonicalUrl : siteConfig.siteUrl).toString();
}

