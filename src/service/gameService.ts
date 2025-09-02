import { API_KEY, API_URL } from "../../env";
import { Game } from "@/types/models/Game";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";

export const gameService = {
  useGamesBy(path: string, id: string, pageSize = 5) {
    const url = `${API_URL}games?key=${API_KEY}&${path}=${id}&page_size=${pageSize}`;
    return useInfiniteFetch<Game>(url);
  },
};
