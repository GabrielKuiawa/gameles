import { View, Text } from "react-native";
import React from "react";

type ChartReviewProps = {
  maxPercent: number;
  sortedRatings:{
    id: number;
    percent: number;
  }[];
};

export default function ChartReview(props: ChartReviewProps) {  
  return (
    <View className="w-60">
      {props.sortedRatings.map((item) => {
        const barWidth = item.percent;
        return (
          <View key={item.id} className="flex-row items-center">
            <Text className="w-6 font-bold text-gray-800">{item.id}</Text>

            <View className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
              <View
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${barWidth}%` }}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
}
