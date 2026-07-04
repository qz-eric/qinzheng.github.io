export type PublicationStatus = 'Published' | 'UnderReview' | 'InPreparation';

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
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  abstract: string;
  keywords: string[];
  graphicalAbstract?: GraphicalAbstract;
  links: PublicationLinks;
}

export const publicationStatusLabels: Record<PublicationStatus, string> = {
  Published: '已发表',
  UnderReview: '投稿中',
  InPreparation: '准备中'
};

export const publications: Publication[] = [
  {
    id: 'cloud-microphysics-ne-china-cold-vortex-2026',
    title:
      'Cloud Microphysical Characteristics in the Northeast China Cold Vortex Derived from Satellite Measurements',
    authors: ['Zheng Qin', 'Qi Liu', 'Yuan Li', 'Zhenci Lu', 'Jiahao Cheng'],
    journal: 'Remote Sensing',
    year: 2026,
    status: 'Published',
    volume: '18',
    issue: '13',
    pages: '2165',
    doi: '10.3390/rs18132165',
    url: 'https://www.mdpi.com/2072-4292/18/13/2165',
    abstract:
      'This study investigates cloud microphysical characteristics associated with the Northeast China Cold Vortex using MODIS satellite cloud products. By comparing identified NCCV samples with non-NCCV samples constrained by similar cloud fractions, the study examines differences in cloud-type composition and cloud microphysical properties, including liquid effective radius, ice effective radius, liquid water path, and ice water path. The results reveal distinct cloud-type-dependent and spatially heterogeneous microphysical features within NCCV cloud systems.',
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