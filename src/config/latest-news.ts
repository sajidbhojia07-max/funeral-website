import type { NewsPostData } from "@/types/news-post";

const sampleExcerpt =
  "Nullam vel mattis tellusvamus condimentum bibendum nibhso llicitudin sapien interdum necenean portavelit imperdiet feug";

export const latestNews = {
  title: "Funeral Latest News",
  subtitle:
    "Etiam varius elementum condimentum usce dictum quam duinec pharetra orci venenatis sit amet.",
  posts: [
    {
      id: "news-1",
      title: "Heading Title Of Funeral Services",
      excerpt: sampleExcerpt,
      date: "19 April, 2016",
      comments: 0,
      image: "/images/news-1.jpg",
      imageAlt: "Funeral services",
      href: "#",
    },
    {
      id: "news-2",
      title: "Heading Title Of Funeral Services",
      excerpt: sampleExcerpt,
      date: "19 April, 2016",
      comments: 0,
      image: "/images/news-2.jpg",
      imageAlt: "Funeral services",
      href: "#",
    },
    {
      id: "news-3",
      title: "Heading Title Of Image Post",
      excerpt: sampleExcerpt,
      date: "19 April, 2016",
      comments: 0,
      image: "/images/news-3.jpg",
      imageAlt: "Image post",
      href: "#",
    },
  ] satisfies NewsPostData[],
};
