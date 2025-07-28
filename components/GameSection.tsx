import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

type GameSectionProps = {
  id: number;
  name: string;
};

export default function GameSection({ id, name }: GameSectionProps) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=05897041ba5f4518ab79a51b485aa1f5&genres=${id}&page_size=5`
        );
        const json = await response.data;
        setData(json.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
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
