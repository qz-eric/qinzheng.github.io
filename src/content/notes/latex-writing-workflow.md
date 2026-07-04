---
title: LaTeX 与论文写作工作流
date: 2025-11-08
category: 技术笔记
summary: 记录从 Markdown 笔记、Zotero 文献到 LaTeX 论文草稿的组织方式。
tags:
  - LaTeX
  - Zotero
  - 写作
draft: false
---

## 基本结构

一个可维护的论文项目通常至少包含：

- `main.tex`：论文主文件
- `sections/`：分章节正文
- `figures/`：图件输出
- `tables/`：表格
- `refs.bib`：文献库
- `notes/`：审稿意见、修改记录和临时推导

## 版本记录

建议把图表生成脚本、数据说明和论文文字放在同一个版本控制仓库中。投稿前可以打 tag，返修时再建立单独分支，避免改动来回覆盖。

## 写作节奏

先写图注和结果段，再补方法和讨论，通常比从引言开始更容易进入状态。
