import type { ServiceCardData } from "@/types/service-card";

export const funeralServices = {
  title: "Funeral Homes Offer a Service",
  subtitle:
    "Etiam varius elementum condimentum usce dictum quam duinec pharetra orci venenatis sit amet.",
  cards: [
    {
      id: "arranging-funeral",
      title: "Arranging Funeral",
      description:
        "We’re here to help you from the moment you need through every step of the wayed at eros fermen",
      image: "/images/arranging-funeral.jpg",
      imageAlt: "Arranging funeral",
      ctaLabel: "Read More",
      ctaHref: "#",
    },
    {
      id: "memorials",
      title: "Memorials",
      description:
        "We’re here to help you from the moment you need through every step of the wayed at eros fermen",
      image: "/images/memorials.jpg",
      imageAlt: "Memorials",
      ctaLabel: "Read More",
      ctaHref: "#",
    },
    {
      id: "legal-services",
      title: "Legal Services",
      description:
        "We’re here to help you from the moment you need through every step of the wayed at eros fermen",
      image: "/images/legal-services.jpg",
      imageAlt: "Legal services",
      ctaLabel: "Read More",
      ctaHref: "#",
    },
  ] satisfies ServiceCardData[],
};
