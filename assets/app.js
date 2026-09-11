const zoneFilter = document.querySelector('#zoneFilter');
const levelFilter = document.querySelector('#levelFilter');
const searchInput = document.querySelector('#searchInput');
const resetFilters = document.querySelector('#resetFilters');
const resourceGrid = document.querySelector('#resourceGrid');
const resultCount = document.querySelector('#resultCount');
const resourceCount = document.querySelector('#resourceCount');

let resources = [];
let curation = { featured_order: [], deprioritized: [], hidden_from_main_library: [] };

const normalize = (value='') => String(value).toLowerCase().trim();
const gradeClass = score => score >= 85 ? 'A' : score >= 70 ? 'B' : 'C';

function parseTSV(text){
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  const headers = lines[0].split('\t');
  return lines.slice(1).filter(Boolean).map(line => {
    const values = line.split('\t');
    const item = {};
    headers.forEach((h,i) => item[h] = values[i] ?? '');
    item.score = Number(item.score || 0);
    item.tags = String(item.tags || '').split(';').map(x=>x.trim()).filter(Boolean);
    return item;
  });
}

function curationRank(resource){
  const featuredIndex = curation.featured_order.indexOf(resource.title);
  if (featuredIndex >= 0) return featuredIndex;
  if (curation.deprioritized.includes(resource.title)) return 10000 + (100 - Number(resource.score || 0));
  return 1000 + (100 - Number(resource.score || 0));
}

function applyCuration(items){
  const hidden = new Set(curation.hidden_from_main_library || []);
  return items
    .filter(r => !hidden.has(r.title))
    .sort((a,b) => curationRank(a) - curationRank(b) || a.title.localeCompare(b.title, 'zh-CN'));
}

function render(){
  const q = normalize(searchInput.value);
  const zone = zoneFilter.value;
  const level = levelFilter.value;
  const filtered = resources.filter(r => {
    const haystack = normalize([r.title,r.source,r.zone,r.finance_module,r.ai_topic,r.level,...(r.tags||[])].join(' '));
    return (!q || haystack.includes(q)) && (!zone || r.zone === zone) && (!level || r.level === level);
  });

  resultCount.textContent = `显示 ${filtered.length} / ${resources.length} 项精选教学资源`;
  resourceGrid.innerHTML = filtered.length ? filtered.map(r => {
    const grade = gradeClass(r.score);
    const tags = [r.finance_module,r.ai_topic,r.level].filter(Boolean).map(x=>`<span class="chip">${x}</span>`).join('');
    const featured = curation.featured_order.includes(r.title)
      ? '<span class="badge">重点教学资源</span>'
      : `<span class="badge">${r.zone}</span>`;
    return `<article class="resource-card">
      <div class="card-top">${featured}<span class="grade ${grade}">${grade}级 · ${r.score}</span></div>
      <h3>${r.title}</h3>
      <p class="source">${r.source}</p>
      <div class="meta">${tags}</div>
      <p><span class="card-section-label">教学价值</span>${r.teaching_value}</p>
      <p><span class="card-section-label">建议用途</span>${r.suggested_use}</p>
      <div class="card-footer"><a href="${r.url}" target="_blank" rel="noopener noreferrer">访问官方资源 ↗</a><span class="verified">核验 ${r.last_verified}</span></div>
    </article>`;
  }).join('') : '<div class="empty">没有匹配的资源，请尝试调整关键词或筛选条件。</div>';
}

async function loadResources(){
  try {
    const [baseResponse, batch1, batch2, batch3, curationResponse] = await Promise.all([
      fetch('data/resources.json'),
      fetch('data/resources-extra-1.tsv'),
      fetch('data/resources-extra-2.tsv'),
      fetch('data/resources-extra-3.tsv'),
      fetch('data/curation.json')
    ]);
    if (![baseResponse,batch1,batch2,batch3,curationResponse].every(r=>r.ok)) throw new Error('resource fetch failed');
    const [base, text1, text2, text3, curationData] = await Promise.all([
      baseResponse.json(), batch1.text(), batch2.text(), batch3.text(), curationResponse.json()
    ]);

    curation = curationData;
    const candidateResources = [
      ...(base.resources || []),
      ...parseTSV(text1),
      ...parseTSV(text2),
      ...parseTSV(text3)
    ];
    resources = applyCuration(candidateResources);

    resourceCount.textContent = resources.length;
    zoneFilter.querySelectorAll('option:not(:first-child)').forEach(o=>o.remove());
    [...new Set(resources.map(r=>r.zone))].sort().forEach(zone => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = zone;
      zoneFilter.appendChild(option);
    });
    render();
  } catch (error) {
    console.error(error);
    resourceGrid.innerHTML = '<div class="empty">资源目录加载失败，请稍后刷新页面。</div>';
  }
}

[searchInput,zoneFilter,levelFilter].forEach(el => el.addEventListener('input',render));
resetFilters.addEventListener('click',()=>{ searchInput.value=''; zoneFilter.value=''; levelFilter.value=''; render(); });

loadResources();
