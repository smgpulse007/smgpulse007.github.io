export type AuthoredPublication = {
  id: string;
  title: string;
  authors: string;
  authorPosition: string;
  venue: string;
  publisherName: string;
  year: number;
  summary: string;
  publisher: string;
  verification: string;
  doi?: string;
  article?: string;
};

export const authoredPublications: AuthoredPublication[] = [
  {
    id: 'electrophysiological-border-patrol',
    title: 'A salutary biotechnical approach for explosive identification and border patrol using electrophysiological signals',
    authors: 'C Santhanakrishnan · T Peermeer Labbai · Shailesh S. Dudala · Y Sai Santhosh Nag',
    authorPosition: '3 of 4',
    venue: 'International Journal of Engineering and Technology 7(2.31), 106–109 (2018)',
    publisherName: 'Science Publishing Corporation',
    year: 2018,
    summary: 'A lightweight sensor rover controlled through EEG and EOG signals, with PIR and ultrasonic sensing plus ZigBee telemetry for remote observation.',
    doi: 'https://doi.org/10.14419/ijet.v7i2.31.13408',
    publisher: 'https://www.sciencepubco.com/index.php/IJET/article/view/13408',
    verification: 'Publisher and Crossref metadata agree on title, authors, date, DOI, volume, issue, and pages.',
  },
  {
    id: 'suspicious-forum-discussions',
    title: 'Monitoring of Suspicious Discussions on Online Forums Using Data Mining',
    authors: 'Tanya Srivastava · R. Mangalagowri · Shailesh S. Dudala',
    authorPosition: '3 of 3',
    venue: 'International Journal of Pure and Applied Mathematics 118(22), 257–262 (2018)',
    publisherName: 'Academic Publications, Ltd., Sofia',
    year: 2018,
    summary: 'A Python and NLTK forum-monitoring framework using preprocessing, similarity, keyword categories, sentiment, and classifier methods, with explicit scalability and security limits.',
    publisher: 'https://acadpubl.eu/hub/2018-118-22/issue22a.html',
    article: 'https://acadpubl.eu/hub/2018-118-22/articles/22a/37.pdf',
    verification: 'Publisher archive confirms title, authors, venue, year, volume, and pages. No journal DOI is asserted.',
  },
];
