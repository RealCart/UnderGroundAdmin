import {StyleProp, TouchableOpacity, useColorScheme, View, ViewStyle} from 'react-native';
import React from "react";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";
import {ChevronRight} from "@/src/components/icons/AuthorizationIcons";
import {scale} from "react-native-size-matters";

export function ProfileSection({ style, title, subtitle, event } : { style?: StyleProp<ViewStyle>, title: string, subtitle? : string, event: () => void}) {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity onPress={event} style={[style, {flexDirection: "row", paddingVertical: scale(8), alignItems: 'center'}]}>
            <ThemedText type={"sectionHeaderRegular"} style={{fontSize: 18}}>{title}</ThemedText>
            <View style={{marginLeft: "auto", flexDirection: 'row', alignItems: 'center'}}>
                {subtitle && (
                    <ThemedText type={"sectionHeaderRegular"} style={{fontSize: 16, marginLeft: 'auto', marginRight: scale(25), fontWeight: '300'}}>{subtitle}</ThemedText>
                )}
                <ChevronRight stroke={ colorScheme === 'light' ? 'black' : 'white' } />
            </View>
        </TouchableOpacity>
    );
}
