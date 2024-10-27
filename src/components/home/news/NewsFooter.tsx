import {Text, View} from 'react-native';
import {scale} from "react-native-size-matters";
import {CommentsIcon, EyeIcon, HeartIcon} from "@/src/components/icons/ClientIcons";
import React from "react";

export function NewsFooter({views} : {views: string}) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', gap: scale(10), paddingVertical: scale(10)}}>
            <HeartIcon/>
            <CommentsIcon/>
            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 'auto', gap: scale(5)}}>
                <EyeIcon/>
                <Text style={{color: '#434242'}}>{views}</Text>
            </View>
        </View>
    );
}
