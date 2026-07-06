import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../types";

const STORAGE_KEY = "obsidian.demo.session";

interface AuthContextValue {
  user: User | null;
  isDemo: true;
  login: (email: string, name?: string) => void;
  logout: () => void;
  toggleLibrary: (slug: string) => void;
  toggleWishlist: (slug: string) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function readSession(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => readSession());

  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  }, [user]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isDemo: true,
      login: (email, name) => {
        setUser({
          name: name?.trim() || email.split("@")[0],
          email,
          joined: new Date().toISOString(),
          library: [],
          wishlist: [],
        });
      },
      logout: () => setUser(null),
      toggleLibrary: (slug) =>
        setUser((prev) => {
          if (!prev) return prev;
          const has = prev.library.includes(slug);
          return {
            ...prev,
            library: has
              ? prev.library.filter((s) => s !== slug)
              : [...prev.library, slug],
          };
        }),
      toggleWishlist: (slug) =>
        setUser((prev) => {
          if (!prev) return prev;
          const has = prev.wishlist.includes(slug);
          return {
            ...prev,
            wishlist: has
              ? prev.wishlist.filter((s) => s !== slug)
              : [...prev.wishlist, slug],
          };
        }),
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
