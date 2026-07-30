import Link from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className="navbarLogo">
          <Link href="/"> Logo</Link>
        </div>

        <div className={styles.navbarLinks}>
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link>
        </div>

        <div className={styles.navbarIconWrapper}>
          <div className={styles.searchForm}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Buscar Productos"
            />
            <button className={styles.searchButton} type="submit">
              Search
            </button>
          </div>
          <Link href="/login">Log in</Link>
          <Link href="/carrito">carrito</Link>
        </div>
      </div>
    </nav>
  );
};
