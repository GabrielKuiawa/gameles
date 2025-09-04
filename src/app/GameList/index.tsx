import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { gameService } from "@/service/gameService";
import { Game } from "@/types/models/Game";
import useFetch from "@/hooks/useFetch";
import GameCard from "@/components/feature-based/GameCard";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";
import LoadingScreen from "@/components/shared/LoadingScreen";

export default function GameList() {
  const { title, service, genreId, url } = useLocalSearchParams<{
    title: string;
    service: "best" | "genre" | "new" | string;
    genreId?: string;
    url?: string;
  }>();
  const navigateTo = useSafeNavigation();

  let fetchHook;
  if (service === "best") {
    fetchHook = gameService.useBestGames(15);
  } else if (service === "genre" && genreId) {
    fetchHook = gameService.useGamesByGenre(Number(genreId));
  } else if (url) {
    fetchHook = useFetch<{ results: Game[] }>(url);
  }

  const { data, loading } = fetchHook ?? {};
  if (loading) return <LoadingScreen />;

  return (
    <View className="flex-1 bg-black p-4">
      <Text className="text-white text-xl font-bold mb-4">{title}</Text>

      {data && (
        <FlatList
          data={data.results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <GameCard
              key={item.id}
              isCard={false}
              item={item}
              onPress={() => {
                navigateTo({
                  pathname: "/GameDetails/[id]",
                  params: { id: item.id },
                });
              }}
            />
          )}
        />
      )}
    </View>
  );
}
