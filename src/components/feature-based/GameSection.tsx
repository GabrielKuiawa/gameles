import { View, FlatList } from "react-native";

import CardGame from "./CardGame";
import { GameSectionProps } from "@/types/props";
import { Game } from "@/types/models/Game";
import { API_KEY, API_URL } from "../../../env";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";

export default function GameSection(props: GameSectionProps) {
  const { data: allData, loadMore, loading } = useInfiniteFetch<Game>(
    `${API_URL}games?key=${API_KEY}&${props.pathParameters}=${props.id}&page_size=5`
  );
  const navigateTo = useSafeNavigation();
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
              navigateTo({
                pathname: "/GameDetails/[id]",
                params: { id: item.id },
              });
            }}
          />
        )}
      />
    </View>
  );
}
