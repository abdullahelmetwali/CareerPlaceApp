import { Bell, ChevronLeft } from "lucide-react-native";
import { Pressable, View } from "react-native";
import AcornText from "./AcornText";
import { useRouter } from "expo-router";
import React from "react";
import { Header } from "@/interfaces/Types";

const ScreenHeader: React.FC<Header> =
    ({ chevColor, head, rightComponent, style }) => {
        const route = useRouter();
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: rightComponent ? 'space-between' : 'flex-start',
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 25
            }}>
                <Pressable
                    style={{ backgroundColor: '#2C2C2C', borderRadius: '50%', padding: 3 }}
                    onPress={() => route.back()}
                >
                    <ChevronLeft size={24} color={chevColor} />
                </Pressable>
                <AcornText children={head} style={[{ fontSize: 23, marginLeft: rightComponent ? 0 : 110 }, style]} />
                {rightComponent}
            </View>
        )
    }
export default ScreenHeader;