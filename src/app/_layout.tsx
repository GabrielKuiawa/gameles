import "@styles/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="GameDetails/[id]" />
        <Stack.Screen name="GameList/index" />
        <Stack.Screen name="GameDetails/ReviewDetails/[id]" />
        <Stack.Screen name="GameDetails/DescriptionDetails/[id]" />
      </Stack>
    </SafeAreaView>
  );
}
