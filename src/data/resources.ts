import courseNotes from './course-notes.json';
import archivedResources from './archived-resources.json';

export type ResourceCategory = '数学基础' | '本科专业课程' | '研究生专业课程' | '助教课程' | 'Book';
export type ResourceType = 'PDF' | 'LaTeX' | 'PPT' | 'Code' | 'Notes' | 'Book' | 'Homework' | 'Lecture';
export type ResourceStatus = 'Complete' | 'Todo';

export interface ResourceLink { label: string; href: string; }
export interface ResourceSection {
  label: string;
  labelZh?: string;
  title: string;
  titleEn?: string;
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
export interface ResourceI18n {
  title: string;
  course: string;
  description: string;
  fullTextLabel?: string;
  tags: string[];
}
export const resourceCategoryLabelsEn: Record<ResourceCategory, string> = {
  数学基础: 'Mathematics',
  本科专业课程: 'Undergraduate Courses',
  研究生专业课程: 'Graduate Courses',
  助教课程: 'Teaching Assistant',
  Book: 'Books'
};
export const resourceCategorySlugs: Record<ResourceCategory, string> = {
  数学基础: 'mathematics',
  本科专业课程: 'undergraduate-courses',
  研究生专业课程: 'graduate-courses',
  助教课程: 'teaching-assistant',
  Book: 'books'
};
export const resourceLevelLabelsEn: Record<Resource['level'], string> = {
  本科: 'Undergraduate', 研究生: 'Graduate', 通用: 'General'
};
export const resourceStatusLabels = {
  Complete: { zh: '更新完成', en: 'Complete' },
  Todo: { zh: '待整理', en: 'To Organize' }
} satisfies Record<ResourceStatus, { zh: string; en: string }>;

const entries = [...courseNotes, ...archivedResources];
export const resources = entries.map((entry) => entry.resource) as Resource[];
export const resourceI18n: Record<string, ResourceI18n> = Object.fromEntries(
  entries.map((entry) => [entry.resource.id, entry.i18n])
);
export const resourceCategories = (
  ['本科专业课程', '研究生专业课程', '数学基础', '助教课程', 'Book'] as ResourceCategory[]
).filter((category) => resources.some((resource) => resource.category === category));
