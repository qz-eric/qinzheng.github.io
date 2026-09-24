import { readFile, readdir, mkdir, copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const sourceRoot = process.argv[2];
if (!sourceRoot) throw new Error('Usage: node scripts/sync-course-notes.mjs <notes-directory>');
const courses = JSON.parse(await readFile(new URL('./course-notes.json', import.meta.url), 'utf8'));
const transfers = [];
const entries = [];
for (const course of courses) {
  const source = path.join(sourceRoot, course.source, '整理版笔记');
  const base = `/files/courses/atmos/${course.slug}/notes`;
  const files = await readdir(path.join(source, '分章节'));
  const expected = course.sections.map(([key]) => `${course.prefix}_${key}.pdf`);
  const actual = files.filter((file) => file.endsWith('.pdf'));
  if (actual.length !== expected.length || expected.some((file) => !actual.includes(file))) {
    throw new Error(`Chapter manifest does not match PDFs: ${course.source}`);
  }
  transfers.push([path.join(source, `${course.source}笔记.pdf`), `${base}/full.pdf`]);
  const sections = course.sections.map(([key, title, titleEn]) => {
    const filename = `${course.prefix}_${key}.pdf`;
    transfers.push([path.join(source, '分章节', filename), `${base}/${filename}`]);
    const chapter = (key === 'chapter0' && course.prefix === 'AP') ? null : /^chapter(\d+)$/.exec(key);
    const appendix = /^appendix([A-Z])$/.exec(key);
    const label = chapter ? `Chapter ${chapter[1]}` : appendix ? `Appendix ${appendix[1]}` : key === 'references' ? 'References' : 'Preface';
    const labelZh = chapter ? `第 ${chapter[1]} 章` : appendix ? `附录 ${appendix[1]}` : key === 'references' ? '参考资料' : '前言';
    return { label, labelZh, title, titleEn, href: `${base}/${filename}` };
  });
  entries.push({
    resource: {
      id: course.id, title: `${course.source}笔记`, course: course.source,
      category: course.level === '本科' ? '本科专业课程' : '研究生专业课程',
      level: course.level, type: 'PDF', year: 2026, status: 'Complete',
      description: course.description, fullText: { label: '完整版笔记', href: `${base}/full.pdf` },
      sections, tags: ['课程笔记', '章节与附录']
    },
    i18n: {
      title: `${course.nameEn} Notes`, course: course.nameEn,
      description: course.descriptionEn, fullTextLabel: 'Complete Notes', tags: ['Course Notes', 'Chapters and Appendices']
    }
  });
}
// Validate all sources before copying any files into the public archive.
for (const [source] of transfers) {
  const buffer = await readFile(source);
  if (buffer.subarray(0, 5).toString() !== '%PDF-') throw new Error(`Invalid PDF: ${source}`);
}
for (const [source, href] of transfers) {
  const destination = path.join(root, 'public', href);
  await mkdir(path.dirname(destination), { recursive: true });
  await copyFile(source, destination);
}
await writeFile(path.join(root, 'src/data/course-notes.json'), JSON.stringify(entries, null, 2) + '\n');
console.log(`Synced ${transfers.length} PDFs across ${entries.length} courses.`);
