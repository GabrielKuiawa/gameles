export type CardProps = {
  image?: string;
  id: number;
  name: string;
  year?: string;
  rating?: number;
  onPress?: () => void;
};
