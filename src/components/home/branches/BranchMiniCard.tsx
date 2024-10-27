import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from "react";
import {scale} from "react-native-size-matters";
import {LinearGradient} from "expo-linear-gradient";

export function BranchMiniCard({ title }: { title: string }) {
    const colorScheme = useColorScheme();
    return (
        <View style={{position: 'relative'}}>
            <Image
                source={require('@/assets/images/partial-react-logo.png')}
                style={styles.image}
            />
            <View style={{position: 'absolute', bottom: 0, width: "100%", borderRadius: 10 }}>
                <LinearGradient
                    colors={['rgba(6, 6, 6, 0)', 'rgba(24, 24, 24, 1)']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 1, y: 0.9 }}
                    style={styles.gradient}
                />
                    <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    image: {
        width: scale(120),
        height: scale(85),
        borderRadius: 10
    },
    gradient: {
        ...StyleSheet.absoluteFillObject, // Cover the entire container
    },
    title: {
        color: "white",
        fontSize: 14,
        padding: scale(5),
        fontWeight: "300",
        fontFamily: 'Inter',
    }
});