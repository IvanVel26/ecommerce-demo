import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.navFooter}>
          <h3>Navegacion</h3>
          <Link href="/">Inicio</Link>
          <Link href="/">Productos</Link>
          <Link href="/">Preguntas Frecuentes</Link>
        </div>
        <div className={styles.catFooter}>
          <h3>Categorias</h3>
          <Link href="/">Mouse</Link>
          <Link href="/">Teclados</Link>
          <Link href="/">Celulares</Link>
          <Link href="/">Producto</Link>
        </div>
        <div className={styles.contactFooter}>
          <h3>Contacto</h3>
          <p>email@email.com</p>
          <p>381 1111 111</p>
          <div className={styles.linksFooter}>
            <a href="">
              <Image
                src="/facebook.png"
                alt="facebook logo"
                width={20}
                height={20}
                className={styles.logo}
              />
            </a>
            <a href="">
              <Image
                src="/instagram.png"
                alt="facebook logo"
                width={20}
                height={20}
                className={styles.logo}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
