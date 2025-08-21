import { View, FlatList } from "react-native";
import { API_KEY, API_URL } from "@/env";
import { router } from "expo-router";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import { useRef } from "react";
import CardGame from "./CardGame";
import { Game } from "@/types/models/Game";
import { GameSectionProps } from "@/types/props";

export default function GameSection(props: GameSectionProps) {
  const { data: allData, loadMore } = useInfiniteFetch<Game>(
    `${API_URL}games?key=${API_KEY}&${props.pathParameters}=${props.id}&page_size=5`
  );
  const isNavigating = useRef(false);
  return (
    <View className="mb-8">
      <FlatList
        data={allData}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        horizontal
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardGame
            {...item}
            onPress={() => {
              if (isNavigating.current) return;

              isNavigating.current = true;

              router.push({
                pathname: "/GameDetails",
                params: { id: item.id },
              });

              setTimeout(() => {
                isNavigating.current = false;
              }, 1000);
            }}
          />
        )}
      />
    </View>
  );
}
