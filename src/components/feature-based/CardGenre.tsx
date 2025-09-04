import { View, Text, Image } from "react-native";
import React from "react";
import Card from "../shared/Card";
import { Ionicons } from "@expo/vector-icons";
import { Genre } from "@/types/models/Genres";
import { genreIcons } from "@/constants/genreIcons";


type CardGenreProps = Genre & {
  onPress: () => void;
}

export default function CardGenre(props: CardGenreProps) {
  return (
    <Card
      onPress={props.onPress}
      overlay={true}
      style={{ width: "49%" }}
      key={props.id}
      className=" h-40 rounded-2xl"
    >
      <Image
        source={{ uri: props.image_background}}
        className="absolute w-full h-full"
        resizeMode="cover"
      />

      <View className="absolute w-full h-full bg-black/50" />

      <View className="flex-row items-center h-full px-4">
        <Ionicons
          name={genreIcons[props.name] || "game-controller"}
          size={35}
          color="white"
        />
        <Text
          className="text-white font-bold text-lg ml-3 flex-shrink"
          numberOfLines={1}
        >
          {props.name}
        </Text>
      </View>
    </Card>
  );
}
