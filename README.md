# AI＋金融工程教师开放资源中心

面向《金融工程》本科教学教师的开放资源共享平台。平台不追求“名校课程名称数量”，而强调**教师能否真正拿来备课、自学、做实验、设计作业和开发案例**。

## 当前建设进度

平台目前维护 **140项候选资源**，经人工质量复核后形成 **125项前台精选教学资源**：

- **125项进入前台精选教学资源库**；
- **15项培养方案/项目介绍等仅适合课程体系对标的页面退出主资源库前台**；
- **“顶尖高校课程”为第一资源专区，共22项，其中国内高校6项、海外高校16项**；
- 北京大学金融工程实验室 **“机器学习与资产定价”** 置于课程资源第一位；
- **“经典教材与专著”为第二资源专区，共24本/套**；
- 平台采用 **6个核心资源专区＋3条独立教师学习路径** 的前台结构。

完整候选数据位于 `data/`，排序与隐藏规则见 `data/curation.json`。

## 核心定位

- **教师导向**：服务《金融工程》教师获取资源和自主学习。
- **实质内容优先**：系统教材、讲义、Slides、代码、Notebook、习题、考试、视频、数据和案例优先于课程简介。
- **课程映射**：资源与远期、期货、互换、期权、数值定价、投资组合、风险管理、金融计算等模块关联。
- **AI标签**：机器学习、深度学习、生成式AI、强化学习、金融LLM、AI Agent等。
- **二次加工**：每项主资源均标注“教学价值”和“建议用途”。
- **持续更新**：记录核验日期、更新日志和教师反馈。
- **版权合规**：外部资源优先链接官方入口，不未经授权重新托管原始课件或教材。

## 六个核心资源专区

1. **顶尖高校课程（22项）**  
   第一专区。优先收录有讲义、课件、代码、习题、考试、视频、syllabus、虚拟实验或完整课程结构的高质量课程；前台分为**国内高校6项**与**海外高校16项**。

2. **经典教材与专著（24项）**  
   第二专区。用于建立AI＋金融工程、AI＋金融、机器学习、概率建模、强化学习、AI＋经济学和因果推断的系统知识框架。

3. **AI＋金融/金融工程前沿（13项）**  
   聚合金融机器学习、深度学习、强化学习、金融LLM、Agent及其他前沿AI金融应用。

4. **工具、代码与实验（31项）**  
   统一组织量化工具、Python库、Notebook、优化、定价、回测和数据实验。

5. **金融机构与市场案例（30项）**  
   统一组织交易所/金融机构投教、真实市场数据、衍生品案例和课堂讨论材料。

6. **AI赋能教学（5项）**  
   面向教师教学全过程，覆盖备课、知识解释、习题与案例设计、编程实验辅导、作业评价和教学反馈。

### 教师学习路径不是“第七专区”

“教师学习路径”属于**导航层**而不是资源类型，因此独立保留三条路线：金融工程教师AI入门、AI＋金融工程进阶、生成式AI赋能教学全过程。

## 顶尖高校课程

### 国内高校（6项）

1. **机器学习与资产定价** — 北京大学金融工程实验室
2. **Artificial Intelligence and Quantitative Finance** — 清华大学交叉信息研究院
3. **机器学习与智能金融** — 中央财经大学金融学院
4. **基于机器学习的资产定价虚拟仿真实验** — 湖南大学金融与统计学院
5. **Artificial Intelligence in FinTech** — 复旦大学
6. **量化投资导论与金融工程实验资源** — 对外经济贸易大学金融学院

> 东北财经大学《机器学习与金融应用》目前能从官方培养方案和教务信息确认课程真实存在，也能确认课程代码、学时与实验安排，但暂未找到公开的课程主页、课件、代码、实验材料或独立教学大纲。因此保留在后台候选/对标库，不计入前台精选课程。

### 海外高校（16项）

- Stanford GSB — *Machine Learning & Causal Inference: A Short Course*
- Stanford Digital Economy Lab — *The AI Awakening: Implications for the Economy and Society*
- MIT — *AI and Finance*
- Wharton — *AI and Data Science in Finance*
- NYU Tandon — *Machine Learning in Financial Engineering*
- Princeton ORFE — *Stochastic Optimization and Machine Learning in Finance*
- EPFL — *Machine Learning in Finance*
- University of Chicago — *Machine Learning for Economists*
- University of Toronto Engineering — *A.I. in Finance*
- University of Toronto Economics — *Machine Learning Applications in Macroeconomic Finance*
- ETH Zürich — *Machine Learning in Finance & Insurance*
- ETH Zürich — *Machine Learning for Finance & Complex Systems*
- MIT OpenCourseWare — *Finance Theory I*
- MIT OpenCourseWare — *Analytics of Finance*
- Princeton ORFE — *Introduction to Financial Mathematics*
- Yale Open Courses — *Financial Markets*

## 经典教材与专著

该专区目前收录 **24本/套** 核心书目，覆盖四条主线：

- AI＋金融 / 金融工程
- 机器学习 / 概率机器学习 / 深度学习基础
- AI / 机器学习＋经济学
- 因果推断＋机器学习

完整书目见 [`RESOURCE_DIRECTORY.md`](RESOURCE_DIRECTORY.md)。

## 主资源库筛选原则

资源优先级按照“是否真正可用于教学”判断，而不是只看学校、出版社或机构名气。优先展示系统教材、完整课程、代码/Notebook、习题、视频、数据、虚拟实验与完整案例；只有课程名称、培养方案或简短介绍的页面降权或移出主资源库。

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

## GitHub Pages

https://qingyupeng.github.io/ai-financial-engineering-teaching-hub/

## 后续建设重点

**不设置固定数量上限。** 后续仍坚持“质量优先、实质材料优先”，发现真正有教学价值的课程、教材、代码、案例或工具即可继续加入，同时持续淘汰失效、内容过弱或只有项目介绍的资源。

## 版权说明

本站外部资源的课程、教材、课件、文档、视频、代码等版权归原作者或原机构所有。本项目原则上只提供官方入口、中文导读与教学用途说明，不重新分发受版权保护的教材全文。项目组原创资源将单独注明作者、许可和使用范围。
