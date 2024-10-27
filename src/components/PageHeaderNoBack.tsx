import {Image, StyleSheet, TouchableOpacity, useColorScheme, View} from 'react-native';
import {scale} from "react-native-size-matters";
import React from "react";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";

export function PageHeaderNoBack({title} : {title: string}) {
    const colorScheme = useColorScheme();
    return (
        <View style={stylesPage.container}>
            <ThemedText type='sectionHeader'>{title}</ThemedText>
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