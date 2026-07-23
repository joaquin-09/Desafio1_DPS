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
    <main className="container py-4">
      <h1 className="mb-4">📚 Librería</h1>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm ${
              selected === cat ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row g-3">
        {filtered.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
            <ProductCard product={product} onAdd={handleAdd} />
          </div>
        ))}
      </div>
    </main>
  );
}