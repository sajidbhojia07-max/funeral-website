import { footerConfig } from "@/config/footer";

const { address, phone, email } = footerConfig.contact;

export const contactPage = {
  banner: {
    title: "Contact Us",
    /** public/ folder se path, masalan "/images/page-banner.jpg". Khali ho to gradient dikhega. */
    image: "",
  },
  heading: {
    title: "Get In Touch",
    subtitle:
      "We are here to help you 24 hours a day. Send us a message or call us directly.",
  },
  /** Address, phone aur email footer config se aate hain (src/config/footer.ts) */
  info: [
    { id: "address", label: "Address", value: address, href: undefined },
    {
      id: "phone",
      label: "Phone",
      value: phone,
      href: `tel:${phone.split("/")[0].replace(/[^+\d]/g, "")}`,
    },
    { id: "email", label: "Email", value: email, href: `mailto:${email}` },
  ],
  form: {
    title: "Send Us A Message",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    phonePlaceholder: "Phone Number",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Your Message",
    buttonLabel: "Send Message",
  },
} as const;
