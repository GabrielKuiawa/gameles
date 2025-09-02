import { API_KEY, API_URL } from "../../env";
import { Game } from "@/types/models/Game";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import useFetch from "@/hooks/useFetch";
import { Screenshots } from "@/types/models/Screenshots";

export const gameService = {
  useGame(id: number) {
    return useFetch<Game>(`${API_URL}games/${id}?key=${API_KEY}`);
  },

  useGameScreenshots(id: number) {
    return useFetch<Screenshots>(
      `${API_URL}games/${id}/screenshots?key=${API_KEY}`
    );
  },

  usePaginatedGamesBy(path: string, id: string, pageSize = 5) {
    const url = `${API_URL}games?key=${API_KEY}&${path}=${id}&page_size=${pageSize}`;
    return useInfiniteFetch<Game>(url);
  },
};
