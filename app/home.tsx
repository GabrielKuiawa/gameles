import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import React, { use, useEffect, useState } from "react";
import { API_KEY, API_URL,  } from '@env';
import { useRouter } from "expo-router";
import axios from "axios";
import GameSection from "@/components/GameSection";
type Genero = {
  id: number;
  name: string;
};

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState<Genero[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}genres?key=${API_KEY}&page=2&page_size=5`
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
    <ScrollView style={styles.mainContainer}>
      <View style={styles.marginTop}>
        {loading ? (
          <Text>Carregando...</Text>
        ) : (
          data.map((item) => (
            <GameSection
              key={item.id}
              id={item.id}
              name={item.name}
            ></GameSection>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 30,
  },
  mainContainer: {
    backgroundColor: "#0a0f1c",
    paddingVertical: 10,
  },
  cardsContainer: {
    // paddingLeft: 10,
  },
  scrollView: {
    gap: 10,
  },
});
