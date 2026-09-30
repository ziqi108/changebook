import type { MetadataRoute } from 'next';
import { FEATURED_ARTICLES } from '@/lib/data';
import { ROUTE_MAP, SITE_URL, absoluteUrl } from '@/lib/i18n';

/**
 * 统一 sitemap（当前规模下使用单一 sitemap.xml）。
 *
 * 结构上已按语言拆分数据源（enEntries / zhEntries），未来若页面量增大，
 * 可直接迁移到 sitemap-en.xml 与 sitemap-zh.xml，无需重写逻辑。
 *
 * 收录规则：
 * - 只收录已完成且可索引的页面（noindex 的 /zh/articles 不收录）
 * - 中文页面仅收录 ROUTE_MAP 中登记的中英文均已发布页面
 * - lastmod 反映真实内容更新时间（本次 i18n 改版日期）
 */

// 本次 i18n 改版与内容整改的日期，作为静态页 lastmod
const LASTMOD = new Date('2026-09-30');

export default function sitemap(): MetadataRoute.Sitemap {
  /** 英文页面（默认语言，位于根路径） */
  const enEntries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl('/'),
      lastModified: LASTMOD,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/beginner-course`,
      lastModified: LASTMOD,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/intermediate-course`,
      lastModified: LASTMOD,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/advanced-course`,
      lastModified: LASTMOD,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/consult`,
      lastModified: LASTMOD,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: LASTMOD,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: LASTMOD,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: LASTMOD,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: LASTMOD,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookie-policy`,
      lastModified: LASTMOD,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/refund-policy`,
      lastModified: LASTMOD,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/educational-disclaimer`,
      lastModified: LASTMOD,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: LASTMOD,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  /** 中文页面：仅收录 ROUTE_MAP 登记的中英文均已发布页面 */
  const zhEntries: MetadataRoute.Sitemap = ROUTE_MAP.map((pair) => ({
    url: absoluteUrl(pair.zh),
    lastModified: LASTMOD,
    changeFrequency: pair.zh === '/zh' ? ('weekly' as const) : ('yearly' as const),
    priority: pair.zh === '/zh' ? 0.9 : 0.3,
  }));

  /** 英文文章页 */
  const articlePages: MetadataRoute.Sitemap = FEATURED_ARTICLES.filter(
    (a) => a.locale === 'en'
  ).map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'never' as const,
    priority: 0.7,
  }));

  // 未来：中文文章页加入 zhEntries（仅当文章已发布且可索引时）
  return [...enEntries, ...zhEntries, ...articlePages];
}
