"use client";

import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const login = (email: string) => setUser({ email });
  const logout = () => setUser(null);

  return { user, login, logout, isAuthenticated: Boolean(user) };
}
