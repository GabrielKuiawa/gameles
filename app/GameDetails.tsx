import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/types/Navigation";
import useFetch from "@/hooks/useFetch";
import { API_KEY, API_URL } from "@/env";
import { Game } from "@/types/Game";
import { Screenshots } from "@/types/Screenshots";
import { useEffect, useState } from "react";
import ImageCarousel from "@/components/ImageCarousel";

type GameDetailsRouteProp = RouteProp<RootStackParamList, "GameDetails">;

export default function GameDetails() {
  const route = useRoute<GameDetailsRouteProp>();
  const { id } = route.params;

  const { data } = useFetch<Game>(`${API_URL}games/${id}?key=${API_KEY}`);
  const { data: screenshots } = useFetch<Screenshots>(
    `${API_URL}games/${id}/screenshots?key=${API_KEY}`
  );

  return (
    <ScrollView className="flex-1 bg-slate-900">
      <View className="items-center justify-end relative mt-[100] mb-[70]">
        <ImageCarousel results={screenshots?.results} />
        <Image
          className="absolute bottom-[-70] w-[275] h-[275] rounded-[20]"
          source={{ uri: data?.background_image }}
        />
      </View>

      <View className="p-7">
        <Text className="color-white font-bold text-3xl mb-4 tracking-[1]">
          {data?.name}
        </Text>
        <Text className="color-[#ccc] text-base">{data?.description_raw}</Text>
      </View>
    </ScrollView>
  );
}
