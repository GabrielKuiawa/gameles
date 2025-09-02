import { View, FlatList } from "react-native";

import { HorizontalInfiniteListProps } from "@/types/props";
export default function HorizontalInfiniteList<T>(
  props: HorizontalInfiniteListProps<T>
) {
  return (
    <View className="mb-8">
      <FlatList
        data={props.data}
        keyExtractor={props.keyExtractor}
        ItemSeparatorComponent={() => (
          <View style={{ width: props.separatorWidth ?? 10 }} />
        )}
        horizontal
        onEndReached={props.loadMore}
        onEndReachedThreshold={0.5}
        showsHorizontalScrollIndicator={false}
        renderItem={props.renderItem}
      />
    </View>
  );
}
