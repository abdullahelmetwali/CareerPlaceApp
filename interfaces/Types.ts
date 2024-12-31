import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface BtnProps {
    text: string,
    OnPress: () => void,
    pressStyle: StyleProp<ViewStyle>,
    btnStyle: StyleProp<TextStyle>
}