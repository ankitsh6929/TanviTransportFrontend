import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("ttc_user");
    return raw ? JSON.parse(raw) : null;
  });
  const [token, setToken] = useState(localStorage.getItem("ttc_token") || "");

  useEffect(() => {
    if (user) localStorage.setItem("ttc_user", JSON.stringify(user));
    else localStorage.removeItem("ttc_user");
  }, [user]);

  useEffect(() => {
    if (token) localStorage.setItem("ttc_token", token);
    else localStorage.removeItem("ttc_token");
  }, [token]);

  const login = async (email, password) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      setToken(data.token);
      return { ok: true };
    }
    return { ok: false, error: data.message || "Login failed" };
  };

  const register = async (name, email, password) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      setToken(data.token);
      return { ok: true };
    }
    return { ok: false, error: data.message || "Registration failed" };
  };

  const logout = () => {
    setUser(null);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
