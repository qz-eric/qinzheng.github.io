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
  location: string;
  theme: string;
  description: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export const activityTypeLabels: Record<ActivityType, string> = {
  Conference: '会议汇报',
  CourseReport: '课程汇报',
  Lecture: '学术讲座',
  Submission: '论文投稿',
  LiteratureReview: '文献综述',
  ResearchTraining: '科研训练'
};

export const activities: Activity[] = [
  {
    id: 'conference-cloud-vortex-2026',
    date: '2026-06',
    type: 'Conference',
    title: '东北冷涡云微物理特征及其卫星观测证据',
    location: '学术会议 / 线下报告',
    theme: '云微物理与区域天气过程',
    description:
      '围绕冷涡背景下云相态、云光学厚度和有效半径的统计特征进行会议汇报，并讨论后续论文修改方向。',
    links: [{ label: '报告幻灯片', href: '/files/slides/cloud-vortex-conference-placeholder.pdf' }]
  },
  {
    id: 'course-report-cloud-microphysics',
    date: '2026-05',
    type: 'CourseReport',
    title: '大气全球变化课程汇报：气候变化下云微物理变化及其气候意义—以混合相云为例',
    location: '研究生课程 / 课堂报告',
    theme: '云微物理',
    description:
      '整理混合相云微物理过程、冰晶增长机制和降水形成路径，探讨与气候变化的关系，形成课程报告与阅读清单',
    links: [{ label: '课程报告', href: '/files/slides/mixcloud-report.pdf' }]
  },
  {
    id: 'submission-remote-sensing',
    date: '2026-02',
    type: 'Submission',
    title: 'Remote Sensing 论文投稿与修改',
    location: '线上投稿系统',
    theme: '论文写作与同行评审',
    description:
      '完成卫星观测云微物理论文的投稿、图表整理、审稿意见回复与数据说明补充。',
    links: [{ label: '投稿材料占位', href: '/files/papers/submission-note-placeholder.md' }]
  },
  {
    id: 'literature-review-satellite-cloud',
    date: '2025-12',
    type: 'LiteratureReview',
    title: '卫星云产品与冷涡降水研究文献综述',
    location: '课题组讨论',
    theme: '文献综述',
    description:
      '梳理 MODIS、ERA5 与降水资料在冷涡研究中的常见用法，形成可持续更新的 Zotero 与 Markdown 笔记结构。',
    links: [{ label: '综述笔记', href: '/notes/cloud-microphysics-reading/' }]
  },
  {
    id: 'research-training-python-atmos',
    date: '2025-07',
    type: 'ResearchTraining',
    title: 'Python 大气数据处理科研训练',
    location: '本科 / 研究生科研训练',
    theme: '数据处理与可视化',
    description:
      '围绕 NetCDF 读取、格点资料裁剪、区域平均、地图绘制和批处理脚本组织进行训练。',
    links: [{ label: '示例代码', href: '/files/code/python-data-processing.py' }]
  }
];
