import { ThemedText } from '@/src/components/themedComponents/ThemedText';
import { ThemedView } from '@/src/components/themedComponents/ThemedView';
import { styles } from '@/src/styles/styles'
import ThemedScrollView from "@/src/components/themedComponents/ThemedScrollView";
import {ThemedDefaultButton} from "@/src/components/themedComponents/ThemedDefaultButton";
import {scale} from "react-native-size-matters";
import {useRouter} from "expo-router";
import PhoneInputMask from "@/src/components/PhoneInputMask";
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";
import {useEffect, useState} from "react";
import {TouchableOpacity, useColorScheme} from "react-native";

const CELL_COUNT = 4;

export default function CodeVerificationPage() {
    const colorScheme = useColorScheme();
    const router = useRouter();
    const [errorText, setErrorText] = useState("");
    const [timer, setTimer] = useState(59);
    const [value, setValue] = useState<string>('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
        // Clear interval when countdown finishes
        if (timer === 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer]);

    useEffect(() => {
        if(parseInt(value) >= 1000) {
            router.push('/RegistrationPage')
        }
    }, [value]);

    return (
        <ThemedScrollView>
            <ThemedView style={[styles.centerContainer, styles.centeredContainer]}>
                <ThemedText type="subtitle" style={{marginBottom: scale(10)}}>Укажите код</ThemedText>
                <ThemedText style={[styles.centeredText, {marginBottom: scale(20)}]}>Мы отправили его на +7 700 500 00 00</ThemedText>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={{ gap: scale(10), marginVertical: scale(10)}}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({index, symbol, isFocused}) => (
                        <ThemedView
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[{
                                flex: 1,
                                height: scale(48),
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: colorScheme === 'light' ? '#F0F0F0' : '#1F1F1F',
                                borderRadius: 10,
                            },
                                isFocused && {
                                    backgroundColor: colorScheme === 'light' ? '#e0e0e0' : '#2d2d2d',
                                }]}>
                            <ThemedText style={{fontSize: 20}}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </ThemedText>
                        </ThemedView>
                    )}
                />
                <ThemedText style={{color: "red", }}>{errorText}</ThemedText>
                {timer > 0 ? (
                    <ThemedText type='default2'>Запросить новый код можно через 00:{timer}</ThemedText>
                ) : (
                    <TouchableOpacity onPress={() => {setTimer(60)}}>
                        <ThemedText type='link'>Получить код</ThemedText>
                    </TouchableOpacity>
                )}
            </ThemedView>
        </ThemedScrollView>
    );
}