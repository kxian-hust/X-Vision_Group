# X Vision Group

`kxian-hust/X-Vision_Group` 仓库的中英文 GitHub Pages 课题组网站。纯 HTML / CSS / JavaScript，无安装或编译步骤。默认中文，右上角切换英文，记住所选语言；也可以分享 `?lang=en` 或 `?lang=zh` 链接。

## 发布到 GitHub Pages

当前目标仓库：https://github.com/kxian-hust/X-Vision_Group

当前目标站点：https://kxian-hust.github.io/X-Vision_Group/

以下账号根主页方案为可选方案；本仓库直接使用 Settings → Pages → Deploy from a branch → main → /(root)。


1. 登录 **kxian-hust**，新建 **Public** 仓库，名称必须为 `kxian-hust.github.io`。
2. 把本文件所在目录中的全部内容上传至仓库根目录。确保 `index.html` 位于根目录，而不是多一层文件夹。`assets` 文件夹也必须完整上传。
3. 简便发布方式：打开仓库 **Settings → Pages → Build and deployment**，Source 选 **Deploy from a branch**，Branch 选 **main**，目录选 **/(root)**，保存。
4. 等待 GitHub 完成部署，打开 **https://kxian-hust.github.io/**。

另一种方式：本项目附带 `.github/workflows/pages.yml`。如使用它，在 Settings → Pages 把 Source 设为 **GitHub Actions**，然后在 Actions 运行 Deploy GitHub Pages。两种发布方式选一种即可。浏览器上传时若没有包含隐藏文件夹，仍可使用上面的 branch 发布方式。

旧账号不需要登录。新站部署不会修改旧站，旧站也无法自动跳转，除非未来恢复旧仓库访问权。

## 本地查看

可以直接打开 `index.html`。若需要本地服务，在本目录运行 `python3 -m http.server 8765`，打开 `http://localhost:8765/`。

## 日常修改

- `index.html`：版块、机构、负责人、邮箱和 GitHub 链接。
- `content.js`：中英文文字、动态（NEWS）和竞赛经历（AWARDS）。每条动态都分别填写中英文。
- `publications.js`：11 篇代表论文的标题、作者、年份、配图和链接。新增论文时按现有条目格式插入。`topic` 使用 `3d` 或 `photography`。
- `assets/`：照片、论文配图、站点图标。图片已本地保存，无需依赖旧站图片地址。
- `style.css`：配色、字体、响应式排版。

修改后提交至 main，GitHub Pages 会自动更新。

## 资料来源与核对范围

论文与历史动态来自 https://kexianhust.github.io/ ，迁移日期 2026-11-02。个人介绍于同日根据学校教师主页 http://faculty.hust.edu.cn/XianKe/zh_CN/index.htm 及完整简介 http://faculty.hust.edu.cn/XianKe/zh_CN/more/2541862/jsjjgd/index.htm 更新。保留 11 篇代表论文、18 条动态、6 项竞赛经历、负责人经历和学术服务。研究方向描述根据旧站方向与论文整理。课题组名称使用用户指定的 **X Vision Group**。

- 旧站最新动态为 2025 年 4 月，页面已注明存档范围。未补写未经确认的 2025–2026 年成果。
- 个人介绍现以学校教师主页为依据：中文姓名为鲜可，职称为副教授、硕士生导师；英文使用 Associate Professor / Master’s Supervisor。
- 未提供成员名单，因此团队板块只列出已确认的负责人。
- 未迁移旧站的第三方访问统计脚本，也未沿用缺乏时间基准的影响因子和论文数量汇总。
- 论文 PDF、项目和代码链接沿用原站地址，包括旧 GitHub 账号下的公开项目，不能直接替换为新账号。未迁移这些代码仓库本身。
- 原站 NVDS+ 与 ICCV NVDS 的 arXiv 链接指向同一编号 2307.08695；此处原样保留，建议作者核对 NVDS+ 的最终论文链接。
- 研究经历、最新方向、人才项目、成果概况、招生信息、课程与学术服务根据学校完整简介补充；统计数字明确标注截至 2025 年 12 月。AAAI 2027 任职按学校主页列示，不表示该会议已经举办。
- Google Scholar 和论文链接来自旧站；未对所有外部论文网站的可访问性逐一验证。

## 已完成验证

JavaScript 语法检查通过；浏览器验证中英文切换、单篇搜索、计算摄影筛选（2 篇）、全部论文（11 篇）、历史动态展开（18 条）正常。390px 手机英文视图无横向溢出。新版另已在浏览器核对中文姓名、职称、完整个人介绍、招生内容和对应英文，未发现空白翻译项。

## 页面精简

按用户截图移除了首页操作按钮、三维示意图、研究方向横条和研究卡片区，并删除对应导航入口。首页简介直接连接代表性论文，论文筛选、最新个人介绍与其他版块保留。中英文页面同步调整。

## 最新版块顺序

个人介绍 → 研究动态 → 代表性论文 → 招生与教学 → 竞赛与荣誉及学术服务 → 联系方式。个人介绍作为首页开头，移除了原先独立的宣传标题区；本科学历和博士学历不再显示起止年份，统一表述为“本科和博士均毕业于华中科技大学”。英文同步。

## 2026 年成果更新

新增两篇 2026 年论文及对应中英文动态，当前共 13 篇代表性论文、20 条动态。TIM 论文作者、卷号和出版信息已与 Crossref 的出版商记录核对（DOI: 10.1109/TIM.2026.3738112），5018517 按文章编号展示。FFAvatar 的作者与标题依据 arXiv:2606.30347，ECCV 2026 发表信息依据作者官方项目与代码仓库。两篇论文发表时间及对应动态均按作者确认标为 2026 年 10 月；作者列表以 Ke Xian* 标注，并注明 *corresponding author。两张新配图为文字封面，不是论文实验图。

教学课程包含《人工智能概论〈A〉》，英文为 Introduction to Artificial Intelligence (A)。
