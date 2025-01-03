import Button from "@/components/UI/Button";
import { Colors } from "@/constants/Colors";
import { auth } from "@/firebase/config";
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { ActivityIndicator, Alert, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, useColorScheme, View } from "react-native";

const Login: React.FC = () => {
    const navigation = useNavigation();
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    const [usrDT, setUsrDT] = useState<{ email: string, password: string }>({
        email: '',
        password: ''
    });
    const [err, setErr] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const submitFunc = async () => {
        if (usrDT.email === '' || usrDT.password === '') {
            Alert.alert('Error', 'Please fill all the fields', [{ text: 'OK' }], { cancelable: true });
            return;
        } else {
            try {
                setIsLoading(true);
                const response = await signInWithEmailAndPassword(auth, usrDT.email, usrDT.password);
                if (response.user) {
                    await SecureStore.setItemAsync('usr', JSON.stringify(response.user));
                    navigation.navigate('Profile' as never);
                }
            } catch (error) {
                setErr(error ? 'Please , check your email or password' : 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={[styles.main, { backgroundColor: whatMode.background }]}>
                <View>
                    <Text style={[styles.introTxt, { color: whatMode.text }]}>
                        Welcome 👋
                    </Text>
                    {err ? <Text style={styles.errTxt}>{err}</Text> : null}
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.inputsBox}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0}
                >
                    <View>
                        <Text style={[styles.label, { color: whatMode.text }]}>
                            Email
                        </Text>
                        <TextInput
                            value={usrDT.email}
                            onChangeText={(text) => setUsrDT({ ...usrDT, email: text })}
                            placeholder="careerplace@example.com"
                            placeholderTextColor={'#A3A3A3'}
                            style={styles.input}
                            autoComplete="email"
                        />
                    </View>
                    <View>
                        <Text style={[styles.label, { color: whatMode.text }]}>
                            Password
                        </Text>
                        <TextInput
                            value={usrDT.password}
                            onChangeText={(text) => setUsrDT({ ...usrDT, password: text })}
                            placeholder="●●●●●●●●"
                            style={styles.input}
                            placeholderTextColor={'#A3A3A3'}
                            secureTextEntry={true}
                        />
                    </View>
                    <Button OnPress={submitFunc} pressStyle={styles.submitBtn} btnStyle={{ color: 'black' }} >
                        {isLoading ? <ActivityIndicator size={30} color={`#fff`} /> : 'Submit'}
                    </Button>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    introTxt: {
        margin: 10,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'acorn-semib',
        textAlign: 'center'
    },
    errTxt: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'acorn-semib',
        textAlign: 'center'
    },
    inputsBox: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 32,
        paddingHorizontal: 14,
        width: 360,
        height: 50,
        fontSize: Platform.OS === 'ios' ? 13 : 16,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'acorn-semib',
        marginLeft: 10,
        marginBottom: 7
    },
    submitBtn: {
        backgroundColor: '#D2FF1F',
        width: 360,
        fontFamily: 'acorn-semib',
        fontWeight: 'bold',
        borderColor: 'transparent'
    },
})
export default Login;