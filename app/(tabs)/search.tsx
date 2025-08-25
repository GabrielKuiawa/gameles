import { View, TextInput, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import LinearGradientTabs from "@/components/shared/LinearGradientTabs";
import { userEvent } from "@testing-library/react-native";
import SearchBar from "@/components/shared/SearchBar";

export default function Search() {
  const [searchText, setSearchText] = useState("");

  return (
    <View className="flex-1 bg-black">
      <SearchBar
        placeholder="Buscar por jogos, gêneros, etc."
        onChange={setSearchText}
      />

      {searchText.length > 0 && (
        <Text className="text-white font-bold text-2xl mb-3 ms-5">
          Resultados para "{searchText}"
        </Text>
      )}  

      <LinearGradientTabs />
    </View>
  );
}
