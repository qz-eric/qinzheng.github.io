# 个人学术主页 + 文学作品集 + 学习资料归档馆

这是一个基于 Astro + TypeScript 的个人静态网站项目。第一版面向本地运行与后续服务器部署，包含个人主页、Academic CV、发表成果、学术活动、文学作品、课程资料和笔记归档。

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

头像占位文件在 `public/images/avatar-placeholder.svg`，首页背景图在 `public/images/archive-sky-hero.png`。

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

修改 `src/data/resources.ts`，新增资源条目。课程资料现在支持两级链接：

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
  description: 'Week 1 到 Week 15 作业解答。',
  fullText: { label: '全文下载', href: '/files/courses/ta/fluid-mechanics-homework/full.pdf' },
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

链接使用 `/files/...` 开头，例如 `/files/courses/atmos/advanced-atmospheric-dynamics/chap-01.pdf`。

如果某门课程中某些周没有作业，不需要补空文件，也不要在 `sections` 中列出那些 week。

## 放置 PDF、PPT、图片等文件

Astro 会把 `public/` 目录原样复制到站点根目录。比如：

- `public/files/cv/cv.pdf` 会变成 `/files/cv/cv.pdf`
- `public/files/papers/paper.pdf` 会变成 `/files/papers/paper.pdf`
- `public/images/photo.jpg` 会变成 `/images/photo.jpg`

第一版提供的 PDF 多为占位文件，你可以直接替换为真实文件并保持路径不变。

## 中英文切换预留

`src/data/profile.ts` 中的 `languages` 字段已经预留中英文结构。第一版页面以中文为主，后续可以扩展为：

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

## 常改文件速查

- 个人资料：`src/data/profile.ts`
- 论文：`src/data/publications.ts`
- 学术活动：`src/data/activities.ts`
- 课程资料：`src/data/resources.ts`
- 文学作品元数据：`src/data/works.ts`
- 文学正文：`src/content/works/`
- 笔记正文：`src/content/notes/`
- 全局样式：`src/styles/global.css`
