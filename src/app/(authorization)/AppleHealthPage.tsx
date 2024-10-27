import { ThemedText } from '@/src/components/themedComponents/ThemedText';
import { ThemedView } from '@/src/components/themedComponents/ThemedView';
import { styles } from '@/src/styles/styles'
import {Link, useNavigation, useRouter} from "expo-router";
import ThemedScrollView from "@/src/components/themedComponents/ThemedScrollView";
import {AppleHealthIcon, Logo} from "@/src/components/icons/AuthorizationIcons";
import {ThemedDefaultButton} from "@/src/components/themedComponents/ThemedDefaultButton";
import {scale} from "react-native-size-matters";
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";


export default function AppleHealthPage() {
    const router = useRouter();
    return (
        <ThemedMainView>
            <ThemedView style={[styles.centerContainer, styles.centeredContainer]}>
                <AppleHealthIcon style={{marginBottom: scale(35)}} />
                <ThemedText style={[styles.centeredText, {marginBottom: scale(20), fontSize: 16, fontWeight: '600'}]}>Предоставьте доступ на запись {'\n'}
                    и чтение данных в Apple Здоровье</ThemedText>
                <ThemedText style={[styles.centeredText, {marginBottom: scale(20)}]}>Для обмена информацией о шагах, пульсе, потраченных калориях и замерах тела {'\n'} необходим досутуп в Здоровье</ThemedText>
            </ThemedView>
            <ThemedDefaultButton style={styles.defaultButton} event={() => router.push('/(tabs)/home')}>
                <ThemedText type="buttonText">Предоставить доступ</ThemedText>
            </ThemedDefaultButton>
            <ThemedDefaultButton style={[styles.defaultButton, {backgroundColor: 'transparent', marginTop: scale(8)}]} event={() => router.push('/(tabs)/home')}>
                <ThemedText type="buttonText">Пропустить</ThemedText>
            </ThemedDefaultButton>
        </ThemedMainView>
    );
}