import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar/TopBar";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable}`}>
      <body>
  <TopBar />
  <Header />
  {children}
  <Footer />
</body>
    </html>
  );
}
