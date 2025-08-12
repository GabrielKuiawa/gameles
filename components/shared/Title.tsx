import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/styles/colors";

export default function Title({ name }: { name: string }) {
  return (
    <View>
      <Text style={styles.categoryTitle}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryTitle: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "500",
    marginLeft: 10,
    marginBottom: 10,
    letterSpacing: 2,
    alignSelf: "flex-start",
  },
});
