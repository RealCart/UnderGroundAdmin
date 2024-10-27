import {View, Text, StyleSheet, Image, useColorScheme, ViewStyle} from 'react-native';
import {ThemedMiniButton} from "@/src/components/themedComponents/ThemedMiniButton";
import {scale} from "react-native-size-matters";
import React from "react";
import {LogoMini} from "@/src/components/icons/AuthorizationIcons";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";
import {LinearGradient} from "expo-linear-gradient";

export function Subscription({style, days} : {style?: ViewStyle, days: number}) {
    const colorScheme = useColorScheme();
    const backgroundColor = colorScheme === 'dark' ? '#F4C443' : 'transparent';
    return (
        <View style={[styles.container, style]}>
            {colorScheme === "dark" ?
                <View style={[{ backgroundColor }, styles.card]}>
                    <View style={{backgroundColor: 'white', borderRadius: 10, width: scale(45), height: scale(45), alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center'}}>
                        <LogoMini />
                    </View>
                    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                        <ThemedText style={[{fontSize: 20, fontWeight: '500'}, styles.text]}>Годовой абонемент</ThemedText>
                        <ThemedText style={[{fontSize: 16, lineHeight: 20, fontWeight: '400'}, styles.text]}>Осталось {days} дней</ThemedText>
                    </View>
                </View>
                :
                <LinearGradient
                    colors={['#F4C443', '#FF9735']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.card}
                >
                    <View style={{backgroundColor: 'white', borderRadius: 10, width: scale(45), height: scale(45), alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center'}}>
                        <LogoMini />
                    </View>
                    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                        <ThemedText style={[{fontSize: 20, fontWeight: '500'}, styles.text]}>Годовой абонемент</ThemedText>
                        <ThemedText style={[{fontSize: 16, lineHeight: 20, fontWeight: '400'}, styles.text]}>Осталось {days} дней</ThemedText>
                    </View>
                </LinearGradient>
            }
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
        borderRadius: 10,
        marginVertical: scale(10),
    },
    text: {
        lineHeight: 24,
        color: 'white',
    },
    card: {
        padding: scale(12),
        borderRadius: 10,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: scale(10),
    }
});