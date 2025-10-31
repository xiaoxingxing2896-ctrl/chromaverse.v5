#!/bin/bash
echo "🚀 开始部署新春会网站到 GitHub（请先在 GitHub 创建仓库）"

if [ ! -f "./index.html" ]; then
  echo "错误：请在包含 index.html 的项目根目录运行此脚本。"
  exit 1
fi

read -p "请输入你的 GitHub 用户名: " GH_USER
read -p "请输入你在 GitHub 上创建的仓库名 (例如 xinchunhui): " GH_REPO

git init
git branch -M main
git remote add origin https://github.com/$GH_USER/$GH_REPO.git
git add .
git commit -m "✨ 初始化 新春会 网站"
git push -u origin main

echo ""
echo "✅ 推送完成！请登录 GitHub 仓库：Settings → Pages，启用 Pages 服务（Source 选择 main 分支，根目录）。"
echo "示例访问地址: https://$GH_USER.github.io/$GH_REPO/"
