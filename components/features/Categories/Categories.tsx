import { products } from "@/data/products";
import { getCategoryIcon } from "@/lib/categoryIcons";
import CatCard from "@/components/ui/CatCard/CatCard";
import styles from "./Categories.module.css";

export default function Categories() {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className={styles.container}>
      <h2>Catálogo</h2>
      <p>Encontrá lo que necesitás en nuestro catálogo</p>
      <section className={styles.items}>
        {categories.map((category) => (
          <CatCard key={category} label={category} icon={getCategoryIcon(category)} />
        ))}
      </section>
    </div>
  );
}
