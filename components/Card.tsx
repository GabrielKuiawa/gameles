import { View, Image, StyleSheet, Pressable, Animated, Dimensions } from "react-native";
import React, { useRef, useState } from "react";

type CardProps = {
  image: string;
  id:number;
  onPress?: () => void;
};

const { width } = Dimensions.get('window'); // pega a largura da tela

export default function Card({id, image, onPress }: CardProps) {
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
        <Image
          testID="card-image"
          source={{ uri: image }}
          style={styles.image}
        />
        {pressed && <View style={styles.grayOverlay} />}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: (width / 2)  - 30,
    height: 200,
    marginLeft: 10,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#181f2e",
  },
  image: {
    width: "100%",
    height: "100%",

  },
  grayOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(233, 226, 226, 0.5)",
  },
});
