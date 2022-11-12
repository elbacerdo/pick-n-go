import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView style={{ display: "flex", flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  );
}
