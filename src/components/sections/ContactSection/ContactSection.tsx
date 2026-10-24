import { ContactForm } from "@/components/ui/ContactForm/ContactForm";
import { MapPinIcon, PhoneIcon } from "@/components/ui/Icons";
import { MailIcon } from "@/components/ui/Icons/MailIcon";
import { contactPage } from "@/config/contact";
import styles from "./ContactSection.module.css";

const icons = {
  address: MapPinIcon,
  phone: PhoneIcon,
  email: MailIcon,
} as const;

export function ContactSection() {
  const { heading, info } = contactPage;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.heading}>
          <h2 className={styles.title}>{heading.title}</h2>
          <p className={styles.subtitle}>{heading.subtitle}</p>
        </header>

        <div className={styles.grid}>
          <ContactForm />

          <ul className={styles.info}>
            {info.map((item) => {
              const Icon = icons[item.id];
              const content = (
                <>
                  <span className={styles.iconWrap}>
                    <Icon width={20} height={20} />
                  </span>
                  <span className={styles.text}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.value}>{item.value}</span>
                  </span>
                </>
              );

              return (
                <li key={item.id} className={styles.item}>
                  {item.href ? (
                    <a href={item.href} className={styles.row}>
                      {content}
                    </a>
                  ) : (
                    <div className={styles.row}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
