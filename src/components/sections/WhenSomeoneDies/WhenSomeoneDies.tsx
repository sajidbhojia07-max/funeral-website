import { InfoCard } from "@/components/ui/InfoCard/InfoCard";
import { whenSomeoneDies } from "@/config/when-someone-dies";
import styles from "./WhenSomeoneDies.module.css";

export function WhenSomeoneDies() {
  const { title, subtitle, cards } = whenSomeoneDies;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.heading}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>

        <div className={styles.grid}>
          {cards.map((card) => (
            <InfoCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
