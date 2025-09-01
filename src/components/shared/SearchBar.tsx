import { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SearchBarProps } from "@/types/props";


export default function SearchBar(props: SearchBarProps) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (props.onChange) props.onChange(searchText);
  }, [searchText]);

  return (
    <View className="flex-row items-center bg-zinc-800 rounded-xl px-3 mb-4 mx-5 mt-5">
      <Ionicons name="search" size={20} color="#fff" />

      <TextInput
        placeholder={props.placeholder || "Buscar..."}
        placeholderTextColor="#888"
        className="flex-1 text-white ml-2"
        value={searchText}
        onChangeText={setSearchText}
      />

      {searchText.length > 0 && (
        <TouchableOpacity onPress={() => setSearchText("")}>
          <Ionicons name="close-circle-outline" size={22} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}
