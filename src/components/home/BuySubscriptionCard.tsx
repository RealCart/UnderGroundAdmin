import {View, Text, StyleSheet, Image, useColorScheme, ViewStyle} from 'react-native';
import {ThemedMiniButton} from "@/src/components/themedComponents/ThemedMiniButton";
import {scale} from "react-native-size-matters";
import React from "react";
import {LogoMini} from "@/src/components/icons/AuthorizationIcons";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";

export function BuySubscriptionCard({style} : {style?: ViewStyle}) {
    const colorScheme = useColorScheme();
    return (
        <View style={[styles.container, {backgroundColor: colorScheme === 'dark' ? '#1F1F1F' : '#E9E9E9' }, style]}>
            <ThemedText style={{fontSize: 20, fontWeight: '500', marginBottom: scale(10)}}>Купить абонемент</ThemedText>
            <ThemedText style={{fontSize: 15, lineHeight: 20, fontWeight: '400', marginBottom: scale(8)}}>Специальное предложение для вас {'\n'}
                до конца месяца</ThemedText>
            <ThemedMiniButton event={() => console.log('Buy')} >
                <Text style={styles.buttonText}>Купить</Text>
            </ThemedMiniButton>
            <LogoMini style={styles.image} />
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
        padding: scale(10),
        margin: scale(10),
        borderRadius: 10,
    },
    image: {
        position: "absolute",
        top: scale(10),
        right: scale(10),
    },
});