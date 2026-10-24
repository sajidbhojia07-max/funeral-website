import { Logo } from "@/components/ui/Logo/Logo";
import { mainNav } from "@/config/navigation";
import { MainNav } from "./MainNav";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo />
        <MainNav items={mainNav} />
      </div>
    </header>
  );
}
