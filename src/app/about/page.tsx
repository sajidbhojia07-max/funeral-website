import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner/PageBanner";
import { AboutIntro } from "@/components/sections/AboutIntro/AboutIntro";
import { AboutValues } from "@/components/sections/AboutValues/AboutValues";
import { FuneralPlanCta } from "@/components/sections/FuneralPlanCta/FuneralPlanCta";
import { siteConfig } from "@/config/site";
import { aboutPage } from "@/config/about";

export const metadata: Metadata = {
  title: `${aboutPage.banner.title} | ${siteConfig.name} ${siteConfig.tagline}`,
};

export default function AboutPage() {
  return (
    <main>
      <PageBanner
        title={aboutPage.banner.title}
        image={aboutPage.banner.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: aboutPage.banner.title },
        ]}
      />
      <AboutIntro />
      <AboutValues />
      <FuneralPlanCta />
    </main>
  );
}
