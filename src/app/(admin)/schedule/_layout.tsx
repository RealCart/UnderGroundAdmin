import { Stack } from 'expo-router';
import { userList } from '@/src/screens/data/userData'; 
import { useThemeColor } from '@/src/hooks/useThemeColor';

export default function ScheudleLayout() {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background');
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  return (
    <Stack 
      screenOptions={{
        headerShown:false,
      }}
    >
      <Stack.Screen name="index"/>
      <Stack.Screen name="[id]"/>
      <Stack.Screen name="addWorkOut"/>
    </Stack>
  );
}