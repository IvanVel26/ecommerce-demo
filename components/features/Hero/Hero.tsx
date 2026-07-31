import Link from "next/link";
import { products } from "@/data/products";
import { getProductIcon } from "@/lib/categoryIcons";
import styles from "./Hero.module.css";

const featuredIds = [1, 2, 4];

export default function Hero() {
  const featured = featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is (typeof products)[number] => Boolean(p));

  return (
    <section className={styles.heroSection}>
      {featured.map((product, index) => {
        const Icon = getProductIcon(product.name);
        const big = index === 0;

        return (
          <Link
            href="/productos"
            key={product.id}
            className={`${styles.card} ${big ? styles.cardBig : ""} ${styles[`tone${index}`]}`}
          >
            <Icon className={styles.cardIcon} strokeWidth={1} />
            <div className={styles.cardContent}>
              <h2>{product.name}</h2>
              <p className={styles.price}>${product.price.toLocaleString("es-AR")}</p>
              <span className={styles.cta}>Ver más</span>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
