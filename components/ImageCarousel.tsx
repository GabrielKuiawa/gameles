import { View, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Screenshots } from "@/types/Screenshots";

export default function ImageCarousel({ results }: Screenshots) {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }).start(() => {
        setIndex((prev) => (prev + 1) % (results?.length ?? 1));

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }).start();
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [fadeAnim, results?.length]);

  return (
    <View className="w-full h-[320] overflow-hidden">
      <Animated.Image
        source={{ uri: results?.[index]?.image }}
        className="w-full h-full"
        style={{ opacity: fadeAnim }}
        resizeMode="cover"
      />
    </View>
  );
}
