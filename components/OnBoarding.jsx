import { Text, StyleSheet, SafeAreaView, Pressable, Image } from "react-native";

const OnBoarding = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/images/career-place.png')}
                style={styles.img}
            />
            <Pressable
                style={styles.btn}
            >
                <Text style={styles.txt}>
                    Next
                </Text>
            </Pressable>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 24,
        paddingVertical: 7,
        paddingHorizontal: 40,
    },
    txt: {
        fontSize: 20,
        letterSpacing: 2,
        fontFamily: 'acorn-semib',
    },
    img: {
        margin: 20,
    }
});
export default OnBoarding;