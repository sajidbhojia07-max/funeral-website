import { ServiceCard } from "@/components/ui/ServiceCard/ServiceCard";
import { servicesPage } from "@/config/services";
import styles from "./ServicesList.module.css";

export function ServicesList() {
  const { heading, cards } = servicesPage;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.heading}>
          <h2 className={styles.title}>{heading.title}</h2>
          <p className={styles.subtitle}>{heading.subtitle}</p>
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
