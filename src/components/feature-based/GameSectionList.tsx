import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HorizontalInfiniteList from "@/components/shared/HorizontalInfiniteList";
import GameCard from "@/components/feature-based/GameCard";
import { Game } from "@/types/models/Game";
import { GameSectionListProps } from "@/types/props";
import Card from "../shared/Card";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";

export default function GameSectionList(props: GameSectionListProps) {
  if (!props.data || props.data.length === 0) return null;
  const navigateTo = useSafeNavigation();

  return (
    <View className="mt-8 pe-5 flex-col gap-4">
      <Card
        onPress={() => {
          navigateTo({
            pathname: "/GameList",
            params: {
              title: "Melhores Jogos",
              service: "best",
            },
          });
        }}
        className="flex-row justify-between items-center"
      >
        <Text className="text-white font-bold text-xl">{props.title}</Text>
        {props.icon ?? (
          <Ionicons name="arrow-forward-circle" size={35} color="white" />
        )}
      </Card>

      <HorizontalInfiniteList<Game[]>
        data={props.data}
        keyExtractor={(chunk, index) =>
          `${index}-${chunk.map((g) => g.id).join("-")}`
        }
        renderItem={({ item: chunk }) => (
          <View className="flex-col">
            {chunk.map((game) => (
              <GameCard
                key={game.id}
                isCard={props.isCard}
                item={game}
                onPress={() => props.onPressCard?.(game)}
              />
            ))}
          </View>
        )}
      />
    </View>
  );
}
