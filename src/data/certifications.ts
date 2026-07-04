export type CertificationStatus = 'verified' | 'verification_pending';

export type Certification = {
  provider: 'Microsoft Azure' | 'AWS' | 'Google Cloud' | 'Databricks';
  title: string;
  status: CertificationStatus;
  verificationUrl: string;
  badgeImage?: string;
  note: string;
};

export const certifications: Certification[] = [
  {
    provider: 'Microsoft Azure',
    title: 'Azure credential evidence',
    status: 'verification_pending',
    verificationUrl: '',
    note: 'Public badge withheld until a personal Microsoft Learn verification URL is available.',
  },
  {
    provider: 'AWS',
    title: 'AWS credential evidence',
    status: 'verification_pending',
    verificationUrl: '',
    note: 'Public badge withheld until an AWS digital badge verification URL is available.',
  },
  {
    provider: 'Google Cloud',
    title: 'Google Cloud credential evidence',
    status: 'verification_pending',
    verificationUrl: '',
    note: 'Public badge withheld until a Google Cloud credential verification URL is available.',
  },
  {
    provider: 'Databricks',
    title: 'Databricks credential evidence',
    status: 'verification_pending',
    verificationUrl: '',
    note: 'Public badge withheld until a Databricks certification verification URL is available.',
  },
];

export const publicCertifications = certifications.filter(
  (credential) => credential.status === 'verified' && Boolean(credential.verificationUrl),
);
