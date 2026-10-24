"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/types/navigation";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/ui/Icons";
import styles from "./MainNav.module.css";

interface MainNavProps {
  items: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="main-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <CloseIcon width={26} height={26} /> : <MenuIcon width={26} height={26} />}
      </button>

      <ul
        id="main-menu"
        className={`${styles.list} ${open ? styles.listOpen : ""}`}
      >
        {items.map((item) => (
          <li key={item.label} className={styles.item}>
            <Link
              href={item.href}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <ChevronDownIcon width={14} height={14} className={styles.chevron} />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
