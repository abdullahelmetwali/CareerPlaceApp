import { StyleSheet, Text, useColorScheme, View } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Colors } from "@/constants/Colors";
import AcornText from "../UI/AcornText";
import React from "react";

const Analysis = () => {
    const mode = useColorScheme();
    const whatMode = Colors[mode ? mode : 'dark'];
    const analysis = [
        { value: 35 },
        { value: 61 },
        { value: 44 },
        { value: 66 },
        { value: 57 },
        { value: 38 },
        { value: 94 },
    ];

    const theAnalysisLines = analysis.map((item: { value: number }, index: number) => {
        const itemHeight = useSharedValue(item.value);
        const theHeight = useAnimatedStyle(() => {
            return {
                height: itemHeight.value * 3
            }
        });
        return (
            <View key={index} style={{ alignItems: 'center', gap: 10 }}>
                <View style={[styles.mainLine, { backgroundColor: whatMode.text }]}>
                    <Animated.View style={[theHeight, { backgroundColor: '#003161', width: 15 }]} />
                </View>
                <Text style={{ color: whatMode.text, fontSize: 17, textAlign: 'center' }}>
                    {item.value}
                </Text>
            </View>
        )
    });

    return (
        <View style={{ flexDirection: 'row', gap: 25, width: '100%', padding: 10 }}>
            <View style={styles.numbersBox}>
                <AcornText children="100" style={{ fontSize: 17 }} />
                <AcornText children="80" style={{ fontSize: 17 }} />
                <AcornText children="60" style={{ fontSize: 17 }} />
                <AcornText children="40" style={{ fontSize: 17 }} />
                <AcornText children="20" style={{ fontSize: 17 }} />
                <AcornText children="0" style={{ fontSize: 17 }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: '80%' }}>
                {theAnalysisLines}
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    numbersBox: {
        height: 300,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    mainLine: {
        height: 300,
        justifyContent: 'flex-end',
    }
})
export default Analysis;