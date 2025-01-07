import { useRouter } from "expo-router";
import { Image, Platform, Pressable, ScrollView, StyleSheet, useColorScheme, View } from "react-native"
import { Bolt, Bell } from "lucide-react-native"
import { Colors } from "@/constants/Colors";
import AcornText from "@/components/UI/AcornText";
import * as SecureStorge from 'expo-secure-store';
import React, { useEffect, useState } from "react";
import Statics from "@/components/forProfile/Statics";
import Portfolio from "@/components/forProfile/Portfolio";
import Reviews from "@/components/forProfile/Reviews";


const Profile: React.FC = () => {
    const router = useRouter();
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    const profileImg = require('@/assets/images/profile-img.jpg');
    const [usrName, setUsrName] = useState('Guest-777');
    const [view, setView] = useState('Statics');

    useEffect(() => {
        async function getUsr() {
            const usr = await SecureStorge.getItemAsync('usr') || null;
            if (usr) {
                setUsrName(JSON.parse(usr).displayName);
            }
        }
        getUsr();
    }, []);

    const whatView = {
        Statics: <Statics usrname={usrName} />,
        Portfolio: <Portfolio />,
        Reviews: <Reviews />,
        default: <Statics usrname={usrName} />,
    }
    return (
        <ScrollView style={[{ backgroundColor: whatMode.background }]} contentContainerStyle={styles.container}>
            <View style={styles.flexBox}>
                <Pressable onPress={() => router.push('/profile-features/settings')}>
                    <Bolt size={29} color={whatMode.text} />
                </Pressable>
                <AcornText style={{ fontSize: 23, color: whatMode.text }} children={"My Profile"} />
                <Pressable onPress={() => router.push('/profile-features/notifications')}>
                    <Bell color={whatMode.text} size={26} />
                </Pressable>
            </View>
            <View style={styles.centerBox}>
                <Image source={profileImg} style={styles.profileImg} />
                <AcornText style={{ fontSize: 24, color: whatMode.text }} children={usrName} />
            </View>
            <View style={[styles.userInfo, { borderColor: whatMode.text }]}>
                <Pressable onPress={() => setView('Statics')}>
                    <AcornText
                        style={[view === 'Statics' && styles.selectedView,
                        styles.userInfoTxt, { color: whatMode.text }]} children={"Statics"} />
                </Pressable>

                <Pressable onPress={() => setView('Portfolio')}>
                    <AcornText
                        style={[view === 'Portfolio' && styles.selectedView,
                        styles.userInfoTxt, { color: whatMode.text }]} children={"Portfolio"} />
                </Pressable>

                <Pressable onPress={() => setView('Reviews')}>
                    <AcornText
                        style={[view === 'Reviews' && styles.selectedView,
                        styles.userInfoTxt, { color: whatMode.text }]} children={"Reviews"} />
                </Pressable>
            </View>
            <ScrollView>
                {whatView[view as 'Statics' || 'Portfolio' || 'Reviews'] || whatView.default}
            </ScrollView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingVertical: Platform.OS === 'ios' ? 25 : 10,
    },
    flexBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
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
    userInfo: {
        borderWidth: 1.5,
        borderRadius: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        padding: 2.8,
        marginVertical: 15
    },
    userInfoTxt: {
        fontSize: 19,
        paddingHorizontal: 16,
        paddingVertical: 5,
        borderRadius: 30
    },
    selectedView: { backgroundColor: '#003161', color: 'white' }
});

export default Profile;