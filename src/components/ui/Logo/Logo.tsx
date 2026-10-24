import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "./Logo.module.css";

function Flower() {
  const petals = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg
      className={styles.mark}
      viewBox="0 0 48 48"
      width={50}
      height={50}
      aria-hidden="true"
    >
      {petals.map((deg) => (
        <ellipse
          key={deg}
          cx="24"
          cy="10.5"
          rx="6"
          ry="9"
          fill="currentColor"
          opacity={0.95}
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
      <circle cx="24" cy="24" r="6.5" fill="var(--color-header-bg)" />
      <circle cx="24" cy="24" r="3.5" fill="currentColor" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label={siteConfig.name}>
      <Flower />
      <span className={styles.text}>
        <span className={styles.name}>{siteConfig.name}</span>
        <span className={styles.tagline}>{siteConfig.tagline}</span>
      </span>
    </Link>
  );
}
