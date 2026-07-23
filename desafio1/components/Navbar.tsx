"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { count } = useCart();
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Sesión cerrada");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          📚 Librería
        </Link>
        <div className="navbar-links">
          {currentUser ? (
            <>
              <span className="nav-link">Hola, {currentUser.name}</span>
              <button className="nav-link" onClick={handleLogout} style={{ background: "none", border: "none", cursor: "pointer" }}>
                Salir
              </button>
            </>
          ) : (
            <Link href="/login" className="nav-link">
              Iniciar sesión
            </Link>
          )}
          <Link href="/carrito" className="nav-link cart-link">
            🛒 Carrito
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}