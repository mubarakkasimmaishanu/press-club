export interface Author {
  id: string;
  name: string;
  role: string;
  gradeLevel: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  editorialTag: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  kicker?: string;
  summary: string;
  body: string[];
  pullQuote?: {
    quote: string;
    attribution: string;
  };
  category: string; // matches Category slug
  categoryName: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  featuredImage: string;
  imageCaption: string;
  imageCredit: string;
  tags: string[];
  isLead?: boolean;
  isSecondary?: boolean;
  isFeature?: boolean;
  isOpinion?: boolean;
  isInterview?: boolean;
  isSampleContent: boolean;
  editorialNote?: string;
}

export interface PhotoStoryItem {
  url: string;
  caption: string;
  credit: string;
}

export interface PhotoStory {
  id: string;
  title: string;
  slug: string;
  eventDate: string;
  photographer: Author;
  coverImage: string;
  caption: string;
  description: string;
  photos: PhotoStoryItem[];
  tags: string[];
  isSampleContent: boolean;
}
