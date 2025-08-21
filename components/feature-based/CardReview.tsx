import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import Stars from "../shared/Stars";
import { formatDate } from "@/utils/formateDate";
import { cleanHTML } from "@/utils/cleanHtml";
import { CardReviewProps } from "@/types/props";

export default function CardReview(props: CardReviewProps) {
  const [showFull, setShowFull] = useState(false);
  const cleanedText = cleanHTML(props.text);
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
          {props.user?.full_name?.trim() || "anônimo"}
        </Text>
      </View>
      <View className="flex-row gap-5 items-center">
        <Stars size={15} color="#22c55e" rating={props.rating} rating_top={5} />

        <Text className="color-white">{formatDate(props.created)}</Text>
      </View>
      <Pressable onPress={() => setShowFull(!showFull)}>
        <Text
          numberOfLines={showFull ? undefined : 3}
          className="color-[#ccc] text-base"
        >
          {cleanedText}
        </Text>
      </Pressable>
    </View>
  );
}
