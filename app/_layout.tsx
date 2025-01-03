import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import * as SecureStorage from 'expo-secure-store';
import { useEffect, useLayoutEffect } from 'react';

export default function RootLayout() {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    'acorn-semib': require('../assets/fonts/Acorn-SemiBold.ttf'),
    'acorn-regular': require('../assets/fonts/Acorn-Regular.ttf'),
    'acorn-thin': require('../assets/fonts/Acorn-Thin.ttf'),
  });

  useLayoutEffect(() => {
    const seeIfUser = async () => {
      const user = await SecureStorage.getItemAsync('usr');
      if (user) {
        navigation.navigate('index' as never);
      } else {
        navigation.navigate('auth/login/index.tsx' as never);
      }
    };
    seeIfUser();
  }, [])

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
