"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { BannerSlide } from "@/types/banner";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";
import styles from "./Banner.module.css";

interface BannerProps {
  slides: BannerSlide[];
  autoplayMs?: number;
}

export function Banner({ slides, autoplayMs = 6000 }: BannerProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const hasMultiple = count > 1;

  const goTo = useCallback(
    (next: number) => setIndex((next + count) % count),
    [count],
  );

  useEffect(() => {
    if (!hasMultiple) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), autoplayMs);
    return () => clearInterval(id);
  }, [hasMultiple, count, autoplayMs]);

  return (
    <section className={styles.banner} aria-roledescription="carousel" aria-label="Featured">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${i === index ? styles.active : ""}`}
          style={
            slide.image
              ? { backgroundImage: `url(${slide.image})` }
              : undefined
          }
          aria-hidden={i !== index}
        >
          <div className={styles.overlay} />
          <div className={styles.content}>
            <h1 className={styles.title}>{slide.title}</h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
            <Link href={slide.ctaHref} className={styles.cta}>
              {slide.ctaLabel}
            </Link>
          </div>
        </div>
      ))}

      {hasMultiple && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.prev}`}
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
          >
            <ChevronLeftIcon width={16} height={16} />
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
          >
            <ChevronRightIcon width={16} height={16} />
          </button>
        </>
      )}
    </section>
  );
}
