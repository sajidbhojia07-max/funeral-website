import type { NavItem } from "@/types/navigation";

/**
 * Main navigation. Sirf 4 menus abhi hain; naye menus yahan array mein add karein.
 * `hasDropdown: true` se menu ke saath chhota chevron dikhta hai.
 */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/", hasDropdown: true },
  { label: "About Me", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];
