import { View, Pressable, Animated, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { CardProps } from "@/types/props";

export default function Card(props: CardProps) {
  const scale = useRef(new Animated.Value(1)).current;
  const [pressed, setPressed] = useState(false);

  const onPressIn = () => {
    setPressed(true);
    Animated.spring(scale, { toValue: 0.95, useNativeDriver: true }).start();
  };

  const onPressOut = () => {
    setPressed(false);
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={props.onPress}
    >
      <Animated.View
        style={[styles.card, { transform: [{ scale }] }, props.style]}
      >
        {props.children}
        {pressed && props.overlay && <View style={styles.grayOverlay} />}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
  },
  grayOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(233, 226, 226, 0.5)",
  },
});
