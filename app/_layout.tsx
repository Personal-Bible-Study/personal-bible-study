import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#1a1d21",
        headerTitle: "",
        headerShadowVisible: false,
      }}
    />
  );
}
