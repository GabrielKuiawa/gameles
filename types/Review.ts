import { CardReviewProps } from "./CardReviewProps";

export type GameSectionReviewProps = {
  id: number;
  rating?: number;
  ratings?: {
    id: number;
    percent: number;
  }[];
};

export type Review = {
  results: CardReviewProps[];
};