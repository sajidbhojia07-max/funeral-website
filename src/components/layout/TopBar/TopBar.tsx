import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPinIcon, PhoneIcon } from "@/components/ui/Icons";
import { SearchButton } from "./SearchButton";
import styles from "./TopBar.module.css";

export function TopBar() {
  const { welcomeText, locationLabel, locationHref, phone } = siteConfig.topBar;

  return (
    <div className={styles.topBar}>
      <div className={styles.inner}>
        <p className={styles.welcome}>{welcomeText}</p>

        <ul className={styles.actions}>
          <li className={styles.item}>
            <Link href={locationHref} className={styles.link}>
              <MapPinIcon width={13} height={13} />
              <span>{locationLabel}</span>
            </Link>
          </li>
          <li className={styles.item}>
            <a
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className={`${styles.link} ${styles.phone}`}
            >
              <PhoneIcon width={14} height={14} />
              <span>{phone}</span>
            </a>
          </li>
          <li className={styles.item}>
            <SearchButton />
          </li>
        </ul>
      </div>
    </div>
  );
}
