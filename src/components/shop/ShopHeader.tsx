import {Image, StyleSheet, TouchableOpacity, useColorScheme, View} from 'react-native';
import {scale} from "react-native-size-matters";
import React from "react";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";
import {ChevronLeft, ChevronLeftMini} from "@/src/components/icons/AuthorizationIcons";
import {router} from "expo-router";
import {Bell, BellIcon, QRIcon} from "@/src/components/icons/ClientIcons";

export function ShopHeader({title} : {title: string}) {
    const colorScheme = useColorScheme();
    return (
        <View style={stylesPage.container}>
            <View style={{position: 'absolute', left: 0, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => router.back()} style={{paddingRight: scale(15), }}>
                    <ChevronLeftMini stroke={colorScheme === "light" ? "black" : "white"} />
                </TouchableOpacity>
            </View>
            <ThemedText type='sectionHeader'>{title}</ThemedText>
            <View style={{position: 'absolute', right: 0, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => router.back()} style={{padding: scale(5), }}>
                    <QRIcon stroke={colorScheme === "light" ? "black" : "white"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.back()} style={{padding: scale(0), }}>
                    <BellIcon stroke={colorScheme === "light" ? "black" : "white"} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const stylesPage = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: scale(5),
        marginHorizontal: scale(10),
        marginBottom: scale(10),
    },
});