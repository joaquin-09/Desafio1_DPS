"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      toast.error("Completá todos los campos");
      return;
    }

    const res = login(email, password);
    if (res.ok) {
      toast.success(res.message);
      router.push("/");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <main className="container">
      <div className="form-card">
        <h1>Iniciar sesión</h1>
        <input
          className="form-input"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-form" onClick={handleSubmit}>
          Entrar
        </button>
        <p className="form-link">
          ¿No tenés cuenta? <a href="/registro">Registrate</a>
        </p>
      </div>
    </main>
  );
}