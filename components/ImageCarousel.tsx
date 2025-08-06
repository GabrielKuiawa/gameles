import { View, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Screenshots } from "@/types/Screenshots";

export default function ImageCarousel({ results }: Screenshots) {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let isMounted = true;

    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }).start(() => {
        if (!isMounted) return;

        setIndex((prev) => (prev + 1) % (results?.length ?? 1));

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }).start();
      });
    }, 6000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [fadeAnim, results?.length]);

  return (
    <View style={{ width: "100%", height: 320, overflow: "hidden" }}>
      <Animated.Image
        source={{ uri: results?.[index]?.image }}
        style={{
          width: "100%",
          height: "100%",
          opacity: fadeAnim,
        }}
        resizeMode="cover"
      />
    </View>
  );
}
