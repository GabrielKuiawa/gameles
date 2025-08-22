import { View, FlatList, ActivityIndicator } from "react-native";
import { API_KEY, API_URL } from "@/env";
import { Genre } from "@/types/models/Genres";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import GameSection from "@/components/feature-based/GameSection";

export default function Home() {
  const { data: allData, loadMore,loading } = useInfiniteFetch<Genre>(
    `${API_URL}genres?key=${API_KEY}&page_size=5`
  );
  
  return (
    <View className="bg-black ps-5 pt-5 h-full">
      <FlatList
        data={allData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameSection id={item.id} pathParameters="genres" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 80 }}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" color="#000" /> : null
        }
      />
    </View>
  );
}
