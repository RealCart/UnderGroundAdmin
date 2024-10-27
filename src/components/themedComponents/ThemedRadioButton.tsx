import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, useColorScheme} from 'react-native';

interface FormValues {
    label: string;
    selected: boolean;
    onPress: () => void;
}

export const ThemedRadioButton = ({ label, selected, onPress }: FormValues) => {
    const colorScheme = useColorScheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.radioButton,
                (colorScheme === "light" ? styles.radioButtonLight : styles.radioButtonDark),
                (selected && (colorScheme === "light" ? styles.radioButtonSelectedLight : styles.radioButtonSelectedDark)),
            ]}
        >
            <Text style={colorScheme === "light" ? styles.radioButtonTextLight : styles.radioButtonTextDark}>{label}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    radioButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    radioButtonSelectedLight: {
        backgroundColor: '#e0e0e0',
    },
    radioButtonLight: {
        backgroundColor: '#F0F0F0',
    },
    radioButtonDark: {
        backgroundColor: '#1F1F1F',
    },
    radioButtonSelectedDark: {
        backgroundColor: '#2d2d2d',
    },
    radioButtonTextDark: {
        color: 'white',
        fontSize: 16,
    },
    radioButtonTextLight: {
        color: 'black',
        fontSize: 16,
    },
});
