import { View, Text, GestureResponderEvent, Pressable } from "react-native";
import React from "react";

export default function TabButton({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      android_disableSound={true}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </Pressable>
  );
}
