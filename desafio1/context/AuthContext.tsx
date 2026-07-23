"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  currentUser: User | null;
  register: (user: User) => { ok: boolean; message: string };
  login: (email: string, password: string) => { ok: boolean; message: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const sesion = localStorage.getItem("sesion");
    if (sesion) setCurrentUser(JSON.parse(sesion));
  }, []);

  const getUsers = (): User[] => {
    const data = localStorage.getItem("usuarios");
    return data ? JSON.parse(data) : [];
  };

  const register = (user: User) => {
    const users = getUsers();
    if (users.some((u) => u.email === user.email)) {
      return { ok: false, message: "Ese correo ya está registrado" };
    }
    users.push(user);
    localStorage.setItem("usuarios", JSON.stringify(users));
    return { ok: true, message: "Registro exitoso" };
  };

  const login = (email: string, password: string) => {
    const users = getUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      return { ok: false, message: "Correo o contraseña incorrectos" };
    }
    setCurrentUser(user);
    localStorage.setItem("sesion", JSON.stringify(user));
    return { ok: true, message: `Bienvenido, ${user.name}` };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("sesion");
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
}