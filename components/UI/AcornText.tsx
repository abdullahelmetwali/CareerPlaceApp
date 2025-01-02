import { whatMode } from "@/constants/Colors";
import { AcornTextProps } from "@/interfaces/Types";
import React from "react";
import { StyleSheet, Text } from "react-native";

const AcornText: React.FC<AcornTextProps> = ({ children, style }) => {
    return (
        <Text style={[styles.txt, style, { color: whatMode.text }]} >
            {children}
        </Text>
    )
};
const styles = StyleSheet.create({
    txt: {
        fontFamily: 'acorn-semib',
        fontWeight: 'bold',
        letterSpacing: -0.5
    }
});
export default AcornText;