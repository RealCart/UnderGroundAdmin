import { Stack } from 'expo-router';

export default function PaymentsLayout() {
  return (
    <Stack 
      screenOptions={{
        headerShown:false,
      }}
    >
      <Stack.Screen name="index"/>
      <Stack.Screen name="[id]"/>
      <Stack.Screen name="addPayment" options={{title:'Добавить платеж'}}/>
    </Stack>
  );
}