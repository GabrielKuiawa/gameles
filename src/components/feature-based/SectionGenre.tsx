import { View, Text, FlatList } from "react-native";
import React from "react";
import CardGenre from "./CardGenre";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";
import { SectionGenreProps } from "@/types/props";

export default function SectionGenre({genres}:SectionGenreProps) {
  const navigateTo = useSafeNavigation();

  return (
    <FlatList
      data={genres}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => (
        <CardGenre
          id={item.id}
          image_background={item.image_background}
          name={item.name}
          key={item.id}
          onPress={() =>
            navigateTo({
              pathname: "/GameList",
              params: {
                title: `Jogos do Genêro ${item.name}`,
                service: "genre",
                genreId: item.id,
              },
            })
          }
        />
      )}
      ListFooterComponent={<View className="h-20" />}
    />
  );
}
