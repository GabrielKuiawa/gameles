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
        <Image
          testID="card-image"
          source={{ uri: image }}
          style={styles.image}
        />
        <View style={styles.buttonStar}>
          <Ionicons name="star" size={20} color="#fff" />
        </View>
        <LinearGradient
          colors={[
            "rgba(20,20,20,0.85)",
            "rgba(40,40,40,0.6)",
            "rgba(60,60,60,0.3)",
            "transparent",
          ]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.gradientBottom}
        />

        <View style={styles.infoContainer}>
          <View style={styles.infoContainerTop}>
            <View style={styles.infoDetails}>
              <Ionicons name="star" size={13} color="#FFD700" />
              <Text style={{ color: colors.accent, fontWeight: "bold" }}>
                {rating}
              </Text>
            </View>
            <Text style={styles.infoDetails}>{year?.substring(0, 4)}</Text>
          </View>

          <Text style={styles.gameName}>{name}</Text>
        </View>

        {pressed && <View style={styles.grayOverlay} />}
      </Animated.View>
    </Pressable>
  );
}
const CARD_WIDTH = (width - 60) / 2;
const CARD_HEIGHT = CARD_WIDTH * 1.4;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#181f2e",
  },
  buttonStar: {
    alignItems: "center",
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 5,
    width: 40,
    zIndex: 1,
  },
  gradientBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    zIndex: 1,
  },
  infoContainerTop: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    paddingStart: 17,
  },
  infoDetails: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 5,
    color: colors.accent,
    flexDirection: "row",
    fontWeight: "bold",
    justifyContent: "center",
    gap: 2,
    paddingBlock: 2,
    width: 50,
    textAlign: "center",
  },
  infoContainer: {
    // backgroundColor: "red",
    bottom: 0,
    height: 65,
    position: "absolute",
    width: "100%",
    zIndex: 2,
  },
  gameName: {
    color: colors.white,
    fontWeight: "bold",
    paddingBottom: 15,
    textAlign: "center",
    width: "100%",
  },
  image: {
    flex: 1,
  },
  grayOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(233, 226, 226, 0.5)",
  },
});
