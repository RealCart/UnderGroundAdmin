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

export function ThemedMiniButton({ style, lightColor, darkColor, children, event }: ThemedDefaultButtonProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonBackground');
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity style={[style, {alignSelf: 'flex-start'}]} onPress={event}>
            {colorScheme === "dark" ?
                <View style={[{ backgroundColor }, styles.smallButton]}>
                    {children}
                </View>
                :
                <LinearGradient
                    colors={['#F4C443', '#FF9735']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.smallButton}
                >
                    {children}
                </LinearGradient>
            }
        </TouchableOpacity>
    );
}