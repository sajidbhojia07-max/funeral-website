import Image from "next/image";
import Link from "next/link";
import type { NewsPostData } from "@/types/news-post";
import { CalendarIcon } from "@/components/ui/Icons/CalendarIcon";
import { CommentIcon } from "@/components/ui/Icons/CommentIcon";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
  post: NewsPostData;
}

export function NewsCard({ post }: NewsCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Link href={post.href} className={styles.imageLink} tabIndex={-1}>
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 400px"
            className={styles.image}
          />
        </Link>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <CalendarIcon width={16} height={16} />
            {post.date}
          </span>
          <span className={styles.metaItem}>
            <CommentIcon width={16} height={16} />
            ({post.comments}) Comments
          </span>
        </div>
      </div>

      <h3 className={styles.title}>
        <Link href={post.href}>{post.title}</Link>
      </h3>
      <p className={styles.excerpt}>{post.excerpt}</p>
    </article>
  );
}
