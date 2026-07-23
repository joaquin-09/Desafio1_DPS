"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

export default function RegistroPage() {
  const { register } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !password) {
      toast.error("Completá todos los campos");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("El correo no es válido");
      return;
    }
    if (password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    const res = register({ name, email, password });
    if (res.ok) {
      toast.success(res.message);
      router.push("/login");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <main className="container">
      <div className="form-card">
        <h1>Crear cuenta</h1>
        <input
          className="form-input"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          placeholder="Contraseña (mín. 6 caracteres)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-form" onClick={handleSubmit}>
          Registrarme
        </button>
        <p className="form-link">
          ¿Ya tenés cuenta? <a href="/login">Iniciá sesión</a>
        </p>
      </div>
    </main>
  );
}