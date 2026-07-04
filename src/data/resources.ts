export type ResourceCategory =
  | '数学基础'
  | '大气专业课程'
  | '助教课程'
  | '科研写作'
  | '机器学习'
  | 'LaTeX'
  | '代码'
  | 'Book';

export type ResourceType = 'PDF' | 'LaTeX' | 'PPT' | 'Code' | 'Notes' | 'Book' | 'Homework' | 'Lecture';
export type ResourceStatus = 'Complete' | 'Todo';

export interface ResourceLink {
  label: string;
  href: string;
}

export interface ResourceSection {
  label: string;
  title: string;
  href: string;
  description?: string;
}

export interface Resource {
  id: string;
  title: string;
  course: string;
  category: ResourceCategory;
  level: '本科' | '研究生' | '通用';
  type: ResourceType;
  year: number;
  status: ResourceStatus;
  description: string;
  fullText?: ResourceLink;
  sections?: ResourceSection[];
  tags: string[];
}

export const resourceCategories: ResourceCategory[] = [
  '数学基础',
  '大气专业课程',
  '助教课程',
  '科研写作',
  '机器学习',
  'LaTeX',
  '代码',
  'Book'
];

const section = (label: string, title: string, href: string, description?: string): ResourceSection => ({
  label,
  title,
  href,
  description
});

export const resources: Resource[] = [
  {
    id: 'linear-algebra-notes',
    title: '线性代数讲义与习题',
    course: '线性代数',
    category: '数学基础',
    level: '本科',
    type: 'PDF',
    year: 2023,
    status: 'Todo',
    description: '矩阵、线性空间、特征值与二次型的课程整理，保留全文版本和分章讲义入口。',
    fullText: { label: '全文下载', href: '/files/courses/math/linear-algebra/full.pdf' },
    sections: [
      section('Chap 1', '矩阵与线性方程组', '/files/courses/math/linear-algebra/chap-01.pdf'),
      section('Chap 2', '行列式与矩阵分解', '/files/courses/math/linear-algebra/chap-02.pdf'),
      section('Chap 3', '向量空间与线性相关', '/files/courses/math/linear-algebra/chap-03.pdf'),
      section('Chap 4', '线性变换与矩阵表示', '/files/courses/math/linear-algebra/chap-04.pdf'),
      section('Chap 5', '特征值、特征向量与对角化', '/files/courses/math/linear-algebra/chap-05.pdf'),
      section('Chap 6', '二次型与正定矩阵', '/files/courses/math/linear-algebra/chap-06.pdf')
    ],
    tags: ['矩阵', '特征值', '数学基础']
  },
  {
    id: 'advanced-calculus-notes',
    title: '高等数学讲义',
    course: '高等数学',
    category: '数学基础',
    level: '本科',
    type: 'PDF',
    year: 2022,
    status: 'Todo',
    description: '微积分、级数、多元函数与常微分方程的分章资料占位。',
    fullText: { label: '全文下载', href: '/files/courses/math/advanced-calculus/full.pdf' },
    sections: [
      section('Chap 1', '极限、连续与导数', '/files/courses/math/advanced-calculus/chap-01.pdf'),
      section('Chap 2', '一元函数积分学', '/files/courses/math/advanced-calculus/chap-02.pdf'),
      section('Chap 3', '级数与函数展开', '/files/courses/math/advanced-calculus/chap-03.pdf'),
      section('Chap 4', '多元函数微分学', '/files/courses/math/advanced-calculus/chap-04.pdf'),
      section('Chap 5', '重积分与曲线曲面积分', '/files/courses/math/advanced-calculus/chap-05.pdf'),
      section('Chap 6', '常微分方程基础', '/files/courses/math/advanced-calculus/chap-06.pdf')
    ],
    tags: ['微积分', '多元函数', 'ODE']
  },
  {
    id: 'probability-statistics-notes',
    title: '概率论与数理统计笔记',
    course: '概率论与数理统计',
    category: '数学基础',
    level: '本科',
    type: 'Notes',
    year: 2023,
    status: 'Todo',
    description: '随机变量、参数估计、假设检验与回归基础的课程整理。',
    fullText: { label: '全文下载', href: '/files/courses/math/probability-statistics/full.pdf' },
    sections: [
      section('Chap 1', '随机事件与概率', '/files/courses/math/probability-statistics/chap-01.pdf'),
      section('Chap 2', '随机变量及其分布', '/files/courses/math/probability-statistics/chap-02.pdf'),
      section('Chap 3', '数字特征与极限定理', '/files/courses/math/probability-statistics/chap-03.pdf'),
      section('Chap 4', '参数估计', '/files/courses/math/probability-statistics/chap-04.pdf'),
      section('Chap 5', '假设检验', '/files/courses/math/probability-statistics/chap-05.pdf'),
      section('Chap 6', '回归与相关分析', '/files/courses/math/probability-statistics/chap-06.pdf')
    ],
    tags: ['概率', '统计', '回归']
  },
  {
    id: 'atmospheric-physics-course',
    title: '大气物理课程资料',
    course: '大气物理',
    category: '大气专业课程',
    level: '本科',
    type: 'Lecture',
    year: 2024,
    status: 'Todo',
    description: '大气热力学、辐射、云降水与边界层过程的课程资料归档。',
    fullText: { label: '全文下载', href: '/files/courses/atmos/atmospheric-physics/full.pdf' },
    sections: [
      section('Lecture 1', '大气组成与状态方程', '/files/courses/atmos/atmospheric-physics/lecture-01.pdf'),
      section('Lecture 2', '大气热力学基础', '/files/courses/atmos/atmospheric-physics/lecture-02.pdf'),
      section('Lecture 3', '静力平衡与稳定度', '/files/courses/atmos/atmospheric-physics/lecture-03.pdf'),
      section('Lecture 4', '辐射传输基础', '/files/courses/atmos/atmospheric-physics/lecture-04.pdf'),
      section('Lecture 5', '云和降水物理过程', '/files/courses/atmos/atmospheric-physics/lecture-05.pdf'),
      section('Lecture 6', '大气边界层过程', '/files/courses/atmos/atmospheric-physics/lecture-06.pdf')
    ],
    tags: ['热力学', '辐射', '边界层']
  },
  {
    id: 'atmospheric-observation-course',
    title: '大气探测课程资料',
    course: '大气探测',
    category: '大气专业课程',
    level: '本科',
    type: 'Lecture',
    year: 2024,
    status: 'Todo',
    description: '常规气象观测、探空、雷达、卫星与资料质量控制的分讲义占位。',
    fullText: { label: '全文下载', href: '/files/courses/atmos/atmospheric-observation/full.pdf' },
    sections: [
      section('Lecture 1', '观测系统与误差来源', '/files/courses/atmos/atmospheric-observation/lecture-01.pdf'),
      section('Lecture 2', '地面气象观测', '/files/courses/atmos/atmospheric-observation/lecture-02.pdf'),
      section('Lecture 3', '高空气象探测', '/files/courses/atmos/atmospheric-observation/lecture-03.pdf'),
      section('Lecture 4', '天气雷达探测', '/files/courses/atmos/atmospheric-observation/lecture-04.pdf'),
      section('Lecture 5', '卫星遥感观测', '/files/courses/atmos/atmospheric-observation/lecture-05.pdf'),
      section('Lecture 6', '资料质量控制', '/files/courses/atmos/atmospheric-observation/lecture-06.pdf')
    ],
    tags: ['探空', '雷达', '卫星']
  },
  {
    id: 'fluid-mechanics-course',
    title: '流体力学课程资料',
    course: '流体力学',
    category: '大气专业课程',
    level: '本科',
    type: 'Lecture',
    year: 2024,
    status: 'Todo',
    description: '连续介质、动量方程、涡度、边界层与湍流基础的分章资料。',
    fullText: { label: '全文下载', href: '/files/courses/atmos/fluid-mechanics/full.pdf' },
    sections: [
      section('Chap 1', '连续介质与流体性质', '/files/courses/atmos/fluid-mechanics/chap-01.pdf'),
      section('Chap 2', '流体运动学', '/files/courses/atmos/fluid-mechanics/chap-02.pdf'),
      section('Chap 3', '质量守恒与动量方程', '/files/courses/atmos/fluid-mechanics/chap-03.pdf'),
      section('Chap 4', 'Navier-Stokes 方程', '/files/courses/atmos/fluid-mechanics/chap-04.pdf'),
      section('Chap 5', '涡度与环流', '/files/courses/atmos/fluid-mechanics/chap-05.pdf'),
      section('Chap 6', '势流与波动', '/files/courses/atmos/fluid-mechanics/chap-06.pdf'),
      section('Chap 7', '边界层理论', '/files/courses/atmos/fluid-mechanics/chap-07.pdf'),
      section('Chap 8', '湍流基础', '/files/courses/atmos/fluid-mechanics/chap-08.pdf')
    ],
    tags: ['流体力学', '涡度', '边界层']
  },
  {
    id: 'advanced-atmospheric-dynamics',
    title: '高等大气动力学分章资料',
    course: '高等大气动力学',
    category: '大气专业课程',
    level: '研究生',
    type: 'Lecture',
    year: 2025,
    status: 'Todo',
    description: '研究生大气动力学资料，按 Chap 1 到 Chap 10 组织。',
    fullText: { label: '全文下载', href: '/files/courses/atmos/advanced-atmospheric-dynamics/full.pdf' },
    sections: [
      section('Chap 1', '旋转坐标系与控制方程', '/files/courses/atmos/advanced-atmospheric-dynamics/chap-01.pdf'),
      section('Chap 2', '尺度分析与准地转近似', '/files/courses/atmos/advanced-atmospheric-dynamics/chap-02.pdf'),
      section('Chap 3', '位涡理论基础', '/files/courses/atmos/advanced-atmospheric-dynamics/chap-03.pdf'),
      section('Chap 4', 'Rossby 波与波作用', '/files/courses/atmos/advanced-atmospheric-dynamics/chap-04.pdf'),
      section('Chap 5', '斜压不稳定', '/files/courses/atmos/advanced-atmospheric-dynamics/chap-05.pdf'),
      section('Chap 6', '大气能量循环', '/files/courses/atmos/advanced-atmospheric-dynamics/chap-06.pdf'),
      section('Chap 7', '热带动力学基础', '/files/courses/atmos/advanced-atmospheric-dynamics/chap-07.pdf'),
      section('Chap 8', '中高纬环流异常', '/files/courses/atmos/advanced-atmospheric-dynamics/chap-08.pdf'),
      section('Chap 9', '模态分析方法', '/files/courses/atmos/advanced-atmospheric-dynamics/chap-09.pdf'),
      section('Chap 10', '可预报性与资料诊断', '/files/courses/atmos/advanced-atmospheric-dynamics/chap-10.pdf')
    ],
    tags: ['动力学', '位涡', '模态分析']
  },
  {
    id: 'cloud-microphysics-course',
    title: '云微物理课程资料',
    course: '云微物理',
    category: '大气专业课程',
    level: '研究生',
    type: 'PPT',
    year: 2026,
    status: 'Todo',
    description: '混合相云、冰晶增长、暖云降水与云参数化相关课程资料。',
    fullText: { label: '全文下载', href: '/files/courses/atmos/cloud-microphysics/full.pdf' },
    sections: [
      section('Lecture 1', '云凝结核与水汽凝结', '/files/courses/atmos/cloud-microphysics/lecture-01.pdf'),
      section('Lecture 2', '暖云微物理过程', '/files/courses/atmos/cloud-microphysics/lecture-02.pdf'),
      section('Lecture 3', '冰相过程与混合相云', '/files/courses/atmos/cloud-microphysics/lecture-03.pdf'),
      section('Lecture 4', '降水形成机制', '/files/courses/atmos/cloud-microphysics/lecture-04.pdf'),
      section('Lecture 5', '卫星云产品与反演', '/files/courses/atmos/cloud-microphysics/lecture-05.pdf'),
      section('Lecture 6', '云微物理参数化', '/files/courses/atmos/cloud-microphysics/lecture-06.pdf')
    ],
    tags: ['云微物理', '混合相云', '卫星反演']
  },
  {
    id: 'fluid-mechanics-ta-homework',
    title: '流体力学助教作业解答',
    course: '流体力学助教',
    category: '助教课程',
    level: '本科',
    type: 'Homework',
    year: 2025,
    status: 'Complete',
    description: '流体力学助教期间整理的作业解答与讲评资料，仅列出实际布置作业的周次。',
    fullText: { label: '全文下载', href: '/files/courses/ta/fluid-mechanics-homework/full.pdf' },
    sections: [
      section('Week 1', '第 1 周作业解答', '/files/courses/ta/fluid-mechanics-homework/week-01-solution.pdf'),
      section('Week 2', '第 2 周作业解答', '/files/courses/ta/fluid-mechanics-homework/week-02-solution.pdf'),
      section('Week 4', '第 4 周作业解答', '/files/courses/ta/fluid-mechanics-homework/week-04-solution.pdf'),
      section('Week 6', '第 6 周作业解答', '/files/courses/ta/fluid-mechanics-homework/week-06-solution.pdf'),
      section('Week 7', '第 7 周作业解答', '/files/courses/ta/fluid-mechanics-homework/week-07-solution.pdf'),
      section('Week 8', '第 8 周作业解答', '/files/courses/ta/fluid-mechanics-homework/week-08-solution.pdf'),
      section('Week 9', '第 9 周作业解答', '/files/courses/ta/fluid-mechanics-homework/week-09-solution.pdf'),
      section('Week 10', '第 10 周作业解答', '/files/courses/ta/fluid-mechanics-homework/week-10-solution.pdf'),
      section('Week 12', '第 12 周作业解答', '/files/courses/ta/fluid-mechanics-homework/week-12-solution.pdf'),
      section('Week 13', '第 13 周作业解答', '/files/courses/ta/fluid-mechanics-homework/week-13-solution.pdf'),
      section('Week 14', '第 14 周作业解答', '/files/courses/ta/fluid-mechanics-homework/week-14-solution.pdf'),
      section('Week 15', '第 15 周作业解答', '/files/courses/ta/fluid-mechanics-homework/week-15-solution.pdf')
    ],
    tags: ['助教', '作业解答', '流体力学']
  },
  {
    id: 'atmospheric-dynamics-ta-discussion',
    title: '大气动力学助教讨论课',
    course: '大气动力学助教',
    category: '助教课程',
    level: '本科',
    type: 'Lecture',
    year: 2025,
    status: 'Todo',
    description: '围绕尺度分析、地转平衡、涡度方程和波动问题整理的讨论课占位资料。',
    fullText: { label: '全文下载', href: '/files/courses/ta/atmospheric-dynamics-discussion/full.pdf' },
    sections: [
      section('Week 1', '尺度分析与量纲检查', '/files/courses/ta/atmospheric-dynamics-discussion/week-01.pdf'),
      section('Week 2', '地转平衡与热成风', '/files/courses/ta/atmospheric-dynamics-discussion/week-02.pdf'),
      section('Week 3', '涡度方程习题讲评', '/files/courses/ta/atmospheric-dynamics-discussion/week-03.pdf'),
      section('Week 4', 'Rossby 波例题', '/files/courses/ta/atmospheric-dynamics-discussion/week-04.pdf'),
      section('Week 5', '期中复习与答疑', '/files/courses/ta/atmospheric-dynamics-discussion/week-05.pdf')
    ],
    tags: ['助教', '讨论课', '大气动力学']
  },
  {
    id: 'python-atmos-data-ta',
    title: 'Python 大气数据处理助教资料',
    course: '科研数据处理助教',
    category: '助教课程',
    level: '通用',
    type: 'Code',
    year: 2026,
    status: 'Todo',
    description: 'NetCDF 读取、区域裁剪、批处理绘图与作业答疑的教学资料占位。',
    fullText: { label: '全文下载', href: '/files/courses/ta/python-atmos-data/full.pdf' },
    sections: [
      section('Week 1', '环境配置与文件组织', '/files/courses/ta/python-atmos-data/week-01.pdf'),
      section('Week 2', 'NetCDF 与 xarray 入门', '/files/courses/ta/python-atmos-data/week-02.pdf'),
      section('Week 3', '区域平均与时间序列', '/files/courses/ta/python-atmos-data/week-03.pdf'),
      section('Week 4', '地图绘制与投影', '/files/courses/ta/python-atmos-data/week-04.pdf'),
      section('Week 5', '批处理脚本与复现实验', '/files/courses/ta/python-atmos-data/week-05.pdf')
    ],
    tags: ['助教', 'Python', 'NetCDF']
  },
  {
    id: 'scientific-writing-materials',
    title: '科技论文写作资料',
    course: '科研写作',
    category: '科研写作',
    level: '研究生',
    type: 'Notes',
    year: 2025,
    status: 'Todo',
    description: '论文结构、摘要写法、图表叙述、投稿信与审稿意见回复的资料整理。',
    fullText: { label: '全文下载', href: '/files/courses/writing/scientific-writing/full.pdf' },
    sections: [
      section('Part 1', '论文结构与故事线', '/files/courses/writing/scientific-writing/part-01.pdf'),
      section('Part 2', '摘要、引言与贡献表达', '/files/courses/writing/scientific-writing/part-02.pdf'),
      section('Part 3', '图表设计与结果叙述', '/files/courses/writing/scientific-writing/part-03.pdf'),
      section('Part 4', '投稿信与审稿回复', '/files/courses/writing/scientific-writing/part-04.pdf')
    ],
    tags: ['论文写作', '投稿', '审稿回复']
  },
  {
    id: 'machine-learning-notes',
    title: '机器学习笔记',
    course: '机器学习',
    category: '机器学习',
    level: '通用',
    type: 'Notes',
    year: 2025,
    status: 'Todo',
    description: '分类、回归、交叉验证、特征解释与科研数据建模的学习笔记。',
    fullText: { label: '全文下载', href: '/files/courses/ml/machine-learning/notes-full.pdf' },
    sections: [
      section('Lecture 1', '监督学习与数据切分', '/files/courses/ml/machine-learning/lecture-01.pdf'),
      section('Lecture 2', '线性模型与正则化', '/files/courses/ml/machine-learning/lecture-02.pdf'),
      section('Lecture 3', '树模型与集成方法', '/files/courses/ml/machine-learning/lecture-03.pdf'),
      section('Lecture 4', '交叉验证与指标选择', '/files/courses/ml/machine-learning/lecture-04.pdf'),
      section('Lecture 5', '可解释性与特征重要性', '/files/courses/ml/machine-learning/lecture-05.pdf')
    ],
    tags: ['机器学习', 'Python', '建模']
  },
  {
    id: 'latex-template',
    title: 'LaTeX 模板与排版资料',
    course: '论文与报告排版',
    category: 'LaTeX',
    level: '通用',
    type: 'LaTeX',
    year: 2026,
    status: 'Todo',
    description: '课程报告、论文草稿和读书笔记可复用的 LaTeX 模板占位。',
    fullText: { label: '模板下载', href: '/files/books/latex-template-placeholder.tex' },
    sections: [
      section('Template 1', '课程报告模板', '/files/courses/latex/templates/course-report-template.tex'),
      section('Template 2', '论文草稿模板', '/files/courses/latex/templates/manuscript-template.tex'),
      section('Template 3', '读书笔记模板', '/files/courses/latex/templates/reading-note-template.tex')
    ],
    tags: ['LaTeX', '模板', '排版']
  },
  {
    id: 'python-data-processing-code',
    title: 'Python 数据处理代码',
    course: '科研数据处理',
    category: '代码',
    level: '通用',
    type: 'Code',
    year: 2026,
    status: 'Todo',
    description: 'NetCDF 读取、区域裁剪、统计和绘图流程的示例脚本。',
    fullText: { label: '代码下载', href: '/files/code/python-data-processing.py' },
    sections: [
      section('Script 1', 'NetCDF 读取与变量检查', '/files/courses/code/python-data-processing/read-netcdf.py'),
      section('Script 2', '区域裁剪与平均', '/files/courses/code/python-data-processing/regional-average.py'),
      section('Script 3', '地图绘制模板', '/files/courses/code/python-data-processing/map-plot-template.py')
    ],
    tags: ['Python', 'NetCDF', '可视化']
  },
  {
    id: 'graduate-course-book',
    title: '研究生课程 book',
    course: '研究生专题课程',
    category: 'Book',
    level: '研究生',
    type: 'Book',
    year: 2026,
    status: 'Todo',
    description: '研究生课程阅读材料、讲义和推导过程的全文归档入口。',
    fullText: { label: '全文下载', href: '/files/books/graduate-course-book-placeholder.pdf' },
    tags: ['研究生课程', 'book', '资料归档']
  },
  {
    id: 'atmospheric-dynamics-book',
    title: '大气动力学 book',
    course: '大气动力学',
    category: 'Book',
    level: '研究生',
    type: 'Book',
    year: 2025,
    status: 'Todo',
    description: '大气动力学推导、例题和阅读材料的全文占位版本。',
    fullText: { label: '全文下载', href: '/files/books/atmospheric-dynamics-book-placeholder.pdf' },
    tags: ['动力学', 'book', '推导']
  },
  {
    id: 'cloud-microphysics-book',
    title: '云微物理阅读 book',
    course: '云微物理',
    category: 'Book',
    level: '研究生',
    type: 'Book',
    year: 2026,
    status: 'Todo',
    description: '云微物理文献、课程推导和卫星资料说明的全文归档占位。',
    fullText: { label: '全文下载', href: '/files/books/cloud-microphysics-book-placeholder.pdf' },
    tags: ['云微物理', 'book', '阅读']
  }
];

