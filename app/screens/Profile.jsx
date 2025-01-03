import { Image, Platform, Pressable, ScrollView, StyleSheet, useColorScheme, View } from "react-native"
import { Bolt, Bell } from "lucide-react-native"
import { Colors } from "@/constants/Colors";
import AcornText from "@/components/UI/AcornText";
import * as SecureStorge from 'expo-secure-store';
import { useEffect, useState } from "react";
import Statics from "@/components/ProfileComponents/Statics";
import Portfolio from "@/components/ProfileComponents/Portfolio";
import Reviews from "@/components/ProfileComponents/Reviews";

const Profile = ({ navigation }) => {
    const mode = useColorScheme();
    const whatMode = Colors[mode ? mode : 'dark'];
    const profileImg = require('../../assets/images/profile-img.jpg');
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
        default: <Statics usrname={usrName} whatMode={whatMode} />,
    }
    return (
        <ScrollView style={[{ backgroundColor: whatMode.background }]} contentContainerStyle={styles.container}>
            <View style={styles.flexBox}>
                <Pressable onPress={() => navigation.navigate('Settings')}>
                    <Bolt size={29} color={whatMode.text} />
                </Pressable>
                <AcornText style={{ fontSize: 23 }} children={"My Profile"} />
                <Pressable onPress={() => navigation.navigate('Notifications')}>
                    <Bell color={whatMode.text} size={26} />
                </Pressable>
            </View>
            <View style={styles.centerBox}>
                <Image source={profileImg} style={styles.profileImg} />
                <AcornText style={{ fontSize: 24 }} children={usrName} />
            </View>
            <View style={[styles.userInfo, { borderColor: whatMode.text }]}>
                <Pressable onPress={() => setView('Statics')}>
                    <AcornText
                        style={[view === 'Statics' && { backgroundColor: '#003161', color: 'white' },
                        styles.userInfoTxt]} children={"Statics"} />
                </Pressable>

                <Pressable onPress={() => setView('Portfolio')}>
                    <AcornText
                        style={[view === 'Portfolio' && { backgroundColor: '#003161', color: 'white' },
                        styles.userInfoTxt]} children={"Portfolio"} />
                </Pressable>

                <Pressable onPress={() => setView('Reviews')}>
                    <AcornText
                        style={[view === 'Reviews' && { backgroundColor: '#003161', color: 'white' },
                        styles.userInfoTxt]} children={"Reviews"} />
                </Pressable>
            </View>
            <ScrollView>
                {whatView[view] || whatView.default}
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
    }
})
export default Profile;