import {Image, Platform, StyleSheet, TouchableOpacity, useColorScheme, View} from 'react-native';
import {scale} from "react-native-size-matters";
import React from "react";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";
import {ChevronLeft, ChevronLeftMini} from "@/src/components/icons/AuthorizationIcons";
import {router} from "expo-router";

export function PageHeader({title} : {title?: string}) {
    const colorScheme = useColorScheme();
    return (
        <View style={stylesPage.container}>
            <View style={{position: 'absolute', left: 0, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => router.back()} style={{paddingRight: scale(15), }}>
                    <ChevronLeftMini stroke={colorScheme === "light" ? "black" : "white"} />
                </TouchableOpacity>
            </View>
            <ThemedText type='sectionHeader'>{title}</ThemedText>
        </View>
    );
}

const stylesPage = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Platform.OS === "android" ? scale(10) : scale(5),
        marginHorizontal: scale(10),
        marginBottom: scale(10),
    },
});