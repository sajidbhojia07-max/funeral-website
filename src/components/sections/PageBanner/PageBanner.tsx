import Link from "next/link";
import styles from "./PageBanner.module.css";

interface Crumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs?: Crumb[];
  image?: string;
}

/** Andar ke har page ke upar wali title banner (Contact, About, etc. mein dobara use hoga). */
export function PageBanner({ title, breadcrumbs = [], image }: PageBannerProps) {
  return (
    <section
      className={styles.banner}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>

        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className={styles.crumbs}>
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className={styles.crumb}>
                  {crumb.href ? (
                    <Link href={crumb.href} className={styles.crumbLink}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span className={styles.sep} aria-hidden="true">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
