export type Genre = {
  id: number;
  name: string;
  background_image?: string;
  released?: string;
  rating?: number;
};

export type GenresResponse = {
  results: Genre[];
};
