import { View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import SectionReview from "@/components/feature-based/SectionReview";
import TabsGeneric from "@/components/shared/TabsPropsGeneric";

export default function ReviewDetails() {
  const route = useRoute();
  const { idGame } = route.params as { idGame: number };
  const reviewsData = [
    { id: 0, name: "Todos" },
    { id: 1, name: "5 ★" },
    { id: 2, name: "4 ★" },
    { id: 3, name: "3 ★" },
    { id: 4, name: "2 ★" },
    { id: 5, name: "1 ★" },
  ];

  return (
    <View className="flex-1 bg-black p-5">
      <TabsGeneric
        data={reviewsData}
        getId={(g) => g.id}
        getLabel={(g) => g.name}
        renderSection={(id) => <SectionReview id={idGame} parameter={id}></SectionReview>}
      />
    </View>
  );
}
