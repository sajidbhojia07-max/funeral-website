import { ServiceCard } from "@/components/ui/ServiceCard/ServiceCard";
import { funeralServices } from "@/config/funeral-services";
import styles from "./FuneralServices.module.css";

export function FuneralServices() {
  const { title, subtitle, cards } = funeralServices;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.heading}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>

        <div className={styles.grid}>
          {cards.map((card) => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
