import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

type Props = {
  title: string;
  image: string;
};

export default function Card({ image }: Props) {
  return (
    <View style={styles.card}>
      <Image  source={{ uri: image }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 165,
    height: 230,
    marginLeft: 10,
  },
  title: {
  },
  image: {
    width: "100%",
    height: "100%",    
    resizeMode: "stretch",
  },
});
