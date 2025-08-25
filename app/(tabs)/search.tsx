import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LinearGradientTabs from "@/components/shared/LinearGradientTabs";

export default function Search() {

  return (
    <View className="flex-1 bg-black">
      <View className="flex-row items-center bg-zinc-800 rounded-xl px-3 mb-4 me-5 mt-5 mx-5">
        <Ionicons name="search" size={20} color="#fff" />
        <TextInput
          placeholder="Buscar por jogos, gêneros, etc."
          placeholderTextColor="#888"
          className="flex-1 text-white ml-2"
        />
        <Ionicons name="close-circle-outline" size={22} color="#fff" />
      </View>
     <LinearGradientTabs />
    </View>
  );
}
