import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/types/Navigation";
import useFetch from "@/hooks/useFetch";
import { API_KEY, API_URL } from "@/env";
import { Game } from "@/types/Game";
import { Screenshots } from "@/types/Screenshots";
import { useEffect, useState } from "react";
import ImageCarousel from "@/components/ImageCarousel";
import GameSection from "@/components/GameSection";

type GameDetailsRouteProp = RouteProp<RootStackParamList, "GameDetails">;

export default function GameDetails() {
  const route = useRoute<GameDetailsRouteProp>();
  const { id } = route.params;

  const { data } = useFetch<Game>(`${API_URL}games/${id}?key=${API_KEY}`);
  const { data: screenshots } = useFetch<Screenshots>(
    `${API_URL}games/${id}/screenshots?key=${API_KEY}`
  );
  let [genres, setGenres] = useState<string>("");

  useEffect(() => {
    if (data?.genres?.[0]?.name) {
      setGenres(data.genres[0].id.toString());
    }
  }, [data?.genres]);

  return (
    <ScrollView className="flex-1 bg-slate-900">
      <View className="items-center justify-end relative mt-[] mb-[90]">
        <ImageCarousel results={screenshots?.results} />
        <Image
          className="absolute bottom-[-70] w-[275] h-[275] rounded-[20]"
          source={{ uri: data?.background_image }}
        />
      </View>

      <View className="ps-5">
        <Text className="color-white font-bold text-3xl mb-4 tracking-[1]">
          {data?.name}
        </Text>
        <View className="flex-row items-center gap-2 mb-4">
          <FlatList
            data={data?.genres}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setGenres(item.id.toString());
                }}
              >
                <View
                  className={`px-2 h-10 min-w-20 bg-white rounded-full items-center justify-center ${
                    genres === item.id.toString() ? "bg-blue-500" : ""
                  }`}
                >
                  <Text className="text-center text-sm font-semibold">
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <GameSection id={genres} name={genres} pathParameters="genres" />

        <Text className="color-[#ccc] text-base pe-5">
          {data?.description_raw}
        </Text>
      </View>
    </ScrollView>
  );
}
