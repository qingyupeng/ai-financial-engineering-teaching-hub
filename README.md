# AI＋金融工程教师开放资源中心

面向《金融工程》本科教学教师的开放资源共享平台。平台不追求“名校课程名称数量”，而强调**教师能否真正拿来备课、自学、做实验、设计作业、开发案例和改造科研工作流**。

## 当前建设进度

平台目前维护 **164项候选资源**，经人工质量复核后形成 **149项前台精选教学资源**：

- **149项进入前台精选教学资源库**；
- **15项培养方案/项目介绍等仅适合课程体系对标的页面退出主资源库前台**；
- **“顶尖高校课程”为第一资源专区，共24项，其中国内高校7项、海外高校17项**；
- 北京大学金融工程实验室 **“机器学习与资产定价”** 置于课程资源第一位；
- **“经典教材与专著”为第二资源专区，共34本/套，其中文教材与专著10项、英文教材与专著24项**；
- **“AI＋金融/金融工程前沿”完成专项换血，压缩为11项领域专用旗舰资源**；
- 平台采用 **6个核心资源专区＋3条独立教师学习路径** 的前台结构。

完整候选数据位于 `data/`，排序、专区重分类与隐藏规则见 `assets/app.js` 和 `data/curation.json`。

## 核心定位

- **教师导向**：服务《金融工程》教师获取资源和自主学习。
- **实质内容优先**：系统教材、讲义、Slides、代码、Notebook、习题、考试、视频、数据和案例优先于课程简介。
- **课程映射**：资源与远期、期货、互换、期权、数值定价、投资组合、风险管理、金融计算、量化研究和宏观金融等模块关联。
- **AI标签**：机器学习、深度学习、生成式AI、强化学习、金融LLM、AI Agent、Agentic Coding、因果机器学习等。
- **领域专用性**：前沿专区优先保留真正面向金融、金融工程、交易或经济学的AI项目；PyTorch、XGBoost、scikit-learn等通用教程归入工具区。
- **二次加工**：每项主资源均标注“教学价值”和“建议用途”。
- **持续更新**：记录核验日期、更新日志和教师反馈。
- **版权合规**：外部资源优先链接官方入口，不未经授权重新托管原始课件或教材。

## 六个核心资源专区

1. **顶尖高校课程（24项）**  
   第一专区。优先收录有讲义、课件、代码、习题、考试、视频、syllabus、虚拟实验或完整课程结构的高质量课程；前台分为**国内高校7项**与**海外高校17项**。

2. **经典教材与专著（34项）**  
   第二专区。前台分为**中文教材与专著10项**与**英文教材与专著24项**。

3. **AI＋金融/金融工程前沿（11项）**  
   聚焦金融Agent、金融LLM、强化学习交易、金融机器学习以及AI＋经济学/因果机器学习。核心资源包括 TradingAgents、AI Hedge Fund、AI-Trader、FinGPT、FinRobot、FinRL、FinRL-Meta、Machine Learning for Trading、EconML、DoubleML 与 AI4Finance Foundation。

4. **工具、代码与实验（42项）**  
   统一组织交易引擎、量化回测、Python/Jupyter、优化、定价、金融数据与量化经济学工具。本轮重点新增 QuantConnect LEAN、NautilusTrader、vectorbt、QuantEcon.py 与 HARK，并接收原前沿专区中的通用AI教程。

5. **金融机构与市场案例（30项）**  
   统一组织交易所/金融机构投教、真实市场数据、衍生品案例和课堂讨论材料。

6. **AI赋能教学（8项）**  
   面向教师教学与科研全过程，覆盖备课、知识解释、习题与案例设计、编程实验辅导、作业评价、金融工作流、Agentic Coding科研工作流和教学反馈。

### 教师学习路径不是“第七专区”

“教师学习路径”属于**导航层**而不是资源类型，因此独立保留三条路线：金融工程教师AI入门、AI＋金融工程进阶、生成式AI赋能教学全过程。

## 顶尖高校课程

### 国内高校（7项）

1. **机器学习与资产定价** — 北京大学金融工程实验室
2. **经济金融智能体设计** — 中山大学岭南学院
3. **Artificial Intelligence and Quantitative Finance** — 清华大学交叉信息研究院
4. **机器学习与智能金融** — 中央财经大学金融学院
5. **基于机器学习的资产定价虚拟仿真实验** — 湖南大学金融与统计学院
6. **Artificial Intelligence in FinTech** — 复旦大学
7. **量化投资导论与金融工程实验资源** — 对外经济贸易大学金融学院

其中中山大学《经济金融智能体设计》课程主页公开课程大纲、每周课件与实践材料、24章在线教材、代码模板、数据集和拓展阅读，属于目前国内开放程度较高的AI原生经济金融课程。

> 东北财经大学《机器学习与金融应用》目前只能从官方培养方案和教务信息确认课程存在，暂未找到公开课程主页、课件、代码、实验材料或独立教学大纲，因此保留在后台候选/对标库，不计入前台精选课程。

### 海外高校（17项）

包括 Stanford GSB、Stanford Digital Economy Lab、MIT、Wharton、NYU Tandon、Princeton ORFE、EPFL、ETH Zürich、University of Chicago、University of Toronto、University of Nebraska–Omaha 与 Yale Open Courses 等课程。其中 **Zhigang Feng 的 Quantitative Macroeconomics with AI and Machine Learning** 提供课程说明、Slides、Jupyter Notebooks 和视频，系统覆盖量化宏观、资产定价、机器学习、强化学习与LLM，因此归入海外高校课程组。

## AI＋金融/金融工程前沿换血

本轮不是简单扩容，而是重新划定专区边界：**只有金融、金融工程、交易或经济学专用的AI资源才留在“前沿”**。

### 新增4项旗舰前沿资源

- **TradingAgents** — TauricResearch：多智能体LLM交易框架，覆盖分析师、研究员、交易员、风险管理与投资组合经理决策链。
- **AI Hedge Fund** — virattt：AI基金/alpha模型/组合决策与回测概念验证。
- **EconML** — PyWhy / Microsoft Research ALICE：机器学习＋计量经济学＋因果推断。
- **DoubleML** — DoubleML：Double Machine Learning 的规范化Python实现。

### 从前沿迁往“工具、代码与实验”

PyTorch Tutorials、XGBoost Tutorials、scikit-learn User Guide、TensorFlow Time Series Forecasting、Text Classification with Transformers。它们仍是高质量资源，但属于**通用AI方法工具**，不再占据金融前沿专区。

### 从前沿迁往“AI赋能教学”

Financial Services Resources、ChatGPT for Financial Services Solution Kit。它们更适合金融工作流和AI应用教学，而不是金融工程研究前沿。

### 新增5项高质量工具/实验资源

- **QuantConnect LEAN** — 多资产算法交易与回测引擎
- **NautilusTrader** — 生产级事件驱动交易引擎
- **vectorbt** — 高性能向量化回测与投资组合实验框架
- **QuantEcon.py** — 量化经济学Python工具库
- **HARK** — 异质性主体与计算经济学工具包

## 经典教材与专著

### 中文教材与专著（10项）

1. **金融智能** — 张晓燕主编，吴辉航、李志勇、张欣然副主编
2. **人工智能与量化交易** — 张军欢
3. **Python量化金融与人工智能** — 朱顺泉
4. **金融机器学习（中文版）** — Marcos López de Prado 著，林华等译
5. **Python金融大数据分析（第2版，中文版）** — Yves Hilpisch 著，姚军译
6. **量化投资从理论到实践** — 温硕、陈婷秀
7. **Python量化投资：技术、模型与策略** — 赵志强、刘志伟
8. **Python金融数据分析（微课视频版·题库版）** — 李蕾、张春越、郭瑞波、高炜
9. **金融计算与量化投资——MATLAB金融工具箱的应用** — 李合龙、胡云鹤、袁宜晨、杨苏鹏
10. **金融科技实务教程** — 林健武、袁先智、马小峰、罗彤、何丽峰

### 英文教材与专著（24项）

英文组继续覆盖AI＋金融/金融工程、机器学习与概率建模、AI经济学和因果推断等主线，完整书目见 [`RESOURCE_DIRECTORY.md`](RESOURCE_DIRECTORY.md)。

## 主资源库筛选原则

资源优先级按照“是否真正可用于教学”判断，而不是只看学校、出版社、GitHub stars或机构名气。优先展示系统教材、完整课程、领域专用AI项目、代码/Notebook、习题、视频、数据、虚拟实验与完整案例；只有课程名称、培养方案或简短介绍的页面降权或移出主资源库。

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
- `data/resources-curated-additions.tsv`：人工核验新增的智能体、AI金融与AI经济学资源
- `data/resources-github-quality.tsv`：本轮人工核验的高质量GitHub金融、交易与经济学资源
- `data/curation.json`：排序、降权与前台隐藏规则

## GitHub Pages

https://qingyupeng.github.io/ai-financial-engineering-teaching-hub/

## 后续建设重点

**不设置固定数量上限。** 后续仍坚持“质量优先、实质材料优先、专区边界清晰”，发现真正有教学价值的课程、教材、代码、案例或工具即可继续加入，同时持续淘汰失效、内容过弱或分类不准确的资源。

## 版权说明

本站外部资源的课程、教材、课件、文档、视频、代码等版权归原作者或机构所有。本项目原则上只提供官方入口、中文导读与教学用途说明，不重新分发受版权保护的教材全文。项目组原创资源将单独注明作者、许可和使用范围。
