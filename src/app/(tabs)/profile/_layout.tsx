import { Stack } from 'expo-router/stack';

export default function Layout() {
    return (<Stack screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="BranchesPage" />
        <Stack.Screen name="EditProfilePage" />
        <Stack.Screen name="FreezeSubscriptionPage" />
        <Stack.Screen name="HelpPage" />
        <Stack.Screen name="MyCardsPage" />
        <Stack.Screen name="PaymentHistoryPage" />
        <Stack.Screen name="SettingsPage" />
        <Stack.Screen name="SubscriptionsPage" />
    </Stack>);
}