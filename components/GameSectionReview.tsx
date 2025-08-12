import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { BarChart, LineChart, ProgressChart } from "react-native-chart-kit";

export default function GameSectionReview() {

  const ratings = [
    { stars: 5, count: 120 },
    { stars: 4, count: 80 },
    { stars: 3, count: 40 },
    { stars: 2, count: 20 },
    { stars: 1, count: 10 },
  ];

  const maxCount = Math.max(...ratings.map((r) => r.count));
  return (
    <View className="mb-5">
      <View className="justify-between flex-row pe-5">
        <Text className="color-white font-bold text-3xl mb-3">
          Notas e avaliações
        </Text>
        <Ionicons name="arrow-forward-circle" size={35} color="white" />
      </View>
      <View className="p-4 gap-2">
        {ratings.map((item) => {
          const barWidth = (item.count / maxCount) * 100;
          return (
            <View key={item.stars} className="flex-row items-center">
              <Text className="w-10 font-bold text-gray-800">
                {item.stars} ★
              </Text>

              <View className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                <View
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${barWidth}%` }}
                />
              </View>

                {/* <Text className="w-10 text-right text-gray-800">
                  {item.count}
                </Text> */}
            </View>
          );
        })}
      </View>
    </View>
  );
}