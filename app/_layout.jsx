// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';
import OnBoarding from '@/components/OnBoarding';
import SplashScreen from '@/components/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/Home';
import Login from '@/screens/Login';
import Register from '@/screens/Register';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [loaded] = useFonts({
    'acorn-semib': require('../assets/fonts/Acorn-SemiBold.ttf'),
    'acorn-regular': require('../assets/fonts/Acorn-Regular.ttf'),
    'acorn-thin': require('../assets/fonts/Acorn-Thin.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoard" component={OnBoarding} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
