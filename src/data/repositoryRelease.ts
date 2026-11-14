import records from './repositoryReleases.json';

export type RepositoryRelease = {
  status: string;
  proof: string;
  limitation: string;
  scope: string;
  verifiedAt: string;
  commit: string;
  commitUrl: string;
  validationUrl: string;
  checks: Array<{ name: string; url: string; conclusion: string }>;
  demoUrl?: string;
  quickstart?: string;
  tier?: 'explore';
};

export const repositoryReleases = records as Record<string, RepositoryRelease>;
export const repositoryEvidenceUpdatedAt = '2026-11-14';

export function releaseFor(repository: string): RepositoryRelease | undefined {
  const prefix = 'https://github.com/smgpulse007/';
  if (!repository.startsWith(prefix)) return undefined;
  const name = repository.slice(prefix.length).replace(/\/$/, '');
  return Object.hasOwn(repositoryReleases, name) ? repositoryReleases[name] : undefined;
}
