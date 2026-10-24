import Image from "next/image";
import Link from "next/link";
import type { ServiceCardData } from "@/types/service-card";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  card: ServiceCardData;
}

export function ServiceCard({ card }: ServiceCardProps) {
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

      <h3 className={styles.title}>{card.title}</h3>
      <p className={styles.description}>{card.description}</p>

      <Link href={card.ctaHref} className={styles.cta}>
        {card.ctaLabel}
      </Link>
    </article>
  );
}
