import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import { useState } from "react";
import LinearGradientTabs from "@/components/shared/LinearGradientTabs";
import SearchBar from "@/components/shared/SearchBar";
import useFetch from "@/hooks/useFetch";
import { API_KEY, API_URL } from "@/env";
import { Game } from "@/types/models/Game";
import Card from "@/components/shared/Card";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";

type SearchResult = {
  results: Game[];
};

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const { data, loading, error } = useFetch<SearchResult>(
    searchText
      ? `${API_URL}games?key=${API_KEY}&page_size=20 5&search=${searchText.toLowerCase()}`
      : undefined
  );
  const navigateTo = useSafeNavigation();

  return (
    <View className="flex-1 bg-black">
      <SearchBar
        placeholder="Buscar por jogos, gêneros, etc."
        onChange={setSearchText}
      />
      <View className="flex-1 px-5">
        {searchText.length > 0 && (
          <>
            {loading && (
              <View className="flex-1 justify-center items-center bg-black">
                <ActivityIndicator size="large" color="#fff" />
              </View>
            )}

            {data && (
              <FlatList
                data={data.results}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                renderItem={({ item }) => (
                  <Card overlay className="rounded-lg" onPress={() => {
                    navigateTo({
                      pathname: "/GameDetails/[id]",  
                      params: { id: item.id },
                    });
                  }}>
                    <View className="flex-row items-start">
                      <Image
                        source={{
                          uri:
                            item.background_image ??
                            "https://i.pinimg.com/736x/75/c3/b2/75c3b2608ae934277e024cd1e0e70726.jpg",
                        }}
                        className="w-20 h-20 rounded-lg"
                        resizeMode="cover"
                      />
                      <View className="flex-1 ms-4 flex-col justify-between h-20">
                        <Text
                          className="color-white font-semibold text-lg"
                          numberOfLines={1}
                        >
                          {item.name}
                        </Text>
                        <Text className="color-gray-400 font-medium text-sm">
                          {item.released}
                        </Text>
                        <Text
                          className="color-gray-400 font-medium text-sm"
                          numberOfLines={1}
                        >
                          {item.genres?.map((genre) => genre.name).join(", ")}
                        </Text>
                      </View>
                    </View>
                  </Card>
                )}
              />
            )}
          </>
        )}
      </View>
      <LinearGradientTabs />
    </View>
  );
}
