import { Stack } from 'expo-router/stack';

export default function Layout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="BranchesPage" />
            <Stack.Screen name="CoachesPage" />
            <Stack.Screen name="CoachPage" />
            <Stack.Screen name="NewsPage" />
            <Stack.Screen name="OneNewsPage" />
            <Stack.Screen name="MyProfilePage" />
            <Stack.Screen name="EditProfilePage" />
            <Stack.Screen name="SettingsPage" />
        </Stack>
    );
}