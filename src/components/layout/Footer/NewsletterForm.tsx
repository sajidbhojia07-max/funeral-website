"use client";

import type { FormEvent } from "react";
import { TombstoneIcon } from "@/components/ui/Icons/TombstoneIcon";
import { footerConfig } from "@/config/footer";
import styles from "./NewsletterForm.module.css";

export function NewsletterForm() {
  const { title, placeholder, buttonLabel } = footerConfig.newsletter;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Backend / email service baad mein yahan jodein.
  }

  return (
    <form className={styles.box} onSubmit={handleSubmit}>
      <div className={styles.heading}>
        <TombstoneIcon className={styles.icon} />
        <h3 className={styles.title}>{title}</h3>
      </div>

      <input
        type="email"
        name="email"
        required
        placeholder={placeholder}
        aria-label={placeholder}
        className={styles.input}
      />

      <button type="submit" className={styles.button}>
        {buttonLabel}
      </button>
    </form>
  );
}
