import {Image, StyleSheet, Platform, View, ScrollView, TouchableOpacity, Text, useColorScheme} from 'react-native';

import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import { ThemedText } from '@/src/components/themedComponents/ThemedText';
import { styles } from '@/src/styles/styles'
import {XScrollView} from "@/src/components/home/XScrollView";
import {SectionHeader} from "@/src/components/home/SectionHeader";
import {TrainerMiniCard} from "@/src/components/home/TrainerMiniCard";
import {TimeBlock} from "@/src/components/home/TimeBlock";
import {MapCard} from "@/src/components/home/MapCard";
import {DefaultButton} from "@/src/components/home/DefaultButton";
import {scale} from "react-native-size-matters";
import {router, useFocusEffect, useNavigation} from "expo-router";
import {ChevronDown, ShareIcon} from "@/src/components/icons/ClientIcons";
import {ChevronLeft} from "@/src/components/icons/AuthorizationIcons";
import {useCallback, useState} from "react";
import {ThemedView} from "@/src/components/themedComponents/ThemedView";
import {AchievementMiniCard} from "@/src/components/home/branches/AchievementMiniCard";

export default function BranchPage() {
    const colorScheme = useColorScheme();
    const [expanded, setExpanded] = useState(false);
    const [expandedServices, setExpandedServices] = useState(false);

    return (
        <ThemedView style={styles.container}>
            <ParallaxScrollView headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            } headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>

                <ThemedText type={'sectionHeader'} style={{marginBottom: scale(5)}}>Underground на Сейфуллина, 1</ThemedText>
                <ThemedText type={'default2'} style={{marginBottom: scale(5)}}>г. Астана, Сейфуллина, 1</ThemedText>

                <ThemedText type={'defaultSemiBold'} >О филиале</ThemedText>
                <View style={{marginBottom: scale(10)}}>
                    <ThemedText type={'default2'} numberOfLines={expanded ? undefined : 3}>Зоны: силовые, кардио, свободные веса, функциональный тренинг Зоны: силовые, кардио, свободные веса, функциональный тренинг Зоны: силовые, кардио, свободные веса, функциональный тренинг Зоны: силовые..</ThemedText>
                    <TouchableOpacity onPress={() => setExpanded(!expanded)} style={{flexDirection: 'row', alignItems: 'center'}}>
                        <ThemedText type={'defaultSemiBold'}>{expanded ? 'Свернуть' : 'Еще'} </ThemedText>
                        <ChevronDown style={expanded ? {transform: [{ rotate: '180deg' }]} : {}} stroke={colorScheme === 'light' ? 'black' : 'white'} />
                    </TouchableOpacity>
                </View>

                <ThemedText type={'defaultSemiBold'} style={{marginBottom: scale(5)}}>Услуги</ThemedText>
                <View>
                    <ThemedText type={'default2'} numberOfLines={expandedServices ? undefined : 3}>
                        Тренажерный зал {'\n'}
                        Тренажерный зал {'\n'}
                        Тренажерный зал {'\n'}
                        Тренажерный зал
                    </ThemedText>
                    <TouchableOpacity onPress={() => setExpandedServices(!expandedServices)} style={{flexDirection: 'row', alignItems: 'center'}}>
                        <ThemedText type={'defaultSemiBold'}>{expandedServices ? 'Свернуть' : 'Еще'} </ThemedText>
                        <ChevronDown style={expandedServices ? {transform: [{ rotate: '180deg' }]} : {}} stroke={colorScheme === 'light' ? 'black' : 'white'} />
                    </TouchableOpacity>
                </View>

                <View style={{marginBottom: scale(5)}}>
                    <SectionHeader style={{paddingHorizontal: 0}} title={'Тренеры'} event={() => router.push({pathname: '/home/CoachesPage', params: {}})}/>
                    <View>
                        <XScrollView>
                            <TrainerMiniCard name={'Oleg'} surname={'Olegov'}/>
                        </XScrollView>
                    </View>
                </View>

                <View>
                    <SectionHeader style={{paddingHorizontal: 0}} title={'Расписание групповых занятий'} event={() => router.push({pathname: '/home/CoachesPage', params: {}})}/>
                    <View style={{gap: scale(30)}}>
                        <View style={{flex: 1/3}}>
                            <ThemedText type={'defaultRegular'} style={{marginBottom: scale(5)}}>Ioga</ThemedText>
                            <TimeBlock disabled={true} time={'09:20 - 10:00'} event={() => console.log('Light weight BABY')}/>
                            <TimeBlock disabled={false} time={'09:20 - 10:00'} event={() => console.log('Light weight BABY')}/>
                        </View>
                    </View>
                </View>

                <ThemedText type={'sectionHeader'} style={{marginTop: scale(10)}}>Расположение</ThemedText>
                <MapCard/>

                <View>
                    <ThemedText type={'sectionHeader'} style={{marginTop: scale(5)}}>Достижения филиала</ThemedText>
                    <View>
                        <XScrollView style={{paddingHorizontal: 0}}>
                            <AchievementMiniCard/>
                            <AchievementMiniCard/>
                            <AchievementMiniCard/>
                            <AchievementMiniCard/>
                            <AchievementMiniCard/>
                            <AchievementMiniCard/>
                        </XScrollView>
                    </View>
                </View>

            </ParallaxScrollView>
            <View style={{paddingTop: scale(10), paddingBottom: scale(20), paddingHorizontal: scale(10), borderTopColor: '#8C8888', borderTopWidth: 1}}>
                <DefaultButton>
                    <ThemedText type={'buttonText'}>Приобрести абонемент</ThemedText>
                </DefaultButton>
            </View>
        </ThemedView>
    );
}