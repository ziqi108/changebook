# I18N 架构 — Yi Wisdom

> 更新：2026-09-30。技术栈：Next.js 14.2.5 App Router（纯静态预渲染，无后端 i18n 依赖）。

## 总体设计

```
URL 约定
├── 英文（默认）: https://www.yiwisdom.org/…          ← URL 与改版前完全一致
└── 简体中文:     https://www.yiwisdom.org/zh/…       ← 仅加 /zh 前缀
```

- **不迁移英文页面到 /en/**，不使用子域名，不使用 `?lang=` 参数。
- **不做任何自动跳转**：无 IP 跳转、无 Accept-Language 跳转、无 Cookie 动态替换正文语言。
- 用户通过导航中的语言切换器（真实 `<a>` 链接）主动选择语言。

## 双根布局（路由组）

App Router 原生多根布局方案：

```
app/
├── (en)/                      ← 英文路由组（URL 不含 (en)）
│   ├── layout.tsx             ← <html lang="en"> + 英文 SEO 元数据
│   ├── page.tsx               ← /
│   ├── about/ articles/ contact/ privacy/ terms/
│   ├── cookie-policy/ refund-policy/ educational-disclaimer/
│   ├── beginner-course/ intermediate-course/ advanced-course/
│   ├── consult/ course/[slug]/ login/ register/
├── (zh)/
│   └── layout.tsx             ← <html lang="zh-CN"> + 中文 SEO 元数据
│       └── zh/
│           ├── page.tsx       ← /zh
│           ├── about/ articles/ contact/ privacy/ terms/
│           └── cookie-policy/ refund-policy/ educational-disclaimer/
├── globals.css                ← 共享样式 + .lang-zh 中文字体/防溢出
├── sitemap.ts / robots.ts     ← 元数据路由（保留在 app 根）
```

- `lang` 属性由各自根布局在**服务端静态 HTML** 中输出（非客户端脚本改写）。
- 跨语言切换是跨根布局导航，Next 自动整页加载（符合预期）。

## 核心配置：lib/i18n.ts

单一数据源驱动三处（切换器 / hreflang / sitemap）：

| 导出 | 用途 |
|---|---|
| `ROUTE_MAP` | 仅登记**中英文均已完整发布**的页面对 |
| `getCounterpart(path)` | 当前路径 → 另一语言路径；无翻译返回 null（切换器据此隐藏链接） |
| `buildAlternates(selfPath, locale, counterpartPath?)` | 生成 canonical + 双向 hreflang + x-default（Next Metadata API 格式）；未配对页面只输出自引用 canonical |
| `absoluteUrl() / SITE_URL / HREFLANG / inLanguage()` | 绝对 URL 与语言标签常量 |

**新增翻译页面的操作**：创建页面 → 在 `ROUTE_MAP` 登记一对 → hreflang、切换器、sitemap 三处自动生效。删除页面时反向检查 `ROUTE_MAP` 即可保证 hreflang 不指向 404。

## 语言切换器

`components/layout/LocaleSwitcher.tsx`（客户端组件，嵌入 Header 桌面/移动端菜单）：

- 真实 `<Link>`；指向**当前页面对应语言版本**（不是首页）。
- 当前语言 `aria-current="true"`；语言名称以各自语言显示（English / 简体中文），无国旗。
- 对应翻译不存在时**隐藏**该语言链接（绝不显示 404/noindex 指向）。
- 无自动重定向、无语言偏好 Cookie（用户主动选择之前不保存任何偏好）。
- 文章页支持 `counterpartOverride`：按 `translationKey` 查找对应语言文章传入。

## 文章 i18n

`lib/data.ts` 的 `Article` 类型新增：

```ts
locale: 'en' | 'zh-CN'      // 每篇文章单一语言
translationKey: string      // 中英文对应文章的稳定关联键（与 slug 无关）
```

- `GET_TRANSLATION(article, targetLocale)`：按 translationKey 查找另一语言已发布文章；不存在返回 undefined，调用方据此**不输出** hreflang / 切换链接（守卫式，杜绝无效 hreflang）。
- 文章详情页（`app/(en)/articles/[slug]/page.tsx`）的 metadata 与语言切换器均已接入该守卫；当前 12 篇文章均为英文（locale='en'，translationKey=slug），故实际只输出英文自引用 canonical。
- 每个语言版本拥有独立 title、slug、description、正文与 JSON-LD（不逐段双语重复正文）。

## 样式（globals.css）

`.lang-zh`（挂在 (zh) 布局的 `<body>` 上）：

- 中文字体回退栈：`'Noto Serif SC' → 'PingFang SC' → 'Hiragino Sans GB' → 'Microsoft YaHei'`（Noto Serif SC 已由 Google Fonts 加载）。
- `.font-display` 覆盖为衬线中文字体（Cormorant Garamond 无 CJK 字形，且其负字距不适用于中文）。
- `h1/h2/h3 { overflow-wrap: anywhere }` 防中文长标题手机端溢出。

## sitemap 策略

`app/sitemap.ts`：统一 sitemap.xml（当前规模足够），数据源已按 `enEntries / zhEntries` 拆分，未来可直接迁移为 sitemap-en.xml + sitemap-zh.xml。只收录已完成且可索引页面；noindex（/zh/articles）与 404 不收录；lastmod 取真实内容更新日期。

## 验证

`scripts/i18n-check.mjs`（`next build` 后运行）：校验 8 对页面的 canonical 自引用、双向 hreflang（en / zh-Hans / x-default，绝对 URL）、`<html lang>`、hreflang 不指向 noindex/404、sitemap 不含 noindex/404 且配对成对收录。任一失败非零退出，可入 CI。
