export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  /** public/ folder se path, masalan "/images/arranging-funeral.jpg" */
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
}
