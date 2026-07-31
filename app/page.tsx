import styles from "./page.module.css";
import Hero from "@/components/features/Hero/Hero";
import Catalog from "@/components/features/Catalog/Catalog";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Hero />
      </div>
      <div className={styles.catalog}>
        <Catalog />
      </div>
    </div>
  );
}
