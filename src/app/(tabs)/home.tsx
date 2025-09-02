import { Game } from "@/types/models/Game";
import {
  View,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LinearGradientTabs from "@/components/shared/LinearGradientTabs";
import { chunkArray } from "@/utils/utils";
import { gameService } from "@/service/gameService";
import HorizontalInfiniteList from "@/components/shared/HorizontalInfiniteList";
import GameCard from "@/components/feature-based/GameCard";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";

export default function Home() {
  const { data: gamesByDateRange } = gameService.useGamesByDates(
    "2025-06-01",
    "2025-08-26"
  );
  const { data: best250Games } = gameService.useBestGames(250);
  const chunkedData = best250Games ? chunkArray(best250Games.results, 3) : [];
  const navigateTo = useSafeNavigation();

  return (
    <View className="bg-black ps-5 h-full">
      <ScrollView>
        {gamesByDateRange ? (
          <HorizontalInfiniteList<Game>
            data={gamesByDateRange.results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <GameCard
                onPress={() =>
                  navigateTo({
                    pathname: "/GameDetails/[id]",
                    params: { id: item.id },
                  })
                }
                item={item}
              />
            )}
          />
        ) : (
          <ActivityIndicator size="large" color="#fff" className="my-10" />
        )}

        {best250Games && (
          <View className="mt-8 pe-5 flex-col gap-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-white font-bold text-xl">
                All time top 250 games
              </Text>
              <Ionicons name="arrow-forward-circle" size={35} color="white" />
            </View>
            <View className="">
              <FlatList
                data={chunkedData}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                renderItem={({ item }) => (
                  <View className="flex-col">
                    {item.map((game) => (
                      <View
                        key={game.id}
                        className="flex-row items-center mb-4"
                        style={{ width: 320 }}
                      >
                        <Image
                          source={{
                            uri:
                              game.short_screenshots?.[1]?.image ??
                              "https://i.pinimg.com/736x/75/c3/b2/75c3b2608ae934277e024cd1e0e70726.jpg",
                          }}
                          className="w-20 h-20 rounded-xl"
                          resizeMode="cover"
                        />
                        <View className="flex-1 ms-4">
                          <Text
                            className="text-white font-semibold w-48"
                            numberOfLines={1}
                          >
                            {game.name}
                          </Text>
                          <Text
                            className="text-gray-300 text-sm mt-1 w-48"
                            numberOfLines={2}
                          >
                            {game.platforms
                              ?.map((p) => p.platform.name)
                              .join(", ")}
                          </Text>
                          <Text
                            className="color-gray-400 font-medium text-sm"
                            numberOfLines={1}
                          >
                            {game.genres?.map((g) => g.name).join(", ")}
                          </Text>
                        </View>
                        <View className="flex-row items-center gap-1">
                          <Text className="text-white font-bold text-lg ">
                            {game.rating}
                          </Text>
                          <Ionicons name="star" size={15} color={"#22c55e"} />
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              />
            </View>
          </View>
        )}
        {best250Games && (
          <View className="mt-8 pe-5 flex-col gap-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-white font-bold text-xl">
                All time top 250 games
              </Text>
              <Ionicons name="arrow-forward-circle" size={35} color="white" />
            </View>
            <View className="">
              <FlatList
                data={chunkedData}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                renderItem={({ item }) => (
                  <View className="flex-col">
                    {item.map((game) => (
                      <View
                        key={game.id}
                        className="flex-row items-center mb-4"
                        style={{ width: 320 }}
                      >
                        <Image
                          source={{
                            uri:
                              game.short_screenshots?.[1]?.image ??
                              "https://i.pinimg.com/736x/75/c3/b2/75c3b2608ae934277e024cd1e0e70726.jpg",
                          }}
                          className="w-20 h-20 rounded-xl"
                          resizeMode="cover"
                        />
                        <View className="flex-1 ms-4">
                          <Text
                            className="text-white font-semibold w-48"
                            numberOfLines={1}
                          >
                            {game.name}
                          </Text>
                          <Text
                            className="text-gray-300 text-sm mt-1 w-48"
                            numberOfLines={2}
                          >
                            {game.platforms
                              ?.map((p) => p.platform.name)
                              .join(", ")}
                          </Text>
                          <Text
                            className="color-gray-400 font-medium text-sm"
                            numberOfLines={1}
                          >
                            {game.genres?.map((g) => g.name).join(", ")}
                          </Text>
                        </View>
                        <View className="flex-row items-center gap-1">
                          <Text className="text-white font-bold text-lg ">
                            {game.rating}
                          </Text>
                          <Ionicons name="star" size={15} color={"#22c55e"} />
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              />
            </View>
          </View>
        )}
        <View className="pe-5 gap-5">
          <View className="flex-row items-center mt-5 gap-5 justify-between">
            <View className="flex-row items-center gap-3">
              <Ionicons name="logo-playstation" color={"white"} size={50} />
              <View className="flex-col gap-1">
                <Text className="text-slate-500">Novos lançamentos para</Text>
                <Text className="text-white font-bold text-2xl">
                  PlayStation 4
                </Text>
              </View>
            </View>
            <Ionicons
              className="self-end"
              name="arrow-forward-circle"
              size={35}
              color="white"
            />
          </View>
          <Image
            className="w-full h-60 rounded-xl"
            src="https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          />
        </View>
        {best250Games && (
          <View className="mt-8 pe-5 flex-col gap-4 mb-32">
            <View className="flex-row justify-between items-center">
              <Text className="text-white font-bold text-xl">
                All time top 250 games
              </Text>
              <Ionicons name="arrow-forward-circle" size={35} color="white" />
            </View>
            <View className="">
              <FlatList
                data={chunkedData}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                renderItem={({ item }) => (
                  <View className="flex-col">
                    {item.map((game) => (
                      <View
                        key={game.id}
                        className="flex-row items-center mb-4"
                        style={{ width: 320 }}
                      >
                        <Image
                          source={{
                            uri:
                              game.short_screenshots?.[1]?.image ??
                              "https://i.pinimg.com/736x/75/c3/b2/75c3b2608ae934277e024cd1e0e70726.jpg",
                          }}
                          className="w-20 h-20 rounded-xl"
                          resizeMode="cover"
                        />
                        <View className="flex-1 ms-4">
                          <Text
                            className="text-white font-semibold w-48"
                            numberOfLines={1}
                          >
                            {game.name}
                          </Text>
                          <Text
                            className="text-gray-300 text-sm mt-1 w-48"
                            numberOfLines={2}
                          >
                            {game.platforms
                              ?.map((p) => p.platform.name)
                              .join(", ")}
                          </Text>
                          <Text
                            className="color-gray-400 font-medium text-sm"
                            numberOfLines={1}
                          >
                            {game.genres?.map((g) => g.name).join(", ")}
                          </Text>
                        </View>
                        <View className="flex-row items-center gap-1">
                          <Text className="text-white font-bold text-lg ">
                            {game.rating}
                          </Text>
                          <Ionicons name="star" size={15} color={"#22c55e"} />
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              />
            </View>
          </View>
        )}
      </ScrollView>

      <LinearGradientTabs />
    </View>
  );
}
