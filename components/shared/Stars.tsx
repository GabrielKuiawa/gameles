import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type StarsProps = {
  size: number;
  color: string;
  rating: number;
  rating_top: number;
};

export default function Stars(props: StarsProps) {
  return (
    <View>
      <View className="flex-row">
        {Array.from({ length: props.rating_top }).map((_, i) =>
          props.rating >= i + 1 ? (
            <Ionicons key={i} name="star" size={props.size} color={props.color} />
          ) : props.rating >= i + 0.5 ? (
            <Ionicons key={i} name="star-half" size={props.size} color={props.color} />
          ) : (
            <Ionicons key={i} name="star-outline" size={props.size} color={props.color} />
          )
        )}
      </View>
    </View>
  );
}
