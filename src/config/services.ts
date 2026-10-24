import type { ServiceCardData } from "@/types/service-card";

const sampleText =
  "We’re here to help you from the moment you need through every step of the wayed at eros fermen";

/**
 * Services page ke cards. Naya service add karna ho to `cards` array mein
 * aik aur entry daal dein. Pehli 3 images home page wali hi hain.
 */
export const servicesPage = {
  banner: {
    title: "Services",
    /** public/ folder se path, masalan "/images/page-banner.jpg". Khali ho to gradient dikhega. */
    image: "",
  },
  heading: {
    title: "Our Funeral Services",
    subtitle:
      "Etiam varius elementum condimentum usce dictum quam duinec pharetra orci venenatis sit amet.",
  },
  cards: [
    {
      id: "arranging-funeral",
      title: "Arranging Funeral",
      description: sampleText,
      image: "/images/arranging-funeral.jpg",
      imageAlt: "Arranging funeral",
      ctaLabel: "Read More",
      ctaHref: "#",
    },
    {
      id: "memorials",
      title: "Memorials",
      description: sampleText,
      image: "/images/memorials.jpg",
      imageAlt: "Memorials",
      ctaLabel: "Read More",
      ctaHref: "#",
    },
    {
      id: "legal-services",
      title: "Legal Services",
      description: sampleText,
      image: "/images/legal-services.jpg",
      imageAlt: "Legal services",
      ctaLabel: "Read More",
      ctaHref: "#",
    },
    {
      id: "burial-cremation",
      title: "Burial & Cremation",
      description: sampleText,
      image: "/images/burial-cremation.jpg",
      imageAlt: "Burial and cremation",
      ctaLabel: "Read More",
      ctaHref: "#",
    },
    {
      id: "funeral-plan",
      title: "Funeral Plan",
      description: sampleText,
      image: "/images/funeral-plan.jpg",
      imageAlt: "Funeral plan",
      ctaLabel: "Read More",
      ctaHref: "#",
    },
    {
      id: "funeral-directors",
      title: "Funeral Directors",
      description: sampleText,
      image: "/images/funeral-directors.jpg",
      imageAlt: "Funeral directors",
      ctaLabel: "Read More",
      ctaHref: "#",
    },
  ] satisfies ServiceCardData[],
};
