'use client';

import { AuthProvider } from '@/components/auth/AuthContext';

if (typeof window !== 'undefined') {
  const cleanTraeAttrs = () => {
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT);
    let node: Node | null = walker.currentNode;
    while (node) {
      if (node instanceof Element && node.hasAttribute('data-trae-ref')) {
        node.removeAttribute('data-trae-ref');
      }
      node = walker.nextNode();
    }
  };

  cleanTraeAttrs();

  const IGNORE_PATTERNS = [
    'Extra attributes from the server',
    'Hydration failed because',
    'was not the same on the server',
    'data-trae-ref',
    'No default component was found for a parallel route',
  ];

  const shouldIgnore = (args: unknown[]) => {
    const first = args[0];
    if (typeof first !== 'string') return false;
    return IGNORE_PATTERNS.some((p) => first.includes(p));
  };

  const origError = console.error.bind(console);
  console.error = (...args: unknown[]) => {
    if (shouldIgnore(args)) return;
    origError(...args);
  };

  const origWarn = console.warn.bind(console);
  console.warn = (...args: unknown[]) => {
    if (shouldIgnore(args)) return;
    origWarn(...args);
  };
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
