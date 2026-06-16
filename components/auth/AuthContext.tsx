'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

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
const USERS_KEY = 'changebook_auth_users';

type StoredUser = User & { password: string };

function getStoredUsers(): StoredUser[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function seedDefaultUsers() {
  const users = getStoredUsers();
  if (users.length > 0) return;
  const defaults: StoredUser[] = [
    {
      id: 'u1',
      name: 'Demo Student',
      email: 'demo@changebook.com',
      password: 'demo1234',
      role: 'student',
      enrolledCourses: ['beginner-course'],
    },
    {
      id: 'u2',
      name: 'Master Lian Chen',
      email: 'master@changebook.com',
      password: 'master1234',
      role: 'master',
      enrolledCourses: ['beginner-course', 'intermediate-course', 'advanced-course'],
    },
  ];
  saveUsers(defaults);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    seedDefaultUsers();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setUser(JSON.parse(raw));
      }
    } catch {}
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const protectedRoutes = [/^\/advanced-course/, /^\/consult/];
    const isProtected = protectedRoutes.some((re) => re.test(pathname));
    if (isProtected && !user) {
      router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [pathname, user, isLoading, router]);

  const login = async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 600));
    const users = getStoredUsers();
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!found) {
      return { success: false, error: 'Invalid email or password. Please try again.' };
    }
    const { password: _pw, ...publicUser } = found;
    setUser(publicUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(publicUser));
    return { success: true };
  };

  const register = async (name: string, email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 600));
    const users = getStoredUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: 'An account with this email already exists.' };
    }
    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters.' };
    }
    const newUser: StoredUser = {
      id: 'u' + Date.now(),
      name,
      email,
      password,
      role: 'student',
      enrolledCourses: [],
    };
    const updated = [...users, newUser];
    saveUsers(updated);
    const { password: _pw, ...publicUser } = newUser;
    setUser(publicUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(publicUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    window.location.href = '/';
  };

  const requireAuth = (redirectTo?: string) => {
    if (!user) {
      router.push(`/login?redirect=${encodeURIComponent(redirectTo || pathname)}`);
    }
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
