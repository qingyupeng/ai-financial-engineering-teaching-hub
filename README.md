# AI＋金融工程教师开放资源中心

面向《金融工程》本科教学教师的开放资源共享平台。平台不追求资源数量，而强调**教师能否真正拿来备课、自学、做实验、设计作业、开发案例和改造科研工作流**。

## 当前建设进度

平台目前维护 **179项候选资源**，经人工质量复核后形成 **96项前台精选教学资源**：

- **96项进入前台精选教学资源库**；
- **83项保留在后台候选/对标库**，包括培养方案、项目介绍、通用文档、重复Quick Start、组织导航页、原交易所投教/市场数据资源，以及教学增量不足的AI功能页；
- **顶尖高校课程：24项**，其中国内高校7项、海外高校17项；
- **经典教材与专著：34项**，其中中文10项、英文24项；
- **AI＋金融工程方法、工具与实验：22项**；
- **案例：10项**，只保留金融机构真实使用AI的高质量案例；
- **AI赋能教学：6项**，只保留体系化、可复用、能直接服务教师教学或科研能力建设的资源。

完整候选数据位于 `data/`，排序与隐藏规则见 `data/curation.json`。

## 五个核心资源专区

### 1. 顶尖高校课程（24项）

优先收录具有讲义、课件、代码、习题、考试、视频、syllabus、虚拟实验或完整课程结构的高质量课程。前台分为国内高校7项与海外高校17项。

国内代表资源包括：北京大学“机器学习与资产定价”、中山大学“经济金融智能体设计”、清华大学“Artificial Intelligence and Quantitative Finance”、中央财经大学“机器学习与智能金融”、湖南大学机器学习资产定价虚拟仿真实验、复旦大学“Artificial Intelligence in FinTech”、对外经济贸易大学量化投资与金融工程实验资源。

海外资源覆盖 Stanford、MIT、Wharton、NYU Tandon、Princeton ORFE、EPFL、ETH Zürich、Chicago、Toronto、Yale，以及 Zhigang Feng 的 **Quantitative Macroeconomics with AI and Machine Learning**。

### 2. 经典教材与专著（34项）

前台分为：

- 中文教材与专著：10项
- 英文教材与专著：24项

覆盖金融机器学习、AI金融、量化投资、金融计算、概率机器学习、深度学习、强化学习、AI经济学与因果推断。完整书目见 [`RESOURCE_DIRECTORY.md`](RESOURCE_DIRECTORY.md)。

### 3. AI＋金融工程方法、工具与实验（22项）

本专区坚持“少而精”，内部划分为4组：

- **金融LLM与智能体（6项）**：TradingAgents、AI Hedge Fund、AI-Trader、Vibe-Trading、FinGPT、FinRobot
- **金融机器学习与因果方法（4项）**：FinRL、Machine Learning for Trading、EconML、DoubleML
- **量化交易与金融工程工具（8项）**：Qlib、QuantLib、PyPortfolioOpt、Riskfolio-Lib、QuantConnect LEAN、NautilusTrader、vectorbt、backtesting.py
- **计算金融与计算经济学（4项）**：QuantEcon.py、HARK、CVXPY Tutorial、ARCH Volatility Processes

通用基础文档、重复Quick Start、组织导航页以及教学增量有限的条目保留在后台候选库，不进入前台。

### 4. 案例（10项）

只收录**金融业真实使用AI**的高质量案例，要求有明确机构、业务场景、AI使用方式和可核验的一手来源。

当前案例覆盖：

1. Morgan Stanley — AskResearchGPT
2. JPMorgan Chase — LLM Suite 与 Prime Finance AI
3. Goldman Sachs — One Goldman Sachs 3.0
4. Citi — Markets交易确认自动化与Wealth AI
5. Bridgewater — PAT / AI Pocket Analyst
6. Man Group — AlphaGPT
7. BlackRock — Aladdin Copilot
8. Two Sigma — AI与机器学习嵌入系统化投资
9. UBS — STAAT Insights
10. Nasdaq — AI Market Surveillance

### 5. AI赋能教学（6项）

本专区不收“产品功能说明”“提示词合集”或浅层操作指南，只保留具有**系统课程、连续专题、完整讲义/Notebook、可复用作业/案例或Agentic Research工作流**的资源。

1. **智能体与社会科学研究（Agentic Coding in Social Sciences Research）** — 王彬 / 暨南大学经济学院
2. **Vibe Researching with Coding Agents / Open Scholar Skill** — Yongjun Zhang / Stony Brook University
3. **LLMs for Social Science** — University of Oxford DPIR / Nuffield College
4. **Large Language Models for the Economic and Social Sciences** — University of Mannheim
5. **AI Pedagogy Project** — metaLAB at Harvard / Berkman Klein Center
6. **Teach with Generative AI / Harvard GenAI Library for Teaching and Learning** — Harvard University / VPAL

其中，前4项重点服务教师科研方法、Agentic Coding、LLM社会科学研究与项目式课程建设；后2项重点服务课程设计、作业设计、课堂AI政策、assessment、tutor bot与高校教师真实教学案例。

原有的 `Data Analysis with ChatGPT`、`Finance Workflows with ChatGPT Work`、`Finance Use Cases and Prompts`、`ChatGPT Workflows for Finance Teams`、`ChatGPT for Excel and Google Sheets`、`Financial Services Resources`、`ChatGPT for Financial Services Solution Kit` 已退出前台精选库，保留在后台候选数据中。

## 教师学习路径

教师学习路径属于导航层，不是第六专区：

- **A 金融工程教师AI入门**：生成式AI → Prompt → AI辅助Python → 数据分析 → 教学规范
- **B AI＋金融工程进阶**：Python → 机器学习 → 金融数据建模 → 风险与资产配置 → 深度学习/强化学习
- **C 生成式AI赋能教学全过程**：备课 → 讲解 → 习题案例 → 编程辅导 → 作业试题 → 辅助评价 → 教学反馈

## 100分评价框架

| 指标 | 权重 |
|---|---:|
| 实质教学资源丰富度 | 30 |
| 与《金融工程》课程的直接相关度 | 20 |
| 教学可直接使用/改造程度 | 20 |
| 来源权威性 | 10 |
| AI或计算方法融合程度 | 10 |
| 获取便利性 | 5 |
| 时效性 | 5 |

详细说明见 [`docs/resource-selection.md`](docs/resource-selection.md)。

## 数据文件

- `data/resources-books-cn.tsv`：中文教材与专著
- `data/resources-books.tsv`、`data/resources-books-extra.tsv`：英文教材与专著
- `data/resources-courses-extra.tsv`：扩展高校课程
- `data/resources-curated-additions.tsv`：人工核验新增的智能体、AI金融、AI经济学及AI教学资源
- `data/resources-github-quality.tsv`：GitHub高质量AI金融、交易与计算经济学资源
- `data/resources-ai-industry-cases.tsv`：金融业真实使用AI的精选案例
- `data/curation.json`：排序、降权与前台隐藏规则

## 维护原则

候选资源不设置固定数量上限，但前台始终坚持精简。第三专区、第四专区和第五专区均采用**高门槛＋替换制**：新资源只有在质量、体系完整度、教学/科研可复用性或代表性上明显补充现有精选资源时，才进入前台；否则先进入后台候选库。

## GitHub Pages

https://qingyupeng.github.io/ai-financial-engineering-teaching-hub/

## 版权说明

本站外部资源的课程、教材、课件、文档、视频、代码等版权归原作者或机构所有。本项目原则上只提供官方入口、中文导读与教学用途说明，不重新分发受版权保护的教材全文。项目组原创资源将单独注明作者、许可和使用范围。
