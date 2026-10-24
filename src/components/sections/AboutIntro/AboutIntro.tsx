import Image from "next/image";
import Link from "next/link";
import { aboutPage } from "@/config/about";
import styles from "./AboutIntro.module.css";

export function AboutIntro() {
  const {
    label,
    title,
    quote,
    paragraphs,
    highlights,
    image,
    imageAlt,
    ctaLabel,
    ctaHref,
  } = aboutPage.intro;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.media}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 960px) 100vw, 560px"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <span className={styles.label}>{label}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.quote}>{quote}</p>

          {paragraphs.map((text) => (
            <p key={text} className={styles.text}>
              {text}
            </p>
          ))}

          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item} className={styles.highlight}>
                {item}
              </li>
            ))}
          </ul>

          <Link href={ctaHref} className={styles.cta}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
