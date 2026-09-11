# AI＋金融工程教师开放资源中心

面向《金融工程》本科教学教师的开放资源共享平台。项目目标不是制作“网页链接合集”，而是把国内外高校、金融机构、官方数据平台和开源社区的高质量资源，通过**筛选、分类、中文导读、课程映射与教师学习路径**加工成可直接服务备课、自学和教学改革的资源中心。

## 当前建设进度

**高质量资源库第一阶段已经完成：100项。**

- 资源总数：**100项**
- A级资源（≥85分）：**98项**
- B级资源（70–84分）：**2项**
- 中文资源：**11项**
- 英文资源：**89项**
- 全部资源均包含：来源、专区、金融工程模块、AI/计算主题、难度、评分、教学价值、建议用途、官方链接、核验日期和标签。
- 完整分类目录见 [`RESOURCE_DIRECTORY.md`](RESOURCE_DIRECTORY.md)。

## 核心定位

- **教师导向**：服务《金融工程》教师获取资源和自主学习。
- **课程映射**：资源与远期、期货、互换、期权、数值定价、投资组合、风险管理、金融计算等模块关联。
- **AI标签**：机器学习、深度学习、生成式AI、强化学习、金融LLM、AI Agent等。
- **二次加工**：每项资源均标注“教学价值”和“建议用途”，避免变成裸链接目录。
- **持续更新**：记录核验日期、更新日志和后续教师反馈。
- **版权合规**：外部资源优先链接官方入口，不未经授权重新托管原始课件。

## 平台专区

1. 顶尖高校课程
2. 金融机构教育资源
3. AI＋金融工程专题
4. 金融工程AI工具箱
5. Python / Jupyter实验库
6. 教学案例库
7. AI辅助教学方法
8. 教师学习路径

目前100项资源中，具体资源条目分布在前7类；“教师学习路径”用于把资源进一步组织成可执行的教师自主学习路线。

## 资源评价标准

| 指标 | 权重 |
|---|---:|
| 来源权威性 | 20 |
| 与金融工程相关度 | 25 |
| AI融合程度 | 20 |
| 教学可借鉴性 | 20 |
| 获取便利性 | 10 |
| 时效性 | 5 |

- **A级**：85分及以上，重点推荐
- **B级**：70–84分，推荐
- **C级**：拓展参考

## 资源数据结构

```text
.
├── index.html
├── assets/
│   ├── styles.css
│   └── app.js
├── data/
│   ├── resources.json             # 首批16项
│   ├── resources-extra-1.tsv      # 新增28项
│   ├── resources-extra-2.tsv      # 新增28项
│   └── resources-extra-3.tsv      # 新增28项
├── docs/
│   ├── resource-selection.md
│   ├── teacher-testing.md
│   └── update-log.md
├── RESOURCE_DIRECTORY.md          # 100项资源分类总目录
├── CONTRIBUTING.md
└── .github/workflows/pages.yml
```

网页会自动合并4个数据文件，因此首页的搜索、专区筛选、难度筛选和资源数量均针对完整的100项资源。

## 资源来源示例

资源池目前覆盖：

- **国内高校**：北京大学、清华大学、复旦大学等；
- **国际高校**：Columbia、Chicago、CMU、Oxford、ETH Zürich、Princeton、UC Berkeley、Imperial、MIT、Yale、NYU等；
- **交易所与行业机构**：上交所、深交所、上期所、CME、Cboe、Options Industry Council等；
- **权威金融数据**：FRED、U.S. Treasury、SEC EDGAR、ECB、BIS、IMF、Kenneth French Data Library等；
- **AI与量化工具**：QuantLib、Qlib、FinRL、FinGPT、FinRobot、PyPortfolioOpt、Riskfolio-Lib、CVXPY、PyMC、PyTorch、TensorFlow、XGBoost、Hugging Face等；
- **AI辅助教学**：OpenAI Academy与官方帮助中心的金融、数据分析、表格和Prompt相关资源。

## 本地预览

直接双击 `index.html` 时，浏览器可能因为本地安全策略阻止加载数据文件。推荐在仓库目录运行：

```bash
python -m http.server 8000
```

然后打开 `http://localhost:8000`。

## GitHub Pages 部署

仓库包含 `.github/workflows/pages.yml`。在 GitHub 仓库中进入：

**Settings → Pages → Build and deployment → Source → GitHub Actions**

之后每次推送到 `main` 分支都会自动部署。

## 继续添加资源

新增资源应保持与现有字段一致，并至少完成一次人工核验。具体筛选标准见 [`docs/resource-selection.md`](docs/resource-selection.md)，共建规则见 [`CONTRIBUTING.md`](CONTRIBUTING.md)。

当前不再以扩大数量为主要目标。后续资源维护以**去重、失效链接复核、优质资源替换和教学转化**为主。

## 下一阶段

资源数量目标已经达到。后续重点转向：

- 增加 ≥20 项项目组原创教学资源；
- 增加 ≥10 个可运行的 Python / Jupyter 教学案例；
- 增加 ≥30 个 AI 教学 Prompt 模板；
- 邀请 8–15 位教师试用并保留反馈记录；
- 至少形成 3 轮更新和迭代记录，形成结项证据链。

## 版权说明

本站外部资源的课程、课件、文档、视频、代码等版权归原作者或原机构所有。本项目原则上只提供官方入口、中文导读与教学用途说明。项目组原创资源应单独注明作者、许可和使用范围。
