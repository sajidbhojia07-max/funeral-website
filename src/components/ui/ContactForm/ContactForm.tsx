"use client";

import type { FormEvent } from "react";
import { contactPage } from "@/config/contact";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const f = contactPage.form;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Backend / email service baad mein yahan jodein.
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>{f.title}</h3>

      <div className={styles.row}>
        <input
          type="text"
          name="name"
          required
          placeholder={f.namePlaceholder}
          aria-label={f.namePlaceholder}
          className={styles.field}
        />
        <input
          type="email"
          name="email"
          required
          placeholder={f.emailPlaceholder}
          aria-label={f.emailPlaceholder}
          className={styles.field}
        />
      </div>

      <div className={styles.row}>
        <input
          type="tel"
          name="phone"
          placeholder={f.phonePlaceholder}
          aria-label={f.phonePlaceholder}
          className={styles.field}
        />
        <input
          type="text"
          name="subject"
          placeholder={f.subjectPlaceholder}
          aria-label={f.subjectPlaceholder}
          className={styles.field}
        />
      </div>

      <textarea
        name="message"
        required
        rows={6}
        placeholder={f.messagePlaceholder}
        aria-label={f.messagePlaceholder}
        className={`${styles.field} ${styles.textarea}`}
      />

      <button type="submit" className={styles.button}>
        {f.buttonLabel}
      </button>
    </form>
  );
}
