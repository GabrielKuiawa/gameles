import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Stars from "../shared/Stars";
import CardReview from "./CardReview";
import ChartReview from "./ChartReview";
import Card from "../shared/Card";
import { GameSectionReviewProps } from "@/types/props";
import { Review } from "@/types/models/Review";
import { API_KEY, API_URL } from "../../../env";
import useFetch from "@/hooks/useFetch";
import { useSafeNavigation } from "@/hooks/useSafeNavigation";

export default function GameSectionReview(props: GameSectionReviewProps) {
  const ratings = props.ratings ?? [];
  const sortedRatings = [...ratings, { id: 2, percent: 0 }].sort(
    (a, b) => b.id - a.id
  );
  const maxPercent = Math.max(...sortedRatings.map((r) => r.percent));
  const { data } = useFetch<Review>(
    `${API_URL}games/${props.id}/reviews?key=${API_KEY}&page=1&page_size=3`
  );
  const navigateTo = useSafeNavigation();

  return (
    <View className="mb-5 pe-5">
      <Card
        onPress={() => {
          navigateTo({
            pathname: "/GameDetails/ReviewDetails/[id]",
            params: { id: String(props.id) },
          });
        }}
      >
        <View className="justify-between flex-row">
          <Text className="color-white font-bold text-3xl mb-3">
            Notas e avaliações
          </Text>
          <Ionicons name="arrow-forward-circle" size={35} color="white" />
        </View>

        <View className="p-4 gap-2 flex-row w-full justify-between mb-5">
          <View className="flex-col items-center justify-between gap-2">
            <Text className="color-white font-bold text-6xl">
              {Number(props.rating).toLocaleString("pt-BR", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
              })}
            </Text>
            <Stars size={25} color="#22c55e" rating={4.6} rating_top={5} />
          </View>
          <ChartReview maxPercent={maxPercent} sortedRatings={sortedRatings} />
        </View>
      </Card>

      <View className="gap-5">
        {data?.results.map((item) => (
          <CardReview {...item} key={item.id} />
        ))}
      </View>

      <Card
        onPress={() => {
          navigateTo({
            pathname: "/GameDetails/ReviewDetails/[id]",
            params: { id: String(props.id) },
          });
        }}
      >
        <Text className="color-green-500 font-semibold mt-5">
          Ver todas as avaliações
        </Text>
      </Card>
    </View>
  );
}
