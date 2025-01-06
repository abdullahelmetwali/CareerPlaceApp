import AcornText from "@/components/UI/AcornText";
import { Colors } from "@/constants/Colors";
import { ChevronRight, SearchIcon } from "lucide-react-native";
import { useState } from "react";
import { FlatList, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, useColorScheme, View } from "react-native";

const Search: React.FC = () => {
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    const [serach, setSearch] = useState<string>('');
    const trends: string[] = ['SWE', 'ReactNative', 'JavaScript', 'Game Dev', 'Marketing', 'UI/UX', 'TypeScript', 'Java 🍵'];
    const categories: string[] = ['Web Development', 'JavaScript', 'JAVA', 'Lightroom', 'Adobe XD', 'Adobe Photoshop', 'React Rendering']
    return (
        <SafeAreaView style={{ backgroundColor: whatMode.background, ...styles.container }}>
            <ScrollView style={{ paddingHorizontal: 10 }}>
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder="Search..."
                        placeholderTextColor={whatMode.text}
                        style={{
                            color: whatMode.text, paddingVertical: 10,
                            paddingHorizontal: 15, fontSize: 18
                        }}
                        onChangeText={(text) => setSearch(text)}
                    />
                    <Pressable style={styles.searchIcon}>
                        <SearchIcon color={whatMode.text} size={25} />
                    </Pressable>
                </View>
                <View style={{ marginVertical: 10, gap: 15 }}>
                    <View>
                        <AcornText children="Popular Search" style={{ color: '#D2FF1F', fontSize: 22 }} />
                        <FlatList
                            data={trends}
                            renderItem={({ item, index }) => (
                                <Pressable key={index} style={{ borderColor: whatMode.muted, ...styles.trendWords }}>
                                    <AcornText children={item} style={{
                                        color: whatMode.muted, fontSize: 19,
                                    }} />
                                </Pressable>
                            )}
                            keyExtractor={(_, index) => `${index}`}
                            horizontal
                            scrollEnabled={true}
                            snapToAlignment='start'
                            showsHorizontalScrollIndicator={false}
                            snapToInterval={200}
                            decelerationRate={'normal'}
                        />
                    </View>
                    <View>
                        <AcornText children="Categories" style={{ color: '#D2FF1F', fontSize: 22 }} />
                        <FlatList
                            data={categories}
                            keyExtractor={(_: string, index: number) => index.toString()}
                            renderItem={({ item, index }) => (
                                <View key={index} style={styles.categoryBox}>
                                    <Text>
                                        {item}
                                    </Text>
                                    <View>
                                        <ChevronRight color={'white'} size={24} />
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 15,
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
        paddingHorizontal: 20,
        borderWidth: 1,
        marginTop: 20,
        marginRight: 7
    },
    categoryBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
export default Search;