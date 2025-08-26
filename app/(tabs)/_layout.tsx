import { Tabs } from "expo-router";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import TabButton from "@/components/shared/TabButton";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          position: "absolute",
          borderTopWidth: 0,
          elevation: 0,
        },

        tabBarActiveTintColor: "#1db954",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarButton: (props) => <TabButton {...props} />,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name={"home"} size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Buscar",
          tabBarButton: (props) => <TabButton {...props} />,
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name={focused ? "search" : "search"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "Biblioteca",
          tabBarButton: (props) => <TabButton {...props} />,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "bookshelf" : "bookshelf"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favoritos",
          tabBarButton: (props) => <TabButton {...props} />,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarButton: (props) => <TabButton {...props} />,
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5
              name={focused ? "user" : "user"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
