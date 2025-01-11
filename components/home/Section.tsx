import { FlatList, Image, Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { Content } from "@/interfaces/Types";
import React from "react";
import AcornText from "../UI/AcornText";
import { Heart, Star } from "lucide-react-native";
import { useRandomColor } from "@/hooks/useRandomColor";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

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
        const randomSoftColor = useRandomColor(180);
        const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
        return (
            <View style={{ backgroundColor: randomSoftColor, ...styles.mainBox }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <AcornText children={item.title} style={styles.title} />
                    <Pressable style={styles.favBox}>
                        <Heart size={24} fill={item.favourite ? '#C63F47' : 'white'} color={`transparent`} />
                    </Pressable>
                </View>
                <Image source={randomImg} style={styles.img} />
                <AcornText children={`${item.salary}$`} style={styles.salary} />
                <ScrollView horizontal contentContainerStyle={styles.detailsContainer}>
                    <View style={{ ...styles.detailsBox, flexDirection: 'row', alignItems: 'center' }}>
                        <Star color={randomSoftColor} size={20} fill={'#1a1a1a'} />
                        <Text style={{ color: randomSoftColor, fontSize: 14 }} >
                            {item.rate}
                        </Text>
                    </View>
                    <View style={styles.detailsBox}>
                        <Text style={{ color: randomSoftColor, fontSize: 14 }}>
                            {item.hours} Hours
                        </Text>
                    </View>
                    <View style={styles.detailsBox}>
                        <Text style={{ color: randomSoftColor, fontSize: 14 }}>
                            {item.customers}K People
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    };

    return (
        <FlatList
            style={{ paddingVertical: 10 }}
            data={data}
            horizontal
            renderItem={({ item }) => contentBox(item)}
            keyExtractor={(_, index) => `${index}`}
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
        alignItems: 'flex-start',
        gap: 3,
        position: 'absolute',
        bottom: 12,
        left: 0
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