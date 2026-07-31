import Link from "next/link";
import { Globe, MessageCircle, Mail, Phone } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <h3>Navegación</h3>
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link>
        </div>

        <div>
          <h3>Contacto</h3>
          <p className={styles.contactLine}>
            <Mail size={14} /> email@email.com
          </p>
          <p className={styles.contactLine}>
            <Phone size={14} /> 381 111 1111
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Sitio web">
              <Globe size={20} />
            </a>
            <a href="#" aria-label="Redes sociales">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
