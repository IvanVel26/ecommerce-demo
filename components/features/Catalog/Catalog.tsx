import CatCard from "@/components/ui/CatCard/CatCard";
import styles from "./Catalog.module.css";

export default function Catalog() {
  const items = [
    { id: 1, name: "Mouse" },
    { id: 2, name: "Teclado" },
    { id: 3, name: "Celular" },
    { id: 4, name: "producto" },
  ];
  return (
    <div className={styles.catalogContainer}>
      <h1>Catalogo</h1>
      <p>Encontra Lo que necesitas en nuestro catalogo</p>
      <section className={styles.catalogItems}>
        {items.map((i) => (
          <CatCard key={i.id} text={i.name} />
        ))}
      </section>
    </div>
  );
}
