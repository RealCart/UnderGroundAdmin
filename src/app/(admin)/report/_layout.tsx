import { Stack } from 'expo-router';

export default function ReportLayout() {
  return (
    <Stack 
      screenOptions={{
        headerTitle: 'Очтеты',
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 14}
      }}
    >
      <Stack.Screen name="index"/>
    </Stack>
  );
}