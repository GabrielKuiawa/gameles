import { Stack } from 'expo-router';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ActionSheetProvider, useActionSheet } from '@expo/react-native-action-sheet';
import "../global.css"

function RootLayoutNav() {
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

  const handleLogout = () => {
    showActionSheetWithOptions(
      {
        options: ['Deslogar', 'Cancelar'],
        cancelButtonIndex: 1,
        destructiveButtonIndex: 0,
        destructiveColor: '#ff4f4f',
      },
      (buttonIndex?: number) => {
        if (buttonIndex === 0) {
          router.replace('/login');
        }
      }
    );
  };

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0a0f1c',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTransparent: true,
        headerBlurEffect: 'dark',
        headerRight: () => (
          <Pressable testID="logout-icon" onPress={handleLogout} style={{ marginRight: 15 }}>
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
          title: 'Jogos',
        }}
      />
      <Stack.Screen
        name="GameDetails"
        options={{
          title: 'Detalhes do Jogo',
          headerBackTitle: 'Voltar',
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

export default function Layout() {
  return (
    <ActionSheetProvider>
      <RootLayoutNav />
    </ActionSheetProvider>
  );
}