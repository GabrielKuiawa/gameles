import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type CardDescriptionProps = {
  description_raw?: string;
};

export default function CardDescription(props: CardDescriptionProps) {
  return (
    <View className="pt-5 mb-5">
      <View className="justify-between flex-row pe-5">
        <Text className="color-white font-bold text-3xl mb-3">
          Sobre este jogo
        </Text>
        <Ionicons name="arrow-forward-circle" size={35} color="white" />
      </View>
      <Text className="color-[#ccc] text-base pe-5 mb-2" numberOfLines={4}>
        {props.description_raw}
      </Text>
    </View>
  );
}
