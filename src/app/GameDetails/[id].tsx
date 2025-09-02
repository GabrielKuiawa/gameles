import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";
import ImageCarousel from "@/components/feature-based/ImageCarousel";
import GameMediaSection from "@/components/feature-based/GameMediaSection";
import CardDescription from "@/components/feature-based/CardDescription";
import GameSectionReview from "@/components/feature-based/GameSectionReview";
import TabsGeneric from "@/components/shared/TabsGeneric";
import GenreSection from "@/components/feature-based/GenreSection";
import { gameService } from "@/service/gameService";
import LoadingScreen from "@/components/shared/LoadingScreen";

export default function GameDetails() {
  const route = useRoute();
  const { id } = route.params as { id: number };
  const { data: game, loading } = gameService.useGame(id);
  const { data: screenshots } = gameService.useGameScreenshots(id);
  const navigateTo = useSafeNavigation();

  if (loading || !game) return <LoadingScreen />;

  return (
    <ScrollView
      className="flex-1 bg-black"
      showsVerticalScrollIndicator={false}
    >
      <View className="items-center justify-end relative mb-[90]">
        <ImageCarousel results={screenshots?.results} />
        <Image
          className="absolute bottom-[-70] w-[275] h-[275] rounded-[20]"
          source={{ uri: game?.background_image }}
        />
      </View>

      <View className="ps-5">
        <Text className="color-white font-bold text-3xl mb-1 tracking-[1]">
          {game?.name}
        </Text>
        <Text className="color-orange-300 font-semibold text-xl">
          {game?.developers?.[0]?.name}
        </Text>

        <GameMediaSection id={id} screenshots={screenshots ?? undefined} />

        <CardDescription
          onPress={() =>
            navigateTo({
              pathname: "/GameDetails/DescriptionDetails/[id]",
              params: {
                id: id,
                description_raw: game?.description_raw,
              },
            })
          }
          description_raw={game?.description_raw}
        />

        <GameSectionReview
          id={id}
          ratings={game?.ratings}
          rating={game?.rating}
        />

        <TabsGeneric
          data={game?.genres ?? []}
          getId={(g) => g.id}
          getLabel={(g) => g.name}
          renderSection={(id) => <GenreSection id={id} />}
        />
      </View>
    </ScrollView>
  );
}
