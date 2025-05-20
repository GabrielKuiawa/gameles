import { View, Image, StyleSheet, Pressable, Animated } from "react-native";
import React, { useRef, useState } from "react";

type Props = {
  title: string;
  image: string;
  onPress?: () => void;
};

export default function Card({ image, onPress }: Props) {
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
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress}>
      <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
        <Image source={{ uri: image }} style={styles.image} />
        {pressed && <View style={styles.grayOverlay} />}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 165,
    height: 230,
    marginLeft: 10,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#181f2e",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  grayOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(233, 226, 226, 0.5)",
  },
});
