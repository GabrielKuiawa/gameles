import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import React, { use, useEffect, useState } from "react";
import Card from "@/components/Card";
import { useRouter } from "expo-router";
import axios from "axios";
type Genero = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState<Genero[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.rawg.io/api/genres?key=05897041ba5f4518ab79a51b485aa1f5"
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
            <Text style={styles.categoryTitle} key={item.id}>
              {item.name}
            </Text>
          ))
        )}
      </View>
      {/* {Object.entries(categories).map(([categoria, jogos]) => (
        <View key={categoria} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{categoria}</Text>
          <FlatList
            data={jogos}
            keyExtractor={(item, idx) => `${item.jogo}-${idx}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsContainer}
            renderItem={({ item }) => (
              <Card
                image={item.imagem}
                id={item.id}
                onPress={() => {
                  router.push({
                    pathname: "/GameDetails",
                    params: {
                      jogo: item.jogo,
                      imagem: item.imagem,
                      descricao: item.descricao,
                      ano: item.ano,
                      desenvolvedor: item.desenvolvedor,
                      nota: item.nota,
                      plataforma: item.plataforma,
                    },
                  });
                }}
              />
            )}
            style={styles.scrollView}
            nestedScrollEnabled
            removeClippedSubviews
            maxToRenderPerBatch={10}
            initialNumToRender={5}
          />
        </View>
      ))} */}
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
  categoryContainer: {
    marginBottom: 20,
  },
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
    borderLeftWidth: 4,
    borderLeftColor: "#4f8cff",
    paddingLeft: 16,
    paddingRight: 20,
    backgroundColor: "rgba(79,140,255,0.08)",
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  cardsContainer: {
    // paddingLeft: 10,
  },
  scrollView: {
    gap: 10,
  },
});
