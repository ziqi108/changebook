'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getCounterpart, type Locale } from '@/lib/i18n';

/**
 * 语言切换器
 * - 真实 <Link>，指向当前页面的对应语言版本（不是首页）
 * - 当前语言 aria-current="true"
 * - 对应翻译不存在时隐藏该语言链接（绝不产生 404/noindex 指向）
 * - 不做自动跳转；键盘可访问（原生链接）
 */
export function LocaleSwitcher({
  locale,
  counterpartOverride,
}: {
  locale: Locale;
  /** 页面自行解析对应语言版本时传入（如文章按 translationKey 查找）；
   *  undefined = 回退到 ROUTE_MAP 查找 */
  counterpartOverride?: string;
}) {
  const pathname = usePathname() ?? '/';
  const counterpart = counterpartOverride ?? getCounterpart(pathname);

  const items: { key: Locale; label: string; href: string; available: boolean }[] = [
    {
      key: 'en',
      label: 'English',
      href: locale === 'en' ? pathname : counterpart ?? '',
      available: locale === 'en' ? true : counterpart !== null,
    },
    {
      key: 'zh-CN',
      label: '简体中文',
      href: locale === 'zh-CN' ? pathname : counterpart ?? '',
      available: locale === 'zh-CN' ? true : counterpart !== null,
    },
  ];

  return (
    <nav
      aria-label={locale === 'zh-CN' ? '语言切换' : 'Language switcher'}
      className="flex items-center gap-1.5"
    >
      {items
        .filter((i) => i.available)
        .map((i, idx) => (
          <span key={i.key} className="flex items-center gap-1.5">
            {idx > 0 && <span className="text-ink/20 text-[11px]">|</span>}
            {i.key === locale ? (
              <span
                aria-current="true"
                className="text-[11px] tracking-[0.08em] text-ink font-medium"
              >
                {i.label}
              </span>
            ) : (
              <Link
                href={i.href}
                className="text-[11px] tracking-[0.08em] text-ink/40 hover:text-ink transition-colors"
              >
                {i.label}
              </Link>
            )}
          </span>
        ))}
    </nav>
  );
}
