import { View, Text, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import useFetch from "@/hooks/useFetch";
import { API_KEY, API_URL } from "@/env";
import { Game } from "@/types/models/Game";
import { Screenshots } from "@/types/models/Screenshots";
import ImageCarousel from "@/components/feature-based/ImageCarousel";
import GameMediaSection from "@/components/feature-based/GameMediaSection";
import GameSectionReview from "@/components/feature-based/GameSectionReview";
import GameSection from "@/components/feature-based/GameSection";
import CardDescription from "@/components/feature-based/CardDescription";
import TabsGeneric from "@/components/shared/TabsPropsGeneric";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";

export default function GameDetails() {
  const route = useRoute();
  const { id } = route.params as { id: number };

  const { data } = useFetch<Game>(`${API_URL}games/${id}?key=${API_KEY}`);
  const { data: screenshots } = useFetch<Screenshots>(
    `${API_URL}games/${id}/screenshots?key=${API_KEY}`
  );
  const navigateTo = useSafeNavigation();
  return (
    <ScrollView className="flex-1 bg-black">
      <View className="items-center justify-end relative mb-[90]">
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

        <CardDescription
          onPress={() =>
            navigateTo({
              pathname: "/GameDetails/DescriptionDetails/[id]",
              params: {
                id: id,
                description_raw: data?.description_raw,
              },
            })
          }
          description_raw={data?.description_raw}
        />

        <GameSectionReview
          id={id}
          ratings={data?.ratings}
          rating={data?.rating}
        />

        <TabsGeneric
          data={data?.genres ?? []}
          getId={(g) => g.id}
          getLabel={(g) => g.name}
          renderSection={(id) => (
            <GameSection id={Number(id)} pathParameters="genres" />
          )}
        />
      </View>
    </ScrollView>
  );
}
