import type { InfoCardData } from "@/types/info-card";

export const whenSomeoneDies = {
  title: "When Someone Dies",
  subtitle:
    "Many people feel overwhelmed when a loved one dies and are unsure what to do.",
  cards: [
    {
      id: "funeral-plan",
      title: "Funeral Plan",
      description:
        "Funeral plans are a sensible and practical way to plan for the future. We can help your planing.",
      image: "/images/smith.jpg",
      imageAlt: "Funeral plan",
    },
    {
      id: "advice-tips",
      title: "Advice & Tips",
      description:
        "We try to answer some of the Questions people have when they experience the death of someone.",
      image: "/images/image 2.jpg",
      imageAlt: "Advice and tips",
    },
    {
      id: "funeral-directors",
      title: "Funeral Directors",
      description:
        "Our funeral directors are here to help who have served their local communities for generations.",
      image: "/images/image7.jpg",
      imageAlt: "Funeral directors",
    },
  ] satisfies InfoCardData[],
};
