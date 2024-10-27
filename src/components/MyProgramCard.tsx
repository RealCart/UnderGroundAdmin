import {View, Text, StyleSheet, Image, useColorScheme, ViewStyle} from 'react-native';
import {ThemedMiniButton} from "@/src/components/themedComponents/ThemedMiniButton";
import {scale} from "react-native-size-matters";
import React from "react";
import {LogoMini} from "@/src/components/icons/AuthorizationIcons";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";
import {LinearGradient} from "expo-linear-gradient";
import {LevelIcon} from "@/src/components/icons/ClientIcons";

export function MyProgramCard({style, level, done, total, title,} : {style?: ViewStyle, done: number, total: number, level: string, title: string}) {
    const colorScheme = useColorScheme();
    const backgroundColor = colorScheme === 'dark' ? '#1F1F1F' : '#F0F0F0';
    return (
        <View style={[styles.container, style]}>
                <View style={[{ backgroundColor }, styles.card]}>
                    <View style={{backgroundColor: 'white', borderRadius: 10, width: scale(45), height: scale(45), alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center'}}>
                        <LogoMini />
                    </View>
                    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                        <ThemedText style={[{fontSize: 18, fontWeight: '500'}, styles.text]}>{title}</ThemedText>
                        <View style={[styles.row, {gap: scale(10)}]}>
                            <View style={styles.row}>
                                <LevelIcon stroke1={'#F4C443'} stroke2={'#F4C443'} stroke3={'#C4C4C4'} />
                                <ThemedText style={[{fontSize: 14, lineHeight: 20, fontWeight: '400'}, styles.text]}>Средняя</ThemedText>
                            </View>
                            <ThemedText style={[{fontSize: 14, lineHeight: 20, fontWeight: '400', marginLeft: 'auto'}, styles.text]}>Выполнено: {done} из {total}</ThemedText>
                        </View>
                    </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: scale(5),
    },
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