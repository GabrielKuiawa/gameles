import { Stack } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import "../global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <ActionSheetProvider>
        <SafeAreaView className="flex-1 bg-zinc-700" edges={["top", "left", "right", "bottom"]}>
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="home"
              options={{
                title: "Jogos",
              }}
            />
            <Stack.Screen
              name="GameDetails"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ReviewDetails"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </SafeAreaView>
      </ActionSheetProvider>
    </SafeAreaProvider>
  );
}
