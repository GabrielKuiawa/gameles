import { View, FlatList } from "react-native";
import React from "react";
import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import { API_KEY, API_URL } from "@/env";
import { useRoute } from "@react-navigation/native";
import CardReview from "@/components/feature-based/CardReview";
import { ReviewItem } from "@/types/models/Review";

export default function ReviewDetails() {
  const route = useRoute();
  const { id } = route.params as { id: number };
  const { data: allData, loadMore } = useInfiniteFetch<ReviewItem>(
    `${API_URL}games/${id}/reviews?key=${API_KEY}&page_size=10`
  );

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
