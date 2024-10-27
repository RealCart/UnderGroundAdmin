import {TouchableOpacity, useColorScheme, View} from 'react-native';
import {ThemedText} from "@/src/components/themedComponents/ThemedText";
import {scale} from "react-native-size-matters";

export function TimeBlock({time, disabled, event} : { time: string, event: () => void, disabled: boolean }) {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity onPress={event} disabled={disabled} style={{ paddingVertical: scale(4), marginVertical: scale(2), paddingHorizontal: scale(10), alignSelf: 'flex-start', borderRadius: 50, backgroundColor: colorScheme === 'dark' ? '#434242' : '#F0F0F0', opacity: disabled ? 0.4 : 1}}>
            <ThemedText type={'defaultRegular'}>{time}</ThemedText>
        </TouchableOpacity>
    );
}
