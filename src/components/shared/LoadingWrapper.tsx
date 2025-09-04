import React from "react";
import { View, ActivityIndicator } from "react-native";

type LoadingWrapperProps = {
  loading: boolean;
  children: React.ReactNode;
  style?: object;
  indicatorSize?: "small" | "large";
  indicatorColor?: string;
};

export default function LoadingWrapper(props: LoadingWrapperProps) {
  if (props.loading) {
    return (
      <View
        style={[
          { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
          props.style,
        ]}
      >
        <ActivityIndicator size={props.indicatorSize} color={props.indicatorColor} />
      </View>
    );
  }

  return <>{props.children}</>;
}
