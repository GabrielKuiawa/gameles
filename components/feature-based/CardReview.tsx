import { View, Text, Image } from "react-native";
import React from "react";
import Stars from "../shared/Stars";

type CardReviewProps = {
  user?: {
    full_name?: string | null;
    avatar?: string | null;
  };
  text: string;
  rating: number;
  create: string;
};

export default function CardReview(props: CardReviewProps) {
  return (
    <View className="gap-4">
      <View className="flex-row items-center gap-5">
        {props.user?.avatar ? (
          <Image
            source={{ uri: props.user.avatar }}
            className="h-14 w-14 rounded-full"
          />
        ) : (
          <View className="bg-white h-14 w-14 rounded-full justify-center">
            <Text className="text-center text-3xl">?</Text>
          </View>
        )}

        <Text className="color-white text-2xl">
          {props.user?.full_name ?? "anônimo"}
        </Text>
      </View>
      <View className="flex-row gap-5 items-center">
        <Stars size={15} color="#22c55e" rating={props.rating} rating_top={5} />

        <Text className="color-white">{props.create}</Text>
      </View>
      <Text className="color-white">{props.text}</Text>
    </View>
  );
}
