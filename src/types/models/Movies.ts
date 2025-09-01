export type Movies = {
  results?: {
    id: number;
    name: string;
    preview	: string;
    data: {
        480:string;
        max:string;
    }
  }[];
};
