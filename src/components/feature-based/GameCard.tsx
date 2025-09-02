import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Game } from "@/types/models/Game";
import Card from "../shared/Card";

export default function GameCard({
  item,
  isCard,
  onPress,
}: {
  item: Game;
  isCard?: boolean;
  onPress: () => void;
}) {
  const screenshotUrl =
    item.short_screenshots?.[1]?.image ??
    "https://i.pinimg.com/736x/75/c3/b2/75c3b2608ae934277e024cd1e0e70726.jpg";
  const cardClass = isCard
    ? "h-72 w-96 rounded-xl overflow-hidden mt-5"
    : "h-24 w-96 rounded-xl overflow-hidden";

  return (
    <Card overlay onPress={onPress} className={cardClass}>
      {isCard && (
        <Image
          source={{
            uri:
              item.background_image ??
              "https://i.pinimg.com/736x/75/c3/b2/75c3b2608ae934277e024cd1e0e70726.jpg",
          }}
          className="w-full h-48 rounded-xl"
          resizeMode="cover"
        />
      )}
      <View className="flex-row items-center flex-1">
        <Image
          source={{ uri: screenshotUrl }}
          className="w-20 h-20 rounded-xl"
          resizeMode="cover"
        />

        <View className="flex-1 ms-4">
          <Text className="text-white font-semibold w-48" numberOfLines={1}>
            {item.name}
          </Text>
          <Text className="text-gray-300 text-sm mt-1 w-48" numberOfLines={2}>
            {item.platforms?.map((p) => p.platform.name).join(", ")}
          </Text>
          <Text className="text-gray-400 font-medium text-sm" numberOfLines={1}>
            {item.genres?.map((g) => g.name).join(", ")}
          </Text>
        </View>

        <View className="flex-row items-center gap-1">
          <Text className="text-white font-bold text-lg">{item.rating}</Text>
          <Ionicons name="star" size={15} color="#22c55e" />
        </View>
      </View>
    </Card>
  );
}
