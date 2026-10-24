import type { ObituaryData } from "@/types/obituary";

const sampleText =
  "Phasellus faucibus ut purus a condimentum. Sed id risus eget sem Phasellus faucibus ut condim tumsodalesm quis.";

export const obituaries = {
  title: "Recent Funeral Obituaries",
  subtitle:
    "Etiam varius elementum condimentum usce dictum quam duinec pharetra orci venenatis sit amet.",
  items: [
    {
      id: "elishabeth-rowe",
      name: "Elishabeth Rowe",
      age: 54,
      dates: "Sep 18, 1948 - Mar 19, 2013",
      text: sampleText,
      image: "/images/obituary-1.jpg",
    },
    {
      id: "nimon-deo",
      name: "Nimon Deo",
      age: 54,
      dates: "Sep 18, 1948 - Mar 19, 2013",
      text: sampleText,
      image: "/images/obituary-2.jpg",
    },
    {
      id: "michel-shefon",
      name: "Michel Shefon",
      age: 87,
      dates: "Feb 21, 1928 - Jun 02, 2015",
      text: sampleText,
      image: "/images/obituary-3.jpg",
    },
    {
      id: "desiree-black",
      name: "Desiree Black",
      age: 50,
      dates: "Oct 20, 1960 - Dec 25, 2010",
      text: sampleText,
      image: "/images/obituary-4.jpg",
    },
  ] satisfies ObituaryData[],
};
