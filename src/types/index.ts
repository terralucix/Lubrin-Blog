export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  link?: string;
  items: {
    title: string;
    description: string;
  }[];
}

export interface Translation {
  [key: string]: {
    [key: string]: string;
  };
}

export type Language = 'en' | 'es';