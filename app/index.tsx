import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Card from "@/components/Card";

const categories = {
  Ação: [
    {
      jogo: "Far Cry 4",
      imagem:
        "https://i.pinimg.com/736x/2d/7a/cd/2d7acdca3698bb3cad9b8021c5068cbd.jpg",
    },
    {
      jogo: "Resident Evil 4 Remake",
      imagem:
        "https://i.pinimg.com/736x/03/7b/86/037b86e2b899e7ce4f0371e88be3ce1f.jpg",
    },
    {
      jogo: "GTA V",
      imagem:
        "https://i.pinimg.com/736x/58/d3/76/58d3761902f1618bcad2f50db666de53.jpg",
    },
  ],
  RPG: [
    {
      jogo: "Cyberpunk 2077",
      imagem:
        "https://i.pinimg.com/736x/4b/42/48/4b4248d8b20f85b5a3d22dbea2f17000.jpg",
    },
    {
      jogo: "GTA VI",
      imagem:
        "https://i.pinimg.com/736x/80/c7/ff/80c7fff86557368d4c807ab639a20922.jpg",
    },
    {
      jogo: "Asphalt 9",
      imagem:
        "https://i.pinimg.com/736x/80/c7/ff/80c7fff86557368d4c807ab639a20922.jpg",
    },
  ],
  Corrida: [
    {
      jogo: "Ghost of Tsushima",
      imagem:
        "https://i.pinimg.com/736x/50/34/80/503480c0ec29fcb2597acde808441cc1.jpg",
    },
    {
      jogo: "God of War",
      imagem:
        "https://i.pinimg.com/736x/86/01/3d/86013d73534ca07e46fd1735fec59c84.jpg",
    },
    {
      jogo: "Horizon Forbidden West",
      imagem:
        "https://i.pinimg.com/736x/3f/8e/ea/3f8eeae2a0222ceb3529fb3feb04f372.jpg",
    },
    {
      jogo: "Ghost of Tsushima",
      imagem:
        "https://i.pinimg.com/736x/50/34/80/503480c0ec29fcb2597acde808441cc1.jpg",
    },
    {
      jogo: "God of War",
      imagem:
        "https://i.pinimg.com/736x/86/01/3d/86013d73534ca07e46fd1735fec59c84.jpg",
    },
    {
      jogo: "Horizon Forbidden West",
      imagem:
        "https://i.pinimg.com/736x/3f/8e/ea/3f8eeae2a0222ceb3529fb3feb04f372.jpg",
    },
  ],
};

export default function Index() {
  return (
    <ScrollView style={styles.mainContainer}>
      {Object.entries(categories).map(([categoria, jogos]) => (
        <View key={categoria} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{categoria}</Text>
          <ScrollView
            style={styles.scrollView}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsContainer}
          >
            {jogos.map((game) => (
              <Card
                title={game.jogo}
                image={game.imagem}
              />
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#0a0f1c",
    paddingVertical: 10,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  cardsContainer: {
    paddingLeft: 10,
  },
  scrollView: {
    gap: 10,
  },
});
