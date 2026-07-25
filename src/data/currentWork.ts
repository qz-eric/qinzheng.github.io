export type CurrentWorkStatus = 'Active' | 'Ongoing' | 'Exploratory';

export interface CurrentWork {
  id: string;
  title: string;
  titleZh: string;
  status: CurrentWorkStatus;
  summary: string;
  summaryEn: string;
  href?: string;
  tags: string[];
}

export const currentWorks: CurrentWork[] = [
  {
    id: 'nccv-life-cycle',
    title: 'Northeast China Cold Vortex Life Cycle',
    titleZh: '东北冷涡生命周期',
    status: 'Active',
    summary:
      '从事件生命史角度研究东北冷涡形成、发展、成熟和消散阶段的动力结构、路径变化及云微物理演变。',
    summaryEn:
      'I examine the formation, development, mature, and decaying stages of Northeast China Cold Vortex events, focusing on their dynamic structure, tracks, and cloud microphysical evolution.',
    href: '/research/#nccv-life-cycle',
    tags: ['NCCV', 'life cycle', 'cloud microphysics']
  },
  {
    id: 'ml-precipitation-retrieval',
    title: 'Machine-Learning Precipitation Retrieval',
    titleZh: '机器学习降水反演',
    status: 'Ongoing',
    summary:
      '结合静止卫星多光谱观测、再分析资料和降水数据，建立降水反演基线模型，并探索随机森林、稀疏模型、可解释机器学习及物理约束方法。',
    summaryEn:
      'I build baseline precipitation retrieval models from geostationary satellite observations, reanalysis fields, and precipitation datasets, with attention to random forests, sparse models, interpretability, and physical constraints.',
    href: '/research/#ml-precipitation-retrieval',
    tags: ['precipitation', 'machine learning', 'remote sensing']
  },
  {
    id: 'satellite-cloud-microphysics',
    title: 'Satellite Cloud Microphysics',
    titleZh: '卫星云微物理',
    status: 'Exploratory',
    summary:
      '利用极轨与静止卫星观测研究液滴半径、冰晶半径、液水路径和冰水路径的空间结构、反演方法及不确定性。',
    summaryEn:
      'I use polar-orbiting and geostationary satellite products to study effective radius, liquid water path, ice water path, retrieval assumptions, and uncertainty in cloud microphysical records.',
    href: '/research/#satellite-cloud-microphysics',
    tags: ['MODIS', 'cloud products', 'uncertainty']
  }
];
