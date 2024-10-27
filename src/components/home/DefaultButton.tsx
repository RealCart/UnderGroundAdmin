import {TouchableOpacity, type TouchableOpacityProps, useColorScheme, View} from 'react-native';
import { styles } from '../../styles/styles'
import { useThemeColor } from '@/src/hooks/useThemeColor';
import type {PropsWithChildren} from "react";
import { LinearGradient } from "expo-linear-gradient";

export type ThemedDefaultButtonProps = TouchableOpacityProps & PropsWithChildren<{
    lightColor?: string;
    darkColor?: string;
    event?: () => void;
}>;

export function DefaultButton({ style, lightColor, darkColor, children, event }: ThemedDefaultButtonProps) {

    return (
        <TouchableOpacity style={style} onPress={event}>
            <LinearGradient
                colors={['#F4C443', '#FF9735']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.defaultButtonGradient}
            >
                {children}
            </LinearGradient>
        </TouchableOpacity>
    );
}