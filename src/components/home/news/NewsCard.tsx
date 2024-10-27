import {Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View} from 'react-native';
import {scale} from "react-native-size-matters";
import React from "react";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";
import {LogoMini} from "@/src/components/icons/AuthorizationIcons";
import {LinearGradient} from "expo-linear-gradient";
import {CommentsIcon, EyeIcon, HeartIcon} from "@/src/components/icons/ClientIcons";

export function NewsCard({title, views, event, description, subtitle} : {title: string, views: string, event: () => void, description: string, subtitle: string}) {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity onPress={event} style={[stylesPage.container, {backgroundColor: colorScheme === 'dark' ? '#212121' : '#F0F0F0'}]}>
            <View style={stylesPage.header}>
                <LogoMini style={stylesPage.miniImage} />
                <ThemedText style={stylesPage.grayText}>Underground Gym</ThemedText>
                <ThemedText style={[stylesPage.grayText, {marginLeft: "auto"}]}>1 нед</ThemedText>
            </View>
            <ThemedText type={'sectionHeaderRegular'} style={{marginBottom: scale(10), marginTop: scale(5)}}>{title}</ThemedText>
            <View>
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={stylesPage.image}
                />
                <View style={{position: 'absolute', bottom: 0, width: "100%", borderRadius: 10 }}>
                    <LinearGradient
                        colors={['rgba(33, 33, 33, 0)', 'rgba(33, 33, 33, 1)']}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 1, y: 0.8 }}
                        style={stylesPage.gradient}
                    />
                    <Text style={stylesPage.title}>{subtitle}</Text>
                    <Text style={stylesPage.description}>{description}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: scale(10), paddingVertical: scale(5)}}>
                <HeartIcon/>
                <CommentsIcon/>
                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 'auto', gap: scale(5)}}>
                    <EyeIcon/>
                    <Text style={{color: '#434242'}}>{views}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const stylesPage = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingHorizontal: scale(10),
        paddingVertical: scale(10),
        marginVertical: scale(5),
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.25, // Similar to the #00000040 in opacity
        shadowRadius: 10.5,

        // Shadow for Android
        elevation: 9,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: scale(10),
        width: '100%',
    },
    image: {
        borderRadius: 10,
        height: scale(140),
        width: '100%',
    },
    miniImage: {

    },
    grayText: {
        color: '#7A7A7A',
        marginLeft: scale(5),
        fontSize: 16,
        fontWeight: '400',
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 10,
    },
    title: {
        color: "white",
        fontSize: 18,
        paddingVertical: scale(5),
        paddingHorizontal: scale(10),
        fontWeight: "500",
        fontFamily: 'Inter',
        marginBottom: 0,
        paddingBottom: 0,
    },
    description: {
        color: "white",
        fontSize: 13,
        paddingVertical: scale(5),
        paddingHorizontal: scale(10),
        fontWeight: "400",
        fontFamily: 'Inter',
        marginTop: 0,
        paddingTop: 0,
    }
});