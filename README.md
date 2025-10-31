# 华彩新纪元 网站

此项目为静态响应式网站，用于活动宣传与商品预售

## 文件结构（主要）
- `index.html` — 首页
- `core.html` — 核心价值
- `dashboard.html` — 动态数据看板（占位）
- `about.html` — 关于我们
- `join.html` — 加入我们
- `support.html` — 支持我们（含 12 个商品位）
- `assets/css/style.css` — 样式
- `assets/js/main.js` — 交互脚本
- `assets/img/placeholder_1.png` … `placeholder_12.png` — 占位图（请替换为真实图片）

## 部署方式
### Cloudflare Pages（推荐）
1. 推送仓库到 GitHub。
2. 在 Cloudflare Pages 创建项目 → 连接到该 Git 仓库。
3. 设置：Framework preset = None，Build command 留空，Build output directory = `/`
4. 保存并部署。

### GitHub Pages
1. 推送仓库到 GitHub
2. 到仓库 Settings → Pages → 选择 Branch：`main`（root）
3. 保存，几分钟后访问 `https://<用户名>.github.io/<仓库名>/`

## 本地预览
在项目文件夹直接打开 `index.html` 或使用带有实时重载的 local server（例如 VSCode Live Server）。

## 替换说明
- 替换 `assets/img/placeholder_*.png` 为真实图片。
- 编辑各页面 HTML 来替换文本内容。
- 要接入支付，将 `support.html` 中的按钮替换为真实链接或嵌入第三方支付脚本。

## 一键部署脚本
脚本 `deploy.sh` 可用于将项目初始化并推送到远程仓库（需本地先在 GitHub 建仓库）。
