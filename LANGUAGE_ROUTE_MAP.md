# 语言路由映射 — Yi Wisdom

> 更新：2026-09-30。基线：`lib/i18n.ts` 的 `ROUTE_MAP`。

## 已建立的中英文对应关系（8 对，均已完整发布）

| 英文 URL（默认） | 中文 URL | hreflang | sitemap | 语言切换器 |
|---|---|---|---|---|
| `https://www.yiwisdom.org/` | `https://www.yiwisdom.org/zh` | ✓ 双向 | ✓ / ✓ | ✓ / ✓ |
| `/about` | `/zh/about` | ✓ 双向 | ✓ / ✓ | ✓ / ✓ |
| `/contact` | `/zh/contact` | ✓ 双向 | ✓ / ✓ | ✓ / ✓ |
| `/privacy` | `/zh/privacy` | ✓ 双向 | ✓ / ✓ | ✓ / ✓ |
| `/terms` | `/zh/terms` | ✓ 双向 | ✓ / ✓ | ✓ / ✓ |
| `/cookie-policy` | `/zh/cookie-policy` | ✓ 双向 | ✓ / ✓ | ✓ / ✓ |
| `/refund-policy` | `/zh/refund-policy` | ✓ 双向 | ✓ / ✓ | ✓ / ✓ |
| `/educational-disclaimer` | `/zh/educational-disclaimer` | ✓ 双向 | ✓ / ✓ | ✓ / ✓ |

## 仅有英文的页面（无中文版 → 不输出 hreflang、切换器只显示 English）

| 英文 URL | 中文状态 | 说明 |
|---|---|---|
| `/articles` | 未翻译 | 中文文章索引 `/zh/articles` 为 noindex 占位页（诚实说明 + 引流英文版），不配对 |
| `/articles/[slug]`（12 篇） | 未翻译 | 待人工翻译；发布时按 translationKey 关联 |
| `/beginner-course` | 未翻译 | 中文首页课程卡以中文介绍并链向英文页 |
| `/intermediate-course` | 未翻译 | 同上 |
| `/advanced-course` | 未翻译 | 同上 |
| `/consult` | 未翻译 | 同上 |
| `/course/[slug]`（4 条） | 未翻译 | 课程内容子页 |
| `/login` `/register` | 不翻译 | 账户流程页，暂无中文需求 |

## 中文占位页（noindex，不进 sitemap/hreflang/切换器）

| URL | 状态 |
|---|---|
| `/zh/articles` | noindex 占位：说明中文文章正在翻译，链向英文 Journal |

## 代码映射（页面文件位置）

| 英文源文件 | 中文源文件 |
|---|---|
| `app/(en)/page.tsx` | `app/(zh)/zh/page.tsx` |
| `app/(en)/about/page.tsx` | `app/(zh)/zh/about/page.tsx` |
| `app/(en)/contact/page.tsx` | `app/(zh)/zh/contact/page.tsx` |
| `app/(en)/privacy/page.tsx` | `app/(zh)/zh/privacy/page.tsx` |
| `app/(en)/terms/page.tsx` | `app/(zh)/zh/terms/page.tsx` |
| `app/(en)/cookie-policy/page.tsx` | `app/(zh)/zh/cookie-policy/page.tsx` |
| `app/(en)/refund-policy/page.tsx` | `app/(zh)/zh/refund-policy/page.tsx` |
| `app/(en)/educational-disclaimer/page.tsx` | `app/(zh)/zh/educational-disclaimer/page.tsx` |

**删除页面时**：同步从 `ROUTE_MAP` 移除对应条目（否则 hreflang/切换器/sitemap 指向 404），并运行 `node scripts/i18n-check.mjs` 验证。
