import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";

type GameDetailsRouteProp = RouteProp<RootStackParamList, 'GameDetails'>;

export default function GameDetails() {
  const route = useRoute<GameDetailsRouteProp>();
  const { jogo, imagem, descricao, ano, desenvolvedor, nota, plataforma } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imagem }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{jogo}</Text>
        
        {descricao && (
          <Text style={styles.description}>{descricao}</Text>
        )}

        <View style={styles.infoContainer}>
          {ano && (
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Ano</Text>
              <Text style={styles.infoValue}>{ano}</Text>
            </View>
          )}

          {desenvolvedor && (
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Desenvolvedor</Text>
              <Text style={styles.infoValue}>{desenvolvedor}</Text>
            </View>
          )}

          {nota && (
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Nota</Text>
              <Text style={[styles.infoValue, styles.nota]}>{nota}</Text>
            </View>
          )}

          {plataforma && (
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Plataformas</Text>
              <View style={styles.plataformaContainer}>
                <Text style={[styles.infoValue, styles.plataformaText]}>
                  {Array.isArray(plataforma) ? plataforma.join(", ") : plataforma}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0f1c",
    paddingTop: 0,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    marginTop: 80,
  },
  content: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    letterSpacing: 1,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "rgba(79,140,255,0.08)",
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: 8,
  },
  infoLabel: {
    color: "#4f8cff",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoValue: {
    color: "#fff",
    fontSize: 16,
  },
  nota: {
    backgroundColor: "#4f8cff",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontWeight: "bold",
  },
  plataformaContainer: {
    flex: 1,
    paddingLeft: 8,
  },
  plataformaText: {
    flexWrap: "wrap",
    textAlign: "right",
  },
});
