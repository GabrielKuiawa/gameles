import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import GameSection from "@/components/GameSection";
import useFetch from "@/hooks/useFetch";
import { API_KEY, API_URL } from "@/env";
import { Genre, GenresResponse } from "@/types/Genres";
import { useEffect, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState(`${API_URL}genres?key=${API_KEY}&page_size=5`);
  const [allData, setAllData] = useState<Genre[]>([]);

  const { data, loading } = useFetch<GenresResponse>(url);

  useEffect(() => {
    if (!data?.results) return;

    const isFirstPage = !data.previous;

    setAllData((prev) => {
      if (isFirstPage) return data.results;

      const existingIds = new Set(prev.map((item) => item.id));
      const newItems = data.results.filter((item) => !existingIds.has(item.id));

      return [...prev, ...newItems];
    });
  }, [data]);

  const handleEndReached = () => {
    if (!loading && data?.next) {
      setUrl(data.next);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={allData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameSection id={item.id} name={item.name} />}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#0a0f1c",
    paddingVertical: 10,
    marginTop: 30,
    height: "100%"
  }
});
