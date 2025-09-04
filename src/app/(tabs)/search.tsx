import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";
import { genreIcons } from "@/constants/genreIcons";
import { gameService } from "@/service/gameService";
import SearchBar from "@/components/shared/SearchBar";
import LinearGradientTabs from "@/components/shared/LinearGradientTabs";
import Card from "@/components/shared/Card";
import GameCard from "@/components/feature-based/GameCard";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const { data, loading } = gameService.useSearchGames(searchText);
  const { data: genres } = gameService.useGenres();

  const navigateTo = useSafeNavigation();

  return (
    <View className="flex-1 bg-black">
      <SearchBar placeholder="Buscar por jogos" onChange={setSearchText} />
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
                  <GameCard
                    key={item.id}
                    isCard={false}
                    item={item}
                    onPress={() => {
                      navigateTo({
                        pathname: "/GameDetails/[id]",
                        params: { id: item.id },
                      });
                    }}
                  />
                )}
                ListFooterComponent={<View className="h-20" />}
              />
            )}
          </>
        )}

        {searchText.length === 0 && (
          <FlatList
            data={genres?.results}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            renderItem={({ item }) => (
              <Card
                onPress={() =>
                  navigateTo({
                    pathname: "/GameList",
                    params: {
                      title: `Jogos do Genêro ${item.name}`,
                      service: "genre",
                      genreId: item.id,
                    },
                  })
                }
                overlay={true}
                style={{ width: "49%" }}
                key={item.id}
                className=" h-40 rounded-2xl"
              >
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
              </Card>
            )}
            ListFooterComponent={<View className="h-20" />}
          />
        )}
      </View>
      <LinearGradientTabs />
    </View>
  );
}
