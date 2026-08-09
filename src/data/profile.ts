export type EducationStage = '本科' | '硕士' | '博士';

export interface EducationItem {
  stage: EducationStage;
  stageEn: string;
  degree: string;
  degreeEn: string;
  institution: string;
  institutionEn: string;
  department: string;
  departmentEn: string;
  period: string;
  periodEn: string;
  location: string;
  locationEn: string;
  description: string;
  descriptionEn: string;
}

export interface ResearchExperience {
  title: string;
  titleEn: string;
  institution?: string;
  institutionEn?: string;
  period: string;
  periodEn: string;
  description: string;
  descriptionEn: string;
}

export interface TeachingExperience {
  title: string;
  titleEn: string;
  course: string;
  courseEn: string;
  role: string;
  roleEn: string;
  period: string;
  periodEn: string;
  description: string;
  descriptionEn: string;
}

export interface SkillGroup {
  name: string;
  nameEn: string;
  items: string[];
  itemsEn: string[];
}

export const profile = {
  nameCn: '秦政',
  nameEn: 'Zheng Qin',
  formalName: '秦政',
  formalNameCn: '秦政',
  formalNameEn: 'Zheng Qin',
  siteSubtitle: '研究 · 资料 · 写作',
  siteSubtitleEn: 'Research · Archive · Writing',
  archiveLabel: '秦政的学术与文学档案',
  archiveLabelEn: 'Academic and literary archive of Zheng Qin',
  currentRole: '博士研究生',
  currentRoleEn: 'PhD',
  affiliation: '中国科学技术大学 地球和空间科学学院',
  affiliationEn: 'School of Earth and Space Sciences, University of Science and Technology of China',
  location: '中国',
  locationEn: 'China',
  email: 'qzklj007@mail.ustc.edu.cn',
  avatar: '/images/personal.jpg',
  heroImage: '/images/Nahida.png',
  languages: {
    default: 'zh-CN',
    available: [
      { code: 'zh-CN', label: '中文', enabled: true },
      { code: 'en-US', label: 'English', enabled: true }
    ]
  },
  researchInterests: [
    '东北冷涡云系云微物理',
    '卫星遥感与云微物理参数反演',
    '机器学习在大气科学中的应用',
    '科研写作、学术表达与知识归档'
  ],
  researchInterestsEn: [
    'Cloud microphysics in the Northeast China Cold Vortex',
    'Satellite remote sensing and cloud microphysical retrieval',
    'Machine learning applications in atmospheric science',
    'Scientific writing, academic communication, and knowledge archiving'
  ],
  bioShort:
    '我研究卫星观测下的云与降水过程，当前关注东北冷涡生命周期、云微物理结构及机器学习反演。这里保存我的论文、科研记录、课程资料、文学作品与长期思考。',
  bioShortEn:
    'I study cloud and precipitation processes using satellite observations, statistical methods, and machine learning. This website archives my research records, teaching materials, literary writing, and long-term ideas.',

  bioLong: [
    '我的研究主要围绕卫星遥感观测、云微物理和机器学习展开。目前的工作聚焦东北冷涡背景下的云微物理特征分析，利用卫星数据研究不同天气系统中的云类型、云微物理性质及其空间分布规律。',

    '我也在整理基于静止气象卫星的云微物理参数反演与机器学习降水反演思路，关注模型基线、特征解释、资料误差和物理约束如何进入实际科研流程。',

    '这个网站记录我的论文、科研记录、课程资料和助教归档，也保存文学作品与个人思考。'
  ],
  bioLongEn: [
    'My research focuses on satellite remote sensing, cloud microphysics, and machine learning. Current work examines cloud microphysical characteristics under the Northeast China Cold Vortex using satellite data, with attention to cloud types, microphysical properties, and spatial structures within weather systems.',

    'I am also organizing ideas on cloud microphysical retrieval and machine-learning-based precipitation estimation using geostationary satellite observations, with interest in baselines, feature interpretation, data uncertainty, and physical constraints in reproducible research workflows.',

    'This website records my papers, research records, course materials, and teaching archives, while also preserving literary writing and personal reflections.'
  ],
  education: [
    {
      stage: '博士',
      stageEn: 'PhD',
      degree: '地球物理学 博士研究生',
      degreeEn: 'PhD in Geophysics',
      institution: '中国科学技术大学',
      institutionEn: 'University of Science and Technology of China',
      department: '地球和空间科学学院',
      departmentEn: 'School of Earth and Space Sciences',
      period: '2025 - 至今',
      periodEn: '2025 - Present',
      location: '合肥，中国',
      locationEn: 'Hefei, China',
      description: '研究方向为云微物理、卫星遥感与机器学习降水反演。',
      descriptionEn:
        'Research interests include cloud microphysics, satellite remote sensing, and machine-learning-based precipitation retrieval.'
    },
    {
      stage: '硕士',
      stageEn: 'MSc',
      degree: '大气科学 硕士研究生',
      degreeEn: 'MSc in Atmospheric Science',
      institution: '中国科学技术大学',
      institutionEn: 'University of Science and Technology of China',
      department: '地球和空间科学学院',
      departmentEn: 'School of Earth and Space Sciences',
      period: '2023 - 2025',
      periodEn: '2023 - 2025',
      location: '合肥，中国',
      locationEn: 'Hefei, China',
      description: '完成大气科学研究生课程，学习各种编程技能及科研方法。',
      descriptionEn:
        'Completed graduate coursework in atmospheric science and developed programming, data analysis, and research workflow skills.'
    },
    {
      stage: '本科',
      stageEn: 'BSc',
      degree: '大气科学 学士',
      degreeEn: 'BSc in Atmospheric Science',
      institution: '中国科学技术大学',
      institutionEn: 'University of Science and Technology of China',
      department: '地球和空间科学学院',
      departmentEn: 'School of Earth and Space Sciences',
      period: '2019 - 2023',
      periodEn: '2019 - 2023',
      location: '合肥，中国',
      locationEn: 'Hefei, China',
      description: '完成数学、物理、大气科学基础课程训练，并参与本科科研训练。',
      descriptionEn:
        'Completed foundational training in mathematics, physics, and atmospheric science, and participated in undergraduate research training.'
    }
  ] satisfies EducationItem[],
  researchExperience: [
    {
      title: '东北冷涡云系云微物理特征研究',
      titleEn: 'Cloud Microphysical Characteristics in the Northeast China Cold Vortex',
      period: '2025 - 2026',
      periodEn: '2025 - 2026',
      description:
        '基于MODIS卫星观测资料分析冷涡背景下云相态、有效半径与云水路径的统计特征及其在冷涡内部的空间结构特征。',
      descriptionEn:
        'Analyzed MODIS satellite observations to investigate cloud phase, effective radius, cloud water path, and their spatial structures under Northeast China Cold Vortex conditions.'
    },
    {
      title: 'WRF 模式东亚风场模态分析及预测研究',
      titleEn: 'Modal Analysis and Prediction of East Asian Wind Fields Using WRF',
      period: '2023 - 2025',
      periodEn: '2023 - 2025',
      description:
        '运行 WRF 模式并结合模态分析方法研究东亚风场结构及其预测问题，整理模式配置、初边值资料处理和结果诊断流程。',
      descriptionEn:
        'Ran the WRF model and applied modal analysis to study East Asian wind-field structures and prediction problems, including model configuration, initial and boundary data preparation, and diagnostic workflows.'
    }
  ] satisfies ResearchExperience[],
  teachingExperience: [
    {
      title: '云和降水物理学课程助教',
      titleEn: 'Teaching Assistant for Cloud and Precipitation Physics',
      course: '云和降水物理学',
      courseEn: 'Cloud and Precipitation Physics',
      role: '课程助教',
      roleEn: 'Teaching Assistant',
      period: '2025春,2026春',
      periodEn: 'Spring 2025, Spring 2026',
      description:
        '协助课程期末汇报安排、评分记录与资料整理。',
      descriptionEn:
        'Assisted with final presentation arrangements, grading records, and course-material organization.'
    },
    {
      title: '流体力学课程助教',
      titleEn: 'Teaching Assistant for Fluid Mechanics',
      course: '流体力学',
      courseEn: 'Fluid Mechanics',
      role: '课程助教 / 作业解答 / 习题讲解',
      roleEn: 'Teaching Assistant / Homework Solutions / Problem Sessions',
      period: '2022秋',
      periodEn: 'Fall 2022',
      description:
        '整理作业解答，参与习题讲评、课程答疑与资料归档。',
      descriptionEn:
        'Prepared homework solutions and supported problem-session discussions, Q&A, and teaching-material archiving.'
    }
  ] satisfies TeachingExperience[],
  skills: [
    {
      name: '科研与数据',
      nameEn: 'Research and Data',
      items: ['Python', 'Matlab', 'Fortran', 'WRF 模式运行', 'WRF/WPS', 'NetCDF'],
      itemsEn: ['Python', 'Matlab', 'Fortran', 'WRF model operation', 'WRF/WPS', 'NetCDF']
    },
    {
      name: '写作与排版',
      nameEn: 'Writing and Typesetting',
      items: ['Word', 'LaTeX', 'Markdown', 'Zotero', '学术论文写作', '课程汇报'],
      itemsEn: ['Word', 'LaTeX', 'Markdown', 'Zotero', 'Academic writing', 'Course presentations']
    },
    {
      name: '模式、网站与工具',
      nameEn: 'Models, Web, and Tools',
      items: ['Linux', 'Shell', 'Astro', 'TypeScript', 'Git', '静态网站部署'],
      itemsEn: ['Linux', 'Shell', 'Astro', 'TypeScript', 'Git', 'Static site deployment']
    }
  ] satisfies SkillGroup[],
  honors: [
    '2025研究生学业奖学金 一等奖',
    '2022本科学业奖学金 银奖',
    '2021优秀共青团员',
    '2019本科英才班奖学金'
  ],
  honorsEn: [
    'First Prize, Graduate Academic Scholarship, 2025',
    'Silver Award, Undergraduate Academic Scholarship, 2022',
    'Outstanding Communist Youth League Member, 2021',
    'Undergraduate Elite Class Scholarship, 2019'
  ],
  socialLinks: [
    { label: 'Sci Profiles', href: 'https://sciprofiles.com/profile/ZhengQin' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0007-0916-7551' },
    { label: 'GitHub', href: 'https://github.com/qz-eric' },
    { label: '微信公众号', href: '/about/#wechat-official-account' }
  ]
} as const;
