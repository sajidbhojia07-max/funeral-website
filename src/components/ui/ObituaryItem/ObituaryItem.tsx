import Image from "next/image";
import type { ObituaryData } from "@/types/obituary";
import styles from "./ObituaryItem.module.css";

interface ObituaryItemProps {
  item: ObituaryData;
}

export function ObituaryItem({ item }: ObituaryItemProps) {
  return (
    <article className={styles.item}>
      <div className={styles.media}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="227px"
          className={styles.image}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>
          {item.name} <span className={styles.age}>(Age {item.age})</span>
        </h3>
        <p className={styles.dates}>{item.dates}</p>
        <p className={styles.text}>{item.text}</p>
      </div>
    </article>
  );
}
