import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "./Card";
import { API_KEY, API_URL } from "@/env";
import { Genre } from "@/types/Genres";
import { router } from "expo-router";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import Title from "./Title";

export default function GameSection({ id, name }: Genre) {
  const { data: allData, loadMore } = useInfiniteFetch<Genre>(`${API_URL}games?key=${API_KEY}&genres=${id}&page_size=5`);

  return (
    <View style={styles.categoryContainer}>
      {/* <Title name={name} /> */}
      <FlatList
        data={allData}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style={styles.scrollView}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            image={item.background_image}
            name={item.name}
            year={item.released}
            rating={item.rating}
            onPress={() => {
              router.push({
                pathname: "/GameDetails",
                params: { id: item.id },
              });
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    gap: 10,
  },
  categoryContainer: {
    marginBottom: 20,
    paddingStart: 8
  },
});
