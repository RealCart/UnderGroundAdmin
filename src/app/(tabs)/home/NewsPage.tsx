import {Image, StyleSheet, Platform, View, ScrollView} from 'react-native';
import { styles } from '@/src/styles/styles'
import {NewsCard} from "@/src/components/home/news/NewsCard";
import {PageHeader} from "@/src/components/PageHeader";
import {router} from "expo-router";
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";

export default function NewsPage() {
    return (
        <ThemedMainView edges={['top', 'left', 'right']}>
            <PageHeader title={'Новости'} />
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.containerWithPadding}>
                    <NewsCard event={() => router.push({pathname: '/(tabs)/home/OneNewsPage', params: {}})} title={'Открытие нового филиала!'} subtitle={'UNDERGROUND GYM'} description={'В астане ожидаетсяя открытие нового филиала UNDERGROUND GYM '} views={'367'} />
                    <NewsCard event={() => router.push({pathname: '/(tabs)/home/OneNewsPage', params: {}})} title={'Открытие нового филиала!'} subtitle={'UNDERGROUND GYM'} description={'В астане ожидаетсяя открытие нового филиала UNDERGROUND GYM '} views={'367'} />
                </View>
            </ScrollView>
        </ThemedMainView>
    );
}