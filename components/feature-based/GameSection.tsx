import { View, StyleSheet, FlatList } from "react-native";

import { API_KEY, API_URL } from "@/env";
import { Genre } from "@/types/Genres";
import { router } from "expo-router";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";

import { useRef } from "react";

import Title from "../shared/Title";
import CardGame from "./CardGame";

export default function GameSection({ id, name, pathParameters }: Genre) {
  const { data: allData, loadMore } = useInfiniteFetch<Genre>(
    `${API_URL}games?key=${API_KEY}&${pathParameters}=${id}&page_size=5`
  );
  const isNavigating = useRef(false);
  return (
    <View className="mb-8">
      {/* <Title name={name} /> */}
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
            id={parseInt(item.id)}
            image={item.background_image}
            name={item.name}
            year={item.released}
            rating={item.rating}
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
