import { Stack } from 'expo-router';
import { useThemeColor } from '@/src/hooks/useThemeColor';

export default function BranchLayout() {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background');
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  return (
    <Stack 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index"/>
      <Stack.Screen name="[id]"/>
    </Stack>
  );
}