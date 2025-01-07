import { Colors } from '@/constants/Colors';
import { AppProvider } from '@/hooks/AppContext';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
export default function RootLayout() {
  const mode = useColorScheme();
  const whatMode = Colors[mode || 'dark'];
  const [loaded] = useFonts({
    'acorn-semib': require('../assets/fonts/Acorn-SemiBold.ttf'),
    'acorn-regular': require('../assets/fonts/Acorn-Regular.ttf'),
    'acorn-thin': require('../assets/fonts/Acorn-Thin.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <AppProvider>
        <Stack screenOptions={{ headerShown: false, statusBarBackgroundColor: whatMode.background, statusBarStyle: 'auto', }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </AppProvider>
    </>
  );
}
