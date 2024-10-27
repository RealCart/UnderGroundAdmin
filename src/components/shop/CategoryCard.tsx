import {View, Text, StyleSheet, Image, useColorScheme, ViewStyle, TouchableOpacity} from 'react-native';
import {ThemedMiniButton} from "@/src/components/themedComponents/ThemedMiniButton";
import {scale} from "react-native-size-matters";
import React from "react";
import {LogoMini} from "@/src/components/icons/AuthorizationIcons";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";

export function CategoryCard({style, title, event} : {style?: ViewStyle, title: string, event: () => void}) {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity onPress={event} style={{width: '48%', marginHorizontal: '1%', marginVertical: scale(5)}}>
            <View style={[styles.container, {backgroundColor: colorScheme === 'dark' ? '#FFFFFF' : '#D9D9D9' }, style]}>
                <ThemedText type={'defaultRegular'} style={{color: 'black'}}>{title}</ThemedText>
            </View>
            <Image source={require('@/assets/images/woman.png')} style={styles.image} />
        </TouchableOpacity>
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
        borderRadius: 10,
        height: scale(90),
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    image: {
        position: "absolute",
        bottom: scale(0),
        right: scale(0),
    },
});