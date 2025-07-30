import { View, StyleSheet, FlatList } from "react-native";
import GameSection from "@/components/GameSection";
import { API_KEY, API_URL } from "@/env";
import { Genre } from "@/types/Genres";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";

export default function Home() {
  const { data: allData, loadMore } = useInfiniteFetch<Genre>(`${API_URL}genres?key=${API_KEY}&page_size=5`);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={allData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameSection id={item.id} name={item.name} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#0a0f1c",
    paddingVertical: 10,
    marginTop: 30,
    height: "100%",
  },
});
