export type CardGameProps = {
  image?: string;
  id: number;
  name: string;
  year?: string;
  rating?: number;
  onPress?: () => void;
};
