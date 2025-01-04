import Button from "@/components/UI/Button";
import { Colors } from "@/constants/Colors";
import { auth } from "@/firebase/config";
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "expo-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, useColorScheme, View } from "react-native";

const Register = () => {
    const navigation = useNavigation();
    const mode = useColorScheme();
    const whatMode = Colors[mode || 'dark'];
    const [usrDT, setUsrDT] = useState<{ email: string, password: string, username: string, fullname: string }>({
        email: '',
        password: '',
        username: '',
        fullname: ''
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [err, setErr] = useState<string | null>(null);

    const createAcc = async () => {
        if (usrDT.email === '' || usrDT.password === '' || usrDT.username === '' || usrDT.fullname === '') {
            setErr('Please fill all the fields');
            return;
        } else {
            try {
                setIsLoading(true);
                const response = await createUserWithEmailAndPassword(auth, usrDT.email, usrDT.password);
                if (response.user) {
                    await updateProfile(response.user, {
                        displayName: usrDT.fullname
                    });
                    await SecureStore.setItemAsync('usr', JSON.stringify(response.user));
                    navigation.navigate('Profile' as never);
                }
            } catch (error) {
                console.log(error)
                setErr(error ? 'An error occurred' : 'Please check your email or password');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={[{ backgroundColor: whatMode.background }, styles.main]}>
                <Text style={[styles.introTxt, { color: whatMode.text }]}>Hello 🫡</Text>
                {err ? <Text style={styles.errTxt}>{err}</Text> : null}
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.inputsBox}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0}>
                    <View>
                        <Text style={[styles.label, { color: whatMode.text }]}>
                            Fullname
                        </Text>
                        <TextInput
                            value={usrDT.fullname}
                            onChangeText={(text) => setUsrDT({ ...usrDT, fullname: text })}
                            placeholder="Career Place"
                            placeholderTextColor={'#A3A3A3'}
                            style={styles.input}
                            autoComplete="name"
                        />
                    </View>
                    <View>
                        <Text style={[styles.label, { color: whatMode.text }]}>
                            Username
                        </Text>
                        <TextInput
                            value={usrDT.username}
                            onChangeText={(text) => setUsrDT({ ...usrDT, username: text })}
                            placeholder="TheCareerPlace"
                            placeholderTextColor={'#A3A3A3'}
                            style={styles.input}
                            autoComplete="username"
                        />
                    </View>
                    <View>
                        <Text style={[styles.label, { color: whatMode.text }]}>
                            Email Address
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
                            placeholderTextColor={'#A3A3A3'}
                            style={styles.input}
                            secureTextEntry={true}

                        />
                    </View>
                    <Button OnPress={createAcc} pressStyle={styles.submitBtn} btnStyle={{ color: 'black' }} >
                        {isLoading ? <ActivityIndicator size={30} color={`#fff`} /> : 'Create Account'}
                    </Button>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    introTxt: {
        margin: 30,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'acorn-semib',
        textAlign: 'center'
    },
    txt: {
        fontFamily: 'acorn-semib',
        fontWeight: 'bold',
    },
    inputsBox: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    errTxt: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'acorn-semib',
        textAlign: 'center'
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
        marginBottom: 5
    },
    submitBtn: {
        backgroundColor: '#D2FF1F',
        width: 360,
        fontFamily: 'acorn-semib',
        fontWeight: 'bold',
        borderColor: 'transparent'
    }
})

export default Register;