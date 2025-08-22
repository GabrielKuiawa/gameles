import { View, Text, FlatList } from "react-native";
import React from "react";
import CardReview from "./CardReview";
import { ReviewItem } from "@/types/models/Review";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import { API_KEY, API_URL } from "@/env";

export default function SectionReview({
  id,
  parameter,
}: {
  id: number;
  parameter: string | number;
}) {
  const { data: allData, loadMore } = useInfiniteFetch<ReviewItem>(
    `${API_URL}games/${id}/reviews?key=${API_KEY}&page_size=10`
  );
  const selectedRating = Number(parameter);
  const filteredReviews =
    selectedRating === 0
      ? allData
      : allData.filter((review) => review.rating === selectedRating);

  //   console.log(`${API_URL}games/${id}/reviews?key=${API_KEY}&page_size=10`);

  return (
    <View className="flex-1 bg-black">
      <FlatList
        data={filteredReviews}
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
