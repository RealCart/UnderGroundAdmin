import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from "react";
import {scale} from "react-native-size-matters";
import {LinearGradient} from "expo-linear-gradient";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";

export function AchievementMiniCard() {
    const colorScheme = useColorScheme();
    return (
        <View style={{}}>
            <Image
                source={require('@/assets/images/partial-react-logo.png')}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: scale(100),
        height: scale(100),
        borderRadius: scale(50),
        resizeMode: 'cover',
    },
});