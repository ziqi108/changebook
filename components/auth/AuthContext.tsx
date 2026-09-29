'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'master';
  enrolledCourses: string[];
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  requireAuth: (redirectTo?: string) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = 'changebook_auth_user';

/**
 * Auth is temporarily disabled site-wide: all pages and courses are public.
 * The provider + API surface are intentionally kept so authentication can be
 * restored later. login/register/requireAuth are no-ops that return a clear
 * "unavailable" result; no route guards or redirects run anymore.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user] = useState<User | null>(null);
  const [isLoading] = useState(false);

  useEffect(() => {
    // Clear any session left from when auth was enabled, so no stale UI appears.
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, []);

  const login = async (_email: string, _password: string) => {
    return {
      success: false,
      error: 'Sign-in is temporarily unavailable. All content is currently open without an account.',
    };
  };

  const register = async (_name: string, _email: string, _password: string) => {
    return {
      success: false,
      error: 'New account registration is temporarily closed. Please check back later.',
    };
  };

  const logout = () => {
    // No active session while auth is disabled.
  };

  const requireAuth = (_redirectTo?: string) => {
    // No-op: nothing is protected while auth is disabled.
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, requireAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
