import { Package } from "lucide-react";
import styles from "./Card.module.css";
import type { Product } from "@/data/products";
import { getProductIcon } from "@/lib/categoryIcons";

interface CardProps {
  product: Product;
}

const toneByCategory: Record<string, string> = {
  Accesorios: "tone0",
  Audio: "tone1",
  Monitores: "tone2",
};

export default function Card({ product }: CardProps) {
  const outOfStock = product.stock === 0;
  const Icon = getProductIcon(product.name);
  const tone = toneByCategory[product.category] ?? "tone0";

  return (
    <div className={styles.card}>
      <div className={`${styles.imagePlaceholder} ${styles[tone]}`}>
        <Icon size={40} strokeWidth={1} />
      </div>

      <div className={styles.content}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <span className={styles.price}>${product.price.toLocaleString("es-AR")}</span>
          <span className={`${styles.stock} ${outOfStock ? styles.outOfStock : ""}`}>
            <Package size={14} />
            {outOfStock ? "Sin stock" : `${product.stock} disponibles`}
          </span>
        </div>

        <button className={styles.button} disabled={outOfStock}>
          {outOfStock ? "No disponible" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
}
