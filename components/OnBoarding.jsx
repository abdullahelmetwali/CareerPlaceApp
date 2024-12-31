import { useNavigation } from "expo-router";
import { useState } from "react";
import { Text, StyleSheet, Pressable, Image, View, Platform } from "react-native";
import Button from "./UI/Button";

const OnBoarding = () => {
    const navigate = useNavigation();
    const [nowView, setNowView] = useState(0);
    const allViews = [
        {
            title: `Welcome ${'\n'} to careerspace`,
            img: require('../assets/images/first-view.png'),
            backgroundColor: '#DCC1FF',
        },
        {
            title: `Get support in ${'\n'} your new${'\n'}career`,
            img: require('../assets/images/second-view.png'),
            backgroundColor: '#F7CE45',
        },
        {
            title: `Learn and ${'\n'} practice`,
            img: require('../assets/images/third-view.png'),
            backgroundColor: '#AB93E0',
        },
        {
            title: `Let's start ${'\n'} your career`,
            img: require('../assets/images/fourth-view.png'),
            backgroundColor: '#DCC1FF',
        },
    ];
    return (
        <View style={[styles.container, { backgroundColor: allViews[nowView].backgroundColor }]}>
            <Text style={styles.title}>
                {allViews[nowView].title}
            </Text>
            <Image
                source={allViews[nowView].img}
                style={[styles.img, { resizeMode: 'contain', marginTop: 20 }]}
            />
            {
                nowView === allViews.length - 1
                    ?
                    <View style={{ flexDirection: 'column', gap: 8 }}>
                        <Button text="Sign in" pressStyle={[styles.lastViewBtn, { backgroundColor: '#FFFD82' }]} OnPress={() => navigate.navigate('Login')} />
                        <Button text="Sign up" pressStyle={[styles.lastViewBtn, { backgroundColor: '#ffffff' }]} OnPress={() => navigate.navigate('Register')} />
                    </View>
                    :
                    <Button text="Next" OnPress={() => setNowView(prev => prev + 1)} pressStyle={{ position: 'absolute', bottom: Platform.OS === 'ios' ? 100 : 140, }} />
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 90 : 120,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'acorn-semib',
        letterSpacing: -0.5,
        lineHeight: 30
    },
    lastViewBtn: {
        position: 'relative',
        bottom: 0,
        borderColor: 'none',
        borderWidth: 0,
        width: 240,
        paddingVertical: 10,
    }
});
export default OnBoarding;