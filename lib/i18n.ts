/**
 * i18n 基础配置 — Yi Wisdom
 *
 * 架构：
 * - 英文为默认语言，URL 保持根路径（/、/about、/articles ...）
 * - 简体中文使用 /zh/ 前缀（/zh、/zh/about ...）
 * - 英文页面在 app/(en)/ 路由组，中文页面在 app/(zh)/zh/ 路由组
 * - 不做 IP / Accept-Language / Cookie 强制跳转
 *
 * ROUTE_MAP 只登记"中英文均已完整发布"的页面对。
 * 只有出现在这里的页面才会输出 hreflang、进入语言切换器、加入 sitemap。
 * 尚未翻译的页面不登记 —— 不产生空白中文页、无效 hreflang 或 noindex 收录。
 */

export const SITE_URL = 'https://www.yiwisdom.org';

export type Locale = 'en' | 'zh-CN';

/** hreflang 属性值：英文用 en，中文用 zh-Hans（BCP47 区域子标签写法） */
export const HREFLANG = {
  en: 'en',
  zh: 'zh-Hans',
  xDefault: 'x-default',
} as const;

/** 每条映射：en 路径（以 / 开头）与 zh 路径（含 /zh 前缀，首页为 /zh） */
export type RoutePair = { en: string; zh: string };

/**
 * 中英文均已发布的页面对（语言切换器 / hreflang / sitemap 的唯一数据源）。
 * 新增翻译页面时在此登记即可，三处自动同步。
 */
export const ROUTE_MAP: RoutePair[] = [
  { en: '/', zh: '/zh' },
  { en: '/about', zh: '/zh/about' },
  { en: '/contact', zh: '/zh/contact' },
  { en: '/privacy', zh: '/zh/privacy' },
  { en: '/terms', zh: '/zh/terms' },
  { en: '/cookie-policy', zh: '/zh/cookie-policy' },
  { en: '/refund-policy', zh: '/zh/refund-policy' },
  { en: '/educational-disclaimer', zh: '/zh/educational-disclaimer' },
];

/** 当前路径对应的另一语言路径；无翻译时返回 null（切换器据此隐藏链接） */
export function getCounterpart(pathname: string): string | null {
  const normalize = (p: string) => (p !== '/' && p.endsWith('/') ? p.replace(/\/$/, '') : p);
  const p = normalize(pathname);
  const isZh = p === '/zh' || p.startsWith('/zh/');
  const pair = ROUTE_MAP.find((r) => (isZh ? r.zh === p : r.en === p));
  if (!pair) return null;
  return isZh ? pair.en : pair.zh;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === '/' ? '' : path}`;
}

/**
 * 生成 Next.js Metadata 的 alternates 配置（canonical + hreflang）。
 * selfPath：当前页面路径；counterpartPath：另一语言路径。
 * 已配对页面：canonical 自引用 + 双向 hreflang + x-default 指英文。
 * 未配对页面（counterpartPath 为空）：仅 canonical 自引用，不输出 hreflang。
 */
export function buildAlternates(
  selfPath: string,
  locale: Locale = 'en',
  counterpartPath?: string | null
): { canonical: string; languages?: Record<string, string> } {
  const canonical = absoluteUrl(selfPath);
  if (!counterpartPath) return { canonical };
  const self = canonical;
  const other = absoluteUrl(counterpartPath);
  const enUrl = locale === 'en' ? self : other;
  const zhUrl = locale === 'en' ? other : self;
  return {
    canonical,
    languages: {
      [HREFLANG.en]: enUrl,
      [HREFLANG.zh]: zhUrl,
      [HREFLANG.xDefault]: enUrl,
    },
  };
}

/** JSON-LD / meta 使用的 inLanguage 值 */
export function inLanguage(locale: Locale): string {
  return locale === 'zh-CN' ? 'zh-CN' : 'en';
}
