import AcornText from "@/components/UI/AcornText";
import { Colors } from "@/constants/Colors";
import { Bell, ChevronRight } from "lucide-react-native";
import React, { useContext, useState } from "react";
import { Alert, Image, Modal, Pressable, ScrollView, StyleSheet, TouchableWithoutFeedback, useColorScheme, View } from "react-native";
import * as SecureStorge from 'expo-secure-store'
import ScreenHeader from "@/components/UI/ScreenHeader";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import EditProfile from "@/components/SettingsComponents/EditProfile";
import AboutApp from "@/components/SettingsComponents/AboutApp";
import Payment from "@/components/SettingsComponents/Payment";
import Support from "@/components/SettingsComponents/Support";
import { useRouter } from "expo-router";
import { AppContext } from "@/hooks/AppContext";

const Settings: React.FC = () => {
    const router = useRouter();
    const { globalUsr } = useContext(AppContext);
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    const profileImg = require('@/assets/images/profile-img.jpg');
    const [seenModal, setSeenModal] = useState({
        modal: '',
        visible: false
    });

    const LogOut = async () => {
        try {
            await signOut(auth);
            await SecureStorge.deleteItemAsync('usr');
            router.push({ pathname: '/' })
        } catch (err) {
            Alert.alert('Error', 'Something went wrong', [{ text: 'OK' }], { cancelable: true })
        }
    };

    const modals = {
        EditProfile: <EditProfile />,
        Payment: <Payment />,
        Support: <Support />,
        AboutTheApp: <AboutApp />,
    };
    return (
        <ScrollView contentContainerStyle={{ backgroundColor: whatMode.background, flex: 1 }}>
            <ScreenHeader
                head="Settings"
                rightComponent={
                    <Pressable
                        accessibilityLabel="Go to Notifications"
                        onPress={() => router.push('/profile-features/notifications')}>
                        <Bell color={whatMode.text} size={26} />
                    </Pressable>
                }
                chevColor={whatMode.text}
                style={{ color: whatMode.text }}
            />
            <View style={styles.centerBox}>
                <Image source={profileImg} style={styles.profileImg} />
                <AcornText style={{ fontSize: 24, color: whatMode.text }} children={globalUsr} />
            </View>
            <View style={{ gap: 5 }}>

                <Pressable
                    accessibilityLabel="Edit Profile"
                    style={styles.box}
                    onPress={() => setSeenModal({ modal: 'EditProfile', visible: true })}
                >
                    <AcornText children="Edit Profile" style={{ fontSize: 20, color: whatMode.text }} />
                    <ChevronRight color={whatMode.text} size={22} />
                </Pressable>

                <Pressable style={styles.box}
                    onPress={() => setSeenModal({ modal: 'Payment', visible: true })}
                >
                    <AcornText children="Payment" style={{ fontSize: 20, color: whatMode.text }} />
                    <ChevronRight color={whatMode.text} size={22} />
                </Pressable>

                <Pressable
                    style={styles.box}
                    onPress={() => setSeenModal({ modal: 'Support', visible: true })}
                >
                    <AcornText children="Support" style={{ fontSize: 20, color: whatMode.text }} />
                    <ChevronRight color={whatMode.text} size={22} />
                </Pressable>

                <Pressable
                    style={styles.box}
                    onPress={() => setSeenModal({ modal: 'AboutTheApp', visible: true })}
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
            <Modal
                visible={seenModal.visible}
                animationType={'slide'}
                transparent={true}
            >
                <TouchableWithoutFeedback
                    onPress={() => setSeenModal({ modal: '', visible: false })}
                >
                    <View style={styles.modalOverlay}>
                        <View style={[styles.moduleContent, { backgroundColor: whatMode.background }]}>
                            {modals[seenModal.modal as 'EditProfile' || 'Payment' || 'Support' || 'AboutTheApp']}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
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
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.63)',
    },
    moduleContent: {
        padding: 20,
        borderRadius: 10,
        width: '100%',
        height: '90%'
    }
})
export default Settings;