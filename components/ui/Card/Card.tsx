import styles from "./Card.module.css";
import Image from "next/image";

interface cardProps {
  size: number;
  text: string;
}

export default function Card({ size, text }: cardProps) {
  let estilo;

  if (size === 2) {
    estilo = `${styles.cardBig} ${styles.cardContainer}`;
  } else {
    estilo = styles.cardContainer;
  }

  return (
    <div className={estilo}>
      <Image
        src="/mouse.jpg"
        alt="mouse imagen"
        fill
        className={styles.cardImage}
      />
      <div className={styles.content}>
        <div>
          <h1>{text}</h1>
          <p>description</p>
          <p>price</p>
        </div>
        <button>Ver mas</button>
      </div>
    </div>
  );
}
