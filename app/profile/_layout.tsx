import { Stack } from "expo-router";

export default function ProfileLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ title: 'Profile' }} />
            <Stack.Screen name="settings/index" options={{ title: 'Settings' }} />
            <Stack.Screen name="notifications/index" options={{ title: 'Notifications' }} />
        </Stack>
    )
}