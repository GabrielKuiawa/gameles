import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import { useState } from "react";
import LinearGradientTabs from "@/components/shared/LinearGradientTabs";
import SearchBar from "@/components/shared/SearchBar";
import useFetch from "@/hooks/useFetch";
import { API_KEY, API_URL } from "@/env";
import { Game } from "@/types/models/Game";
import Card from "@/components/shared/Card";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";
import { Genre } from "@/types/models/Genres";
import { Ionicons } from "@expo/vector-icons";

type GenreIconMap = {
  [key: string]: keyof typeof Ionicons.glyphMap;
};

const genreIcons: GenreIconMap = {
  Action: "flash",
  Indie: "aperture",
  Adventure: "map",
  RPG: "shield",
  Strategy: "podium",
  Casual: "happy",
  Simulation: "construct",
  Puzzle: "extension-puzzle",
  Arcade: "game-controller",
  Platformer: "walk",
  "Massively Multiplayer": "people",
  Racing: "car-sport",
  Sports: "football",
  Fighting: "hand-left",
  Family: "home",
  "Board Games": "dice",
  Card: "albums",
  Educational: "school",
};

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const { data, loading, error } = useFetch<{ results: Game[] }>(
    searchText
      ? `${API_URL}games?key=${API_KEY}&page_size=20 5&search=${searchText.toLowerCase()}`
      : undefined
  );

  const { data: dataGenres } = useFetch<{ results: Genre[] }>(
    `${API_URL}genres?key=${API_KEY}`
  );
  // console.log(`${API_URL}genres?key=${API_KEY}`);

  let test: string = "";
  dataGenres?.results.forEach((genre) => {
    test += genre.name + ", ";
  });
  console.log(test);

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
                  <Card
                    overlay
                    className="rounded-lg"
                    onPress={() => {
                      navigateTo({
                        pathname: "/GameDetails/[id]",
                        params: { id: item.id },
                      });
                    }}
                  >
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

        {searchText.length === 0 && (
          <FlatList
            data={dataGenres?.results}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <View key={item.id} className="w-1/2 h-40 mb-5 px-1">
                <View className="flex-1 rounded-2xl overflow-hidden">
                  <Image
                    source={{ uri: item.image_background! }}
                    className="absolute w-full h-full"
                    resizeMode="cover"
                  />

                  <View className="absolute w-full h-full bg-black/50" />

                  <View className="flex-row items-center h-full px-4">
                    <Ionicons
                      name={genreIcons[item.name] || "game-controller"}
                      size={35}
                      color="white"
                    />
                    <Text
                      className="text-white font-bold text-lg ml-3 flex-shrink"
                      numberOfLines={1}
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>
      <LinearGradientTabs />
    </View>
  );
}
