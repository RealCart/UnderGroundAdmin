import { Stack } from 'expo-router';

export default function ClassesLayout() {

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