# AI＋金融工程教师开放资源中心

面向《金融工程》本科教学教师的开放资源共享平台。项目目标不是制作“网页链接合集”，而是把国内外高校、金融机构和开源社区的高质量资源，通过**筛选、分类、中文导读、课程映射与教师学习路径**加工成可直接服务备课、自学和教学改革的资源中心。

## 核心定位

- **教师导向**：服务《金融工程》教师获取资源和自主学习。
- **课程映射**：资源与远期、期货、互换、期权、数值定价、投资组合、风险管理、金融计算等模块关联。
- **AI标签**：机器学习、深度学习、生成式AI、强化学习、Agent等。
- **二次加工**：每项资源均标注“教学价值”和“建议用途”。
- **持续更新**：记录核验日期、更新日志和教师反馈。
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

## 目录结构

```text
.
├── index.html
├── assets/
│   ├── styles.css
│   └── app.js
├── data/
│   └── resources.json
├── docs/
│   ├── resource-selection.md
│   ├── teacher-testing.md
│   └── update-log.md
├── RESOURCE_DIRECTORY.md
├── CONTRIBUTING.md
└── .github/workflows/pages.yml
```

## 本地预览

直接双击 `index.html` 时，浏览器可能因为本地安全策略阻止加载 JSON。推荐在仓库目录运行：

```bash
python -m http.server 8000
```

然后打开 `http://localhost:8000`。

## GitHub Pages 部署

仓库已经包含 `.github/workflows/pages.yml`。在 GitHub 仓库中进入：

**Settings → Pages → Build and deployment → Source → GitHub Actions**

之后每次推送到 `main` 分支都会自动部署。

## 如何添加资源

编辑 `data/resources.json`，每项资源采用以下字段：

```json
{
  "title": "资源名称",
  "source": "来源机构",
  "zone": "顶尖高校课程",
  "finance_module": "期权",
  "ai_topic": "Machine Learning",
  "level": "进阶",
  "score": 90,
  "teaching_value": "为什么值得教师看",
  "suggested_use": "建议如何用于《金融工程》教学",
  "url": "https://official.example.com",
  "last_verified": "2026-09-11",
  "tags": ["tag1", "tag2"]
}
```

## 后续建设建议

- 扩充到 80–120 项经过筛选和二次加工的资源。
- 建立 20–30 项 A 级重点推荐资源。
- 增加 ≥20 项项目组原创资源。
- 增加 ≥10 个 Python / Jupyter 教学案例。
- 增加 ≥30 个 AI 教学 Prompt 模板。
- 邀请 8–15 位教师试用并保留反馈记录。
- 至少形成 3 轮更新日志，作为项目结项的过程证据。

## 版权说明

本站外部资源的课程、课件、文档、视频、代码等版权归原作者或原机构所有。本项目原则上只提供官方入口、中文导读与教学用途说明。若后续上传项目组原创资源，应单独注明作者、许可和使用范围。
