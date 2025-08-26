import { Stack } from "expo-router";
import "../global.css";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ backgroundColor: "#0a0f12", flex: 1 }}
    >
      <StatusBar barStyle="light-content" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="GameDetails/[id]" />
        <Stack.Screen name="GameDetails/ReviewDetails/[id]" />
        <Stack.Screen name="GameDetails/DescriptionDetails/[id]" />
      </Stack>
    </SafeAreaView>
  );
}
