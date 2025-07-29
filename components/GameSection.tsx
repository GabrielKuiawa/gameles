import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { API_KEY, API_URL } from "@/env";
import { Genres } from "@/types/Genres";
import useFetch from "@/hooks/useFetch";

export default function GameSection({ id, name }: Genres) {
  const { data, loading, error } = useFetch<Genres[]>(
    `${API_URL}games?key=${API_KEY}&genres=${id}&page_size=3`
  );

  if (loading) return <Text>Carregando...</Text>;
  if (error) return <Text>Erro ao carregar</Text>;

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{name}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            image={item.background_image}
            onPress={() => {
              // Navigate to game details
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
    letterSpacing: 2,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    paddingLeft: 16,
    paddingRight: 20,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  scrollView: {
    gap: 10,
  },
  categoryContainer: {
    marginBottom: 20,
  },
});
