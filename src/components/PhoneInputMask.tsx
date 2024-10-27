import React, { useState } from 'react';
import {View, StyleSheet, useColorScheme, ViewStyle} from 'react-native';
import MaskInput from 'react-native-mask-input';
import {scale} from "react-native-size-matters";

const PhoneInputMask: React.FC = ({style} : {style? : ViewStyle}) => {
    const [phone, setPhone] = useState<string>('');
    const colorScheme = useColorScheme();
    const handleChangeText = (masked: string, unmasked?: string) => {
        setPhone(unmasked || '');
    };

    return (
        <View style={[colorScheme === "light" ? styles.containerLight : styles.containerDark, style]}>
            <MaskInput
                style={colorScheme === "light" ? styles.inputLight : styles.inputDark}
                value={phone}
                keyboardType="phone-pad"
                onChangeText={handleChangeText}
                mask={['+', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerDark: {
        backgroundColor: '#1F1F1F',
        borderRadius: 10,
        width: "100%",
        marginVertical: scale(20),
    },
    containerLight: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        width: "100%",
        marginVertical: scale(20),
    },
    inputDark: {
        color: '#323232',
        fontSize: 18,
        width: "100%",
        paddingVertical: scale(12),
        paddingLeft: scale(12)
    },
    inputLight: {
        color: '#C3C3C3',
        fontSize: 18,
        width: "100%",
        paddingVertical: scale(12),
        paddingLeft: scale(12)
    },
});

export default PhoneInputMask;
