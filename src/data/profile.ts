export type EducationStage = '本科' | '硕士' | '博士';

export interface EducationItem {
  stage: EducationStage;
  degree: string;
  institution: string;
  department: string;
  period: string;
  location: string;
  description: string;
}

export interface ResearchExperience {
  title: string;
  institution?: string;
  period: string;
  description: string;
}

export interface TeachingExperience {
  title: string;
  course: string;
  role: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export const profile = {
  nameCn: '快乐Q酱',
  nameEn: 'Eric Qin (Zheng Qin)',
  currentRole: '博士研究生',
  affiliation: '中国科学技术大学 地球和空间科学学院',
  location: 'China',
  email: 'qzklj007@mail.ustc.edu.cn',
  avatar: '/images/avatar-placeholder.svg',
  heroImage: '/images/archive-sky-hero.png',
  languages: {
    default: 'zh-CN',
    available: [
      { code: 'zh-CN', label: '中文', enabled: true },
      { code: 'en-US', label: 'English', enabled: false }
    ]
  },
  researchInterests: [
    '东北冷涡云系云微物理',
    '卫星遥感与云微物理参数反演',
    '机器学习在大气科学中的应用',
    '科研写作、学术表达与知识归档'
  ],
  bioShort:
    '我主要研究云微物理、卫星遥感和机器学习在大气科学中的应用，当前工作聚焦东北冷涡云微物理特征分析，并持续探索云微物理参数与降水的机器学习反演方法。',

  bioLong: [
    '我的研究主要围绕卫星遥感观测、云微物理和机器学习展开。目前，我的工作聚焦于东北冷涡背景下的云微物理特征分析，利用卫星数据研究不同天气系统中的云类型、云微物理性质及其空间分布规律。',

    '未来，我希望进一步开展基于静止气象卫星的云微物理参数反演，以及结合机器学习方法进行降水反演研究，探索人工智能与卫星遥感在大气科学中的更多应用。同时，我也持续关注机器学习、科学计算和开源工具的发展，并尝试将这些方法应用到实际科研问题中。',

    '这个网站记录了我的学习与研究历程，包括教育经历、论文成果、学术活动、课程资料、研究笔记以及部分开源项目。我也会在这里整理自己的文学作品和长期创作，希望将科研、阅读、写作与知识积累汇聚到同一个持续生长的个人空间中。'
  ],
  education: [
    {
      stage: '博士',
      degree: '大气科学 博士研究生',
      institution: '中国科学技术大学',
      department: '地球和空间科学学院',
      period: '2025 - 至今',
      location: '合肥，中国',
      description: '研究方向为云微物理、卫星遥感与机器学习降水反演。'
    },
    {
      stage: '硕士',
      degree: '大气科学 硕士研究生',
      institution: '中国科学技术大学',
      department: '地球和空间科学学院',
      period: '2023 - 2025',
      location: '合肥，中国',
      description: '完成大气科学研究生课程，学习各种编程技能及科研方法。'
    },
    {
      stage: '本科',
      degree: '大气科学 学士',
      institution: '中国科学技术大学',
      department: '地球和空间科学学院',
      period: '2019 - 2023',
      location: '合肥，中国',
      description: '完成数学、物理、大气科学基础课程训练，并参与本科科研训练。'
    }
  ] satisfies EducationItem[],
  researchExperience: [
    {
      title: 'WRF 模式东亚风场模态分析及预测研究',
      institution: '中国科学技术大学 地球和空间科学学院',
      period: '2025 - 至今',
      description:
        '运行 WRF 模式并结合模态分析方法研究东亚风场结构及其预测问题，整理模式配置、初边值资料处理和结果诊断流程。'
    },
    {
      title: '东北冷涡云系云微物理特征研究',
      period: '2025 - 2026',
      description:
        '基于卫星观测资料分析冷涡背景下云相态、有效半径与云水路径相关特征。'
    }
  ] satisfies ResearchExperience[],
  teachingExperience: [
    {
      title: '流体力学课程助教',
      course: '流体力学',
      role: '课程助教 / 作业讲评',
      period: '2025',
      description:
        '整理 Week 1 - Week 15 作业解答，参与习题讲评、课程答疑与资料归档。'
    },
    {
      title: '大气动力学与科研数据处理助教资料整理',
      course: '大气动力学 / Python 大气数据处理',
      role: '资料整理 / 讨论课支持',
      period: '2025 - 2026',
      description:
        '围绕尺度分析、涡度方程、NetCDF 数据处理和地图绘制整理讨论课与示例代码资料。'
    }
  ] satisfies TeachingExperience[],
  skills: [
    {
      name: '科研与数据',
      items: ['Python', 'Matlab', 'Fortran', 'WRF 模式运行', 'WRF/WPS', 'NetCDF']
    },
    {
      name: '写作与排版',
      items: ['Word', 'LaTeX', 'Markdown', 'Zotero', '学术论文写作', '课程汇报']
    },
    {
      name: '模式、网站与工具',
      items: ['Linux', 'Shell', 'Astro', 'TypeScript', 'Git', '静态网站部署']
    }
  ] satisfies SkillGroup[],
  honors: [
    '2025研究生学业奖学金 一等奖',
    '2022本科学业奖学金 银奖',
    '2021优秀共青团员',
    '2019本科英才班奖学金'
  ],
  socialLinks: [
    { label: 'Sci Profiles', href: 'https://sciprofiles.com/profile/ZhengQin' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0007-0916-7551' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: '微信公众号', href: 'https://github.com/' }
  ]
} as const;
