import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Title({ name }: { name: string }) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

