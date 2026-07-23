"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";

export default function CarritoPage() {
  const { items, increase, decrease, removeFromCart, total } = useCart();

  const handleRemove = (id: number, title: string) => {
    removeFromCart(id);
    toast.error(`"${title}" eliminado del carrito`);
  };

  if (items.length === 0) {
    return (
      <main className="container">
        <div className="carrito-vacio">
          <h2>Tu carrito está vacío 🛒</h2>
          <p>Agregá algunos libros desde el catálogo.</p>
          <Link href="/" className="btn" style={{ display: "inline-block", marginTop: "1rem" }}>
            Ir al catálogo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <h1 style={{ marginBottom: "1.5rem" }}>Tu carrito</h1>

      {items.map((item) => (
        <div key={item.id} className="carrito-item">
          <Image
            src={item.urlImage}
            alt={item.title}
            width={60}
            height={85}
            className="card-img"
          />
          <div className="carrito-info">
            <div className="carrito-titulo">{item.title}</div>
            <div className="carrito-precio">
              ${item.price.toFixed(2)} c/u
            </div>
          </div>

          <div className="cantidad-control">
            <button className="cantidad-btn" onClick={() => decrease(item.id)}>
              −
            </button>
            <span>{item.quantity}</span>
            <button className="cantidad-btn" onClick={() => increase(item.id)}>
              +
            </button>
          </div>

          <strong>${(item.price * item.quantity).toFixed(2)}</strong>

          <button
            className="btn-eliminar"
            onClick={() => handleRemove(item.id, item.title)}
            title="Eliminar"
          >
            🗑️
          </button>
        </div>
      ))}

      <div className="carrito-resumen">
        <div className="carrito-total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Link href="/factura">
          <button className="btn-pagar">Finalizar compra</button>
        </Link>
      </div>
    </main>
  );
}