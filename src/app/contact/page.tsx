import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner/PageBanner";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { siteConfig } from "@/config/site";
import { contactPage } from "@/config/contact";

export const metadata: Metadata = {
  title: `${contactPage.banner.title} | ${siteConfig.name} ${siteConfig.tagline}`,
};

export default function ContactPage() {
  return (
    <main>
      <PageBanner
        title={contactPage.banner.title}
        image={contactPage.banner.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: contactPage.banner.title },
        ]}
      />
      <ContactSection />
    </main>
  );
}
