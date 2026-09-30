# Jessie HR 结构化面试助手 V1.0

面向移动端的结构化面试工作台原型，包含今日面试日程、AI 面试辅助入口和题库生成体验。

## 本地预览

无需安装额外依赖，直接启动静态服务器：

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

然后访问 `http://localhost:4173`。

## GitHub Pages 公网发布

仓库已包含 GitHub Pages 自动部署工作流：

- 推送到 `main` 分支时自动发布；
- 也可以在 GitHub Actions 页面手动运行；
- 不需要构建命令或安装依赖。

### 在 GitHub 手机网页中开启

> 推荐使用 Safari、Chrome 等手机浏览器访问 GitHub；GitHub App 可能不会显示完整的仓库设置。

1. 打开本仓库，点击顶部的 **Pull requests**，进入待合并的修改，依次点击
   **Merge pull request → Confirm merge**，让部署配置进入 `main` 分支。
2. 返回仓库首页。如果顶部没有显示 **Settings**，横向滑动标签栏或点击 **…**；仍未显示时，
   在浏览器菜单中选择“请求桌面网站”。
3. 点击 **Settings → Pages**。
4. 在 **Build and deployment** 区域，将 **Source** 选择为 **GitHub Actions**。
5. 返回仓库，点击 **Actions → Deploy Jessie HR to GitHub Pages**，等待最新记录显示绿色对勾。

### 找到公开网址

部署成功后，可以从以下任一位置打开或复制网址：

- **Settings → Pages → Visit site**；
- **Actions → Deploy Jessie HR to GitHub Pages → 最新的成功记录 → deploy**。

公开网址通常是：

```text
https://<你的 GitHub 用户名>.github.io/jessie-hr--interview/
```

如果 Actions 中没有自动出现运行记录，可进入 **Actions → Deploy Jessie HR to GitHub Pages**，
点击 **Run workflow**，选择 `main` 后再次点击绿色的 **Run workflow**。
