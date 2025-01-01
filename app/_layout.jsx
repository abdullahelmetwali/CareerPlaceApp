import { useFonts } from 'expo-font';
import OnBoarding from '@/components/OnBoarding';
import SplashScreen from '@/components/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/screens/Home';
import Login from '@/screens/Login';
import Register from '@/screens/Register';
import Profile from '@/screens/Profile';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [loaded] = useFonts({
    'acorn-semib': require('../assets/fonts/Acorn-SemiBold.ttf'),
    'acorn-regular': require('../assets/fonts/Acorn-Regular.ttf'),
    'acorn-thin': require('../assets/fonts/Acorn-Thin.ttf'),
  });

  if (!loaded) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoard" component={OnBoarding} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
