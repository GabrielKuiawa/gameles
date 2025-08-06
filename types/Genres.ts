export type Genre = {
  id: string;
  name: string;
  pathParameters :string;
  background_image?: string;
  released?: string;
  rating?: number;
};

export type GenresResponse = {
  results: Genre[];
};
