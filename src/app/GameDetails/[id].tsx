import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import useFetch from "@/hooks/useFetch";
import { Game } from "@/types/models/Game";
import { API_KEY, API_URL } from "../../../env";
import { Screenshots } from "@/types/models/Screenshots";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";
import ImageCarousel from "@/components/feature-based/ImageCarousel";
import GameMediaSection from "@/components/feature-based/GameMediaSection";
import CardDescription from "@/components/feature-based/CardDescription";
import GameSectionReview from "@/components/feature-based/GameSectionReview";
import TabsGeneric from "@/components/shared/TabsPropsGeneric";
import GameSection from "@/components/feature-based/GameSection";


export default function GameDetails() {
  const route = useRoute();
  const { id } = route.params as { id: number };
  const { data, loading } = useFetch<Game>(
    `${API_URL}games/${id}?key=${API_KEY}`
  );
  const { data: screenshots } = useFetch<Screenshots>(
    `${API_URL}games/${id}/screenshots?key=${API_KEY}`
  );
  
  // console.log(`${API_URL}games/${id}?key=${API_KEY}`);
  
  const navigateTo = useSafeNavigation();
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
  return (
    <ScrollView
      className="flex-1 bg-black"
      showsVerticalScrollIndicator={false}
    >
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
