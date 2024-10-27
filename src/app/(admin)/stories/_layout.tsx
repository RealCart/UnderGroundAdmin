import { Stack } from 'expo-router';

export default function StoriesLayout() {

  return (
    <Stack
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
  );
}