import Image from "next/image";
import type { InfoCardData } from "@/types/info-card";
import styles from "./InfoCard.module.css";

interface InfoCardProps {
  card: InfoCardData;
}

export function InfoCard({ card }: InfoCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={card.image}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 400px"
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.description}>{card.description}</p>
      </div>
    </article>
  );
}
