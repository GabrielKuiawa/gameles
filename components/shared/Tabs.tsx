import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { TabsProps } from "@/types/props";

export default function Tabs(props: TabsProps) {
  return (
    <View className="flex-row items-center gap-2 mb-4">
      <FlatList
        data={props.data?.genres}
        renderItem={({ item }) => (
          <Pressable onPress={() => props.onChangeGenre(item.id.toString())}>
            <View
              className={`px-2 h-12 min-w-24 rounded-full items-center justify-center border-2 border-white ${
                props.genres === item.id.toString() ? "bg-white" : "bg-black"
              }`}
            >
              <Text
                className={`text-center text-sm font-semibold ${
                  props.genres === item.id.toString()
                    ? "color-black"
                    : "color-white"
                }`}
              >
                {item.name}
              </Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
