import { View, Text, Image, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/types/models/Navigation";
import useFetch from "@/hooks/useFetch";
import { API_KEY, API_URL } from "@/env";
import { Game } from "@/types/models/Game";
import { Screenshots } from "@/types/models/Screenshots";
import { useEffect, useState } from "react";
import ImageCarousel from "@/components/feature-based/ImageCarousel";
import GameMediaSection from "@/components/feature-based/GameMediaSection";
import GameSectionReview from "@/components/feature-based/GameSectionReview";
import GameSection from "@/components/feature-based/GameSection";
import Tabs from "@/components/shared/Tabs";
import CardDescription from "@/components/feature-based/CardDescription";

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

        <CardDescription description_raw={data?.description_raw} />

        <GameSectionReview
          id={id}
          ratings={data?.ratings}
          rating={data?.rating}
        />

        <Tabs
          data={data}
          genres={genres}
          onChangeGenre={(id) => setGenres(id)}
        />

        <GameSection id={parseInt(genres)} pathParameters="genres" />
      </View>
    </ScrollView>
  );
}
