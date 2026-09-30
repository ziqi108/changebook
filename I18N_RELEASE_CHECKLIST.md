# i18n 发布清单 — Yi Wisdom

> 更新：2026-09-30。本清单对应"中英文独立语言版本"第一阶段改造。

## 1. 提交与部署前

- [x] `npx tsc --noEmit` → 0 错误
- [x] `npm run lint` → 0 警告 0 错误（已补 .eslintrc.json，next/core-web-vitals）
- [ ] `npm run test` → **无测试框架（package.json 无 test 脚本），无事可运行**；已用 tsc + lint + build + 脚本检查替代
- [x] `npm run build` → 成功，45 条路由全部静态预渲染
- [x] Route check：英文 URL 全部保持原路径；新增 9 条 /zh 路由
- [x] `node scripts/i18n-check.mjs` → 8 对页面 canonical/hreflang/lang 全部通过；sitemap.xml 33 条 URL 校验通过
- [ ] **网站所有者人工校对 9 个中文页面文案**（见 TRANSLATION_TODO.md 第一节；如需暂缓，按该节方法改为 noindex 并移出 ROUTE_MAP）

## 2. 部署（人工执行，不自动部署）

```bash
git add -A
git commit -m "feat: add Simplified Chinese version under /zh with hreflang, language switcher, split-ready sitemap"
git push origin main        # Vercel 自动构建部署
```

## 3. 部署后验证（线上）

```powershell
# 1) 中文首页可访问且 lang 正确
curl.exe -s https://www.yiwisdom.org/zh | Select-String '<html lang="zh-CN"'

# 2) 英文首页 URL 未变、含 3 条 hreflang
curl.exe -s https://www.yiwisdom.org/ | Select-String 'hreflang'

# 3) 中文页 canonical 自引用
curl.exe -s https://www.yiwisdom.org/zh/about | Select-String 'rel="canonical"'

# 4) 英文旧 URL 不重定向（应为 200，不是 301）
curl.exe -sI https://www.yiwisdom.org/about | Select-String "HTTP|location"

# 5) 占位页 noindex
curl.exe -s https://www.yiwisdom.org/zh/articles | Select-String "noindex"

# 6) sitemap 含中文页
curl.exe -s https://www.yiwisdom.org/sitemap.xml | Select-String "/zh"
```

## 4. 搜索引擎

- [ ] Google Search Console 提交 `https://www.yiwisdom.org/sitemap.xml`（更新后含 /zh 页面）
- [ ] 对 `/zh` 与 8 个中文页面请求编入索引
- [ ] Bing Webmaster 同步提交
- [ ] 1–7 天后复查搜索结果中的语言版本展示

## 5. 回滚预案

- 中文版异常时：`git revert` 该提交即可整体回滚；英文 URL 从未改变，不受影响。
- 仅想临时下线中文收录：从 `ROUTE_MAP` 移除条目 + zh 页面加 noindex（见 TRANSLATION_TODO.md）。

## 6. 后续迭代入口

- 新增翻译页面 → `lib/i18n.ts` ROUTE_MAP 登记（自动同步 hreflang/切换器/sitemap）
- 中文文章 → TRANSLATION_TODO.md 第三节流程
- sitemap 拆分 → `app/sitemap.ts` 已按 enEntries/zhEntries 分组，直接迁移
