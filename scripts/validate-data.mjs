import fs from 'node:fs';

const resourceFiles = [
  'data/resources-extra-1.tsv',
  'data/resources-extra-2.tsv',
  'data/resources-extra-3.tsv',
  'data/resources-books.tsv',
  'data/resources-books-extra.tsv',
  'data/resources-books-cn.tsv',
  'data/resources-courses-extra.tsv',
  'data/resources-curated-additions.tsv',
  'data/resources-github-quality.tsv',
  'data/resources-ai-industry-cases.tsv'
];

const requiredFields = [
  'title', 'source', 'zone', 'finance_module', 'ai_topic', 'level', 'language',
  'score', 'teaching_value', 'suggested_use', 'url', 'last_verified'
];
const validLevels = new Set(['入门', '进阶', '高级']);
const errors = [];
const warnings = [];

function parseTsv(path) {
  const text = fs.readFileSync(path, 'utf8').replace(/^\uFEFF/, '').trim();
  if (!text) return [];
  const lines = text.split(/\r?\n/);
  const headers = lines[0].split('\t');
  return lines.slice(1).filter(Boolean).map((line, rowIndex) => {
    const values = line.split('\t');
    if (values.length !== headers.length) {
      errors.push(`${path}:${rowIndex + 2} 字段数 ${values.length}，应为 ${headers.length}`);
    }
    const item = {};
    headers.forEach((header, index) => item[header] = values[index] ?? '');
    item.__file = path;
    item.__row = rowIndex + 2;
    return item;
  });
}

function loadResources() {
  const base = JSON.parse(fs.readFileSync('data/resources.json', 'utf8'));
  const baseItems = (base.resources || []).map((item, index) => ({
    ...item,
    tags: Array.isArray(item.tags) ? item.tags.join(';') : (item.tags || ''),
    __file: 'data/resources.json',
    __row: index + 1
  }));
  return [...baseItems, ...resourceFiles.flatMap(parseTsv)];
}

function validHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

const resources = loadResources();
const curation = JSON.parse(fs.readFileSync('data/curation.json', 'utf8'));
const titleMap = new Map();
const urlMap = new Map();

for (const resource of resources) {
  const where = `${resource.__file}:${resource.__row}`;
  for (const field of requiredFields) {
    if (resource[field] === undefined || String(resource[field]).trim() === '') {
      errors.push(`${where} 缺少必填字段 ${field}`);
    }
  }

  const score = Number(resource.score);
  if (!Number.isFinite(score) || score < 0 || score > 100) errors.push(`${where} score无效：${resource.score}`);
  if (!validLevels.has(String(resource.level).trim())) errors.push(`${where} level无效：${resource.level}`);
  if (!validHttpUrl(String(resource.url || '').trim())) errors.push(`${where} URL无效：${resource.url}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(resource.last_verified || ''))) errors.push(`${where} last_verified格式无效：${resource.last_verified}`);

  const title = String(resource.title || '').trim();
  if (titleMap.has(title)) errors.push(`重复标题：${title}（${titleMap.get(title)}；${where}）`);
  else titleMap.set(title, where);

  const url = String(resource.url || '').trim().replace(/\/$/, '');
  if (urlMap.has(url) && url) warnings.push(`重复URL：${url}（${urlMap.get(url)}；${where}）`);
  else if (url) urlMap.set(url, where);
}

const featured = curation.featured_order || [];
const hidden = curation.hidden_from_main_library || [];
const featuredSet = new Set(featured);
const hiddenSet = new Set(hidden);

if (featuredSet.size !== featured.length) errors.push('curation.featured_order 存在重复标题');
if (hiddenSet.size !== hidden.length) errors.push('curation.hidden_from_main_library 存在重复标题');

for (const title of featured) {
  if (!titleMap.has(title)) errors.push(`featured_order引用不存在的资源：${title}`);
  if (hiddenSet.has(title)) errors.push(`资源同时出现在featured与hidden：${title}`);
}
for (const title of hidden) {
  if (!titleMap.has(title)) errors.push(`hidden_from_main_library引用不存在的资源：${title}`);
}
for (const title of titleMap.keys()) {
  if (!featuredSet.has(title) && !hiddenSet.has(title)) errors.push(`资源既未精选也未隐藏：${title}`);
}

const expectedCovered = featuredSet.size + hiddenSet.size;
if (expectedCovered !== resources.length) {
  errors.push(`候选资源覆盖数异常：候选 ${resources.length}，featured＋hidden ${expectedCovered}`);
}

console.log(`候选资源：${resources.length}`);
console.log(`前台精选：${featured.length}`);
console.log(`后台候选：${hidden.length}`);
if (warnings.length) {
  console.warn('\nWarnings:');
  warnings.forEach(message => console.warn(`- ${message}`));
}
if (errors.length) {
  console.error('\nValidation errors:');
  errors.forEach(message => console.error(`- ${message}`));
  process.exit(1);
}
console.log('\n资源数据校验通过。');
