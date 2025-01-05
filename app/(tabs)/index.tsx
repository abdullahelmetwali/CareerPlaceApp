import Section from '@/components/HomeComponents/Section';
import AcornText from '@/components/UI/AcornText';
import { Colors } from '@/constants/Colors';
import { AppContext } from '@/hooks/AppContext';
import { useRouter } from 'expo-router';
import { Bell } from 'lucide-react-native';
import { useContext } from 'react';
import { FlatList } from 'react-native';
import { Image, Platform, Pressable, ScrollView } from 'react-native';
import { StyleSheet, View, useColorScheme, SafeAreaView } from 'react-native';

export default function HomeScreen() {
    const router = useRouter();
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    const profileImg = require('@/assets/images/profile-img.jpg');
    const { globalUsr } = useContext(AppContext);
    const trends = ['SWE', 'ReactNative', 'Coding', 'Game Dev', 'Marketing', 'UI/UX', 'JS', 'Java 🍵']
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: whatMode.background }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                    <Image source={profileImg} style={styles.profileImg} />
                    <AcornText children={`Hello ${globalUsr}`} style={{ color: whatMode.text, fontSize: 22 }} />
                </View>
                <Pressable onPress={() => router.push('/profile-features/notifications')}>
                    <Bell color={whatMode.text} size={26} />
                </Pressable>
            </View>
            <ScrollView>
                <FlatList
                    style={{ paddingVertical: 10 }}
                    data={trends}
                    renderItem={({ item, index }) => (
                        <AcornText key={index} children={item} style={{ color: whatMode.text, borderColor: whatMode.muted, ...styles.trendWords }} />
                    )}
                    horizontal
                    scrollEnabled={true}
                    snapToAlignment='start'
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={200}
                    decelerationRate={'normal'}
                />
            </ScrollView>
            <Section title='Courses' data={[]} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        padding: Platform.OS === 'ios' ? 20 : 15
    },
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    trendsBox: {
        flexDirection: 'row',
        overflowX: 'auto',
        gap: 8,
        marginTop: 20
    },
    trendWords: {
        backgroundColor: 'transparent',
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 20,
        fontSize: 19,
        borderWidth: 1,
        marginTop: 20,
        marginRight: 7
    }
});
