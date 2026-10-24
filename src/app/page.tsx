
import { Banner } from "@/components/sections/Banner/Banner";
import { bannerSlides, BANNER_AUTOPLAY_MS } from "@/config/banner";
import { WhenSomeoneDies } from "@/components/sections/WhenSomeoneDies/WhenSomeoneDies";
import { FuneralServices } from "@/components/sections/FuneralServices/FuneralServices";
import { WelcomeHome } from "@/components/sections/WelcomeHome/WelcomeHome";
import { FuneralPlanCta } from "@/components/sections/FuneralPlanCta/FuneralPlanCta";
import { Obituaries } from "@/components/sections/Obituaries/Obituaries";
import { LatestNews } from "@/components/sections/LatestNews/LatestNews";
import { Footer } from "@/components/layout/Footer/Footer";
export default function HomePage() {
  return (
    <>

      <main>
        <Banner slides={bannerSlides} autoplayMs={BANNER_AUTOPLAY_MS} />
        <WhenSomeoneDies />
        <FuneralServices />
        <WelcomeHome />
        <FuneralPlanCta />
        <Obituaries />
        <LatestNews />
        <Footer />
      </main>
    </>
  );
}
