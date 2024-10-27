import { ThemedText } from '@/src/components/themedComponents/ThemedText';
import { ThemedView } from '@/src/components/themedComponents/ThemedView';
import { styles } from '@/src/styles/styles'
import {useRouter} from "expo-router";
import ThemedScrollView from "@/src/components/themedComponents/ThemedScrollView";
import {Logo} from "@/src/components/icons/AuthorizationIcons";
import {ThemedDefaultButton} from "@/src/components/themedComponents/ThemedDefaultButton";
import {scale} from "react-native-size-matters";


export default function MainPage() {
    const router = useRouter();
    return (
        <ThemedScrollView>
            <ThemedView style={[styles.centerContainer, styles.centeredContainer]}>
                <Logo style={{marginBottom: scale(80)}} />
                <ThemedText type="subtitle" style={{marginBottom: scale(10)}}>Добро пожаловать</ThemedText>
                <ThemedText style={[styles.centeredText, {marginBottom: scale(20)}]}>Мы отправим код подтверждения {'\n'} для входа в аккаунт</ThemedText>
                <ThemedDefaultButton style={styles.defaultButton} event={() => router.push('/PhoneVerificationPage')}>
                    <ThemedText type="buttonText">Начать</ThemedText>
                </ThemedDefaultButton>
            </ThemedView>
        </ThemedScrollView>
    );
}