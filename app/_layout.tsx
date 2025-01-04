import { useFonts } from 'expo-font';
import { Tabs, useNavigation } from 'expo-router';
import * as SecureStorage from 'expo-secure-store';
import { useLayoutEffect } from 'react';
import { Home, LogIn, User, UserPlus } from 'lucide-react-native';

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
        navigation.navigate('auth/login/index' as never);
      }
    };
    seeIfUser();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 0,
            margin: 5,
            position: 'absolute',
            borderRadius: 30,
            height: 50,
            alignItems: 'center',
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIconStyle: {
            padding: 0,
            margin: 0
          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Home color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="auth/login/index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <LogIn color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="auth/register/index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <UserPlus color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size }) => (
              <User color={color} size={size} />
            ),
            headerShown: false
          }}
        />
      </Tabs>
    </>
  );
}
