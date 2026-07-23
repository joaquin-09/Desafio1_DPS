"use client";

import { useState } from "react";
import { products, categories, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [selected, setSelected] = useState("Todas");

  const filtered =
    selected === "Todas"
      ? products
      : products.filter((p) => p.category === selected);

  const handleAdd = (product: Product) => {
    console.log("Agregar:", product.title);
  };

  return (
    <main className="container">
      <h1 style={{ marginBottom: "1.5rem" }}>📚 Librería</h1>

      <div className="filtros">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filtro-btn ${selected === cat ? "activo" : ""}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={handleAdd} />
        ))}
      </div>
    </main>
  );
}