import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import Intro from '@/components/SplashScreen';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            Home Screen
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D2FF1F'
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
