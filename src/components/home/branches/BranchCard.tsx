import {Image, StyleSheet, TouchableOpacity, useColorScheme, View} from 'react-native';
import {scale} from "react-native-size-matters";
import React from "react";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";

export function BranchCard({title, zones, distance, event} : {title: string, zones: string, distance: string, event: () => void}) {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity onPress={event} style={[stylesPage.container, {backgroundColor: colorScheme === 'dark' ? '#1F1F1F' : '#F0F0F0'}]}>
            <Image
                source={require('@/assets/images/partial-react-logo.png')}
                style={stylesPage.image}
            />
            <ThemedText type={'sectionHeader'} style={{marginTop: scale(10), marginBottom: scale(5)}}>{title}</ThemedText>
            <View style={{flexDirection: 'row', flex: 1}}>
                <ThemedText style={colorScheme === 'dark' ? {color: 'white', opacity: 0.6, flex: 1} : {color: '#787878', flex: 1}}>Зоны: {zones}</ThemedText>
                <ThemedText style={{marginLeft: 'auto', alignSelf: 'flex-end'}}>{distance}</ThemedText>
            </View>
        </TouchableOpacity>
    );
}

const stylesPage = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingHorizontal: scale(5),
        paddingVertical: scale(10),
        marginVertical: scale(5),
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.25, // Similar to the #00000040 in opacity
        shadowRadius: 10.5,

        // Shadow for Android
        elevation: 9,
    },
    image: {
        borderRadius: 10,
        height: scale(140),
        width: '100%',
    },
});