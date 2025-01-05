import { Content } from "@/interfaces/Types";
import React from "react";
import AcornText from "../UI/AcornText";
import { FlatList, Image, Pressable, StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { Heart } from "lucide-react-native";

const randomSoftColors = () => {
    const randomChannel = () => Math.floor(200 + Math.random() * 72); // FOR SOFT , LIGHT COLORS
    const r = randomChannel();
    const g = randomChannel();
    const b = randomChannel();
    return `rgb(${r}, ${g}, ${b})`;
}
const Section =
    ({ data }: { data: Content[] }) => {
        const mode = useColorScheme();
        const whatMode = Colors[mode || 'dark'];
        const contentBox = (item: Content) => {
            const randomBackgroundColor = randomSoftColors();
            const img = require('@/assets/images/profile-img.jpg')
            return (
                <View style={{ backgroundColor: randomBackgroundColor, ...styles.mainBox }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <AcornText
                            children={item.title}
                            style={{ color: 'black', width: 105, fontSize: 22 }}
                        />
                        <Pressable style={styles.favBox}>
                            <Heart size={24} fill={item.favourite ? '#C63F47' : 'white'} />
                        </Pressable>
                    </View>
                    <Image source={img} style={{ width: 15, height: 15 }} />
                </View>
            );
        };

        return (
            <FlatList
                style={{ paddingVertical: 10 }}
                data={data}
                horizontal
                renderItem={({ item }) => contentBox(item)}
                keyExtractor={(item, index) => `${index}`}
                snapToAlignment="start"
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                snapToInterval={200}
                decelerationRate={'normal'}
            />
        )
    };

const styles = StyleSheet.create({
    mainBox: {
        position: 'relative',
        marginRight: 10,
        borderRadius: 15,
        padding: 12,
        width: 225
    },
    favBox: {
        backgroundColor: '#1A1A1A',
        borderRadius: 100,
        width: 38,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Section;