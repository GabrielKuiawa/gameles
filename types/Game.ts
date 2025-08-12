export type Game = {
  id: number;
  name: string;
  background_image: string;
  background_image_additional?: string;
  description_raw?: string;
  released?: number;
  developers?: [
    {
      name: string;
    }
  ];
  rating?: number;
  platforms?: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
  genres?: {
    id: number;
    name: string;
  }[];
  ratings?: {
    id: number;
    percent: number;
  }[];
  tags?: {
    id: number;
    name: string;
  }[];
};
