import AcornText from "@/components/UI/AcornText";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Heart, Search } from "lucide-react-native";
import { Text, SafeAreaView, useColorScheme, ScrollView, View, StyleSheet, Pressable, FlatList } from "react-native";
import * as db from '@/db/db.json';
import { Job } from "@/interfaces/Types";
import JobBox from "@/components/careers/JobBox";

const Careers = () => {
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    const route = useRouter();
    const jobs: Job[] = db.jobs;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: whatMode.background, paddingBottom: 58 }}>
            <View style={styles.headerBox}>
                <Pressable onPress={() => route.push('/profile-features/favourites')}>
                    <Heart color={whatMode.text} fill={whatMode.background} size={23} />
                </Pressable>
                <AcornText children="Career" style={{ color: whatMode.text, fontSize: 24 }} />
                <Pressable onPress={() => route.push('/(tabs)/search')}>
                    <Search color={whatMode.text} size={23} />
                </Pressable>
            </View>
            <FlatList
                data={jobs}
                keyExtractor={(_, index) => `${index}`}
                renderItem={({ item, index }) => (
                    <JobBox job={item} key={index} />
                )}
                style={{ padding: 15, marginBottom: 0 }}
                ListHeaderComponent={<AcornText children="Jobs" style={{ color: whatMode.text, fontSize: 26, marginBottom: 1 }} />}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    }
});
export default Careers;