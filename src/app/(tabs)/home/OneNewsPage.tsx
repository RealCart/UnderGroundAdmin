import { ThemedText } from '@/src/components/themedComponents/ThemedText';
import ThemedScrollView from "@/src/components/themedComponents/ThemedScrollView";
import {NewsHeader} from "@/src/components/home/news/NewsHeader";
import {NewsFooter} from "@/src/components/home/news/NewsFooter";
import {PageHeader} from "@/src/components/PageHeader";
import {View} from "react-native";
import {styles} from "@/src/styles/styles";
import {scale} from "react-native-size-matters";

export default function OneNewsPage() {
    return (
        <ThemedScrollView edges={['top', 'left', 'right']}>
            <PageHeader title={''}/>
            <View style={[styles.containerWithPadding, {paddingHorizontal: scale(20), paddingTop: 0}]}>
                <NewsHeader title={'Открытие нового филиала!'} description={'В астане ожидаетсяя открытие нового филиала UNDERGROUND GYM '} subtitle={'UNDERGROUND GYM'}/>
                <ThemedText type={'defaultRegular'}>Мы рады сообщить об открытии нового филиала Underground GYM! Новый клуб ждет вас с современным оборудованием, просторными залами и комфортной атмосферой для тренировок. Присоединяйтесь к нам и прокачайте свои возможности в новом месте! {`\n`}
                    📍 Адрес: [вставить адрес нового филиала] {`\n`}
                    📆 Открытие: [дата открытия] {`\n`}
                    🎁 Специальные предложения на первые абонементы! {`\n`}
                    Следите за нашими новостями и не упустите шанс стать частью команды Underground GYM! </ThemedText>
                <NewsFooter views={'367'}/>
            </View>
        </ThemedScrollView>
    );
}