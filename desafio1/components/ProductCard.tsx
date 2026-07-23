import Image from "next/image";
import { toast } from "sonner";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  const handleClick = () => {
    onAdd(product);
    toast.success(`"${product.title}" agregado al carrito`);
  };

  return (
    <div className="card">
      <Image
        src={product.urlImage}
        alt={product.title}
        width={90}
        height={130}
        className="card-img"
      />
      <div className="card-info">
        <h3 className="card-title">{product.title}</h3>
        <span className="card-author">{product.author}</span>
        <span className="card-badge">{product.category}</span>
        <p className="card-desc">{product.description}</p>
        <div className="card-footer">
          <span className="precio">${product.price.toFixed(2)}</span>
          <button className="btn" onClick={handleClick}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}