"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { count } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          📚 Librería
        </Link>
        <div className="navbar-links">
          <Link href="/login" className="nav-link">
            Iniciar sesión
          </Link>
          <Link href="/carrito" className="nav-link cart-link">
            🛒 Carrito
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}