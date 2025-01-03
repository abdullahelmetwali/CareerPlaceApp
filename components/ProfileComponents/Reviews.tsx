import { ScrollView, Text, View, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { CircleUserRound } from "lucide-react-native";
import React from "react";

const Reviews: React.FC = () => {
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1, marginVertical: 20 }}>
            {
                [...Array(10)].map((_, index) => (
                    <View key={index}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CircleUserRound size={30} color={whatMode.text} />
                                <Text style={{ color: whatMode.text, fontSize: 16, marginLeft: 10 }}>Customer Name</Text>
                            </View>
                            <Text style={{ color: whatMode.text, fontSize: 17 }}>5 / 5</Text>
                        </View>
                        <Text style={{ color: whatMode.muted, fontSize: 17, marginTop: 10 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae culpa accusamus et officia natus. Omnis harum consectetur cum repudiandae eaque iste rerum. Odio, debitis iste doloremque deleniti ipsum eos ipsam.
                        </Text>
                        <View style={{ height: 0.6, width: 'auto', backgroundColor: whatMode.muted, marginVertical: 20 }}></View>
                    </View>
                ))
            }
        </ScrollView>
    )
};
export default Reviews;