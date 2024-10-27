import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    useColorScheme,
    View
} from 'react-native';
import type { PropsWithChildren } from "react";
import { scale } from "react-native-size-matters";

export type ThemedInputProps = TextInputProps & PropsWithChildren<{
    label?: string | undefined;
    placeholder?: string | undefined;
    errorText?: string | undefined;
}>;

export function ThemedInput({ label, placeholder, onChangeText, onBlur, value, errorText }: ThemedInputProps) {
    const colorScheme = useColorScheme();

    return (
        <View>
            {label && <Text style={{ color: '#787878', marginBottom: scale(5), marginTop: scale(10) }}>{label}</Text>}
            <TextInput
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                style={colorScheme === 'dark' ? styles.inputDark : styles.inputLight}
                placeholder={placeholder}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputDark: {
        color: 'white',
        fontSize: 18,
        width: "100%",
        backgroundColor: "#1F1F1F",
        borderRadius: 10,
        paddingVertical: scale(12),
        paddingLeft: scale(12),
    },
    inputLight: {
        color: 'black',
        fontSize: 18,
        width: "100%",
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        paddingVertical: scale(12),
        paddingLeft: scale(12),
    },
});
