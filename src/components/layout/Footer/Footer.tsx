import Link from "next/link";
import { Logo } from "@/components/ui/Logo/Logo";
import { PhoneIcon } from "@/components/ui/Icons";
import { MailIcon } from "@/components/ui/Icons/MailIcon";
import { footerConfig } from "@/config/footer";
import { NewsletterForm } from "./NewsletterForm";
import styles from "./Footer.module.css";

export function Footer() {
  const { description, columns, contact } = footerConfig;
  const telNumber = contact.phone.split("/")[0].replace(/[^+\d]/g, "");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.about}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <p className={styles.description}>{description}</p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className={styles.column}>
              <h3 className={styles.heading}>{column.title}</h3>
              <ul className={styles.list}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={styles.column}>
            <h3 className={styles.heading}>{contact.title}</h3>
            <p className={styles.address}>{contact.address}</p>
            <a href={`tel:${telNumber}`} className={styles.contactRow}>
              <PhoneIcon width={15} height={15} />
              <span>{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.email}`} className={styles.contactRow}>
              <MailIcon width={17} height={17} />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>

        <div className={styles.newsletter}>
          <NewsletterForm />
        </div>
      </div>
    </footer>
  );
}
