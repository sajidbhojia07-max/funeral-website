import Link from "next/link";
import { funeralPlanCta } from "@/config/funeral-plan-cta";
import styles from "./FuneralPlanCta.module.css";

export function FuneralPlanCta() {
  const { title, text, ctaLabel, ctaHref, image } = funeralPlanCta;

  return (
    <section
      className={styles.section}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Link href={ctaHref} className={styles.cta}>
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
