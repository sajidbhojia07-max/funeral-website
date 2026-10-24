import Image from "next/image";
import { SupportCard } from "@/components/ui/SupportCard/SupportCard";
import { welcomeHome } from "@/config/welcome-home";
import styles from "./WelcomeHome.module.css";

export function WelcomeHome() {
  const { title, image, imageAlt, quote, text, support } = welcomeHome;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.grid}>
          <div className={styles.media}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 400px"
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <p className={styles.quote}>{quote}</p>
            <p className={styles.text}>{text}</p>
          </div>

          <SupportCard
            title={support.title}
            text={support.text}
            phone={support.phone}
            email={support.email}
          />
        </div>
      </div>
    </section>
  );
}
