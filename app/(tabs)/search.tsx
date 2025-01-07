import AcornText from "@/components/UI/AcornText";
import { Colors } from "@/constants/Colors";
import { ChevronRight, SearchIcon } from "lucide-react-native";
import { useState } from "react";
import {
    View, Platform,
    Pressable, SafeAreaView,
    ScrollView, StyleSheet,
    Text, TextInput,
    useColorScheme,
} from "react-native";

const Search: React.FC = () => {
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    const [serach, setSearch] = useState<string>('');
    const trends: string[] = ['SWE', 'ReactNative', 'JavaScript', 'Game Dev', 'Marketing', 'UI/UX', 'TypeScript', 'Java 🍵'];
    const categories: string[] = ['Web Development', 'JavaScript', 'JAVA', 'Lightroom', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator']
    return (
        <SafeAreaView style={{ backgroundColor: whatMode.background, ...styles.container }}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Search..."
                    placeholderTextColor={whatMode.text}
                    style={{
                        color: whatMode.text, paddingVertical: 10,
                        paddingHorizontal: 16, fontSize: 18,
                    }}
                    onChangeText={(text) => setSearch(text)}
                />
                <Pressable style={styles.searchIcon}>
                    <SearchIcon color={whatMode.text} size={25} />
                </Pressable>
            </View>
            <ScrollView>
                <AcornText children="Popular Search" style={{ ...styles.mainTitle, marginTop: 10 }} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
                    {trends.map((item: string, index: number) => (
                        <Pressable key={index} style={{ borderColor: whatMode.muted, ...styles.trendWords }}>
                            <AcornText children={item} style={{
                                color: whatMode.muted, fontSize: 19,
                            }} />
                        </Pressable>
                    ))}
                </View>
                <AcornText children="Categories" style={styles.mainTitle} />
                <View>
                    {categories.map((item: string, index: number) => (
                        <View key={index} style={styles.categoryBox}>
                            <Text style={{ fontSize: 18, color: whatMode.text }}>
                                {item}
                            </Text>
                            <View style={styles.chevBox}>
                                <ChevronRight color={'white'} size={22} />
                            </View>
                        </View>
                    ))}
                </View>
                <Pressable style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-end' }}>
                    <Text style={styles.seeAll}>
                        See all
                    </Text>
                    <ChevronRight size={21} color={`#D2FF1F`} />
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 15,
        paddingBottom: 72,
        paddingHorizontal: 10
    },
    searchContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 36,
        borderColor: '#6C6C6C',
        borderWidth: 1,
    },
    searchIcon: {
        position: 'absolute',
        right: 15
    },
    trendWords: {
        borderRadius: 25,
        paddingVertical: 5,
        height: 38,
        paddingHorizontal: 15,
        borderWidth: 1,
        marginTop: 15,
        marginRight: 7,
    },
    categoryBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chevBox: {
        backgroundColor: '#333333',
        borderRadius: 100,
        width: 26,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4
    },
    seeAll: {
        color: '#D2FF1F',
        fontSize: 20,
        textDecorationLine: 'underline',
        alignItems: 'center',
    },
    mainTitle: {
        color: '#D2FF1F',
        fontSize: 22
    }
});
export default Search;