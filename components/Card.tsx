import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import React, { useRef, useState } from "react";
import { CardProps } from "@/types/CardProps";
import { colors } from "@/styles/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Card({
  id,
  image,
  name,
  year,
  rating,
  onPress,
}: CardProps) {
  const scale = useRef(new Animated.Value(1)).current;
  const [pressed, setPressed] = useState(false);

  const onPressIn = () => {
    setPressed(true);
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    setPressed(false);
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      testID={`card-pressable-${id}`}
    >
      <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
        <Image testID="card-image" source={{ uri: image }} className="flex-1" />
        <LinearGradient
          colors={[
            "rgba(20,20,20,0.85)",
            "rgba(40,40,40,0.6)",
            "rgba(60,60,60,0.3)",
            "transparent",
          ]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          className="absolute bottom-0 left-0 right-0 h-[80]"
        />

        <View className="absolute bottom-0 h-16 w-full z-10">
          <View className="items-center flex-row gap-2 ps-4">
            <View className="items-center bg-black rounded color-white flex-row font-bold justify-center gap-1 px-2 min-w-14 text-center">
              <Ionicons name="star" size={13} color="#fff" />
              <Text className="text-white font-bold">{rating}</Text>
            </View>
            <Text className="items-center bg-black rounded color-white flex-row font-bold justify-center gap-1 px-2 min-w-14 text-center">
              {year?.substring(0, 4)}
            </Text>
          </View>

          <Text className="ps-5 color-white font-bold">{name}</Text>
        </View>

        {pressed && <View style={styles.grayOverlay} />}
      </Animated.View>
    </Pressable>
  );
}
const CARD_WIDTH = width / 1.5;
const CARD_HEIGHT = CARD_WIDTH * 1.1;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
    overflow: "hidden",
  },
  grayOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(233, 226, 226, 0.5)",
  },
});
