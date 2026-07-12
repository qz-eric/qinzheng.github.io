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
    id: 'conference-nccv-202607',
    date: '2026-07',
    type: 'Conference',
    title: '东北冷涡云系宏微观结构特征',
    location: '学术会议 / 线下报告',
    theme: '云微物理与区域天气过程',
    description:
      '围绕冷涡背景下云相态、云光学厚度和有效半径的统计特征进行会议汇报。',
    links: [{ label: '报告幻灯片', href: '/files/slides/cloud-vortex-conference-placeholder.pdf' }]
  },
  {
    id: 'submission-remote-sensing',
    date: '2026-06',
    type: 'Submission',
    title: '论文接收',
    location: '论文投稿',
    theme: '论文投稿接收',
    description:
      '',
    links: [{ label: '投稿材料占位', href: '/files/papers/submission-note-placeholder.md' }]
  },
  {
    id: 'conference-nccv-202601',
    date: '2026-01',
    type: 'Conference',
    title: '基于卫星观测的东北冷涡云系云微物理特征研究',
    location: '学术会议 / 线下报告',
    theme: '云微物理与区域天气过程',
    description:
      '围绕冷涡背景下云微物理参数的统计特征及其空间结构进行会议汇报。',
    links: [{ label: '报告幻灯片', href: '/files/slides/nccv-cloud-microphysics-conference-202601.pdf' }]
  }
];
