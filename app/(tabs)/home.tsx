import {
  View,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { API_KEY, API_URL } from "@/env";
import { Genre } from "@/types/models/Genres";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import GameSection from "@/components/feature-based/GameSection";

import LinearGradientTabs from "@/components/shared/LinearGradientTabs";
import useFetch from "@/hooks/useFetch";
import { Game } from "@/types/models/Game";
import { Ionicons } from "@expo/vector-icons";
import { formatDate } from "@/utils/formateDate";

function chunkArray<T>(arr: T[], size: number): T[][] {
  return arr.reduce<T[][]>((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
}

export default function Home() {
  const { data } = useFetch<{ results: Game[] }>(
    `${API_URL}games?key=${API_KEY}&dates=2025-06-01,2025-08-26&ordering=-added&page_size=10`
  );

  const { data: allbest250 } = useFetch<{ results: Game[] }>();
  const chunkedData = allbest250 ? chunkArray(allbest250.results, 3) : [];

  return (
    <View className="bg-black ps-5 h-full">
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View className="mt-5">
          {data ? (
            <FlatList
              data={data.results}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
              renderItem={({ item }) => (
                <View className="h-72 w-96 rounded-xl overflow-hidden">
                  <Image
                    source={{
                      uri:
                        item.background_image ??
                        "https://i.pinimg.com/736x/75/c3/b2/75c3b2608ae934277e024cd1e0e70726.jpg",
                    }}
                    className="w-full h-48 rounded-xl"
                    resizeMode="cover"
                  />
                  <View className="flex-row items-center flex-1 ">
                    <Image
                      source={{
                        uri:
                          item.short_screenshots?.[1].image ??
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
                        {item.name}
                      </Text>
                      <Text
                        className="text-gray-300 text-sm mt-1 w-48"
                        numberOfLines={2}
                      >
                        {item.platforms
                          ?.map((platform) => platform.platform.name)
                          .join(", ")}
                      </Text>
                      <Text
                        className="color-gray-400 font-medium text-sm"
                        numberOfLines={1}
                      >
                        {item.genres?.map((genre) => genre.name).join(", ")}
                      </Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                      <Text className="text-white font-bold text-lg ">
                        {item.rating}
                      </Text>
                      <Ionicons name="star" size={15} color={"#22c55e"} />
                    </View>
                  </View>
                </View>
              )}
            />
          ) : (
            <ActivityIndicator size="large" color="#fff" className="my-10" />
          )}
        </View>

        {allbest250 && (
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
        {allbest250 && (
          <View className="mt-3 pe-5 flex-col gap-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-white font-bold text-xl">
                All time top 250 games
              </Text>
              <Ionicons name="arrow-forward-circle" size={35} color="white" />
            </View>
            <View className="h-96">
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
