import { useFonts } from 'expo-font';
import { Tabs, useNavigation } from 'expo-router';
import * as SecureStorage from 'expo-secure-store';
import { useContext, useEffect } from 'react';
import { BriefcaseBusiness, CalendarRange, Pentagon, Search, UserRound } from 'lucide-react-native';
import { AppContext } from '@/hooks/AppContext';

export default function RootLayout() {
    const navigation = useNavigation();
    const { setGlobalUsr } = useContext(AppContext);
    const [loaded] = useFonts({
        'acorn-semib': require('../../assets/fonts/Acorn-SemiBold.ttf'),
        'acorn-regular': require('../../assets/fonts/Acorn-Regular.ttf'),
        'acorn-thin': require('../../assets/fonts/Acorn-Thin.ttf'),
    });

    const checkUserAndNavigate = async () => {
        try {
            const user = await SecureStorage.getItemAsync('usr');
            if (user) {
                setGlobalUsr(JSON.parse(user).displayName.split(' ')[0]);
                navigation.navigate('/' as never);
            } else {
                navigation.navigate('/auth/login/index' as never);
            }
        } catch (error) {
            console.error('Error checking user:', error);
        }
    };

    useEffect(() => {
        if (loaded) {
            checkUserAndNavigate();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#2F2F2F',
                        borderTopWidth: 0,
                        position: 'absolute',
                        bottom: 10,
                        borderRadius: 30,
                        height: 48,
                        paddingTop: 4,
                        marginHorizontal: 9,
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: '#6C6C6C',
                    tabBarLabelStyle: {
                        display: 'none',
                    },
                    tabBarIconStyle: {
                        padding: 0,
                        margin: 0,
                    }
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Pentagon color={color} size={size} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Search color={color} size={size} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="tasks"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <CalendarRange color={color} size={size} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name='careers'
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <BriefcaseBusiness color={color} size={size} />
                        )
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <UserRound color={color} size={size} />
                        ),
                        headerShown: false
                    }}
                />
            </Tabs>
        </>
    );
}
