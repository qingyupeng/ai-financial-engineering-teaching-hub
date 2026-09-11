import fs from 'node:fs';

const tsvFiles = [
  'data/resources-extra-1.tsv', 'data/resources-extra-2.tsv', 'data/resources-extra-3.tsv',
  'data/resources-books.tsv', 'data/resources-books-extra.tsv', 'data/resources-books-cn.tsv',
  'data/resources-courses-extra.tsv', 'data/resources-curated-additions.tsv',
  'data/resources-github-quality.tsv', 'data/resources-ai-industry-cases.tsv'
];

function parseTsv(path) {
  const text = fs.readFileSync(path, 'utf8').replace(/^\uFEFF/, '').trim();
  if (!text) return [];
  const lines = text.split(/\r?\n/);
  const headers = lines[0].split('\t');
  return lines.slice(1).filter(Boolean).map(line => {
    const values = line.split('\t');
    const item = {};
    headers.forEach((header, index) => item[header] = values[index] ?? '');
    return item;
  });
}

const base = JSON.parse(fs.readFileSync('data/resources.json', 'utf8')).resources || [];
const resources = [...base, ...tsvFiles.flatMap(parseTsv)];
const byTitle = new Map(resources.map(item => [item.title, item]));
const curation = JSON.parse(fs.readFileSync('data/curation.json', 'utf8'));
const selected = (curation.featured_order || []).map(title => byTitle.get(title)).filter(Boolean);

const ok = [];
const restricted = [];
const broken = [];
const uncertain = [];
const restrictedCodes = new Set([401, 403, 405, 406, 408, 425, 429]);
const brokenCodes = new Set([404, 410, 451]);

async function check(item) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(item.url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'Mozilla/5.0 resource-link-audit/1.1',
        'accept': 'text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8',
        'range': 'bytes=0-1023'
      }
    });
    const result = { title: item.title, url: item.url, status: response.status, finalUrl: response.url };
    try { await response.body?.cancel(); } catch {}
    if (response.status >= 200 && response.status < 400) ok.push(result);
    else if (restrictedCodes.has(response.status)) restricted.push(result);
    else if (brokenCodes.has(response.status)) broken.push(result);
    else uncertain.push(result);
  } catch (error) {
    uncertain.push({ title: item.title, url: item.url, status: 'NETWORK', error: error.name || String(error) });
  } finally {
    clearTimeout(timer);
  }
}

const concurrency = 12;
for (let i = 0; i < selected.length; i += concurrency) {
  await Promise.all(selected.slice(i, i + concurrency).map(check));
}

console.log(`Checked: ${selected.length}`);
console.log(`OK: ${ok.length}`);
console.log(`Restricted/anti-bot: ${restricted.length}`);
console.log(`Broken (404/410/451): ${broken.length}`);
console.log(`Uncertain/network/other: ${uncertain.length}`);

function printGroup(label, items) {
  if (!items.length) return;
  console.log(`\n${label}`);
  for (const item of items) console.log(`- [${item.status}] ${item.title} :: ${item.url}${item.error ? ` :: ${item.error}` : ''}`);
}

printGroup('RESTRICTED', restricted);
printGroup('BROKEN', broken);
printGroup('UNCERTAIN', uncertain);

if (broken.length) process.exitCode = 2;
