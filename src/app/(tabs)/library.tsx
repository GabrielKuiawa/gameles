import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Library() {
  return (
    <View className="flex-1 bg-black px-4 pt-10">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-white text-3xl font-bold">Library</Text>
        <Ionicons name="library" size={28} color="white" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View className="gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <View
              key={i}
              className="flex-row items-center bg-zinc-900 rounded-2xl p-4"
            >
              <View className="w-16 h-16 bg-zinc-700 rounded-xl mr-4 justify-center items-center">
                <Ionicons name="game-controller" size={28} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-bold text-lg">
                  Game Title {i + 1}
                </Text>
                <Text className="text-zinc-400 text-sm">Platform • Genre</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="white" />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
