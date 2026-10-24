export interface NewsPostData {
  id: string;
  title: string;
  excerpt: string;
  /** Display text, masalan "19 April, 2016" */
  date: string;
  comments: number;
  /** public/ folder se path, masalan "/images/news-1.jpg" */
  image: string;
  imageAlt: string;
  href: string;
}
