import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface BtnProps {
    OnPress: () => void,
    pressStyle: StyleProp<ViewStyle>,
    btnStyle: StyleProp<TextStyle>,
    children: React.ReactNode
}

export interface AcornTextProps {
    style: StyleProp<TextStyle>,
    children: React.ReactNode | string
}