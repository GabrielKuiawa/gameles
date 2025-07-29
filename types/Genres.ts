export type Genre = {
  id: number;
  name: string;
  background_image?: string;
};

export type GenresResponse = {
  results: Genre[];
};
