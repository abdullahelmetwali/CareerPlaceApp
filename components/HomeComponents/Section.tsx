import { SectionProps } from "@/interfaces/Types";
import { View } from "lucide-react-native";
import React from "react";
import AcornText from "../UI/AcornText";
import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

const Section =
    ({ title, data }: SectionProps) => {
        const mode = useColorScheme();
        const whatMode = Colors[mode || 'dark'];
        return (
            <>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <AcornText children={title} style={{ color: whatMode.text, fontSize: 25 }} />
                    <View style={styles.line}></View>
                </View>
            </>
        )
    };

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#a1a1aa',
        height: 2,
        width: 'auto'
    }
})
export default Section;