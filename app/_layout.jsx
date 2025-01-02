import { useFonts } from 'expo-font';
import OnBoarding from '@/components/OnBoarding';
import SplashScreen from '@/components/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/app/screens/Home';
import Login from '@/app/screens/Login';
import Register from '@/app/screens/Register';
import Profile from '@/app/screens/Profile';
import Settings from '@/app/screens/Settings';
import Notifications from '@/app/screens/Notifications';

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
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoard" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </>
  );
}
