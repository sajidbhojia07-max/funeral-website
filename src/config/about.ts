export const aboutPage = {
  banner: {
    title: "About Us",
    /** public/ folder se path, masalan "/images/page-banner.jpg". Khali ho to gradient dikhega. */
    image: "",
  },

  intro: {
    label: "About Us",
    title: "Caring For Families For Generations",
    quote:
      "We strive to set the highest standards for funeral profession in terms of client service and care.",
    paragraphs: [
      "Etiam egetdignissim lorem a ullamcorper leoras aliquam quam etmagna dictum pharetra mnec purus sed erat lobortis condimentum auris allow malesuada dolorgravileoras aliquam quam felis illa lacus, ac blandit nulla nulla eu lorem.",
      "Phasellus faucibus ut purus a condimentum. Sed id risus eget sem Phasellus faucibus ut condim tumsodalesm quis. Nullam vel mattis tellusvamus condimentum bibendum nibhso llicitudin sapien interdum.",
    ],
    highlights: [
      "Available 24 hours a day",
      "Experienced funeral directors",
      "Personal and caring service",
      "Clear and honest pricing",
    ],
    image: "/images/about-hall.jpg",
    imageAlt: "Our funeral home",
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },

  values: {
    title: "Mission & Value",
    subtitle:
      "Etiam varius elementum condimentum usce dictum quam duinec pharetra orci venenatis sit amet.",
    items: [
      {
        id: "mission",
        number: "01",
        title: "Our Mission",
        text: "We’re here to help you from the moment you need through every step of the wayed at eros fermen.",
      },
      {
        id: "vision",
        number: "02",
        title: "Our Vision",
        text: "We’re here to help you from the moment you need through every step of the wayed at eros fermen.",
      },
      {
        id: "values",
        number: "03",
        title: "Our Values",
        text: "We’re here to help you from the moment you need through every step of the wayed at eros fermen.",
      },
    ],
  },
} as const;
