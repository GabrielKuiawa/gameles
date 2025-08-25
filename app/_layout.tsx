import { Stack } from "expo-router";
import "../global.css";
import { StatusBar } from "react-native";


export default function RootLayout() {
  
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0a0f12" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="GameDetails/[id]" />
        <Stack.Screen name="GameDetails/ReviewDetails/[id]" />
        <Stack.Screen name="GameDetails/DescriptionDetails/[id]" />
      </Stack>
    </>
  );
}
