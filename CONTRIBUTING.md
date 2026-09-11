# 资源共建说明

欢迎项目组教师为资源中心补充、修订和核验资源。平台采用“候选库＋前台精选”的维护方式，新资源不因来源知名或数量需要而自动进入前台。

## 新增资源最低要求

- 来源清晰，优先高校、出版社、金融机构、研究机构、作者本人或项目官方页面。
- 与金融工程教学、AI＋金融方法、金融业AI实践或高校教师AI教学科研具有明确关联。
- 不只提交链接，必须填写“教学价值”和“建议用途”。
- 标注难度、金融工程模块、AI主题、语言、评分和核验日期。
- 不上传存在版权风险的第三方课件、教材扫描件或付费资料。

## 按资源类型选择数据文件

- 高校课程：`data/resources-courses-extra.tsv`
- 中文教材：`data/resources-books-cn.tsv`
- 英文教材：`data/resources-books.tsv` 或 `data/resources-books-extra.tsv`
- AI金融、交易、计算金融项目：`data/resources-github-quality.tsv`
- 金融业真实使用AI的案例：`data/resources-ai-industry-cases.tsv`
- 人工核验的跨类精品资源、AI赋能教学资源：`data/resources-curated-additions.tsv`
- 早期基础候选数据：`data/resources.json`、`data/resources-extra-*.tsv`，原则上只维护现有记录，不再作为所有新资源的统一入口。

## 推荐流程

1. 核验原始来源，确认链接指向实质内容而不是只有名称或宣传简介。
2. 将资源写入对应数据文件，并按100分框架给出初步评分。
3. 检查是否与已有精选资源高度重复，明确其新增教学价值。
4. 由至少1名项目组成员复核链接、分类、教学价值和建议用途。
5. 通过筛选后，将前台精选资源加入 `data/curation.json` 的 `featured_order`；暂不进入前台的资源加入 `hidden_from_main_library`。
6. 运行 `node scripts/validate-data.mjs`，确认数据结构和精选/后台状态一致。
7. 对实质性调整更新 `docs/update-log.md`。

## 专区专项要求

### “AI＋金融工程方法、工具与实验”

优先领域专用、可运行、可复现、维护稳定且能形成教学实验的资源。GitHub stars高不能单独构成准入理由。

### “案例”

必须是金融机构真实使用AI的业务案例，至少能说明：机构、业务流程、AI使用方式和可核验的一手来源。一般金融知识、投教页面、市场数据入口不属于该专区。

### “AI赋能教学”

优先系统课程、连续专题、完整讲义/Notebook、可复用作业与评价设计、AI教学政策或Agentic Research工作流。普通产品帮助页、提示词合集和浅层操作指南不进入前台。

## 修改已有资源

若链接失效、课程已更新、资源质量变化或教学用途需要修订，应直接更新对应字段和 `last_verified`。如果资源已明显不符合前台标准，将其从 `featured_order` 移至 `hidden_from_main_library`，原始数据保留以便追踪和后续复核。

## 自动校验

GitHub Pages每次部署前都会运行 `scripts/validate-data.mjs`。以下问题会阻止发布：

- 必填字段缺失；
- 标题重复；
- URL格式无效；
- 评分或难度字段异常；
- `featured_order` / `hidden_from_main_library` 引用不存在的资源；
- 候选资源既未进入前台精选，也未明确进入后台候选。
