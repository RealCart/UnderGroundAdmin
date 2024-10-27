import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from "react";
import {scale} from "react-native-size-matters";
import {LinearGradient} from "expo-linear-gradient";

export function Story({ title }: { title: string }) {
    const colorScheme = useColorScheme();
    return (
        <View style={{borderRadius: 10, borderWidth: 0.5, borderColor: colorScheme === 'light' ? '#0A0707' : '#D9D9D9'}}>
            <Image
                source={require('@/assets/images/partial-react-logo.png')}
                style={styles.image}
            />
            <View style={{position: 'absolute', bottom: 0, width: '100%' }}>
                <LinearGradient
                    colors={['rgba(6, 6, 6, 0)', 'rgba(24, 24, 24, 1)']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 0.9 }}
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
        width: scale(77),
        height: scale(82),
        borderRadius: 10
    },
    gradient: {
        ...StyleSheet.absoluteFillObject, // Cover the entire container
        borderRadius: 10,
    },
    title: {
        color: "white",
        fontSize: 12,
        padding: scale(5),
        fontWeight: "300",
        fontFamily: 'Inter',
    }
});