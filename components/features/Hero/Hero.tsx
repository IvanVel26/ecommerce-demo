import Card from "@/components/ui/Card/Card";
import styles from "./Hero.module.css";

export default function Hero() {
  const products = [
    { id: 1, name: "Iphone 13", size: 2 },
    { id: 2, name: "Samsung A10", size: 1 },
    { id: 3, name: "Producto", size: 1 },
  ];

  return (
    <section className={styles.heroSection}>
      {products.map((product) => (
        <Card key={product.id} text={product.name} size={product.size} />
      ))}
    </section>
  );
}
