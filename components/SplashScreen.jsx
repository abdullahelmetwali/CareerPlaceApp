import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "expo-router";
import React, { useLayoutEffect, useRef } from "react";
import { Image, View, StyleSheet, Animated, Easing } from "react-native"

const SplashScreen = () => {
    const navigation = useNavigation();

    const shape = require('../assets/images/shape.png');
    const careerLogo = require('../assets/images/career-place.png');
    const rotatedAnimate = useRef(new Animated.Value(0)).current;

    useLayoutEffect(() => {
        Animated.timing(rotatedAnimate, {
            toValue: 1,
            duration: 750,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start()

        setTimeout(async () => {
            await SecureStore.getItemAsync('usr') ?
                navigation.navigate('Profile') : navigation.navigate('OnBoard');
        }, 1200);
    }, [rotatedAnimate]);

    const rotateTop = rotatedAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-180deg']
    });

    const rotateBtm = rotatedAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    });

    return (
        <View style={styles.container}>
            <Image source={careerLogo} />
            <Animated.Image source={shape} style={{ position: 'absolute', bottom: -90, right: -200, transform: [{ rotate: rotateTop }] }} />
            <Animated.Image source={shape} style={{ position: 'absolute', top: -90, left: -200, transform: [{ rotate: rotateBtm }] }} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D2FF1F'
    },
});
export default SplashScreen;