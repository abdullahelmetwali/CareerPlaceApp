import { Colors } from "@/constants/Colors";
import { Notification } from "@/interfaces/Types";
import { X } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";

const NotificationBox: React.FC<{ notification: Notification }> = ({ notification }) => {
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    return (
        <View style={{ padding: 5 }}>
            <View style={styles.notificationBox}>
                <Text style={{ width: '90%', color: whatMode.text, fontSize: 16 }}>{notification.description}</Text>
                <Pressable style={{ width: 16 }}>
                    <X size={20} color={whatMode.text} />
                </Pressable>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    notificationBox: {
        backgroundColor: '#2C2C2C',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 18,
        borderRadius: 12,
    }
})
export default NotificationBox;