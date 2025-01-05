import React from "react";
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

export interface Notification {
    id: number,
    description: string
}

export interface Header {
    chevColor: string,
    head: string,
    rightComponent: React.ReactNode,
    style: StyleProp<TextStyle>
}

export type AppContextType = {
    globalUsr: string,
    setGlobalUsr: React.Dispatch<React.SetStateAction<string>>
}

export interface Content {
    title: string,
    salary: number,
    rate: number,
    hours: number,
    customers: number,
    favourite: boolean
}
