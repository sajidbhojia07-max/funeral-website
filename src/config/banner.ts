import type { BannerSlide } from "@/types/banner";

/**
 * Banner slides. `image` mein apni photo ka path daalein (public/ folder se),
 * masalan "/images/banner-1.jpg". Khali ho to gradient background dikhega.
 */
export const bannerSlides: BannerSlide[] = [
  {
    id: "arranging-funeral",
    title: "Arranging Funeral",
    subtitle:
      "We are here to help you arrange the funeral you want for your loved one – every step of the way.",
    ctaLabel: "Read More",
    ctaHref: "#",
    image: "",
  },
];

export const BANNER_AUTOPLAY_MS = 6000;
