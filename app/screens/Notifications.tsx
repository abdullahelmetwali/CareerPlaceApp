import AcornText from "@/components/UI/AcornText";
import NotificationBox from "@/components/UI/NotificationBox";
import { Colors } from "@/constants/Colors";
import { Notification } from "@/interfaces/Types";
import { NavigationProp } from "@react-navigation/native";
import { ChevronLeft, Trash2 } from "lucide-react-native";
import React from "react";
import {
    FlatList, Pressable, StyleSheet,
    useColorScheme, View
} from "react-native";

const Notifications: React.FC<{ navigation: NavigationProp<any> }> =
    ({ navigation }) => {
        const mode = useColorScheme();
        const whatMode = Colors[mode ? mode : 'dark'];
        const notifications: Notification[] = [
            {
                id: 0,
                title: 'You have a new message from John Doe',
                description: 'John sent you a message: "Hey, are we still meeting tomorrow at 5 PM? Let me know!"',
            },
            {
                id: 1,
                title: 'Your order #12345 has been shipped',
                description: 'Your package is on its way! Estimated delivery date: January 7, 2025. Track your order for updates.',
            },
            {
                id: 2,
                title: 'Reminder: Team Meeting Scheduled at 3 PM Today',
                description: 'Don’t forget to join the Zoom call for today’s meeting. Agenda: Project updates and next steps.',
            },
            {
                id: 3,
                title: 'Your password was successfully updated',
                description: 'If you did not make this change, please reset your password immediately or contact support for assistance.',
            },
            {
                id: 4,
                title: 'New comment on your post: "The Future of AI"',
                description: 'Alice commented: "Great insights! I particularly liked your points about ethical AI. Looking forward to more posts like this!"',
            },
        ];

        return (
            <FlatList
                contentContainerStyle={{ flex: 1, backgroundColor: whatMode.background, gap: 5, padding: 5 }}
                data={notifications}
                keyExtractor={(item) => item?.id?.toString()}
                renderItem={({ item }) => (
                    <NotificationBox notification={item} />
                )}
                ListHeaderComponent={
                    <View style={styles.flexBox}>
                        <Pressable
                            style={{ backgroundColor: '#2C2C2C', borderRadius: '50%', padding: 3 }}
                            onPress={() => navigation.goBack()}
                        >
                            <ChevronLeft size={24} color={whatMode.text} />
                        </Pressable>
                        <AcornText children="Notifications" style={{ fontSize: 23 }} />
                        <Pressable>
                            <Trash2 size={22} color={whatMode.text} />
                        </Pressable>
                    </View>
                }
                onEndReachedThreshold={0.5}
                ListEmptyComponent={
                    <AcornText children="No more notifications" style={{ fontSize: 23, color: whatMode.muted, textAlign: 'center', padding: 15 }} />
                }
            />
        )
    };

const styles = StyleSheet.create({
    flexBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 7,
        paddingVertical: 15
    }
})
export default Notifications;