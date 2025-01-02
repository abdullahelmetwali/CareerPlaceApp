import { Download, FileText, Share2 } from "lucide-react-native";
import React from "react";
import { ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";
import AcornText from "../UI/AcornText";
import Analysis from "./Analysis";
import { Colors } from "@/constants/Colors";


const Statics: React.FC<{ usrname: string }> = ({ usrname }) => {
    const mode = useColorScheme();
    const whatMode = Colors[mode ? mode : 'dark'];
    return (
        <>
            <ScrollView contentContainerStyle={[styles.cvContainer, {
                borderColor: whatMode.text, flexDirection: 'row',
                justifyContent: 'space-around',
            }]}>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <View style={[styles.cvBox]}>
                        <FileText size={32} color={'#000'} />
                    </View>
                    <View>
                        <Text style={{ color: whatMode.text, fontSize: 16 }}>{usrname}_CV.pdf</Text>
                        <Text style={{ color: whatMode.muted }}>Views 39</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                    <View style={styles.cvRounded}>
                        <Download size={27} color={'#000'} />
                    </View>
                    <View style={styles.cvRounded}>
                        <Share2 size={30} color={'#000'} />
                    </View>
                </View>
            </ScrollView>
            <ScrollView style={[{ borderColor: whatMode.text, marginTop: 15 }]} contentContainerStyle={styles.cvContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%' }}>
                    <AcornText children="Analysis" style={{ color: whatMode.text, fontSize: 18 }} />
                    <AcornText children="Every 10 days" style={{ color: whatMode.text, fontSize: 18 }} />
                </View>
                <View style={{ backgroundColor: whatMode.text, height: 1, width: '90%', marginVertical: 15 }}></View>
                <Analysis />
            </ScrollView>
        </>
    )
};
const styles = StyleSheet.create({
    cvContainer: {
        borderColor: '#fff',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 19,
        paddingVertical: 18,
        paddingHorizontal: 4,
    },
    cvBox: {
        backgroundColor: '#D2FF1F',
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 9,
    },
    cvRounded: {
        backgroundColor: 'white',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
    },
    dropdownContainer: {
        height: 40,
        width: 100,
        marginTop: 10,
        // padding: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 20
    }
})
export default Statics;