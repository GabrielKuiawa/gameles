import { Game } from "@/types/models/Game";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";
import { gameService } from "@/service/gameService";
import { chunkArray } from "@/utils/utils";
import { View } from "react-native";
import React from "react";
import GameCard from "./GameCard";
import HorizontalInfiniteList from "../shared/HorizontalInfiniteList";

export default function GenreSection({ id }: { id: number | string }) {
  const navigateTo = useSafeNavigation();
  const { data, loadMore } = gameService.usePaginatedGamesBy(
    "genres",
    id.toString()
  );
  const chunkedData = data ? chunkArray(data, 3) : [];

  return (
    <HorizontalInfiniteList<Game[]>
      data={chunkedData}
      loadMore={loadMore}
      keyExtractor={(chunk, index) =>
        `${index}-${chunk.map((g) => g.id).join("-")}`
      }
      renderItem={({ item: chunk }) => (
        <View className="flex-col mb-10">
          {chunk.map((game) => (
            <GameCard
              key={game.id}
              isCard={false}
              item={game}
              onPress={() =>
                navigateTo({
                  pathname: "/GameDetails/[id]",
                  params: { id: game.id },
                })
              }
            />
          ))}
        </View>
      )}
    />
  );
}
