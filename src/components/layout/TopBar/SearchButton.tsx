"use client";

import { SearchIcon } from "@/components/ui/Icons";
import styles from "./TopBar.module.css";

export function SearchButton() {
  return (
    <button
      type="button"
      className={`${styles.link} ${styles.search}`}
      aria-label="Search"
    >
      <SearchIcon width={16} height={16} />
    </button>
  );
}
