import { Link, useRouter } from "expo-router";
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native"
import { Bolt, Bell } from "lucide-react-native"
import { Colors } from "@/constants/Colors";
import AcornText from "@/components/UI/AcornText";
import * as SecureStorge from 'expo-secure-store';
import React, { useContext, useLayoutEffect, useState } from "react";
import Statics from "@/components/profile/Statics";
import Portfolio from "@/components/profile/Portfolio";
import Reviews from "@/components/profile/Reviews";
import { AppContext } from "@/context/AppContext";


const Profile: React.FC = () => {
    const { globalUsr, setGlobalUsr } = useContext(AppContext);
    const router = useRouter();
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    const profileImg = require('@/assets/images/profile-img.jpg');
    const [view, setView] = useState('Statics');

    useLayoutEffect(() => {
        async function getUsr() {
            const usr = await SecureStorge.getItemAsync('usr') || null;
            if (usr) {
                setGlobalUsr({
                    usr: JSON.parse(usr).displayName,
                    isThereIsUsr: true
                });
            } else {
                setGlobalUsr({
                    usr: 'Guest-777',
                    isThereIsUsr: false
                });
            }
        }
        getUsr();
    }, []);

    const whatView = {
        Statics: <Statics usrname={globalUsr.usr} />,
        Portfolio: <Portfolio />,
        Reviews: <Reviews />,
        default: <Statics usrname={globalUsr.usr} />,
    }
    return (
        <ScrollView style={[{ backgroundColor: whatMode.background }]} contentContainerStyle={styles.container}>
            <View style={styles.flexBox}>
                <Pressable onPress={() => {
                    if (globalUsr.isThereIsUsr) router.push('/profile-features/settings')
                }}>
                    <Bolt size={29} color={whatMode.text} />
                </Pressable>
                <AcornText style={{ fontSize: 23, color: whatMode.text }} children={"My Profile"} />
                <Pressable onPress={() => {
                    if (globalUsr.isThereIsUsr) router.push('/profile-features/notifications')
                }}>
                    <Bell color={whatMode.text} size={26} />
                </Pressable>
            </View>
            <ScrollView>
                <View style={styles.centerBox}>
                    <Image source={profileImg} style={styles.profileImg} />
                    <AcornText style={{ fontSize: 24, color: whatMode.text }} children={globalUsr.usr} />
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
                {
                    globalUsr.isThereIsUsr ?
                        whatView[view as 'Statics' || 'Portfolio' || 'Reviews'] || whatView.default
                        :
                        <View>
                            <AcornText style={{ color: whatMode.muted, fontSize: 22, textAlign: 'center', marginVertical: 30 }}>
                                No data seen , Please
                                <AcornText style={{ color: '#D2FF1F', fontSize: 22, textDecorationLine: 'underline', textDecorationColor: '#D2FF1F' }} >
                                    <Link href={`/auth/login`}>
                                        {' '}Login{' '}
                                    </Link>
                                </AcornText>
                                First
                            </AcornText>
                        </View>
                }
            </ScrollView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingVertical: Platform.OS === 'ios' ? 25 : 10,
        paddingBottom: 60
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