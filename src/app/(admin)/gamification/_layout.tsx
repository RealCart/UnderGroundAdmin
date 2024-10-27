import { Stack } from 'expo-router';

export default function GamificationLayout() {
  return (
    <Stack 
      screenOptions={{
        headerShown:false,
      }}
    >
      <Stack.Screen name="index"/>
    </Stack>
  );
}