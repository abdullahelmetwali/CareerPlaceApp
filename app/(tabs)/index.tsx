import Section from '@/components/forHome/Section';
import AcornText from '@/components/UI/AcornText';
import { Colors } from '@/constants/Colors';
import { AppContext } from '@/hooks/AppContext';
import { Content } from '@/interfaces/Types';
import { useRouter } from 'expo-router';
import { Bell } from 'lucide-react-native';
import { useContext } from 'react';
import { Image, Platform, Pressable, ScrollView, FlatList, StyleSheet, View, useColorScheme, SafeAreaView } from 'react-native';

export default function HomeScreen() {
    const router = useRouter();
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    const db = require('@/json/db.json');
    const courses: Content[] = db.courses;
    const lectures: Content[] = db.lectures;
    const onTop: Content[] = db.onTop;
    const profileImg = require('@/assets/images/profile-img.jpg');
    const { globalUsr } = useContext(AppContext);
    const trends = ['SWE', 'ReactNative', 'JavaScript', 'Game Dev', 'Marketing', 'UI/UX', 'TypeScript', 'Java 🍵'];
    return (
        <SafeAreaView style={{ backgroundColor: whatMode.background, ...styles.container }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 9 }}>
                <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                    <Image source={profileImg} style={styles.profileImg} />
                    <AcornText children={`Hello ${globalUsr}`} style={{ color: whatMode.text, fontSize: 22 }} />
                </View>
                <Pressable onPress={() => router.push('/profile-features/notifications')}>
                    <Bell color={whatMode.text} size={26} />
                </Pressable>
            </View>
            <ScrollView style={{ width: '100%', padding: 9 }}>
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
                {/* COURSES */}
                <View style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 35, marginBottom: 10 }}>
                        <AcornText children={'Courses'} style={{ color: whatMode.text, fontSize: 24 }} />
                        <View style={styles.line}></View>
                    </View>
                    <Section data={courses} />
                </View>
                {/* LECTURES */}
                <View style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 35, marginBottom: 10 }}>
                        <AcornText children={'Lectures'} style={{ color: whatMode.text, fontSize: 24 }} />
                        <View style={styles.line}></View>
                    </View>
                    <Section data={lectures} />
                </View>
                {/* ON TOP */}
                <View style={{ paddingVertical: 15 }}>
                    <View style={styles.titleBox}>
                        <AcornText children={'On Top'} style={{ color: whatMode.text, fontSize: 24 }} />
                        <View style={styles.line}></View>
                    </View>
                    <Section data={onTop} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        paddingTop: Platform.OS === 'ios' ? 20 : 15,
        paddingBottom: 70
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
    },
    titleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    line: {
        backgroundColor: '#a1a1aa',
        height: 1,
        width: 233,
        borderRadius: 10,
    }
});
