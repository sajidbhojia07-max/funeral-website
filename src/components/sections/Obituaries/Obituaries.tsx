import { ObituaryItem } from "@/components/ui/ObituaryItem/ObituaryItem";
import { obituaries } from "@/config/obituaries";
import styles from "./Obituaries.module.css";

export function Obituaries() {
  const { title, subtitle, items } = obituaries;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.heading}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>

        <div className={styles.grid}>
          {items.map((item) => (
            <ObituaryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
