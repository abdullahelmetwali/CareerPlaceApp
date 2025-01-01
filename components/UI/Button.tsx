import { BtnProps } from "@/interfaces/Types";
import { Pressable, StyleSheet, Text, } from "react-native";

const Button: React.FC<BtnProps> =
    ({ OnPress, pressStyle, btnStyle, children }) => {
        return (
            <Pressable style={[styles.btn, pressStyle]} onPress={OnPress}>
                <Text style={[styles.btnTxt, btnStyle]}>
                    {children}
                </Text>
            </Pressable>
        )
    };

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 24,
        paddingVertical: 7,
        width: 200,
    },
    btnTxt: {
        fontSize: 20,
        letterSpacing: -0.1,
        fontFamily: 'acorn-semib',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default Button;