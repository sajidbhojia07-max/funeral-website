import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner/PageBanner";
import { ServicesList } from "@/components/sections/ServicesList/ServicesList";
import { FuneralPlanCta } from "@/components/sections/FuneralPlanCta/FuneralPlanCta";
import { siteConfig } from "@/config/site";
import { servicesPage } from "@/config/services";

export const metadata: Metadata = {
  title: `${servicesPage.banner.title} | ${siteConfig.name} ${siteConfig.tagline}`,
};

export default function ServicesPage() {
  return (
    <main>
      <PageBanner
        title={servicesPage.banner.title}
        image={servicesPage.banner.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: servicesPage.banner.title },
        ]}
      />
      <ServicesList />
      <FuneralPlanCta />
    </main>
  );
}
