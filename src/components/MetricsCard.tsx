import {View, Text, StyleSheet, Image, useColorScheme, ViewStyle} from 'react-native';
import {ThemedMiniButton} from "@/src/components/themedComponents/ThemedMiniButton";
import {scale} from "react-native-size-matters";
import React from "react";
import {LogoMini} from "@/src/components/icons/AuthorizationIcons";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";

export function MetricsCard({style, icon, text} : {style?: ViewStyle, icon: React.ReactNode, text: string}) {
    const colorScheme = useColorScheme();
    return (
        <View style={[styles.container, {backgroundColor: colorScheme === 'dark' ? '#1F1F1F' : '#E9E9E9' }, style]}>
            {icon}
            <ThemedText style={{fontSize: 16, fontWeight: '500', marginBottom: scale(10)}}>{text}</ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: "white",
        fontFamily: 'Inter'
    },
    container: {
        padding: scale(5),
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: scale(80),
    },
});