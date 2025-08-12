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
import ImageCarousel from "@/components/feature-based/ImageCarousel";

import GameMediaSection from "@/components/feature-based/GameMediaSection";
import { Ionicons } from "@expo/vector-icons";
import GameSectionReview from "@/components/feature-based/GameSectionReview";
import GameSection from "@/components/feature-based/GameSection";

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

  console.log(`${API_URL}games/${id}?key=${API_KEY}`);

  return (
    <ScrollView className="flex-1 bg-black">
      <View className="items-center justify-end relative mt-[] mb-[90]">
        <ImageCarousel results={screenshots?.results} />
        <Image
          className="absolute bottom-[-70] w-[275] h-[275] rounded-[20]"
          source={{ uri: data?.background_image }}
        />
      </View>

      <View className="ps-5">
        <Text className="color-white font-bold text-3xl mb-1 tracking-[1]">
          {data?.name}
        </Text>
        <Text className="color-orange-300 font-semibold text-xl">
          {data?.developers?.[0]?.name}
        </Text>
        <GameMediaSection id={id} screenshots={screenshots ?? undefined} />
        <View className="pt-5 mb-5">
          <View className="justify-between flex-row pe-5">
            <Text className="color-white font-bold text-3xl mb-3">
              Sobre este jogo
            </Text>
            <Ionicons name="arrow-forward-circle" size={35} color="white" />
          </View>
          <Text className="color-[#ccc] text-base pe-5 mb-2" numberOfLines={4}>
            {data?.description_raw}
          </Text>
        </View>
        
        <GameSectionReview></GameSectionReview>

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
                  className={`px-2 h-12 min-w-24 rounded-full items-center justify-center border-2 border-white ${
                    genres === item.id.toString() ? "bg-white" : "bg-black"
                  }`}
                >
                  <Text
                    className={`text-center text-sm font-semibold ${
                      genres === item.id.toString()
                        ? "color-black"
                        : "color-white"
                    }`}
                  >
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
      </View>
    </ScrollView>
  );
}
