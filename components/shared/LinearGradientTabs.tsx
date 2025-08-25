import { Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
const { height } = Dimensions.get("window");

export default function LinearGradientTabs() {
  return (
    <LinearGradient
      colors={[
        "rgba(0,0,0,0.95)",
        "rgba(20,20,20,0.7)",
        "rgba(40,40,40,0.4)",
        "transparent",
      ]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: height * 0.25,
      }}
    />
  );
}
