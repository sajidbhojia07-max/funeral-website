import { NewsCard } from "@/components/ui/NewsCard/NewsCard";
import { latestNews } from "@/config/latest-news";
import styles from "./LatestNews.module.css";

export function LatestNews() {
  const { title, subtitle, posts } = latestNews;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.heading}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>

        <div className={styles.grid}>
          {posts.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
