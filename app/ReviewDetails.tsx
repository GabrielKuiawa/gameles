import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import { API_KEY, API_URL } from "@/env";
import { Review } from "@/types/Review";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/types/Navigation";
import CardReview from "@/components/feature-based/CardReview";
import { formatJson } from "@testing-library/react-native/build/helpers/format-element";
import { CardReviewProps } from "@/types/CardReviewProps";

type ReviewRouteProp = RouteProp<RootStackParamList, "ReviewDetails">;

export default function ReviewDetails() {
  const route = useRoute<ReviewRouteProp>();
  const { id } = route.params;

  const { data: allData, loadMore } = useInfiniteFetch<CardReviewProps>(
    `${API_URL}games/${id}/reviews?key=${API_KEY}&page_size=10`
  );
//   console.log(formatJson(allData));

  return (
    <View className="flex-1 bg-black p-5">
      <FlatList
        data={allData}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        onEndReachedThreshold={0.1}
        showsHorizontalScrollIndicator={false}
        onEndReached={loadMore}
        renderItem={({ item }) => (
          <CardReview
            id={item.id}
            key={item.id}
            user={{
              full_name: item.user?.full_name,
              avatar: item.user?.avatar,
            }}
            text={item.text}
            rating={item.rating}
            created={item.created}
          />
        )}
      />
    </View>
  );
}
