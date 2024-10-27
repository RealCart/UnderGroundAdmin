import {
    KeyboardAvoidingView,
    Modal,
    Platform, ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    type ViewProps
} from 'react-native';
import { styles } from '../../styles/styles'
import { useThemeColor } from '@/src/hooks/useThemeColor';
import {type PropsWithChildren, useState} from "react";
import {ThemedView} from "@/src/components/themedComponents/ThemedView";

export type ThemedModalProps = PropsWithChildren<{
    lightColor?: string;
    darkColor?: string;
    isModalVisible?: boolean;
}>;

export function ThemedModal({ lightColor, darkColor, isModalVisible, children, ...otherProps }: ThemedModalProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return(
        <ThemedView style={isModalVisible ? styles.darken : styles.hidden}>
            <Modal
                style={{maxHeight: "80%"}}
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                }}>
                <TouchableWithoutFeedback
                    // onPress={() => dispatch(switchModal(!isModalVisible))}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        keyboardVerticalOffset={-190}
                        style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <ScrollView>
                            {children}
                        </ScrollView>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </Modal>
        </ThemedView>
    );
}
