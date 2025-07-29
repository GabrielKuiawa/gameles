import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import { useRouter } from "expo-router";
import GameSection from "@/components/GameSection";
import useFetch from "@/hooks/useFetch";
import { API_KEY, API_URL } from "@/env";
import { Genres } from "@/types/Genres";


export default function Home() {
  const router = useRouter();
  const { data, loading, error } = useFetch<Genres[]>(
    `${API_URL}genres?key=${API_KEY}&page=2&page_size=5`
  );
  
  if (loading) return <Text>Carregando...</Text>;
  if (error) return <Text>Erro ao carregar</Text>;

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.marginTop}>
        {loading ? (
          <Text>Carregando...</Text>
        ) : (
          data?.map((item) => (
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
  }
});
