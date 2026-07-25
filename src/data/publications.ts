export type PublicationStatus = 'Published' | 'UnderReview' | 'InPreparation';
export type PublicationCategory = 'PeerReviewed' | 'Preprint' | 'Software' | 'Dataset';

export interface GraphicalAbstract {
  image: string;
  alt: string;
  caption?: string;
  showOnHome?: boolean;
}

export interface PublicationLinks {
  article?: string;
  pdf?: string;
  doi?: string;
  data?: string;
  code?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  status: PublicationStatus;
  category: PublicationCategory;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  abstract: string;
  homeSummary?: string;
  keywords: string[];
  graphicalAbstract?: GraphicalAbstract;
  links: PublicationLinks;
}

export const publicationStatusLabels: Record<PublicationStatus, string> = {
  Published: '已发表',
  UnderReview: '投稿中',
  InPreparation: '准备中'
};

export const publicationCategoryLabels: Record<PublicationCategory, string> = {
  PeerReviewed: '正式论文',
  Preprint: '预印本',
  Software: '研究软件',
  Dataset: '数据集'
};

export const publicationCategoryLabelsEn: Record<PublicationCategory, string> = {
  PeerReviewed: 'Peer-reviewed Publications',
  Preprint: 'Preprints',
  Software: 'Research Software',
  Dataset: 'Datasets'
};

export const publicationStatusLabelsEn: Record<PublicationStatus, string> = {
  Published: 'Published',
  UnderReview: 'Under Review',
  InPreparation: 'In Preparation'
};

export const publications: Publication[] = [
  {
    id: 'cloud-microphysics-ne-china-cold-vortex-2026',
    title:
      'Cloud Microphysical Characteristics in the Northeast China Cold Vortex Derived from Satellite Measurements',
    authors: ['Zheng Qin', 'Qi Liu*', 'Yuan Li', 'Zhenci Lu', 'Jiahao Cheng'],
    journal: 'Remote Sensing',
    year: 2026,
    status: 'Published',
    category: 'PeerReviewed',
    volume: '18',
    issue: '13',
    pages: '2165',
    doi: '10.3390/rs18132165',
    url: 'https://www.mdpi.com/2072-4292/18/13/2165',
    abstract:
      'This study investigates cloud microphysical characteristics associated with the Northeast China Cold Vortex using MODIS satellite cloud products. By comparing identified NCCV samples with non-NCCV samples constrained by similar cloud fractions, the study examines differences in cloud-type composition and cloud microphysical properties, including liquid effective radius, ice effective radius, liquid water path, and ice water path. The results reveal distinct cloud-type-dependent and spatially heterogeneous microphysical features within NCCV cloud systems.',
    homeSummary:
      'This paper analyzes MODIS satellite cloud products under Northeast China Cold Vortex conditions. It compares NCCV and non-NCCV samples with similar cloud fractions, focusing on cloud-type composition, effective radius, liquid water path, ice water path, and their spatially heterogeneous features.',
    keywords: [
      'Northeast China Cold Vortex',
      'cloud microphysics',
      'MODIS',
      'satellite observation',
      'cloud type',
      'liquid water path',
      'ice water path',
      'effective radius'
    ],
    graphicalAbstract: {
      image:
        '/files/papers/cloud_microphysics_NCCV_2026/Graphical_Abstract.png',
      alt:
        'Graphical abstract of cloud microphysical characteristics in the Northeast China Cold Vortex',
      caption:
        'Graphical summary of the satellite-based analysis of cloud microphysical characteristics associated with the Northeast China Cold Vortex.',
      showOnHome: true
    },
    links: {
      article: 'https://www.mdpi.com/2072-4292/18/13/2165',
      doi: 'https://doi.org/10.3390/rs18132165',
      pdf: 'https://www.mdpi.com/2072-4292/18/13/2165/pdf'
    }
  },
];
