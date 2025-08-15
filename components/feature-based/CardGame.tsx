import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { CardGameProps } from "@/types/CardGameProps";
import Card from "../shared/Card";

const { width } = Dimensions.get("window");

export default function CardGame({
  id,
  image,
  name,
  year,
  rating,
  onPress,
}: CardGameProps) {
  return (
    <Card overlay={true} onPress={onPress} style={[styles.card]}>
      <Image testID="card-image" source={{ uri: image }} className="flex-1" />
      <LinearGradient
        colors={[
          "rgba(20,20,20,0.85)",
          "rgba(40,40,40,0.6)",
          "rgba(60,60,60,0.3)",
          "transparent",
        ]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        className="absolute bottom-0 left-0 right-0 h-[80]"
      />

      <View className="absolute bottom-0 h-16 w-full z-10">
        <View className="items-center flex-row gap-2 ps-4">
          <View className="items-center bg-black rounded color-white flex-row font-bold justify-center gap-1 px-2 min-w-14 text-center">
            <Ionicons name="star" size={13} color="#fff" />
            <Text className="text-white font-bold">{rating}</Text>
          </View>
          <Text className="items-center bg-black rounded color-white flex-row font-bold justify-center gap-1 px-2 min-w-14 text-center">
            {year?.substring(0, 4)}
          </Text>
        </View>

        <Text className="ps-5 color-white font-bold">{name}</Text>
      </View>
    </Card>
  );
}
const CARD_WIDTH = width / 1.9;
const CARD_HEIGHT = CARD_WIDTH * 1.1;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
  },
});
