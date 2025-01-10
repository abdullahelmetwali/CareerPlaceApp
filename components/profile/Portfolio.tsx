import { ScrollView, Text, useColorScheme, View } from "react-native";
import AcornText from "../UI/AcornText";
import React from "react";
import { Colors } from "@/constants/Colors";

const Portfolio: React.FC = () => {
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    return (
        <ScrollView style={{ flex: 1, backgroundColor: whatMode.background }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', gap: 10, padding: 15 }}>
                <AcornText children="Job Title" style={{ fontSize: 23, color: whatMode.text }} />
                <Text style={{ fontSize: 15, color: whatMode.muted }}>
                    Location
                </Text>
            </View>
            <Text style={{ padding: 15, color: whatMode.text, fontSize: 16 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at ipsa commodi. Quaerat pariatur, dolorem vel deleniti eius, laborum saepe dolor placeat aspernatur atque delectus sunt, non alias maxime est.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at ipsa commodi. Quaerat pariatur, dolorem vel deleniti eius, laborum saepe dolor placeat aspernatur atque delectus sunt, non alias maxime est.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at ipsa commodi. Quaerat pariatur, dolorem vel deleniti eius, laborum saepe dolor placeat aspernatur atque delectus sunt, non alias maxime est.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at ipsa commodi. Quaerat pariatur, dolorem vel deleniti eius, laborum saepe dolor placeat aspernatur atque delectus sunt, non alias maxime est.
            </Text>
        </ScrollView>
    )
};
export default Portfolio;