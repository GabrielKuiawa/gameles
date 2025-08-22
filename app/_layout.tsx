import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Layout() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#9ca3af" }}
      edges={["top", "left", "right", "bottom"]}
    >
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home/index"
          options={{
            title: "Jogos",
          }}
        />
        <Stack.Screen
          name="GameDetails/[id]"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GameDetails/ReviewDetails/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
