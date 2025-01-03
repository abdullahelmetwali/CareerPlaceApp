import AcornText from "@/components/UI/AcornText";
import { Colors } from "@/constants/Colors";
import { NavigationProp } from "@react-navigation/native";
import { Bell, ChevronRight } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Alert, Image, Modal, Pressable, ScrollView, StyleSheet, useColorScheme, View } from "react-native";
import * as SecureStorge from 'expo-secure-store'
import ScreenHeader from "@/components/UI/ScreenHeader";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

const Settings: React.FC<{ navigation: NavigationProp<any> }> =
    ({ navigation }) => {
        const mode = useColorScheme();
        const whatMode = Colors[mode ? mode : 'dark'];
        const profileImg = require('../../assets/images/profile-img.jpg');
        const [usrName, setUsrName] = useState('Guest-777');
        const [seenModal, setSeenModal] = useState('');

        useEffect(() => {
            async function getUsr() {
                const usr = await SecureStorge.getItemAsync('usr') || null;
                if (usr) {
                    setUsrName(JSON.parse(usr).displayName);
                }
            }
            getUsr();
        }, []);

        const LogOut = async () => {
            try {
                await signOut(auth);
                await SecureStorge.deleteItemAsync('usr');
                navigation.navigate('Home');
            } catch (err) {
                Alert.alert('Error', 'Something went wrong', [{ text: 'OK' }], { cancelable: true })
            }
        };

        return (
            <ScrollView contentContainerStyle={{ backgroundColor: whatMode.background, flex: 1 }}>
                <ScreenHeader
                    head="My profile"
                    rightComponent={
                        <Pressable onPress={() => navigation.navigate('Notifications')}>
                            <Bell color={whatMode.text} size={26} />
                        </Pressable>
                    }
                    chevColor={whatMode.text}
                />
                <View style={styles.centerBox}>
                    <Image source={profileImg} style={styles.profileImg} />
                    <AcornText style={{ fontSize: 24, color: whatMode.text }} children={usrName} />
                </View>
                <View style={{ gap: 5 }}>

                    <Pressable
                        style={styles.box}
                        onPress={() => setSeenModal('edit-profile')}
                    >
                        <AcornText children="Edit Profile" style={{ fontSize: 20, color: whatMode.text }} />
                        <ChevronRight color={whatMode.text} size={22} />
                    </Pressable>

                    <Pressable style={styles.box}
                        onPress={() => setSeenModal('payment')}
                    >
                        <AcornText children="Payment" style={{ fontSize: 20, color: whatMode.text }} />
                        <ChevronRight color={whatMode.text} size={22} />
                    </Pressable>

                    <Pressable
                        style={styles.box}
                        onPress={() => setSeenModal('support')}
                    >
                        <AcornText children="Support" style={{ fontSize: 20, color: whatMode.text }} />
                        <ChevronRight color={whatMode.text} size={22} />
                    </Pressable>

                    <Pressable
                        style={styles.box}
                        onPress={() => setSeenModal('about-the-app')}
                    >
                        <AcornText children="About the app" style={{ fontSize: 20, color: whatMode.text }} />
                        <ChevronRight color={whatMode.text} size={22} />
                    </Pressable>

                </View>
                <Pressable onPress={LogOut}>
                    <AcornText style={{ textDecorationLine: 'underline', color: whatMode.muted, fontSize: 20, textAlign: 'center', margin: 29 }}>
                        Log out
                    </AcornText>
                </Pressable>
            </ScrollView>
        )
    };

const styles = StyleSheet.create({
    centerBox: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        gap: 10
    },
    profileImg: {
        width: 126,
        height: 126,
        borderRadius: 100
    },
    box: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        padding: 7,
        paddingHorizontal: 18
    }
})
export default Settings;