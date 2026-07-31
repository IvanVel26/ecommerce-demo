import styles from "./CatCard.module.css";
import Link from "next/link";

interface cardProps {
  text: string;
}

export default function CatCard({ text }: cardProps) {
  return (
    <Link href="/" className={styles.container}>
      <div className={styles.containerImagen}>
        <img src="/mouse.jpg" alt="mouseImagen" className={styles.image} />
      </div>
      <p>{text}</p>
    </Link>
  );
}
