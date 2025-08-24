import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useMemo } from "react";
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
  const {
    data: allData,
    loadMore,
    loading,
  } = useInfiniteFetch<ReviewItem>(
    `${API_URL}games/${id}/reviews?key=${API_KEY}&page_size=10`
  );

  const filteredReviews = useMemo(() => {
    const rating = Number(parameter);
    if (rating === 0) return allData;
    return allData?.filter((r) => r.rating === rating);
  }, [allData, parameter]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black">
      <FlatList
        data={filteredReviews}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        onEndReachedThreshold={0.1}
        showsHorizontalScrollIndicator={false}
        onEndReached={loadMore}
        renderItem={({ item }) => <CardReview {...item} key={item.id} />}
      />
    </View>
  );
}
