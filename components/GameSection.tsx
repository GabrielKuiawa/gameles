import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { API_KEY, API_URL } from "@/env";
import { Genre, GenresResponse } from "@/types/Genres";
import useFetch from "@/hooks/useFetch";
import { router } from "expo-router";

export default function GameSection({ id, name }: Genre) {
  const { data, loading, error } = useFetch<GenresResponse>(
    `${API_URL}games?key=${API_KEY}&genres=${id}&page_size=3`
  );

  if (loading) return <Text>Carregando...</Text>;
  if (error) return <Text>Erro ao carregar</Text>;
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{name}</Text>
      <FlatList
        data={data?.results ?? []}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            image={item.background_image}
            onPress={() => {
              router.push({
                pathname: "/GameDetails",
                params: { id: item.id}
              })
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
