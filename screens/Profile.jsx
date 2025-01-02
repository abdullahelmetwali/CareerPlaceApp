import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { Bolt, Bell } from "lucide-react-native"
import { whatMode } from "@/constants/Colors";
import AcornText from "@/components/UI/AcornText";
import * as SecureStorge from 'expo-secure-store'
import { useEffect, useState } from "react";
import Statics from "@/components/ProfileComponents/Statics";
import Portfolio from "@/components/ProfileComponents/Portfolio";
import Reviews from "@/components/ProfileComponents/Reviews";
const Profile = () => {
    const profileImg = require('../assets/images/profile-img.jpg');
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
        default: <Statics />,
    }
    return (
        <>
            <ScrollView style={[{ backgroundColor: whatMode.background }]} contentContainerStyle={styles.container}>
                <View style={styles.flexBox}>
                    <Bolt size={29} color={whatMode.text} />
                    <AcornText style={{ fontSize: 23 }} children={"My Profile"} />
                    <Bell color={whatMode.text} size={26} />
                </View>
                <View style={styles.centerBox}>
                    <Image source={profileImg} style={styles.profileImg} />
                    <AcornText style={{ fontSize: 24 }} children={usrName} />
                </View>
                <View style={[styles.userInfo, { borderColor: whatMode.text }]}>
                    <Pressable onPress={() => setView('Statics')}>
                        <AcornText
                            style={[view === 'Statics' ? { backgroundColor: '#D2FF1F', color: '#000' } : null,
                            styles.userInfoTxt]} children={"Statics"} />
                    </Pressable>

                    <Pressable onPress={() => setView('Portfolio')}>
                        <AcornText
                            style={[view === 'Portfolio' ? { backgroundColor: '#D2FF1F', color: '#000' } : null,
                            styles.userInfoTxt]} children={"Portfolio"} />
                    </Pressable>

                    <Pressable onPress={() => setView('Reviews')}>
                        <AcornText
                            style={[view === 'Reviews' ? { backgroundColor: '#D2FF1F', color: '#000' } : null,
                            styles.userInfoTxt]} children={"Reviews"} />
                    </Pressable>
                </View>
                <View>
                    {whatView[view] || whatView.default}
                </View>
            </ScrollView>
        </>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
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
    }
})
export default Profile;