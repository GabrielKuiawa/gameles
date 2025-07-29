import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";
import useFetch from "@/hooks/useFetch";
import { API_KEY, API_URL } from "@/env";
import { Game } from "@/types/Game";

type GameDetailsRouteProp = RouteProp<RootStackParamList, "GameDetails">;

export default function GameDetails() {
  const route = useRoute<GameDetailsRouteProp>();
  const { id } = route.params;

  const { data, loading, error } = useFetch<Game>(
    `${API_URL}games/${id}?key=${API_KEY}`
  );

  if (loading) return <Text>Carregando...</Text>;
  if (error) return <Text>Erro ao carregar</Text>;
  console.log(data?.name);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: data?.background_image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{data?.name}</Text>

        {data?.description_raw && (
          <Text
            style={styles.description}
            numberOfLines={4}
            ellipsizeMode="tail"
          >
            {data.description_raw}
          </Text>
        )}

        <View style={styles.infoContainer}>
          {data?.released && (
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Ano</Text>
              <Text style={styles.infoValue}>{data?.released}</Text>
            </View>
          )}

          {data?.developers?.name && (
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Desenvolvedor</Text>
              <Text style={styles.infoValue}>{data?.developers?.name}</Text>
            </View>
          )}

          {data?.rating && (
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Nota</Text>
              <Text style={[styles.infoValue, styles.nota]}>
                {data?.rating}
              </Text>
            </View>
          )}

          {data?.platforms && (
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Plataformas</Text>
              <View style={styles.plataformaContainer}>
                <Text style={[styles.infoValue, styles.plataformaText]}>
                  {data.platforms.map((p) => p.platform.name).join(", ")}
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
