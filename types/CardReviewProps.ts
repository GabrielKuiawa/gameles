export type CardReviewProps = {
  id: number;
  user?: {
    full_name?: string | null;
    avatar?: string | null;
  };
  text: string;
  rating: number;
  created: string;
};
