import { useFonts } from 'expo-font';
import { Tabs, Redirect } from 'expo-router';
import * as SecureStorage from 'expo-secure-store';
import { useContext, useEffect } from 'react';
import { BriefcaseBusiness, CalendarRange, Pentagon, Search, UserRound } from 'lucide-react-native';
import { AppContext } from '@/context/AppContext';
import { StyleSheet } from 'react-native';

export default function RootLayout() {
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
                setGlobalUsr({
                    usr: JSON.parse(user).displayName.split(' ')[0],
                    isThereIsUsr: true
                });
                <Redirect href={`/(tabs)`} />
            } else {
                setGlobalUsr({
                    usr: 'Guest-777',
                    isThereIsUsr: false
                });
                <Redirect href={`/auth/login`} />
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
                    tabBarStyle: styles.container,
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
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        elevation: 0,
        borderTopWidth: 0,
        position: 'absolute',
        bottom: 10,
        borderRadius: 30,
        height: 48,
        paddingTop: 4,
        marginHorizontal: 9,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
