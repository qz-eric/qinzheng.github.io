# 个人学术主页 + 文学作品集 + 学习资料归档馆

这是一个基于 Astro + TypeScript 的个人静态网站项目。当前版本面向科研展示、学术分享、长期归档与文学作品整理，包含 Research、Publications、Notes、Writing、Teaching、About 等入口。

## 技术栈

- Astro
- TypeScript
- Markdown / MDX 内容管理
- TypeScript 数据文件管理论文、活动、资源和个人资料
- 普通 CSS，无数据库、无后端依赖

## 安装与本地运行

```bash
npm install
npm run dev
```

默认开发地址通常是 `http://localhost:4321`。

常用命令：

```bash
npm run build
npm run preview
npm run check
```

## 修改个人信息

主要修改 `src/data/profile.ts`：

- `nameCn` / `nameEn`
- `currentRole`
- `affiliation`
- `location`
- `email`
- `researchInterests`
- `bioShort` / `bioLong`
- `education`
- `researchExperience`
- `skills`
- `honors`
- `socialLinks`

个人照片在 `public/images/personal.jpg`，首页插图在 `public/images/Nahida.png`。

## 添加论文

修改 `src/data/publications.ts`，在 `publications` 数组里新增一项：

```ts
{
  id: 'unique-paper-id',
  title: 'Paper title',
  authors: ['Your Name', 'Coauthor'],
  journal: 'Journal Name',
  year: 2026,
  status: 'Published',
  doi: '10.xxxx/xxxxx',
  abstract: 'Abstract text...',
  keywords: ['keyword 1', 'keyword 2'],
  links: {
    pdf: '/files/papers/paper.pdf',
    code: 'https://github.com/your-name/project',
    data: '/files/papers/data-note.md'
  }
}
```

`status` 可选值为 `Published`、`UnderReview`、`InPreparation`。

## 添加文学作品

文学作品由两部分组成：

1. 在 `src/data/works.ts` 中新增元数据，包含 `slug`、标题、年份、分类和简介。
2. 在 `src/content/works/` 中新建同名 Markdown 文件，例如 `my-story.md`。

作品集 / 栏目也在 `src/data/works.ts` 中维护。先在 `workCollections` 里添加栏目，再给作品设置对应的 `collection`：

```ts
{
  slug: 'my-story',
  title: '我的作品',
  year: 2026,
  category: '短篇',
  collection: 'cloud-footnotes',
  type: '短篇小说',
  summary: '作品简介。',
  tags: ['标签'],
  featured: true
}
```

Markdown frontmatter 示例：

```md
---
title: 我的作品
year: 2026
category: 短篇
collection: cloud-footnotes
type: 短篇小说
summary: 作品简介。
tags:
  - 标签
draft: false
---

正文从这里开始。
```

`slug` 需要与文件名一致，例如 `src/content/works/my-story.md` 对应 `/works/my-story/`。

## 添加笔记

在 `src/content/notes/` 中添加 Markdown 文件：

```md
---
title: 笔记标题
date: 2026-01-01
category: 研究笔记
summary: 简短摘要。
tags:
  - 标签
draft: false
---

正文。
```

## 添加课程资料

四门整理版课程笔记按下文的同步流程维护。其他资料在 `src/data/archived-resources.json` 中添加 `{ "resource": { ... }, "i18n": { ... } }` 条目；`resource` 保存中文内容，`i18n` 保存英文标题、课程名、简介和标签。资源结构如下，实际 JSON 需使用双引号：

- `fullText`：全文下载入口
- `sections`：分章节、分 Lecture 或 Week 的入口，页面会把链接加在章节名称上

示例：

```ts
{
  id: 'fluid-mechanics-ta-homework',
  title: '流体力学助教作业解答',
  course: '流体力学助教',
  category: '助教课程',
  level: '本科',
  type: 'Homework',
  year: 2025,
  status: 'Complete',
  description: '实际布置作业周次的解答。',
  sections: [
    { label: 'Week 1', title: '第 1 周作业解答', href: '/files/courses/ta/fluid-mechanics-homework/week-01-solution.pdf' }
  ],
  tags: ['助教', '作业解答', '流体力学']
}
```

`status` 可填 `Complete` 或 `Todo`，页面会显示为“更新完成”或“待整理”。

Book 分类保留为全文归档，建议只填写 `fullText`，不放 `sections`。

课程资料建议按“单独课程 / 单独经历”放在各自文件夹中，避免同一类课程混在一个目录里：

```text
public/files/courses/
  math/
    linear-algebra/
      full.pdf
      chap-01.pdf
    advanced-calculus/
  atmos/
    advanced-atmospheric-dynamics/
      full.pdf
      chap-01.pdf
    fluid-mechanics/
  ta/
    fluid-mechanics-homework/
      full.pdf
      week-01-solution.pdf
      week-02-solution.pdf
    atmospheric-dynamics-discussion/
  ml/
    machine-learning/
  writing/
    scientific-writing/
```

资源文件建议放在：

- 课程资料：`public/files/courses/`
- PDF / book：`public/files/books/`
- 论文 PDF：`public/files/papers/`
- 幻灯片：`public/files/slides/`
- 代码：`public/files/code/`
- 简历：`public/files/cv/`
- 图片或补充材料：`public/files/images/`

链接使用 `/files/...` 开头，例如 `/files/courses/atmos/advanced-atmospheric-dynamics/notes/AAD_chapter1.pdf`。

如果某门课程中某些周没有作业，不需要补空文件，也不要在 `sections` 中列出那些 week。

## 放置 PDF、PPT、图片等文件

Astro 会把 `public/` 目录原样复制到站点根目录。比如：

- `public/files/cv/cv.pdf` 会变成 `/files/cv/cv.pdf`
- `public/files/papers/paper.pdf` 会变成 `/files/papers/paper.pdf`
- `public/images/photo.jpg` 会变成 `/images/photo.jpg`

若资料文件仍是临时版本，你可以直接替换为真实文件并保持路径不变。

## 中英文切换预留

`src/data/profile.ts` 中的 `languages` 字段已经预留中英文结构。当前页面以中文为主，中英文版本可按下面方式逐步拆分：

- 为数据文件添加 `titleEn`、`abstractEn`、`bioLongEn`
- 在页面中读取当前语言
- 使用 Astro middleware 或静态路由生成 `/en/` 页面

## 部署建议

静态构建命令：

```bash
npm run build
```

构建产物位于 `dist/`。常见部署方式：

- 云服务器：把 `dist/` 上传到 Nginx / Caddy 的静态站点目录。
- GitHub Pages / Cloudflare Pages / Netlify / Vercel：连接仓库，构建命令填 `npm run build`，输出目录填 `dist`。
- 有个人域名时，把 `astro.config.mjs` 里的 `site` 改为真实域名，例如 `https://example.com`，这样 canonical 和 Open Graph 地址会更准确。

## 同步四门课程笔记

四门课程的整理版 PDF 按课程独立存放在 `public/files/courses/atmos/<course>/notes/`，其中 `full.pdf` 为完整版，其余文件保留来源中的章节编号。课程分别为流体力学、大气物理学、大气探测学（本科），以及高等大气动力学（研究生）。

笔记源目录更新后，在项目根目录运行：

```powershell
node scripts/sync-course-notes.mjs 'E:\Codex\笔记生成'
pnpm run build
```

同步脚本仅复制各课程 `整理版笔记` 中的完整版和 `分章节` 目录下的正式 PDF，不复制参考书、历史版本或编译副本。课程简介和中英文章节名称维护在 `scripts/course-notes.json`，同步生成的索引位于 `src/data/course-notes.json`。新增章节时先更新清单，再运行同步命令。

已有高数、助教作业及 Book 资料维护在 `src/data/archived-resources.json`；分类与数据类型维护在 `src/data/resources.ts`。只为真实文件提供下载入口，没有完整版的课程仅展示章节链接。

## 常改文件速查

- 个人资料：`src/data/profile.ts`
- 论文：`src/data/publications.ts`
- 学术活动：`src/data/activities.ts`
- 课程分类与类型：`src/data/resources.ts`
- 四门笔记的简介与章节：`scripts/course-notes.json`
- 其他已归档资料：`src/data/archived-resources.json`
- 文学作品元数据：`src/data/works.ts`
- 文学正文：`src/content/works/`
- 笔记正文：`src/content/notes/`
- 全局样式：`src/styles/global.css`
