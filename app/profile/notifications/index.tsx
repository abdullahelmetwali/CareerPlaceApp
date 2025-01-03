import AcornText from "@/components/UI/AcornText";
import NotificationBox from "@/components/UI/NotificationBox";
import { Colors } from "@/constants/Colors";
import { Notification } from "@/interfaces/Types";
import { NavigationProp } from "@react-navigation/native";
import { ChevronLeft, Trash2 } from "lucide-react-native";
import React from "react";
import {
    FlatList, Pressable, StyleSheet,
    useColorScheme, View, Platform
} from "react-native";

const Notifications: React.FC<{ navigation: NavigationProp<any> }> =
    ({ navigation }) => {
        const mode = useColorScheme();
        const whatMode = Colors[mode || 'dark'];
        const notifications: Notification[] = [
            {
                id: 0,
                description: 'John is asking if the meeting at 5 PM is still on. Let him know your plans.',
            },
            {
                id: 1,
                description: 'Your package is on its way! Check the tracking page for real-time updates.',
            },
            {
                id: 2,
                description: 'Join today’s meeting to discuss project milestones and next steps.',
            },
            {
                id: 3,
                description: 'If this wasn’t you, please reset your password immediately and contact support.',
            },
            {
                id: 4,
                description: 'Alice shared her thoughts: "Great points on ethical AI. Keep up the good work!"',
            },
            {
                id: 5,
                description: 'Your weekly team sync is scheduled for tomorrow. Prepare your updates in advance.',
            },
            {
                id: 6,
                description: 'We noticed a login from an unfamiliar location. Please verify it was you.',
            },
            {
                id: 7,
                description: 'Your subscription is set to expire soon. Renew now to continue uninterrupted access.',
            },
            {
                id: 8,
                description: 'We apologize for the delay. Your order will now arrive by January 10, 2025.',
            },
            {
                id: 9,
                description: 'Our servers will undergo maintenance from 1 AM to 3 AM tonight. Expect brief downtime.',
            },
        ];

        return (
            <View style={{ flex: 1, backgroundColor: whatMode.background, paddingTop: 25 }}>
                <FlatList
                    contentContainerStyle={{ backgroundColor: whatMode.background, gap: 5, padding: 5 }}
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
                            <AcornText children="Notifications" style={{ fontSize: 23, color: whatMode.text }} />
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
            </View>
        )
    };

const styles = StyleSheet.create({
    flexBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 7,
        paddingBottom: Platform.OS === 'ios' ? 25 : 15,
        paddingTop: Platform.OS === 'ios' ? 10 : 0
    }
})
export default Notifications;