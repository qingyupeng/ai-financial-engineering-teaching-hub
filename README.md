# AI＋金融工程教师开放资源中心

面向《金融工程》本科教学教师的开放资源共享平台。平台不追求“名校课程名称数量”，而强调**教师能否真正拿来备课、自学、做实验、设计作业和开发案例**。

## 当前建设进度

平台目前维护 **124项候选资源**，经人工质量复核后形成 **110项前台精选教学资源**：

- **110项进入前台精选教学资源库**；
- **14项纯培养方案/项目介绍页退出主资源库前台**，仅保留为课程体系对标参考；
- 北京大学金融工程实验室 **“机器学习与资产定价”** 置于课程资源第一位；
- **“经典教材与专著”专区收录24本/套**，覆盖AI＋金融工程、AI＋金融、概率机器学习、深度学习、强化学习、AI＋经济学与因果推断；
- 平台由原先9个混合专区重构为 **6个核心资源专区＋3条独立教师学习路径**。

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

平台不再把“工具”“实验”“案例”“金融机构投教”等高度重叠的类型机械拆开，而按教师真实使用场景整合为六个专区。

1. **经典教材与专著（24项）**  
   放在第一位。用于建立AI＋金融工程、AI＋金融、机器学习、概率建模、强化学习、AI＋经济学和因果推断的系统知识框架。

2. **顶尖高校课程（7项）**  
   只突出有讲义、课件、代码、习题、考试、视频等实质材料的课程；纯培养方案和项目介绍页不进入主资源库。

3. **AI＋金融/金融工程前沿（13项）**  
   聚合金融机器学习、深度学习、强化学习、金融LLM、Agent及其他前沿AI金融应用。

4. **工具、代码与实验（31项）**  
   合并原“金融工程AI工具箱”和“Python / Jupyter实验库”，统一组织量化工具、Python库、Notebook、优化、定价、回测和数据实验。

5. **金融机构与市场案例（30项）**  
   合并原“金融机构教育资源”和“教学案例库”，统一组织交易所/金融机构投教、真实市场数据、衍生品案例和课堂讨论材料。

6. **AI赋能教学（5项）**  
   面向教师教学全过程，覆盖备课、知识解释、习题与案例设计、编程实验辅导、作业评价和教学反馈。

### 教师学习路径不是“第七专区”

“教师学习路径”属于**导航层**而不是资源类型，因此独立保留三条路线：金融工程教师AI入门、AI＋金融工程进阶、生成式AI赋能教学全过程。学习路径会跨专区调用教材、课程、工具、案例和教学方法资源。

## 主资源库筛选原则

资源优先级按照“是否真正可用于教学”判断，而不是只看学校、出版社或机构名气。

### 优先展示

- 系统教材、经典专著或开放在线书；
- 讲义、课件或完整课程页面；
- Python / R / MATLAB代码、Notebook；
- 习题、作业、考试及参考答案；
- 视频课程；
- 数据集、API或真实市场数据；
- 完整教学案例、交易模拟或实验说明；
- 可复现的教程或开源项目。

### 降权或移出主资源库

只有课程名称、培养方案、项目介绍或一两段课程简介，无法直接支持教师备课、自学、实验或作业设计的页面。

## 经典教材与专著

该专区目前收录 **24本/套** 核心书目，按四条线组织。

### AI＋金融 / 金融工程

- *Machine Learning in Finance: From Theory to Practice* — Dixon, Halperin, Bilokon
- *Machine Learning for Algorithmic Trading, 2nd Edition* — Stefan Jansen
- *Probabilistic Machine Learning for Finance and Investing* — Deepak K. Kanungo
- *Machine Learning for Finance* — James Le, Jannes Klaas
- *Advances in Financial Machine Learning* — Marcos López de Prado
- *Machine Learning for Asset Managers* — Marcos M. López de Prado
- *Artificial Intelligence in Finance* — Yves Hilpisch
- *Financial Signal Processing and Machine Learning* — Ali N. Akansu, Sanjeev R. Kulkarni, Dmitry Malioutov (eds.)

### 机器学习、概率机器学习与深度学习基础

- *The Elements of Statistical Learning*
- *An Introduction to Statistical Learning: with Applications in Python*
- *Statistical Learning with Sparsity: The Lasso and Generalizations*
- *Computer Age Statistical Inference*
- *Pattern Recognition and Machine Learning* — Christopher M. Bishop
- *Probabilistic Machine Learning: An Introduction* — Kevin P. Murphy
- *Probabilistic Machine Learning: Advanced Topics* — Kevin P. Murphy
- *Deep Learning* — Ian Goodfellow, Yoshua Bengio, Aaron Courville
- *Deep Learning: Foundations and Concepts* — Christopher M. Bishop, Hugh Bishop
- *Reinforcement Learning: An Introduction, 2nd Edition* — Richard S. Sutton, Andrew G. Barto

### AI / 机器学习＋经济学

- *The Economics of Artificial Intelligence: An Agenda*
- *Prediction Machines: The Simple Economics of Artificial Intelligence*

### 因果推断＋机器学习

- *Applied Causal Inference Powered by ML and AI* — Chernozhukov, Hansen, Kallus, Spindler, Syrgkanis
- *Causal Inference: The Mixtape* — Scott Cunningham
- *The Effect: An Introduction to Research Design and Causality* — Nick Huntington-Klein
- *Causal Inference and Machine Learning: In Economics, Social, and Health Sciences* — Mutlu Yuksel, Yigit Aydede

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

## 目录结构

```text
.
├── index.html
├── assets/
│   ├── styles.css
│   └── app.js
├── data/
│   ├── resources.json
│   ├── resources-extra-1.tsv
│   ├── resources-extra-2.tsv
│   ├── resources-extra-3.tsv
│   ├── resources-books.tsv
│   ├── resources-books-extra.tsv
│   └── curation.json
├── docs/
│   ├── resource-selection.md
│   ├── teacher-testing.md
│   └── update-log.md
├── RESOURCE_DIRECTORY.md
├── CONTRIBUTING.md
└── .github/workflows/pages.yml
```

## GitHub Pages

https://qingyupeng.github.io/ai-financial-engineering-teaching-hub/

## 后续建设重点

下一阶段不再优先追求数量，而是继续做三件事：

1. 逐项核验110项主资源的“实质材料丰富度”；
2. 用更优资源替换仍然偏弱的入口型资源；
3. 增加项目组原创教学资源、Notebook和Prompt模板。

## 版权说明

本站外部资源的课程、教材、课件、文档、视频、代码等版权归原作者或原机构所有。本项目原则上只提供官方入口、中文导读与教学用途说明，不重新分发受版权保护的教材全文。项目组原创资源将单独注明作者、许可和使用范围。
