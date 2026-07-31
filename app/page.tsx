import Hero from "@/components/features/Hero/Hero";
import Categories from "@/components/features/Categories/Categories";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className={styles.categoriesSection}>
        <Categories />
      </div>
    </div>
  );
}
