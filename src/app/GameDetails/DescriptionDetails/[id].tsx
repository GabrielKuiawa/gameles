import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function DescriptionDetails() {
  const { description_raw } = useLocalSearchParams<{
    id: string;
    description_raw: string;
  }>();
  const paragraphs = description_raw.split("\n").filter((p) => p.trim() !== "");
  return (
    <View className="flex-1 bg-black p-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="color-white font-bold text-3xl mb-5">
          Sobre este jogo
        </Text>
        {paragraphs.map((para, index) => (
          <Text
            key={index}
            className="text-white text-base leading-7 text-justify mb-5"
          >
            {para}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
