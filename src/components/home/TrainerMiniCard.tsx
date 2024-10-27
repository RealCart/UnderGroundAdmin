import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from "react";
import {scale} from "react-native-size-matters";
import {LinearGradient} from "expo-linear-gradient";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";

export function TrainerMiniCard({ name, surname }: { name: string, surname: string }) {
    const colorScheme = useColorScheme();
    return (
        <View style={{}}>
            <Image
                source={require('@/assets/images/partial-react-logo.png')}
                style={styles.image}
            />
            <View style={{}}>
                <ThemedText type='smallText' style={{textAlign: 'center'}}>{surname}</ThemedText>
                <ThemedText type='smallText' style={{textAlign: 'center'}}>{name}</ThemedText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    image: {
        width: scale(70),
        height: scale(70),
        borderRadius: scale(35),
    },
});