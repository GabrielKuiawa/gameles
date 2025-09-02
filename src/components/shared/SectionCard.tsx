import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SectionCardProps } from "@/types/props";
import Card from "./Card";

export default function SectionCard({
  platformName,
  subtitle = "Novos lançamentos para",
  imageUri,
  icon,
  onPressIcon = () => {},
}: SectionCardProps) {
  return (
    <Card className="pe-5 gap-5 rounded-xl">
      <View className="flex-row items-center mt-5 gap-5 justify-between">
        <View className="flex-row items-center gap-3">
          {icon ?? <Ionicons name="logo-playstation" color="white" size={50} />}
          <View className="flex-col gap-1">
            <Text className="text-slate-500">{subtitle}</Text>
            <Text className="text-white font-bold text-2xl">
              {platformName}
            </Text>
          </View>
        </View>
        <Ionicons
          className="self-end"
          name="arrow-forward-circle"
          size={35}
          color="white"
          onPress={onPressIcon}
        />
      </View>

      <Image
        className="w-full h-60 rounded-xl"
        source={{ uri: imageUri }}
        resizeMode="cover"
      />
    </Card>
  );
}
