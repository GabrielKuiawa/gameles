export type Review = {
  results: ReviewItem[];
};

export type ReviewItem = {
  id: number;
  user?: {
    full_name?: string | null;
    avatar?: string | null;
  };
  text: string;
  rating: number;
  created: string;
};
