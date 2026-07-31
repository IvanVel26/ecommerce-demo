"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, User, LogOut } from "lucide-react";
import { getSession, clearSession, onSessionChange, type Session } from "@/lib/auth";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const router = useRouter();
  const [session, setSessionState] = useState<Session | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSessionState(getSession());
    return onSessionChange(() => setSessionState(getSession()));
  }, []);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/productos?buscar=${encodeURIComponent(search)}`);
  };

  const handleLogout = () => {
    clearSession();
    setSessionState(null);
    router.push("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo}>
          Tienda
        </Link>

        <div className={styles.navbarLinks}>
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link>
        </div>

        <div className={styles.navbarIconWrapper}>
          <form className={styles.searchForm} onSubmit={handleSearch}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Buscar productos"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className={styles.searchButton} type="submit" aria-label="Buscar">
              <Search size={16} />
            </button>
          </form>

          {session ? (
            <button className={styles.iconLink} onClick={handleLogout}>
              <LogOut size={18} />
              {session.name}
            </button>
          ) : (
            <Link href="/login" className={styles.iconLink}>
              <User size={18} />
              Ingresar
            </Link>
          )}

          <Link href="/carrito" className={styles.iconLink}>
            <ShoppingCart size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
