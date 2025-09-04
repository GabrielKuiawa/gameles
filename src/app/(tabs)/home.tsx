  import { Game } from "@/types/models/Game";
  import { View, ActivityIndicator, ScrollView } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import { chunkArray } from "@/utils/utils";
  import { gameService } from "@/service/gameService";
  import { useSafeNavigation } from "@/hooks/useSafeNavigation";
  import LinearGradientTabs from "@/components/shared/LinearGradientTabs";
  import HorizontalInfiniteList from "@/components/shared/HorizontalInfiniteList";
  import GameCard from "@/components/feature-based/GameCard";
  import GameSectionList from "@/components/feature-based/GameSectionList";
  import SectionCard from "@/components/shared/SectionCard";

  export default function Home() {
    const { data: gamesByDateRange } = gameService.useGamesByDates(
      "2025-06-01",
      "2025-08-26"
    );
    const { data: best250Games } = gameService.useBestGames(15);
    const chunkedData = best250Games ? chunkArray(best250Games.results, 3) : [];
    const navigateTo = useSafeNavigation();

    return (
      <View className="bg-black ps-5 h-full">
        <ScrollView showsVerticalScrollIndicator={false}>
          {gamesByDateRange ? (
            <HorizontalInfiniteList<Game>
              data={gamesByDateRange.results}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <GameCard
                  item={item}
                  isCard={true}
                  key={item.id}
                  onPress={() =>
                    navigateTo({
                      pathname: "/GameDetails/[id]",
                      params: { id: item.id },
                    })
                  }
                />
              )}
            />
          ) : (
            <ActivityIndicator size="large" color="#fff" className="my-10" />
          )}

          {best250Games ? (
            <GameSectionList
              title="All time top 250 games"
              data={chunkedData}
              isCard={false}
              onPressCard={(game) => {
                navigateTo({
                  pathname: "/GameDetails/[id]",
                  params: { id: game.id },
                });
              }}
            />
          ) : (
            <ActivityIndicator size="large" color="#fff" className="my-10" />
          )}

          {best250Games ? (
            <GameSectionList
              title="All time top 250 games"
              data={chunkedData}
              isCard={false}
              onPressCard={(game) => {
                navigateTo({
                  pathname: "/GameDetails/[id]",
                  params: { id: game.id },
                });
              }}
            />
          ) : (
            <ActivityIndicator size="large" color="#fff" className="my-10" />
          )}

          {best250Games ? (
            <SectionCard
              platformName="PlayStation 4"
              imageUri="https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
              icon={<Ionicons name="logo-playstation" color="white" size={50} />}
              onPressIcon={() => console.log("Icon pressed")}
            />
          ) : (
            <ActivityIndicator size="large" color="#fff" className="my-10" />
          )}

          {best250Games ? (
            <View className="mb-20">

              <GameSectionList
                title="All time top 250 games"
                data={chunkedData}
                isCard={false}
                onPressCard={(game) => {
                  navigateTo({
                    pathname: "/GameDetails/[id]",
                    params: { id: game.id },
                  });
                }}
              />
            </View>
          ) : (
            <ActivityIndicator size="large" color="#fff" className="my-10" />
          )}
        </ScrollView>

        <LinearGradientTabs />
      </View>
    );
  }
