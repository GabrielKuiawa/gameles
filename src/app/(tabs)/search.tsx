import { View, FlatList, ActivityIndicator } from "react-native";
import { useState } from "react";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";
import { gameService } from "@/service/gameService";
import SearchBar from "@/components/shared/SearchBar";
import LinearGradientTabs from "@/components/shared/LinearGradientTabs";
import GameCard from "@/components/feature-based/GameCard";
import SectionGenre from "@/components/feature-based/SectionGenre";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const { data, loading } = gameService.useSearchGames(searchText);
  const { data: genres } = gameService.useGenres();

  const navigateTo = useSafeNavigation();

  return (
    <View className="flex-1 bg-black">
      <View className="flex-1 px-5">
        <SearchBar placeholder="Buscar por jogos" onChange={setSearchText} />
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

        {searchText.length === 0 && <SectionGenre genres={genres?.results} />}
      </View>
      <LinearGradientTabs />
    </View>
  );
}
