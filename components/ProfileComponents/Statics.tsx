import { whatMode } from "@/constants/Colors";
import { FileText } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Statics: React.FC<{ usrname: string }> = ({ usrname }) => {
    return (
        <View style={[styles.cvContainer, { borderColor: whatMode.text }]}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
                <View style={[styles.cvBox]}>
                    <FileText size={32} color={'#000'} />
                </View>
                <View>
                    <Text>{usrname}_CV</Text>
                    <Text></Text>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    cvContainer: {
        borderColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 19,
        padding: 7,
    },
    cvBox: {
        backgroundColor: '#D2FF1F',
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 9,
    }
})
export default Statics;