import {StyleProp, TouchableOpacity, useColorScheme, View, ViewStyle} from 'react-native';
import React from "react";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";
import {ChevronRight} from "@/src/components/icons/AuthorizationIcons";
import {scale} from "react-native-size-matters";

export function SectionHeader({ style, title, event } : { style?: StyleProp<ViewStyle>, title: string, event: () => void}) {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity onPress={event} style={[style, {flexDirection: "row", padding: scale(10), alignItems: 'center'}]}>
            <ThemedText type={"sectionHeader"}>{title}</ThemedText>
            <View style={{marginLeft: "auto"}}>
                <ChevronRight stroke={ colorScheme === 'light' ? 'black' : 'white' } />
            </View>
        </TouchableOpacity>
    );
}
