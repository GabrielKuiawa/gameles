import { StyleProp, ViewStyle } from "react-native";
import { Game } from "./models/Game";
import { ReviewItem } from "./models/Review";
import { Screenshots } from "./models/Screenshots";

export type CardDescriptionProps = {
  description_raw?: string;
  onPress: () => void;
};

export type CardGameProps = Game & {
  onPress: () => void;
};

export type CardProps = {
  onPress?: () => void;
  overlay?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export type CardReviewProps = ReviewItem & {};

export type ChartReviewProps = {
  maxPercent: number;
  sortedRatings: {
    id: number;
    percent: number;
  }[];
};

export type GameMediaSectionProps = {
  id: number;
  screenshots?: Screenshots;
};

export type GameSectionProps = {
  id: number;
  pathParameters: string;
};

export type GameSectionReviewProps = {
  id: number;
  rating?: number;
  ratings?: {
    id: number;
    percent: number;
  }[];
};

export type ImageCarouselProps = Screenshots & {};

export type StarsProps = {
  size: number;
  color: string;
  rating: number;
  rating_top: number;
};

export type TabsProps = {
  data?: { id: string | number; label: string }[] | null;
  value: string;
  onChange: (id: string) => void;
};

export type TabsPropsGeneric<T> = {
  data: T[];
  getId: (item: T) => string | number;
  getLabel: (item: T) => string;
  initialSelected?: string | number;
  onChange?: (id: string | number) => void;
  renderSection?: (selectedId: string | number) => React.ReactNode;
};
