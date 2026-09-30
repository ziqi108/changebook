# hreflang / canonical 审计 — Yi Wisdom

> 更新：2026-09-30。验证方式：`next build` 后运行 `node scripts/i18n-check.mjs`，对 `.next/server/app/**/*.html` 预渲染 HTML 逐对校验（脚本随 lib/i18n.ts ROUTE_MAP 同步维护）。

## 检查结果（8 对页面，全部通过）

对以下每一对，检查了 7 项：

| # | 检查项 | 结果 |
|---|---|---|
| 1 | 英文 canonical 自引用（不指向中文） | ✓ 8/8 |
| 2 | 中文 canonical 自引用（不指向英文） | ✓ 8/8 |
| 3 | 双向 hreflang（两侧页面输出同一组 alternate） | ✓ 8/8 |
| 4 | `hreflang="en"` → 英文绝对 URL | ✓ 8/8 |
| 5 | `hreflang="zh-Hans"` → 中文绝对 URL | ✓ 8/8 |
| 6 | `hreflang="x-default"` → 英文默认页 | ✓ 8/8 |
| 7 | hreflang 目标非 404 / 非 noindex / 非重定向 | ✓ 8/8 |

附加检查：

| 检查项 | 结果 |
|---|---|
| `<html lang="en">`（英文页）/ `<html lang="zh-CN">`（中文页）在静态 HTML 中输出 | ✓ |
| hreflang 全部为绝对 URL（https://www.yiwisdom.org/…） | ✓ |
| `/zh/articles`（noindex）未出现在任何 hreflang 目标中 | ✓ |
| sitemap.xml：33 条 URL，含全部 8 对中英文页面 + 英文文章页；无 noindex/404 页面；配对成对收录 | ✓ |

## 每对页面实际输出的标签（以 /about 为例）

英文 `/about`：

```html
<link rel="canonical" href="https://www.yiwisdom.org/about"/>
<link rel="alternate" hreflang="en" href="https://www.yiwisdom.org/about"/>
<link rel="alternate" hreflang="zh-Hans" href="https://www.yiwisdom.org/zh/about"/>
<link rel="alternate" hreflang="x-default" href="https://www.yiwisdom.org/about"/>
```

中文 `/zh/about`（canonical 不同，alternate 集合相同）：

```html
<link rel="canonical" href="https://www.yiwisdom.org/zh/about"/>
<link rel="alternate" hreflang="en" href="https://www.yiwisdom.org/about"/>
<link rel="alternate" hreflang="zh-Hans" href="https://www.yiwisdom.org/zh/about"/>
<link rel="alternate" hreflang="x-default" href="https://www.yiwisdom.org/about"/>
```

## 实现说明

- 标签由 Next.js Metadata API（`alternates.canonical` + `alternates.languages`）在服务端静态 HTML 中生成；React SSR 将 `hreflang` 输出为 `hrefLang`，HTML 属性名大小写不敏感，搜索引擎按规范解析，不影响生效（脚本校验时已兼容）。
- 未配对页面（文章、课程、/consult 等）只输出自引用 canonical，**不输出任何 hreflang**——杜绝指向未来才发布、404 或 noindex 的中文页。
- 文章 hreflang 为守卫式：仅当 `GET_TRANSLATION(article, 'zh-CN')` 找到已发布中文对应文章（translationKey 相同）时才输出双向 hreflang 与切换器链接。

## 禁止项复核

| 禁止项 | 状态 |
|---|---|
| 中文 canonical 指向英文 / 英文 canonical 指向中文 | 未发生 |
| hreflang 指向 noindex | 未发生 |
| hreflang 指向 404 | 未发生 |
| hreflang 指向重定向 URL | 未发生（站点无重定向路由） |
| IP / Accept-Language 强制跳转 | 未实现（代码中无任何跳转逻辑） |
| Cookie 动态替换同一 URL 主体语言 | 未实现（无语言偏好 Cookie） |
