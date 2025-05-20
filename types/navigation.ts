export type RootStackParamList = {
  index: undefined;
  login: undefined;
  GameDetails: {
    jogo: string;
    imagem: string;
    descricao?: string;
    ano?: number;
    desenvolvedor?: string;
    nota?: number;
    plataforma?: string[];
  };
};