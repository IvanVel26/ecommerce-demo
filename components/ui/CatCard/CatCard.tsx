import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import styles from "./CatCard.module.css";

interface CatCardProps {
  label: string;
  icon: LucideIcon;
}

export default function CatCard({ label, icon: Icon }: CatCardProps) {
  return (
    <Link href={`/productos?buscar=${encodeURIComponent(label)}`} className={styles.container}>
      <div className={styles.iconWrapper}>
        <Icon size={36} strokeWidth={1.5} />
      </div>
      <p>{label}</p>
    </Link>
  );
}
