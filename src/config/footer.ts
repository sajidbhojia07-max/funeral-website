import type { FooterColumn } from "@/types/footer";

export const footerConfig = {
  description:
    "Phasellus faucibus ut purus a condimentued id risus eget sem quis lorem lorem ipsum doloe ipsum condimentued id risus dolor sit diam eleioeincid.",

  columns: [
    {
      title: "Useful Link",
      links: [
        { label: "Mission & Value", href: "#" },
        { label: "History", href: "#" },
        { label: "Services", href: "#" },
        { label: "Obituaries", href: "#" },
        { label: "Our Team", href: "#" },
      ],
    },
    {
      title: "Service",
      links: [
        { label: "Arranging Funeral", href: "#" },
        { label: "Memorials", href: "#" },
        { label: "Legal Service", href: "#" },
        { label: "Burial & Cremtion", href: "#" },
      ],
    },
    {
      title: "Location",
      links: [
        { label: "Houston TX", href: "#" },
        { label: "Las Vegas NV", href: "#" },
        { label: "Los Angeles CA", href: "#" },
        { label: "Miami FL", href: "#" },
        { label: "New York NY", href: "#" },
      ],
    },
  ] satisfies FooterColumn[],

  contact: {
    title: "Contact Info",
    address: "6168 Easy Centre,Round Forest Moor Antlers, Alaska",
    phone: "1800-123-4567 /6789",
    email: "info@funeral.com",
  },

  newsletter: {
    title: "Subscribe to Newsletter",
    placeholder: "Email address here",
    buttonLabel: "Subscribe",
  },
} as const;
