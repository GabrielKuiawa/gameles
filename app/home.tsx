import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import GameSection from "@/components/GameSection";
import { API_KEY, API_URL } from "@/env";
import { Genre } from "@/types/Genres";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import { colors } from "@/styles/colors";

export default function Home() {
  const { data: allData, loadMore,loading } = useInfiniteFetch<Genre>(
    `${API_URL}genres?key=${API_KEY}&page_size=5`
  );
  
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={allData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameSection id={item.id} name={item.name} />}
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

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    marginTop: 30,
    height: "100%",
  },
});
