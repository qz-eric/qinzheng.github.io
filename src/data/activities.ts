export type ActivityType =
  | 'Conference'
  | 'CourseReport'
  | 'Lecture'
  | 'Submission'
  | 'LiteratureReview'
  | 'ResearchTraining';

export interface Activity {
  id: string;
  date: string;
  type: ActivityType;
  title: string;
  titleEn: string;
  location: string;
  locationEn: string;
  theme: string;
  themeEn: string;
  description: string;
  descriptionEn: string;
  links: Array<{
    label: string;
    labelEn?: string;
    href: string;
  }>;
}

export const activityTypeLabels: Record<ActivityType, string> = {
  Conference: '会议汇报',
  CourseReport: '课程汇报',
  Lecture: '学术讲座',
  Submission: '论文写作',
  LiteratureReview: '文献综述',
  ResearchTraining: '科研训练'
};

export const activityTypeLabelsEn: Record<ActivityType, string> = {
  Conference: 'Conference Talk',
  CourseReport: 'Course Presentation',
  Lecture: 'Academic Lecture',
  Submission: 'Paper Writing',
  LiteratureReview: 'Literature Review',
  ResearchTraining: 'Research Training'
};

export const activities: Activity[] = [
  {
    id: 'conference-nccv-202607',
    date: '2026-07',
    type: 'Conference',
    title: '东北冷涡云系宏微观结构特征',
    titleEn: 'Macro- and Microphysical Structures of Northeast China Cold Vortex Cloud Systems',
    location: '学术会议 / 线下报告',
    locationEn: 'Conference / On-site Talk',
    theme: '云微物理与区域天气过程',
    themeEn: 'Cloud Microphysics and Regional Weather Processes',
    description:
      '围绕冷涡背景下云微物理参数的统计特征及其空间结构进行会议汇报。',
    descriptionEn:
      'A conference presentation on the statistical features and spatial structures of cloud microphysical parameters under cold vortex conditions.',
    links: [{ label: '报告幻灯片', labelEn: 'Slides', href: '/files/slides/nccv-cloud-spatial-microphysics-conference-202607.pdf' }]
  },
  {
    id: 'course-cloud-microphysics-report-202604',
    date: '2026-04',
    type: 'CourseReport',
    title: '混合相云微物理过程课程汇报',
    titleEn: 'Course Presentation on Mixed-phase Cloud Microphysical Processes',
    location: '课程汇报 / 线下',
    locationEn: 'Course Presentation / On-site',
    theme: '云微物理与降水形成',
    themeEn: 'Cloud Microphysics and Precipitation Formation',
    description:
      '围绕混合相云中冰相增长、液态水维持和降水转化过程整理课程报告。',
    descriptionEn:
      'A course report on ice-phase growth, liquid-water maintenance, and precipitation conversion in mixed-phase clouds.',
    links: [{ label: '报告幻灯片', labelEn: 'Slides', href: '/files/slides/mixcloud-report.pdf' }]
  },
  {
    id: 'submission-remote-sensing-202603',
    date: '2026-03',
    type: 'Submission',
    title: 'Remote Sensing 论文投稿与修改',
    titleEn: 'Remote Sensing Manuscript Submission and Revision',
    location: '论文投稿 / 在线系统',
    locationEn: 'Manuscript Submission / Online System',
    theme: '论文写作、投稿与审稿回复',
    themeEn: 'Paper Writing, Submission, and Reviewer Response',
    description:
      '整理东北冷涡云微物理论文的投稿材料、图表、补充说明和审稿意见回复流程。',
    descriptionEn:
      'Organized submission materials, figures, supplementary notes, and reviewer-response workflows for the NCCV cloud microphysics manuscript.',
    links: []
  },
  {
    id: 'conference-nccv-202601',
    date: '2026-01',
    type: 'Conference',
    title: '基于卫星观测的东北冷涡云系云微物理特征研究',
    titleEn: 'Satellite-based Study of Cloud Microphysical Characteristics in the Northeast China Cold Vortex',
    location: '学术会议 / 线下报告',
    locationEn: 'Conference / On-site Talk',
    theme: '云微物理与区域天气过程',
    themeEn: 'Cloud Microphysics and Regional Weather Processes',
    description:
      '围绕冷涡背景下云相态、云光学厚度和有效半径的统计特征进行会议汇报。',
    descriptionEn:
      'A conference presentation on cloud phase, cloud optical thickness, and effective radius under cold vortex conditions.',
    links: [{ label: '报告幻灯片', labelEn: 'Slides', href: '/files/slides/nccv-cloud-microphysics-conference-202601.pdf' }]
  },
  {
    id: 'literature-review-satellite-cloud-202512',
    date: '2025-12',
    type: 'LiteratureReview',
    title: '卫星云产品与云微物理参数阅读整理',
    titleEn: 'Reading Notes on Satellite Cloud Products and Cloud Microphysical Parameters',
    location: '组会 / 文献讨论',
    locationEn: 'Group Meeting / Literature Discussion',
    theme: '资料适用性与不确定性',
    themeEn: 'Data Applicability and Uncertainty',
    description:
      '整理 MODIS 云产品、云相态判别、有效半径和云水路径反演中的资料限制与可复用处理流程。',
    descriptionEn:
      'Organized limitations and reusable processing workflows for MODIS cloud products, cloud-phase discrimination, effective radius, and cloud water path retrievals.',
    links: []
  },
  {
    id: 'lecture-precipitation-retrieval-202511',
    date: '2025-11',
    type: 'Lecture',
    title: '降水反演方法与机器学习基线讨论',
    titleEn: 'Discussion on Precipitation Retrieval Methods and Machine Learning Baselines',
    location: '学术讲座 / 线上',
    locationEn: 'Academic Lecture / Online',
    theme: '机器学习与卫星降水估计',
    themeEn: 'Machine Learning and Satellite Precipitation Estimation',
    description:
      '讨论多源卫星观测、再分析资料和地面降水数据在反演模型中的组织方式与验证策略。',
    descriptionEn:
      'Discussed how to organize multi-source satellite observations, reanalysis data, and ground precipitation records for retrieval models and validation strategies.',
    links: []
  },
  {
    id: 'research-training-wrf-east-asia-202405',
    date: '2024-05',
    type: 'ResearchTraining',
    title: 'WRF 模式东亚风场模态分析训练',
    titleEn: 'WRF-based Modal Analysis Training for East Asian Wind Fields',
    location: '科研训练 / 模式实验',
    locationEn: 'Research Training / Model Experiment',
    theme: '数值模式、风场结构与预测',
    themeEn: 'Numerical Modeling, Wind-field Structure, and Prediction',
    description:
      '围绕 WRF 模式配置、初边值资料处理、东亚风场诊断和模态分析方法开展训练。',
    descriptionEn:
      'Training focused on WRF configuration, initial and boundary condition processing, East Asian wind-field diagnostics, and modal analysis methods.',
    links: []
  }
];
