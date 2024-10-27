import { ThemedText } from '@/src/components/themedComponents/ThemedText';
import { ThemedView } from '@/src/components/themedComponents/ThemedView';
import { styles } from '@/src/styles/styles'
import ThemedScrollView from "@/src/components/themedComponents/ThemedScrollView";
import {ThemedDefaultButton} from "@/src/components/themedComponents/ThemedDefaultButton";
import {scale} from "react-native-size-matters";
import {useRouter} from "expo-router";
import PhoneInputMask from "@/src/components/PhoneInputMask";


export default function PhoneVerificationPage() {
    const router = useRouter();

    return (
        <ThemedScrollView>
            <ThemedView style={[styles.centerContainer, styles.centeredContainer]}>
                <ThemedText type="subtitle" style={{marginBottom: scale(10)}}>Введите ваш номер</ThemedText>
                <ThemedText style={[styles.centeredText, {marginBottom: scale(20)}]}>Мы отправим код подтверждения {'\n'} для входа в аккаунт</ThemedText>
                <PhoneInputMask />
                <ThemedDefaultButton style={styles.defaultButton} event={() => router.push('/CodeVerificationPage')}>
                    <ThemedText type="buttonText">Продолжить</ThemedText>
                </ThemedDefaultButton>
            </ThemedView>
        </ThemedScrollView>
    );
}