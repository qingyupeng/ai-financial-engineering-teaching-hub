const zoneFilter = document.querySelector('#zoneFilter');
const levelFilter = document.querySelector('#levelFilter');
const searchInput = document.querySelector('#searchInput');
const resetFilters = document.querySelector('#resetFilters');
const resourceGrid = document.querySelector('#resourceGrid');
const resultCount = document.querySelector('#resultCount');
const resourceCount = document.querySelector('#resourceCount');
let resources = [];

const normalize = (value='') => String(value).toLowerCase().trim();

function gradeClass(score){ return score >= 85 ? 'A' : score >= 70 ? 'B' : 'C'; }

function render(){
  const q = normalize(searchInput.value);
  const zone = zoneFilter.value;
  const level = levelFilter.value;
  const filtered = resources.filter(r => {
    const haystack = normalize([r.title,r.source,r.zone,r.finance_module,r.ai_topic,r.level,...(r.tags||[])].join(' '));
    return (!q || haystack.includes(q)) && (!zone || r.zone === zone) && (!level || r.level === level);
  });
  resultCount.textContent = `显示 ${filtered.length} / ${resources.length} 项资源`;
  resourceGrid.innerHTML = filtered.length ? filtered.map(r => {
    const grade = gradeClass(r.score);
    const tags = [r.finance_module,r.ai_topic,r.level].filter(Boolean).map(x=>`<span class="chip">${x}</span>`).join('');
    return `<article class="resource-card">
      <div class="card-top"><span class="badge">${r.zone}</span><span class="grade ${grade}">${grade}级 · ${r.score}</span></div>
      <h3>${r.title}</h3>
      <p class="source">${r.source}</p>
      <div class="meta">${tags}</div>
      <p><span class="card-section-label">教学价值</span>${r.teaching_value}</p>
      <p><span class="card-section-label">建议用途</span>${r.suggested_use}</p>
      <div class="card-footer"><a href="${r.url}" target="_blank" rel="noopener noreferrer">访问官方资源 ↗</a><span class="verified">核验 ${r.last_verified}</span></div>
    </article>`;
  }).join('') : '<div class="empty">没有匹配的资源，请尝试调整关键词或筛选条件。</div>';
}

fetch('data/resources.json')
  .then(r => r.json())
  .then(data => {
    resources = data.resources || [];
    resourceCount.textContent = resources.length;
    [...new Set(resources.map(r=>r.zone))].sort().forEach(zone => {
      const option = document.createElement('option');
      option.value = zone; option.textContent = zone; zoneFilter.appendChild(option);
    });
    render();
  })
  .catch(() => { resourceGrid.innerHTML = '<div class="empty">资源目录加载失败，请稍后刷新页面。</div>'; });

[searchInput,zoneFilter,levelFilter].forEach(el => el.addEventListener('input',render));
resetFilters.addEventListener('click',()=>{ searchInput.value=''; zoneFilter.value=''; levelFilter.value=''; render(); });
