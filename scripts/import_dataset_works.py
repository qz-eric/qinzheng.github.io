from __future__ import annotations

import re
import shutil
from dataclasses import dataclass
from pathlib import Path

from docx import Document
from docx.document import Document as DocumentObject
from docx.oxml.table import CT_Tbl
from docx.oxml.text.paragraph import CT_P
from docx.table import Table
from docx.text.paragraph import Paragraph


ROOT = Path(__file__).resolve().parents[1]
WORKS_DIR = ROOT / "src" / "content" / "works"
IMAGES_DIR = ROOT / "public" / "images" / "works"


@dataclass(frozen=True)
class WorkImport:
    source: str
    slug: str
    title: str
    year: int
    category: str
    collection: str
    work_type: str
    tags: list[str]
    featured: bool = False


IMPORTS: list[WorkImport] = [
    WorkImport(
        "dataset/2.文章与作品/0.创作中/群青深处 小说创作设定总纲.docx",
        "qunqing-shenchu-setting-outline",
        "群青深处 小说创作设定总纲",
        2026,
        "创作中",
        "writing-in-progress",
        "长篇设定 / 创作资料",
        ["群青深处", "科幻", "设定", "创作中"],
    ),
    WorkImport(
        "dataset/2.文章与作品/0.创作中/群青深处_正文提纲和时间线.docx",
        "qunqing-shenchu-outline-timeline",
        "群青深处 正文提纲和时间线",
        2026,
        "创作中",
        "writing-in-progress",
        "长篇提纲 / 时间线",
        ["群青深处", "提纲", "时间线", "创作中"],
    ),
    WorkImport(
        "dataset/2.文章与作品/0.创作中/群青深处_诗歌和最初提纲.docx",
        "qunqing-shenchu-poems-first-outline",
        "群青深处 诗歌和最初提纲",
        2026,
        "创作中",
        "writing-in-progress",
        "诗歌 / 初稿提纲",
        ["群青深处", "诗歌", "初稿", "创作中"],
    ),
    WorkImport(
        "dataset/2.文章与作品/【书影评】与好作品满怀相拥/不敢二刷的电视剧-东京爱情故事（2019.5）.docx",
        "tokyo-love-story-review",
        "不敢二刷的电视剧-东京爱情故事",
        2019,
        "书影评",
        "reviews",
        "影视评论",
        ["书影评", "电视剧", "东京爱情故事"],
        True,
    ),
    WorkImport(
        "dataset/2.文章与作品/【书影评】与好作品满怀相拥/歌川广重浮世绘风景画作品《东海道五十三次》中的故事内容与表达方式.docx",
        "hiroshige-tokaido-fifty-three-stations",
        "歌川广重《东海道五十三次》中的故事内容与表达方式",
        2026,
        "书影评",
        "reviews",
        "艺术评论",
        ["书影评", "浮世绘", "歌川广重", "东海道五十三次"],
    ),
    WorkImport(
        "dataset/2.文章与作品/【宇宙声学家】/宇宙声学家 00｜听见音乐在世界中的形状.docx",
        "cosmic-acoustician-00",
        "宇宙声学家 00｜听见音乐在世界中的形状",
        2026,
        "宇宙声学家",
        "cosmic-acoustician",
        "栏目文章",
        ["宇宙声学家", "音乐", "声音", "随笔"],
    ),
    WorkImport(
        "dataset/2.文章与作品/【小说】/【2017.6】阿欢的青春物语.docx",
        "ahuan-youth-story",
        "阿欢的青春物语",
        2017,
        "小说",
        "fiction",
        "小说",
        ["小说", "青春", "早期作品"],
    ),
    WorkImport(
        "dataset/2.文章与作品/【小说】/【2020.5】三木街之夜.docx",
        "sanmu-street-night",
        "三木街之夜",
        2020,
        "小说",
        "fiction",
        "小说",
        ["小说", "夜晚", "街道"],
    ),
    WorkImport(
        "dataset/2.文章与作品/【散文】代表作/【2017.5】故城.docx",
        "old-city",
        "故城",
        2017,
        "散文",
        "essay-classics",
        "散文",
        ["散文", "代表作", "城市"],
        True,
    ),
    WorkImport(
        "dataset/2.文章与作品/【散文】代表作/【2021.3】一如那肆意盛开的勃艮第红.docx",
        "burgundy-red-in-bloom",
        "一如那肆意盛开的勃艮第红",
        2021,
        "散文",
        "essay-classics",
        "散文",
        ["散文", "代表作", "勃艮第红"],
        True,
    ),
    WorkImport(
        "dataset/2.文章与作品/【散文】代表作/【2021.3】生命的流动美.docx",
        "flowing-beauty-of-life",
        "生命的流动美",
        2021,
        "散文",
        "essay-classics",
        "散文",
        ["散文", "代表作", "生命"],
        True,
    ),
    WorkImport(
        "dataset/2.文章与作品/【散文】代表作/【2021.9】夏日南明回忆录.docx",
        "summer-nanming-memoir",
        "夏日南明回忆录",
        2021,
        "散文",
        "essay-classics",
        "散文",
        ["散文", "代表作", "夏日", "南明"],
    ),
    WorkImport(
        "dataset/2.文章与作品/【散文】代表作/【2022.10】那似是命中注定的求索之路.docx",
        "destined-path-of-seeking",
        "那似是命中注定的求索之路",
        2022,
        "散文",
        "essay-classics",
        "散文",
        ["散文", "代表作", "求索"],
    ),
    WorkImport(
        "dataset/2.文章与作品/【杂文】/BW上海之行（2019.10）.docx",
        "bw-shanghai-trip",
        "BW上海之行",
        2019,
        "杂文",
        "miscellany",
        "杂文",
        ["杂文", "上海", "记录"],
    ),
    WorkImport(
        "dataset/2.文章与作品/【杂文】/Q酱和他的咖啡馆（2020.8）.docx",
        "qjiang-and-his-cafe",
        "Q酱和他的咖啡馆",
        2020,
        "杂文",
        "miscellany",
        "杂文",
        ["杂文", "咖啡馆", "日常"],
    ),
    WorkImport(
        "dataset/2.文章与作品/【杂文】/关于成为up主的一些思考（2019.10）.docx",
        "thoughts-on-becoming-up-creator",
        "关于成为up主的一些思考",
        2019,
        "杂文",
        "miscellany",
        "杂文",
        ["杂文", "UP主", "创作"],
    ),
    WorkImport(
        "dataset/2.文章与作品/【杂文】/新的栏目（2022.10）.docx",
        "new-column",
        "新的栏目",
        2022,
        "杂文",
        "miscellany",
        "杂文",
        ["杂文", "栏目", "创作"],
    ),
    WorkImport(
        "dataset/2.文章与作品/【杂文】/非典型前端同学（2020.12）.docx",
        "atypical-frontend-student",
        "非典型前端同学",
        2020,
        "杂文",
        "miscellany",
        "杂文",
        ["杂文", "前端", "学习"],
    ),
]


def iter_block_items(parent: DocumentObject):
    for child in parent.element.body.iterchildren():
        if isinstance(child, CT_P):
            yield Paragraph(child, parent)
        elif isinstance(child, CT_Tbl):
            yield Table(child, parent)


def yaml_string(value: str) -> str:
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"') + '"'


def clean_text(text: str) -> str:
    text = text.replace("\xa0", " ")
    text = re.sub(r"[ \t]+", " ", text)
    return text.strip()


def image_extension(part) -> str:
    partname = str(part.partname)
    suffix = Path(partname).suffix
    if suffix:
        return suffix
    content_type = getattr(part, "content_type", "")
    if content_type == "image/jpeg":
        return ".jpg"
    if content_type == "image/png":
        return ".png"
    if content_type == "image/gif":
        return ".gif"
    return ".bin"


def paragraph_image_ids(paragraph: Paragraph) -> list[str]:
    ids: list[str] = []
    for element in paragraph._element.iter():
        if element.tag.endswith("}blip"):
            embed = element.get("{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed")
            if embed:
                ids.append(embed)
    return ids


def paragraph_to_markdown(paragraph: Paragraph, doc: DocumentObject, work: WorkImport, image_counter: list[int]) -> list[str]:
    text = clean_text(paragraph.text)
    image_ids = paragraph_image_ids(paragraph)
    if not text and not image_ids:
        return []

    style_name = (paragraph.style.name if paragraph.style else "").lower()
    if "heading 1" in style_name or "标题 1" in style_name:
        line = f"## {text}" if text else ""
    elif "heading 2" in style_name or "标题 2" in style_name:
        line = f"### {text}" if text else ""
    elif "heading 3" in style_name or "标题 3" in style_name:
        line = f"#### {text}" if text else ""
    elif "list bullet" in style_name or "项目符号" in style_name:
        line = f"- {text}" if text else ""
    elif "list number" in style_name or "编号" in style_name:
        line = f"1. {text}" if text else ""
    else:
        line = text

    lines: list[str] = []
    if line:
        lines.append(line)

    image_dir = IMAGES_DIR / work.slug
    for rid in image_ids:
        part = doc.part.related_parts.get(rid)
        if part is None:
            continue
        image_counter[0] += 1
        ext = image_extension(part)
        image_dir.mkdir(parents=True, exist_ok=True)
        filename = f"image-{image_counter[0]:02d}{ext}"
        target = image_dir / filename
        if not target.exists():
            target.write_bytes(part.blob)
        lines.append(f"![{work.title} 插图 {image_counter[0]}](/images/works/{work.slug}/{filename})")

    return lines


def table_to_markdown(table: Table) -> list[str]:
    rows = []
    for row in table.rows:
        cells = [clean_text(cell.text).replace("\n", "<br>") for cell in row.cells]
        if any(cells):
            rows.append(cells)
    if not rows:
        return []
    width = max(len(row) for row in rows)
    normalized = [row + [""] * (width - len(row)) for row in rows]
    header = normalized[0]
    lines = [
        "| " + " | ".join(header) + " |",
        "| " + " | ".join(["---"] * width) + " |",
    ]
    for row in normalized[1:]:
        lines.append("| " + " | ".join(row) + " |")
    return lines


def make_summary(markdown_lines: list[str], title: str) -> str:
    for line in markdown_lines:
        stripped = re.sub(r"^#+\s*", "", line).strip()
        if not stripped or stripped.startswith("!") or stripped == title:
            continue
        stripped = re.sub(r"[*_`>#-]", "", stripped).strip()
        if len(stripped) >= 12:
            return stripped[:96] + ("..." if len(stripped) > 96 else "")
    return f"{title}，由原始 Word 文档导入整理。"


def convert(work: WorkImport) -> None:
    source = ROOT / work.source
    if not source.exists():
        raise FileNotFoundError(source)

    doc = Document(source)
    image_dir = IMAGES_DIR / work.slug
    if image_dir.exists():
        shutil.rmtree(image_dir)

    image_counter = [0]
    body_lines: list[str] = []

    for block in iter_block_items(doc):
        if isinstance(block, Paragraph):
            lines = paragraph_to_markdown(block, doc, work, image_counter)
        else:
            lines = table_to_markdown(block)
        if lines:
            body_lines.extend(lines)
            body_lines.append("")

    while body_lines and not body_lines[-1]:
        body_lines.pop()

    summary = make_summary(body_lines, work.title)
    frontmatter = [
        "---",
        f"title: {yaml_string(work.title)}",
        f"year: {work.year}",
        f"category: {yaml_string(work.category)}",
        f"collection: {work.collection}",
        f"type: {yaml_string(work.work_type)}",
        f"summary: {yaml_string(summary)}",
        "tags:",
    ]
    frontmatter.extend([f"  - {yaml_string(tag)}" for tag in work.tags])
    frontmatter.extend(
        [
            f"featured: {'true' if work.featured else 'false'}",
            "draft: false",
            "---",
            "",
        ]
    )

    target = WORKS_DIR / f"{work.slug}.md"
    target.write_text("\n".join(frontmatter + body_lines) + "\n", encoding="utf-8")


def main() -> None:
    WORKS_DIR.mkdir(parents=True, exist_ok=True)
    converted: list[str] = []
    for work in IMPORTS:
        convert(work)
        converted.append(work.slug)
    print(f"Converted {len(converted)} Word documents:")
    for slug in converted:
        print(f"- {slug}.md")


if __name__ == "__main__":
    main()
