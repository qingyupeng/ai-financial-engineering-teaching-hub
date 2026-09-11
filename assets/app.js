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

const bookSpotlightOrder = [
  'Machine Learning in Finance: From Theory to Practice',
  'Machine Learning for Algorithmic Trading, 2nd Edition',
  'Advances in Financial Machine Learning',
  'Artificial Intelligence in Finance',
  'The Economics of Artificial Intelligence: An Agenda',
  'Causal Inference and Machine Learning: In Economics, Social, and Health Sciences'
];

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

function updateRubric(){
  const rubricGrid = document.querySelector('.rubric-grid');
  const gradeNote = document.querySelector('.grade-note');
  if (rubricGrid) {
    rubricGrid.innerHTML = `
      <div><strong>30</strong><span>实质教学资源丰富度</span></div>
      <div><strong>20</strong><span>金融工程相关度</span></div>
      <div><strong>20</strong><span>可直接使用/改造程度</span></div>
      <div><strong>10</strong><span>来源权威性</span></div>
      <div><strong>10</strong><span>AI/计算融合程度</span></div>
      <div><strong>5</strong><span>获取便利性</span></div>
      <div><strong>5</strong><span>时效性</span></div>`;
  }
  if (gradeNote) {
    gradeNote.innerHTML = '<b>排序原则：</b>讲义、代码、习题、视频、数据、Notebook、案例和系统教材优先；只有课程名称或培养方案的页面不进入主资源库前列。';
  }
}

function injectBookshelfStyles(){
  if (document.querySelector('#bookshelfStyles')) return;
  const style = document.createElement('style');
  style.id = 'bookshelfStyles';
  style.textContent = `
    .zones-grid article{cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}
    .zones-grid article:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(18,58,99,.10);border-color:#b9cad9}
    .bookshelf-section{background:#fff7e8;border-top:1px solid #ead8b4;border-bottom:1px solid #ead8b4}
    .bookshelf-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .book-card{background:#fff;border:1px solid #e7d7b8;border-radius:18px;padding:22px;display:flex;flex-direction:column;min-height:300px}
    .book-kicker{font-size:.75rem;font-weight:900;color:#9a6713;letter-spacing:.06em;margin-bottom:8px}
    .book-card h3{margin:0 0 8px;font-size:1.08rem;line-height:1.45}
    .book-card .source{margin-bottom:12px}
    .book-card p{color:var(--muted)}
    .book-card a{margin-top:auto;font-weight:800;color:var(--primary-2);text-decoration:none}
    .bookshelf-actions{display:flex;gap:12px;align-items:center}
    @media(max-width:980px){.bookshelf-grid{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:640px){.bookshelf-grid{grid-template-columns:1fr}.bookshelf-actions{display:block}.bookshelf-actions .btn{margin-top:10px}}
  `;
  document.head.appendChild(style);
}

function filterToZone(zone){
  zoneFilter.value = zone;
  searchInput.value = '';
  levelFilter.value = '';
  render();
  document.querySelector('#resources')?.scrollIntoView({behavior:'smooth'});
}

function activateZoneCards(){
  document.querySelectorAll('.zones-grid article').forEach(card => {
    const zone = card.querySelector('h3')?.textContent?.trim();
    if (!zone || zone === '教师学习路径') return;
    card.setAttribute('role','button');
    card.setAttribute('tabindex','0');
    card.setAttribute('aria-label',`查看${zone}`);
    const openZone = () => filterToZone(zone);
    card.addEventListener('click',openZone);
    card.addEventListener('keydown',e=>{ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openZone(); } });
  });
}

function renderBookshelf(){
  const books = resources.filter(r => r.zone === '经典教材与专著');
  if (!books.length) return;

  let section = document.querySelector('#bookshelf');
  if (!section) {
    section = document.createElement('section');
    section.id = 'bookshelf';
    section.className = 'bookshelf-section';
    const resourceSection = document.querySelector('#resources');
    resourceSection?.parentNode?.insertBefore(section,resourceSection);
  }

  const spotlight = bookSpotlightOrder
    .map(title => books.find(b => b.title === title))
    .filter(Boolean);

  section.innerHTML = `
    <div class="container section">
      <div class="section-head">
        <div>
          <span class="eyebrow">核心书架</span>
          <h2>经典教材与专著</h2>
        </div>
        <div class="bookshelf-actions">
          <p>系统覆盖AI＋金融工程、AI＋金融，以及机器学习＋经济学与因果推断。当前收录 <strong>${books.length}</strong> 本/套。</p>
          <button id="showAllBooks" class="btn secondary" type="button">查看全部${books.length}本</button>
        </div>
      </div>
      <div class="bookshelf-grid">
        ${spotlight.map((b,i)=>`<article class="book-card">
          <span class="book-kicker">推荐 ${String(i+1).padStart(2,'0')} · ${b.ai_topic}</span>
          <h3>${b.title}</h3>
          <p class="source">${b.source}</p>
          <p><span class="card-section-label">为什么值得读</span>${b.teaching_value}</p>
          <a href="${b.url}" target="_blank" rel="noopener noreferrer">查看教材/配套资源 ↗</a>
        </article>`).join('')}
      </div>
    </div>`;

  document.querySelector('#showAllBooks')?.addEventListener('click',()=>filterToZone('经典教材与专著'));

  const nav = document.querySelector('.nav');
  if (nav && !nav.querySelector('a[href="#bookshelf"]')) {
    const link = document.createElement('a');
    link.href = '#bookshelf';
    link.textContent = '经典教材';
    nav.insertBefore(link,nav.firstChild);
  }
}

async function loadResources(){
  try {
    const [baseResponse, batch1, batch2, batch3, booksResponse, curationResponse] = await Promise.all([
      fetch('data/resources.json'),
      fetch('data/resources-extra-1.tsv'),
      fetch('data/resources-extra-2.tsv'),
      fetch('data/resources-extra-3.tsv'),
      fetch('data/resources-books.tsv'),
      fetch('data/curation.json')
    ]);
    if (![baseResponse,batch1,batch2,batch3,booksResponse,curationResponse].every(r=>r.ok)) throw new Error('resource fetch failed');
    const [base, text1, text2, text3, booksText, curationData] = await Promise.all([
      baseResponse.json(), batch1.text(), batch2.text(), batch3.text(), booksResponse.text(), curationResponse.json()
    ]);

    curation = curationData;
    const candidateResources = [
      ...(base.resources || []),
      ...parseTSV(text1),
      ...parseTSV(text2),
      ...parseTSV(text3),
      ...parseTSV(booksText)
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
    renderBookshelf();
  } catch (error) {
    console.error(error);
    resourceGrid.innerHTML = '<div class="empty">资源目录加载失败，请稍后刷新页面。</div>';
  }
}

[searchInput,zoneFilter,levelFilter].forEach(el => el.addEventListener('input',render));
resetFilters.addEventListener('click',()=>{ searchInput.value=''; zoneFilter.value=''; levelFilter.value=''; render(); });

injectBookshelfStyles();
activateZoneCards();
updateRubric();
loadResources();
