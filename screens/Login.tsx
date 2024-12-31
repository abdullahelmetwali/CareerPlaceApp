import Button from "@/components/UI/Button";
import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, useColorScheme, View } from "react-native";

const Login: React.FC = () => {
    const mode = useColorScheme();
    const whatMode = Colors[mode ? mode : 'dark'];
    const [usrDT, setUsrDT] = useState<{ email: string, password: string }>({
        email: '',
        password: ''
    });
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={[styles.main, { backgroundColor: whatMode.background }]}>
                <View>
                    <Text style={[styles.introTxt, { color: whatMode.text }]}>
                        Welcome 👋
                    </Text>
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
                    <Button text="Submit" OnPress={() => console.log(usrDT.email, usrDT.password)} pressStyle={styles.submitBtn} btnStyle={[]} />
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
    }
})
export default Login;