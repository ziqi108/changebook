# 翻译待办 — Yi Wisdom

> 更新：2026-09-30。本清单记录尚未翻译/尚未完成的内容，以及中文文案的审核要求。

## 一、中文文案人工校对（发布前必读）

**当前 9 个中文页面的文案由 AI 起草（非机器直译，为自然中文重写），但尚未经人工母语校对。**
按项目规则"不使用未经人工校对的翻译直接发布"，网站所有者应在正式推广前通读并确认以下页面：

- [ ] `/zh`（首页：首屏、教学方法、课程卡片、免责说明）
- [ ] `/zh/about`
- [ ] `/zh/contact`
- [ ] `/zh/privacy`
- [ ] `/zh/terms`
- [ ] `/zh/cookie-policy`
- [ ] `/zh/refund-policy`
- [ ] `/zh/educational-disclaimer`

如需暂缓发布中文版：在 `app/(zh)/layout.tsx` 与各 zh 页面加 `robots: { index: false }`，并从 `lib/i18n.ts` 的 `ROUTE_MAP` 移除对应条目（hreflang/切换器/sitemap 自动同步）。

## 二、待翻译页面（完成前不进入中文导航/hreflang/sitemap）

| 页面 | 优先级 | 备注 |
|---|---|---|
| 12 篇英文文章（/articles/[slug]） | 高 | 每篇需中文版独立 title/slug/description/正文；发布时 locale='zh-CN'，translationKey 与英文原文设为共同键（同时修改英文条的 translationKey） |
| `/beginner-course` | 高 | 中文首页课程卡当前链向英文页 |
| `/intermediate-course` | 高 | 同上 |
| `/consult`（Reflection Session 中文版） | 中 | 注意与英文版同步 Educational Notice 措辞 |
| `/advanced-course` | 中 | 保持 In Development 状态一致 |
| 44 个每日卦象的英文 description | 中 | 中文首页卦象区当前只显示卦名+反思式问题，不渲染英文描述 |
| `/course/[slug]` 课程内容子页 | 低 | 页面量大，可后置 |
| `/login` `/register` | 低 | 如有中文用户注册需求再翻译 |

## 三、中文文章发布流程（供未来参考）

1. 在 `lib/data.ts` 新增条目：`locale: 'zh-CN'`，`translationKey` 与英文原文相同（英文条同步改为共同键），中文 title/slug/description/body，真实日期。
2. 创建 `app/(zh)/zh/articles/[slug]/page.tsx`（中文模板，守卫式 hreflang 已在数据层就绪）。
3. 确认 `GET_TRANSLATION` 能双向找到对方后，中文文章自动进入：双向 hreflang、切换器链接。sitemap 需在 `zhEntries` 或新增 `zhArticlePages` 中加入。
4. 运行 `node scripts/i18n-check.mjs` 验证。

## 四、其他待办（与 CONTENT_TODO.md 衔接）

- [ ] OG 图片（og-image/og-course/og-article/logo）仍缺失——中英文社交分享均无预览图（所有者提供素材）。
- [ ] 中文首页课程卡链接目标为英文课程页——翻译完成后改为 /zh/ 前缀。
- [ ] newsletter 为英文——如提供中文订阅，需独立的中文入口与文案。

## 五、约束重申

- 不以机器翻译直接发布；不生成空白中文页面。
- 未翻译页面：noindex / 不进 sitemap / 不进切换器 / 不输出 hreflang。
- 中英文 SEO 字段（title/description/keywords/OG/JSON-LD）各自独立撰写，不逐词对译。
