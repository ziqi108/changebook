'use client';

import { AuthProvider } from '@/components/auth/AuthContext';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
