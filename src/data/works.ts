export type WorkCategory =
  | '科幻小说'
  | '短篇'
  | '散文'
  | '设定集'
  | '随笔'
  | '创作中'
  | '书影评'
  | '宇宙声学家'
  | '小说'
  | '杂文';

export interface WorkCollection {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverLabel: string;
  tone: 'blue' | 'green' | 'plum' | 'amber' | 'red' | 'cyan';
}

export interface WorkMeta {
  slug: string;
  title: string;
  year: number;
  category: WorkCategory;
  collection: string;
  type: string;
  summary: string;
  tags: string[];
  featured?: boolean;
}

export const workCollections: WorkCollection[] = [
  {
    slug: 'reviews',
    title: '与好作品满怀相拥',
    subtitle: '书影评与艺术评论',
    description: '关于影视、绘画和文本作品的评论与阅读札记。',
    coverLabel: 'Reviews',
    tone: 'red'
  },
  {
    slug: 'cosmic-acoustician',
    title: '宇宙声学家',
    subtitle: '音乐、声音与世界形状',
    description: '以音乐和声音为线索，把听觉经验翻译成城市、宇宙与生命尺度的栏目文章。',
    coverLabel: 'Acoustics',
    tone: 'cyan'
  },
  {
    slug: 'fiction',
    title: '小说',
    subtitle: '短篇小说与早期叙事',
    description: '收纳小说、青春物语、街道夜晚等叙事作品。',
    coverLabel: 'Fiction',
    tone: 'plum'
  },
  {
    slug: 'essay-classics',
    title: '冰岛夜光云',
    subtitle: '城市、生命与求索',
    description: '收纳代表性散文和长期写作中的抒情文本。',
    coverLabel: 'Noctilucent',
    tone: 'green'
  },
  {
    slug: 'miscellany',
    title: '杂文',
    subtitle: '生活记录、创作思考与技术日常',
    description: '收纳更松散的随笔、记录和阶段性思考。',
    coverLabel: 'Notes',
    tone: 'amber'
  },
  {
    slug: 'qunqing-universe',
    title: '群青宇宙',
    subtitle: '科幻长篇与机器朝圣',
    description: '围绕星际航行、人工智能、时间闭环与自由意志展开的科幻作品集。',
    coverLabel: 'Deep Blue',
    tone: 'blue'
  }
];

export const featuredWorkSlugs = [
  'burgundy-red-in-bloom',
  'flowing-beauty-of-life',
  'old-city',
  'tokyo-love-story-review'
];

export const works: WorkMeta[] = [
  {
    slug: 'qunqing-shenchu-setting-outline',
    title: '群青深处 小说创作设定总纲',
    year: 2026,
    category: '创作中',
    collection: 'writing-in-progress',
    type: '长篇设定 / 创作资料',
    summary: '《群青深处》小说创作设定总纲。',
    tags: ['群青深处', '科幻', '设定', '创作中']
  },
  {
    slug: 'qunqing-shenchu-outline-timeline',
    title: '群青深处 正文提纲和时间线',
    year: 2026,
    category: '创作中',
    collection: 'writing-in-progress',
    type: '长篇提纲 / 时间线',
    summary: '“有前奏的思念是美好的。”',
    tags: ['群青深处', '提纲', '时间线', '创作中']
  },
  {
    slug: 'qunqing-shenchu-poems-first-outline',
    title: '群青深处 诗歌和最初提纲',
    year: 2026,
    category: '创作中',
    collection: 'writing-in-progress',
    type: '诗歌 / 初稿提纲',
    summary: '群青深处相关诗歌与早期提纲草稿。',
    tags: ['群青深处', '诗歌', '初稿', '创作中']
  },
  {
    slug: 'cosmic-acoustician-00',
    title: '宇宙声学家 00｜听见音乐在世界中的形状',
    year: 2026,
    category: '宇宙声学家',
    collection: 'cosmic-acoustician',
    type: '栏目文章',
    summary: '曾几何时，在某个深夜，你也许也曾戴上耳机，独自听一首歌。',
    tags: ['宇宙声学家', '音乐', '声音', '随笔']
  },
  {
    slug: 'sanmu-street-night',
    title: '三木街之夜',
    year: 2020,
    category: '小说',
    collection: 'fiction',
    type: '小说',
    summary: '关于三木街、交换生、青春和夜晚的一篇小说。',
    tags: ['小说', '夜晚', '街道']
  },
  {
    slug: 'burgundy-red-in-bloom',
    title: '一如那肆意盛开的勃艮第红',
    year: 2021,
    category: '散文',
    collection: 'essay-classics',
    type: '散文',
    summary: '“请成为永远疯狂永远浪漫永远清澈的存在。”',
    tags: ['散文', '记忆', '色彩'],
    featured: true
  },
  {
    slug: 'tokyo-love-story-review',
    title: '不敢二刷的电视剧-东京爱情故事',
    year: 2019,
    category: '书影评',
    collection: 'reviews',
    type: '影视评论',
    summary: '关于《东京爱情故事》新版与旧版之间的观看记忆。',
    tags: ['书影评', '电视剧', '东京爱情故事'],
    featured: true
  },
  {
    slug: 'hiroshige-tokaido-fifty-three-stations',
    title: '歌川广重《东海道五十三次》中的故事内容与表达方式',
    year: 2026,
    category: '书影评',
    collection: 'reviews',
    type: '艺术评论',
    summary: '由《东海道五十三次》浅谈歌川广重浮世绘风景画中的故事内容与表达方式。',
    tags: ['书影评', '浮世绘', '艺术评论']
  },
  {
    slug: 'ahuan-youth-story',
    title: '阿欢的青春物语',
    year: 2017,
    category: '小说',
    collection: 'fiction',
    type: '小说',
    summary: '廊桥外的瓦檐下，大雨如瀑般倾泻到江里。',
    tags: ['小说', '青春', '雨']
  },
  {
    slug: 'old-city',
    title: '故城',
    year: 2017,
    category: '散文',
    collection: 'essay-classics',
    type: '散文',
    summary: '故城四月的雨，不算淅沥，不算磅礴，却总是融着许多言而未尽的故事。',
    tags: ['散文', '故城', '雨'],
    featured: true
  },
  {
    slug: 'flowing-beauty-of-life',
    title: '生命的流动美',
    year: 2021,
    category: '散文',
    collection: 'essay-classics',
    type: '散文',
    summary: '生命的流动美，let life flow。',
    tags: ['散文', '生命', '流动'],
    featured: true
  },
  {
    slug: 'summer-nanming-memoir',
    title: '夏日南明回忆录',
    year: 2021,
    category: '散文',
    collection: 'essay-classics',
    type: '散文',
    summary: '关于夏日、南明和一次回望的长篇回忆录式散文。',
    tags: ['散文', '南明', '回忆录']
  },
  {
    slug: 'destined-path-of-seeking',
    title: '那似是命中注定的求索之路',
    year: 2022,
    category: '散文',
    collection: 'essay-classics',
    type: '散文',
    summary: '一篇关于学习、记录和求索之路的散文。',
    tags: ['散文', '学习', '求索']
  },
  {
    slug: 'bw-shanghai-trip',
    title: 'BW上海之行',
    year: 2019,
    category: '杂文',
    collection: 'miscellany',
    type: '杂文',
    summary: '10月4号晚，一个男孩在合肥的火车站前徘徊。',
    tags: ['杂文', '上海', '记录']
  },
  {
    slug: 'qjiang-and-his-cafe',
    title: 'Q酱和他的咖啡馆',
    year: 2020,
    category: '杂文',
    collection: 'miscellany',
    type: '杂文',
    summary: '一个关于 Q 酱、咖啡馆和讲故事的杂文。',
    tags: ['杂文', '咖啡馆', '故事']
  },
  {
    slug: 'thoughts-on-becoming-up-creator',
    title: '关于成为up主的一些思考',
    year: 2019,
    category: '杂文',
    collection: 'miscellany',
    type: '杂文',
    summary: '关于决定成为 up 主时的一些顾虑、期待和阶段性思考。',
    tags: ['杂文', '创作', 'up主']
  },
  {
    slug: 'new-column',
    title: '新的栏目',
    year: 2022,
    category: '杂文',
    collection: 'miscellany',
    type: '杂文',
    summary: '关于将学习过程以栏目形式记录下来的想法。',
    tags: ['杂文', '栏目', '学习记录']
  },
  {
    slug: 'atypical-frontend-student',
    title: '非典型前端同学',
    year: 2020,
    category: '杂文',
    collection: 'miscellany',
    type: '杂文',
    summary: '关于学生时代、前端同学和自我观察的一篇杂文。',
    tags: ['杂文', '校园', '自我观察']
  },
  {
    slug: 'qunqing-shenchu',
    title: '群青深处',
    year: 2026,
    category: '科幻小说',
    collection: 'qunqing-universe',
    type: '长篇设想 / 小说大纲 / 连载占位',
    summary: ' 一个地质勘探机器人在失去人类女孩后，穿越星云、黑洞与时间闭环，完成一场由机械服从走向自由意志的星际朝圣。',
    tags: ['科幻', '人工智能', '星际', '时间闭环']
  },
  {
    slug: 'rain-observatory',
    title: '雨中的观测站',
    year: 2025,
    category: '短篇',
    collection: 'cloud-footnotes',
    type: '短篇小说',
    summary: '关于一座山地观测站、一次迟到的降水记录，以及两个年轻研究者的夜谈。',
    tags: ['短篇', '观测站', '雨']
  },
  {
    slug: 'clouds-and-footnotes',
    title: '云与脚注',
    year: 2025,
    category: '散文',
    collection: 'cloud-footnotes',
    type: '散文',
    summary: '把读论文、看云和写作之间细小的联想记录下来，像给日常生活加上脚注。',
    tags: ['散文', '研究生活', '阅读']
  },
  {
    slug: 'atlas-of-city-and-tides',
    title: '城与潮汐地图集',
    year: 2026,
    category: '设定集',
    collection: 'city-and-tides',
    type: '世界观设定',
    summary: '一个被周期性海雾与潮汐钟表统治的海岸城市设定，包含地理、制度与人物关系。',
    tags: ['设定集', '城市', '潮汐']
  },
  {
    slug: 'after-class-fragments',
    title: '课后碎片',
    year: 2024,
    category: '随笔',
    collection: 'cloud-footnotes',
    type: '随笔',
    summary: '课程结束后留下的片段：黑板、公式、路灯、食堂和赶论文的夜晚。',
    tags: ['随笔', '校园', '学习']
  }
];
