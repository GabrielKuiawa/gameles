import { Ionicons } from "@expo/vector-icons";

export type GenreIconMap = {
  [key: string]: keyof typeof Ionicons.glyphMap;
};