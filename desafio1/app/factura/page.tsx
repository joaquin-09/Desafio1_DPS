"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import jsPDF from "jspdf";
import emailjs from "@emailjs/browser";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function FacturaPage() {
  const { items, total, clearCart } = useCart();
  const { currentUser } = useAuth();
  const router = useRouter();
  
  const [numero] = useState("F-" + Date.now().toString().slice(-6));

  if (!currentUser) {
    return (
      <main className="container">
        <div className="carrito-vacio">
          <h2>Necesitás iniciar sesión para facturar</h2>
          <button
            className="btn"
            onClick={() => router.push("/login")}
            style={{ marginTop: "1rem" }}
          >
            Ir a iniciar sesión
          </button>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="container">
        <div className="carrito-vacio">
          <h2>No hay productos para facturar 🧾</h2>
          <button
            className="btn"
            onClick={() => router.push("/")}
            style={{ marginTop: "1rem" }}
          >
            Ir al catálogo
          </button>
        </div>
      </main>
    );
  }

  const fecha = new Date().toLocaleDateString("es-SV");

  const generarPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Librería - Factura", 14, 20);

    doc.setFontSize(11);
    doc.text(`No. Factura: ${numero}`, 14, 32);
    doc.text(`Fecha: ${fecha}`, 14, 39);
    doc.text(`Cliente: ${currentUser.name}`, 14, 46);
    doc.text(`Correo: ${currentUser.email}`, 14, 53);

    let y = 68;
    doc.setFontSize(10);
    doc.text("Producto", 14, y);
    doc.text("Cant.", 120, y);
    doc.text("Precio", 145, y);
    doc.text("Subtotal", 175, y);
    doc.line(14, y + 2, 196, y + 2);

    y += 10;
    items.forEach((item) => {
      const subtotal = (item.price * item.quantity).toFixed(2);
      doc.text(item.title.slice(0, 45), 14, y);
      doc.text(String(item.quantity), 122, y);
      doc.text(`$${item.price.toFixed(2)}`, 145, y);
      doc.text(`$${subtotal}`, 175, y);
      y += 8;
    });

    doc.line(14, y, 196, y);
    y += 8;
    doc.setFontSize(12);
    doc.text(`TOTAL: $${total.toFixed(2)}`, 145, y);

    doc.save(`factura-${numero}.pdf`);
    toast.success("Factura descargada");
  };

  const enviarCorreo = async () => {
    const detalle = items
      .map(
        (item) =>
          `• ${item.title}  —  x${item.quantity}  —  $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    const params = {
      numero: numero,
      to_name: currentUser.name,
      to_email: currentUser.email,
      detalle: detalle,
      total: `$${total.toFixed(2)}`,
    };

    try {
      toast.loading("Enviando factura...");
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        params,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.dismiss();
      toast.success(`Factura enviada a ${currentUser.email}`);
    } catch (error) {
      toast.dismiss();
      toast.error("No se pudo enviar el correo");
      console.error(error);
    }
  };

  const finalizar = () => {
    clearCart();
    toast.success("¡Gracias por tu compra!");
    router.push("/");
  };

  return (
    <main className="container">
      <div className="factura-card">
        <h1>Factura {numero}</h1>
        <p className="factura-datos">
          <strong>Cliente:</strong> {currentUser.name} <br />
          <strong>Correo:</strong> {currentUser.email} <br />
          <strong>Fecha:</strong> {fecha}
        </p>

        <table className="factura-tabla">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cant.</th>
              <th>Precio</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="factura-total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="factura-botones">
          <button className="btn" onClick={generarPDF}>
            📄 Descargar PDF
          </button>
          <button className="btn" onClick={enviarCorreo}>
            ✉️ Enviar por correo
          </button>
          <button className="btn-pagar" onClick={finalizar}>
            Finalizar compra
          </button>
        </div>
      </div>
    </main>
  );
}