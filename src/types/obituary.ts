export interface ObituaryData {
  id: string;
  name: string;
  age: number;
  /** Display text, masalan "Sep 18, 1948 - Mar 19, 2013" */
  dates: string;
  text: string;
  /** public/ folder se path, masalan "/images/obituary-1.jpg" */
  image: string;
}
