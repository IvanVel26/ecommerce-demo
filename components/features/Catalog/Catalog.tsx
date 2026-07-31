"use client";

import { useState } from "react";
import { SearchX } from "lucide-react";
import Card from "@/components/ui/Card/Card";
import { products } from "@/data/products";
import styles from "./Catalog.module.css";

interface CatalogProps {
  initialSearch?: string;
}

export default function Catalog({ initialSearch = "" }: CatalogProps) {
  const [search, setSearch] = useState(initialSearch);
  const [onlyInStock, setOnlyInStock] = useState(false);

  const filtered = products.filter((product) => {
    const term = search.trim().toLowerCase();
    const matchesSearch =
      term === "" ||
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term);
    const matchesStock = !onlyInStock || product.stock > 0;
    return matchesSearch && matchesStock;
  });

  return (
    <div className={styles.catalogContainer}>
      <div className={styles.filters}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={onlyInStock}
            onChange={(e) => setOnlyInStock(e.target.checked)}
          />
          Solo con stock
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.emptyState}>
          <SearchX size={32} strokeWidth={1.5} />
          <p>Ningún producto coincide con la búsqueda.</p>
        </div>
      ) : (
        <section className={styles.grid}>
          {filtered.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}
