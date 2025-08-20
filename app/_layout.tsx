import { Stack } from "expo-router";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  ActionSheetProvider,
  useActionSheet,
} from "@expo/react-native-action-sheet";
import "../global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function RootLayoutNav() {
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

  const handleLogout = () => {
    showActionSheetWithOptions(
      {
        options: ["Deslogar", "Cancelar"],
        cancelButtonIndex: 1,
        destructiveButtonIndex: 0,
        destructiveColor: "#ff4f4f",
      },
      (buttonIndex?: number) => {
        if (buttonIndex === 0) {
          router.replace("/login");
        }
      }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0a0f1c",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTransparent: true,
          headerBlurEffect: "dark",
          headerRight: () => (
            <Pressable
              testID="logout-icon"
              onPress={handleLogout}
              style={{ marginRight: 15 }}
            >
              <Ionicons name="log-out-outline" size={24} color="#fff" />
            </Pressable>
          ),
        }}
      >
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
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}

export default function Layout() {
  return (
    <SafeAreaProvider>
      <ActionSheetProvider>
        <RootLayoutNav />
      </ActionSheetProvider>
    </SafeAreaProvider>
  );
}
