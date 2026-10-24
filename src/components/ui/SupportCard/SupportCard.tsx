import { PhoneIcon } from "@/components/ui/Icons";
import { MailIcon } from "@/components/ui/Icons/MailIcon";
import styles from "./SupportCard.module.css";

interface SupportCardProps {
  title: string;
  text: string;
  phone: string;
  email: string;
}

export function SupportCard({ title, text, phone, email }: SupportCardProps) {
  const telNumber = phone.split("/")[0].replace(/[^+\d]/g, "");

  return (
    <aside className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>

      <a href={`tel:${telNumber}`} className={styles.row}>
        <PhoneIcon width={18} height={18} />
        <span>{phone}</span>
      </a>

      <hr className={styles.divider} />

      <a href={`mailto:${email}`} className={styles.row}>
        <MailIcon width={20} height={20} />
        <span>{email}</span>
      </a>
    </aside>
  );
}
