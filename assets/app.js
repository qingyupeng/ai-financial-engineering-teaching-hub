const levelFilter = document.querySelector('#levelFilter');
const searchInput = document.querySelector('#searchInput');
const resetFilters = document.querySelector('#resetFilters');
const zoneResourceSections = document.querySelector('#zoneResourceSections');
const resultCount = document.querySelector('#resultCount');
const resourceCount = document.querySelector('#resourceCount');

let resources = [];
let curation = { featured_order: [], deprioritized: [], hidden_from_main_library: [] };

const BUILD_VERSION = '20260911-ai-cases';
const normalize = (value='') => String(value).toLowerCase().trim();
const gradeClass = score => score >= 85 ? 'A' : score >= 70 ? 'B' : 'C';

const coreZones = [
  {
    id: 'zone-courses',
    name: '顶尖高校课程',
    number: '01',
    description: '优先保留具有讲义、课件、代码、习题、考试、视频、syllabus或完整课程结构的高质量课程；内部按国内高校与海外高校分组。',
    sourceZones: ['顶尖高校课程']
  },
  {
    id: 'zone-books',
    name: '经典教材与专著',
    number: '02',
    description: '系统教材与经典专著，覆盖AI＋金融工程、AI＋金融、机器学习、量化投资、金融计算、概率建模、强化学习、AI＋经济学与因果推断；内部按中文与英文分组。',
    sourceZones: ['经典教材与专著']
  },
  {
    id: 'zone-methods',
    name: 'AI＋金融工程方法、工具与实验',
    number: '03',
    description: '精选金融LLM与智能体、金融机器学习与因果方法、量化交易与金融工程工具、计算金融与计算经济学实验；强调领域专用、可运行、可复现和高教学增量。',
    sourceZones: ['AI＋金融工程专题', '金融工程AI工具箱', 'Python / Jupyter实验库']
  },
  {
    id: 'zone-cases',
    name: '案例',
    number: '04',
    description: '只收录金融机构真实使用AI的高质量案例，覆盖投行与资本市场、资产管理与量化投资、财富管理以及市场监测与合规；优先采用机构一手公开材料。',
    sourceZones: ['AI金融行业案例']
  },
  {
    id: 'zone-teaching',
    name: 'AI赋能教学',
    number: '05',
    description: '围绕备课、知识解释、习题与案例、编程辅导、作业评价、金融工作流、教师科研工作流和教学反馈组织资源。',
    sourceZones: ['AI辅助教学方法']
  }
];

const zoneOverrides = new Map([
  ['Financial Services Resources', 'AI赋能教学'],
  ['ChatGPT for Financial Services Solution Kit', 'AI赋能教学']
]);

const methodGroups = [
  {
    title: '金融LLM与智能体',
    subtitle: '聚焦多智能体投研、自主交易、金融大模型与Agent工作流，优先保留具有完整代码、架构和可复现实验的项目。',
    titles: ['TradingAgents', 'AI Hedge Fund', 'AI-Trader', 'Vibe-Trading', 'FinGPT', 'FinRobot']
  },
  {
    title: '金融机器学习与因果方法',
    subtitle: '覆盖强化学习交易、金融机器学习、机器学习与计量经济学结合，以及因果机器学习。',
    titles: ['FinRL', 'Machine Learning for Trading', 'EconML', 'DoubleML']
  },
  {
    title: '量化交易与金融工程工具',
    subtitle: '保留成熟度高、社区活跃、适合课程实验与项目训练的交易、回测、定价、组合优化和风险管理工具。',
    titles: ['Qlib', 'QuantLib', 'PyPortfolioOpt', 'Riskfolio-Lib', 'QuantConnect LEAN', 'NautilusTrader', 'vectorbt', 'backtesting.py']
  },
  {
    title: '计算金融与计算经济学',
    subtitle: '面向优化、波动率建模、动态经济模型和异质性主体计算，强调可直接改造为Notebook实验。',
    titles: ['QuantEcon.py', 'HARK', 'CVXPY Tutorial', 'ARCH Volatility Processes']
  }
];

const caseGroups = [
  {
    title: '投行、资本市场与研究',
    subtitle: '关注生成式AI如何进入投行、研究、销售交易、市场业务、KYC、风险和销售赋能等核心金融流程。',
    titles: [
      '摩根士丹利 AskResearchGPT：服务投行、销售交易与研究的生成式AI助手',
      'JPMorgan Chase：LLM Suite 与 Prime Finance AI',
      'Goldman Sachs One Goldman Sachs 3.0：AI 重构投行与资管工作流',
      'Citi：Markets 交易确认自动化与 Wealth AI 助手'
    ]
  },
  {
    title: '资产管理与量化投资',
    subtitle: '聚焦AI在机构投研、Alpha发现、系统化投资、投资组合与风险分析中的真实应用。',
    titles: [
      '桥水基金 PAT：AI Pocket Analyst 投资研究助手',
      'Man Group AlphaGPT：Agentic AI 驱动量化研究',
      'BlackRock Aladdin Copilot：机构投资组合与风险分析的生成式AI',
      'Two Sigma：AI 与机器学习嵌入系统化投资全流程'
    ]
  },
  {
    title: '财富管理与客户洞察',
    subtitle: '关注AI如何增强财富顾问的客户洞察、会议准备与个性化服务，同时保留顾问的人类判断。',
    titles: ['UBS STAAT Insights：AI 赋能财富顾问客户洞察']
  },
  {
    title: '市场监测与合规',
    subtitle: '关注AI在市场异常检测、警报筛选、调查辅助和金融市场基础设施中的应用及治理边界。',
    titles: ['Nasdaq AI Market Surveillance：AI 辅助市场操纵监测与调查']
  }
];

const domesticCourseMarkers = [
  '北京大学',
  '清华大学',
  '中央财经大学',
  '湖南大学',
  '复旦大学',
  '东北财经大学',
  '对外经济贸易大学',
  '中山大学'
];

function coreZone(resource){
  const override = zoneOverrides.get(resource.title);
  if (override) return override;
  const group = coreZones.find(g => g.sourceZones.includes(resource.zone));
  return group ? group.name : resource.zone;
}

function isDomesticCourse(resource){
  if (coreZone(resource) !== '顶尖高校课程') return false;
  return domesticCourseMarkers.some(marker => String(resource.source || '').includes(marker));
}

function isChineseBook(resource){
  return coreZone(resource) === '经典教材与专著' && normalize(resource.language).includes('中文');
}

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

function resourceMatches(resource, q, level){
  const displayZone = coreZone(resource);
  const haystack = normalize([
    resource.title,
    resource.source,
    resource.zone,
    displayZone,
    resource.finance_module,
    resource.ai_topic,
    resource.level,
    resource.language,
    ...(resource.tags || [])
  ].join(' '));
  return (!q || haystack.includes(q)) && (!level || resource.level === level);
}

function renderCard(resource){
  const grade = gradeClass(resource.score);
  const tags = [resource.finance_module, resource.ai_topic, resource.level]
    .filter(Boolean)
    .map(x => `<span class="chip">${x}</span>`)
    .join('');
  const badge = curation.featured_order.includes(resource.title)
    ? '<span class="badge">重点教学资源</span>'
    : `<span class="badge">${coreZone(resource)}</span>`;

  return `<article class="resource-card">
    <div class="card-top">${badge}<span class="grade ${grade}">${grade}级 · ${resource.score}</span></div>
    <h3>${resource.title}</h3>
    <p class="source">${resource.source}</p>
    <div class="meta">${tags}</div>
    <p><span class="card-section-label">教学价值</span>${resource.teaching_value}</p>
    <p><span class="card-section-label">建议用途</span>${resource.suggested_use}</p>
    <div class="card-footer">
      <a href="${resource.url}" target="_blank" rel="noopener noreferrer">访问官方资源 ↗</a>
      <span class="verified">核验 ${resource.last_verified}</span>
    </div>
  </article>`;
}

function renderSubgroup(title, subtitle, items){
  if (!items.length) return '';
  return `<div class="course-subgroup">
    <div class="course-subgroup-head">
      <div><h4>${title}</h4><p>${subtitle}</p></div>
      <span>${items.length} 项</span>
    </div>
    <div class="resource-grid">${items.map(renderCard).join('')}</div>
  </div>`;
}

function renderCourseGroups(items){
  const domestic = items.filter(isDomesticCourse);
  const overseas = items.filter(r => !isDomesticCourse(r));
  return [
    renderSubgroup('国内高校', '985高校与排名靠前财经类院校的AI＋金融、金融工程、量化投资、智能体和机器学习课程。', domestic),
    renderSubgroup('海外高校', '国际顶尖高校的AI＋金融、金融工程、机器学习、因果推断和AI＋经济学课程。', overseas)
  ].join('');
}

function renderBookGroups(items){
  const chinese = items.filter(isChineseBook);
  const english = items.filter(r => !isChineseBook(r));
  return [
    renderSubgroup('中文教材与专著', '国内原创教材与高质量中译本，优先选择具有代码、案例、课件、视频或明确教学体系的AI＋金融、金融工程和量化投资书目。', chinese),
    renderSubgroup('英文教材与专著', '国际经典教材与前沿专著，覆盖金融机器学习、概率机器学习、深度学习、强化学习、AI经济学与因果推断。', english)
  ].join('');
}

function renderMethodGroups(items){
  return methodGroups.map(group => {
    const titleSet = new Set(group.titles);
    const groupItems = items.filter(item => titleSet.has(item.title));
    return renderSubgroup(group.title, group.subtitle, groupItems);
  }).join('');
}

function renderCaseGroups(items){
  return caseGroups.map(group => {
    const titleSet = new Set(group.titles);
    const groupItems = items.filter(item => titleSet.has(item.title));
    return renderSubgroup(group.title, group.subtitle, groupItems);
  }).join('');
}

function updateZoneCounts(){
  document.querySelectorAll('[data-zone-count]').forEach(node => {
    const zoneName = node.getAttribute('data-zone-count');
    const count = resources.filter(r => coreZone(r) === zoneName).length;
    node.textContent = `${count} 项资源`;
  });
}

function render(){
  const q = normalize(searchInput.value);
  const level = levelFilter.value;
  const filtered = resources.filter(r => resourceMatches(r, q, level));
  const filtering = Boolean(q || level);

  resultCount.textContent = filtering
    ? `筛选结果：${filtered.length} / ${resources.length} 项资源`
    : `按 5 个专区分组展示，共 ${resources.length} 项精选教学资源`;

  const sections = coreZones.map(group => {
    const allInZone = resources.filter(r => coreZone(r) === group.name);
    const items = allInZone.filter(r => resourceMatches(r, q, level));

    if (filtering && !items.length) return '';

    const countLabel = filtering
      ? `${items.length} / ${allInZone.length}`
      : `${allInZone.length}`;

    let content = '<div class="empty">该专区暂无匹配资源。</div>';
    if (items.length) {
      if (group.name === '顶尖高校课程') {
        content = renderCourseGroups(items);
      } else if (group.name === '经典教材与专著') {
        content = renderBookGroups(items);
      } else if (group.name === 'AI＋金融工程方法、工具与实验') {
        content = renderMethodGroups(items);
      } else if (group.name === '案例') {
        content = renderCaseGroups(items);
      } else {
        content = `<div class="resource-grid">${items.map(renderCard).join('')}</div>`;
      }
    }

    return `<section id="${group.id}" class="zone-resource-block" aria-labelledby="${group.id}-title">
      <div class="zone-resource-head">
        <div class="zone-resource-heading">
          <span class="zone-number">${group.number}</span>
          <div>
            <h3 id="${group.id}-title">${group.name}</h3>
            <p>${group.description}</p>
          </div>
        </div>
        <div class="zone-resource-count"><strong>${countLabel}</strong><span>项资源</span></div>
      </div>
      ${content}
      <div class="zone-footer-nav"><a href="#zones-title">↑ 返回资源专区导航</a></div>
    </section>`;
  }).join('');

  zoneResourceSections.innerHTML = sections || '<div class="empty">没有匹配的资源，请尝试调整关键词或难度。</div>';
}

function updateRubric(){
  const rubricGrid = document.querySelector('.rubric-grid');
  const gradeNote = document.querySelector('.grade-note');
  if (rubricGrid) rubricGrid.innerHTML = `
    <div><strong>30</strong><span>实质教学资源丰富度</span></div>
    <div><strong>20</strong><span>金融工程相关度</span></div>
    <div><strong>20</strong><span>可直接使用/改造程度</span></div>
    <div><strong>10</strong><span>来源权威性</span></div>
    <div><strong>10</strong><span>AI/计算融合程度</span></div>
    <div><strong>5</strong><span>获取便利性</span></div>
    <div><strong>5</strong><span>时效性</span></div>`;
  if (gradeNote) gradeNote.innerHTML = '<b>排序原则：</b>系统教材、完整课程、领域专用AI项目、成熟金融工程工具和可复现实验优先；“案例”只保留有明确金融机构、业务场景、AI使用方式和一手证据的真实案例；通用投教、市场数据和泛行业材料不进入案例专区。';
}

function activateZoneCards(){
  document.querySelectorAll('.zone-nav-card').forEach(card => {
    const link = card.querySelector('h3 a');
    if (!link) return;
    card.setAttribute('role','link');
    card.setAttribute('tabindex','0');
    card.setAttribute('aria-label',`查看${link.textContent.trim()}`);
    card.addEventListener('click', event => {
      if (event.target.closest('a')) return;
      document.querySelector(link.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
    });
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        document.querySelector(link.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
      }
    });
  });
}

async function loadResources(){
  try {
    const urls = [
      'data/resources.json',
      'data/resources-extra-1.tsv',
      'data/resources-extra-2.tsv',
      'data/resources-extra-3.tsv',
      'data/resources-books.tsv',
      'data/resources-books-extra.tsv',
      'data/resources-books-cn.tsv',
      'data/resources-courses-extra.tsv',
      'data/resources-curated-additions.tsv',
      'data/resources-github-quality.tsv',
      'data/resources-ai-industry-cases.tsv',
      'data/curation.json'
    ];
    const responses = await Promise.all(
      urls.map(url => fetch(`${url}?v=${BUILD_VERSION}`, { cache: 'no-store' }))
    );
    if (!responses.every(r => r.ok)) throw new Error('resource fetch failed');

    const [base, text1, text2, text3, booksText, booksExtraText, booksCnText, coursesExtraText, curatedAdditionsText, githubQualityText, aiCasesText, curationData] = await Promise.all([
      responses[0].json(),
      responses[1].text(),
      responses[2].text(),
      responses[3].text(),
      responses[4].text(),
      responses[5].text(),
      responses[6].text(),
      responses[7].text(),
      responses[8].text(),
      responses[9].text(),
      responses[10].text(),
      responses[11].json()
    ]);

    curation = curationData;
    const candidateResources = [
      ...(base.resources || []),
      ...parseTSV(text1),
      ...parseTSV(text2),
      ...parseTSV(text3),
      ...parseTSV(booksText),
      ...parseTSV(booksExtraText),
      ...parseTSV(booksCnText),
      ...parseTSV(coursesExtraText),
      ...parseTSV(curatedAdditionsText),
      ...parseTSV(githubQualityText),
      ...parseTSV(aiCasesText)
    ];

    resources = applyCuration(candidateResources);
    resourceCount.textContent = resources.length;
    updateZoneCounts();
    render();
  } catch (error) {
    console.error(error);
    zoneResourceSections.innerHTML = '<div class="empty">资源目录加载失败，请稍后刷新页面。</div>';
  }
}

[searchInput, levelFilter].forEach(el => el.addEventListener('input', render));
resetFilters.addEventListener('click', () => {
  searchInput.value = '';
  levelFilter.value = '';
  render();
});

activateZoneCards();
updateRubric();
loadResources();