import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Content } from "@/interfaces/Types";
import React from "react";
import AcornText from "../UI/AcornText";
import { Heart, Star } from "lucide-react-native";

const randomSoftColors = () => {
    const randomChannel = () => Math.floor(200 + Math.random() * 180); // FOR SOFT , LIGHT COLORS
    const r = randomChannel();
    const g = randomChannel();
    const b = randomChannel();
    return `rgb(${r}, ${g}, ${b})`;
};
const imgs = [
    require('@/assets/images/25.png'),
    require('@/assets/images/30.png'),
    require('@/assets/images/31.png'),
    require('@/assets/images/33.png'),
    require('@/assets/images/34.png'),
    require('@/assets/images/39.png')
];

const Section: React.FC<{ data: Content[] }> = ({ data }) => {
    const contentBox = (item: Content) => {
        const randomBackgroundColor = randomSoftColors();
        const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
        return (
            <View style={{ backgroundColor: randomBackgroundColor, ...styles.mainBox }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <AcornText children={item.title} style={styles.title} />
                    <Pressable style={styles.favBox}>
                        <Heart size={24} fill={item.favourite ? '#C63F47' : 'white'} />
                    </Pressable>
                </View>
                <Image source={randomImg} style={styles.img} />
                <AcornText children={`${item.salary}$`} style={styles.salary} />
                <View style={styles.detailsContainer}>
                    <View style={{ ...styles.detailsBox, flexDirection: 'row', alignItems: 'center' }}>
                        <Star color={randomBackgroundColor} size={20} fill={'#1a1a1a'} />
                        <Text style={{ color: randomBackgroundColor, fontSize: 14 }} >
                            {item.rate}
                        </Text>
                    </View>
                    <View style={styles.detailsBox}>
                        <Text style={{ color: randomBackgroundColor, fontSize: 14 }}>
                            {item.hours} Hours
                        </Text>
                    </View>
                    <View style={styles.detailsBox}>
                        <Text style={{ color: randomBackgroundColor, fontSize: 14 }}>
                            {item.customers}K People
                        </Text>
                    </View>
                </View>
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
        width: 280,
        height: 200
    },
    title: {
        color: 'black',
        width: 180,
        fontSize: 22,
        zIndex: 1
    },
    salary: {
        position: 'absolute',
        left: 12,
        bottom: 80,
        fontSize: 22
    },
    detailsBox: {
        backgroundColor: '#1A1A1A',
        gap: 6,
        paddingVertical: 3,
        paddingHorizontal: 12,
        borderRadius: 16
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        position: 'absolute',
        bottom: 12,
        left: 10
    },
    favBox: {
        backgroundColor: '#1A1A1A',
        borderRadius: 100,
        width: 38,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    img: {
        position: 'absolute',
        right: 22,
        bottom: 20,
        width: 150,
        height: 150,
        zIndex: 0,
    }
});
export default Section;