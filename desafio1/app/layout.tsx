import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Librería",
  description: "E-commerce de libros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <Toaster position="top-center" richColors />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}