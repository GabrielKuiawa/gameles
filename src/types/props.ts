import { ListRenderItem, StyleProp, ViewStyle } from "react-native";
import { Game } from "./models/Game";
import { ReviewItem } from "./models/Review";
import { Screenshots } from "./models/Screenshots";
import { ReactNode } from "react";
import { Genre } from "./models/Genres";

export type CardDescriptionProps = {
  description_raw?: string;
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

export type SearchBarProps = {
  placeholder?: string;
  onChange?: (text: string) => void;
};

export type HorizontalInfiniteListProps<T> = {
  data: T[];
  loadMore?: () => void;
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
  separatorWidth?: number;
};

export type GameSectionListProps = {
  title: string;
  data: Game[][];
  isCard?: boolean;
  onPressCard?: (game: Game) => void;
  icon?: ReactNode;
};

export type SectionCardProps = {
  platformName: string;
  subtitle?: string;
  imageUri: string;
  icon?: ReactNode;
  onPressIcon?: () => void;
};

export type SectionGenreProps = {
  genres?: Genre[];
};

