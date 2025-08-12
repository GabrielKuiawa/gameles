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
      <View className="p-4 gap-2 flex-row w-full justify-between mb-5">
        <View className="flex-col items-center justify-between">
          <Text className="color-white font-bold text-6xl">4,6</Text>
          <View className="flex-row">
            <Ionicons name="star" size={25} color={"#22c55e"} />
            <Ionicons name="star" size={25} color={"#22c55e"} />
            <Ionicons name="star" size={25} color={"#22c55e"} />
            <Ionicons name="star" size={25} color={"#22c55e"} />
            <Ionicons name="star-half-outline" size={25} color={"#22c55e"} />
          </View>
        </View>
        <View className="w-60">
          {ratings.map((item) => {
            const barWidth = (item.count / maxCount) * 100;
            return (
              <View key={item.stars} className="flex-row items-center">
                <Text className="w-6 font-bold text-gray-800">
                  {item.stars}
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
      <View className="gap-5">
        <View className="gap-4">
          <View className="flex-row items-center gap-5">
            <View className="bg-white h-14 w-14 rounded-full"></View>
            <Text className="color-white text-2xl">fulano de tal</Text>
          </View>
          <View className="flex-row gap-5 items-center">
            <View className="flex-row">
              <Ionicons name="star" size={15} color={"#22c55e"} />
              <Ionicons name="star" size={15} color={"#22c55e"} />
              <Ionicons name="star" size={15} color={"#22c55e"} />
              <Ionicons name="star" size={15} color={"#22c55e"} />
              <Ionicons name="star-outline" size={15} color={"#22c55e"} />
            </View>
            <Text className="color-white">30/02/2021</Text>
          </View>
          <Text className="color-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            quaerat sit et saepe magni hic ullam libero amet, earum aperiam
            fugiat quis nesciunt perferendis aliquid mollitia architecto rerum,
            a laudantium.
          </Text>
        </View>
        <View className="gap-4">
          <View className="flex-row items-center gap-2">
            <View className="bg-white h-14 w-14 rounded-full"></View>
            <Text className="color-white text-2xl">fulano de tal</Text>
          </View>
          <View className="flex-row gap-3 items-center">
            <View className="flex-row">
              <Ionicons name="star" size={15} color={"#22c55e"} />
              <Ionicons name="star" size={15} color={"#22c55e"} />
              <Ionicons name="star" size={15} color={"#22c55e"} />
              <Ionicons name="star" size={15} color={"#22c55e"} />
              <Ionicons name="star-outline" size={15} color={"#22c55e"} />
            </View>
            <Text className="color-white">30/02/2021</Text>
          </View>
          <Text className="color-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            quaerat sit et saepe magni hic ullam libero amet, earum aperiam
            fugiat quis nesciunt perferendis aliquid mollitia architecto rerum,
            a laudantium.
          </Text>
        </View>
        <View className="gap-4">
          <View className="flex-row items-center gap-5">
            <View className="bg-white h-14 w-14 rounded-full"></View>
            <Text className="color-white text-2xl">fulano de tal</Text>
          </View>
          <View className="flex-row gap-5 items-center">
            <View className="flex-row">
              <Ionicons name="star" size={15} color={"#22c55e"} />
              <Ionicons name="star" size={15} color={"#22c55e"} />
              <Ionicons name="star" size={15} color={"#22c55e"} />
              <Ionicons name="star" size={15} color={"#22c55e"} />
              <Ionicons name="star-outline" size={15} color={"#22c55e"} />
            </View>
            <Text className="color-white">30/02/2021</Text>
          </View>
          <Text className="color-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            quaerat sit et saepe magni hic ullam libero amet, earum aperiam
            fugiat quis nesciunt perferendis aliquid mollitia architecto rerum,
            a laudantium.
          </Text>
        </View>
      </View>
      <Text className="color-green-500 font-semibold mt-5">Ver todas as avaliações</Text>
    </View>
  );
}
