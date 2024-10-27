import {Image, StyleSheet, Platform, View, TouchableOpacity, useColorScheme} from 'react-native';

import { HelloWave } from '@/src/components/HelloWave';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import { ThemedText } from '@/src/components/themedComponents/ThemedText';
import { ThemedView } from '@/src/components/themedComponents/ThemedView';
import { styles } from '@/src/styles/styles'
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";
import {BuySubscriptionCard} from "@/src/components/home/BuySubscriptionCard";
import {ProfileSection} from "@/src/components/profile/ProfileSection";
import {PageHeader} from "@/src/components/PageHeader";
import {PageHeaderNoBack} from "@/src/components/PageHeaderNoBack";
import React from "react";
import {ChevronLeft, ChevronRight} from "@/src/components/icons/AuthorizationIcons";
import {scale} from "react-native-size-matters";
import {router} from "expo-router";
import {GiftIcon} from "@/src/components/icons/ClientIcons";

export default function Index() {
    const colorScheme = useColorScheme();
    return (
        <ThemedMainView style={{paddingHorizontal: scale(10)}} edges={['top', 'left', 'right']}>
            <PageHeaderNoBack title={'Мой профиль'} />
            <TouchableOpacity onPress={() => router.push({pathname: '/(authorization)', params: {}})} style={[styles.row, {paddingHorizontal: 0,}]}>
                <View style={[styles.row, {padding: 0, gap: scale(10)}]}>
                    <Image
                        source={require('@/assets/images/partial-react-logo.png')}
                        style={styles.circleImage}
                    />
                    <ThemedText type={'sectionHeaderRegular'}>Вход/Регистрация</ThemedText>
                </View>
                <View style={{marginLeft: 'auto'}}>
                    <ChevronRight stroke={'white'} />
                </View>
            </TouchableOpacity>

            <ThemedText>Абонементы</ThemedText>
            <BuySubscriptionCard style={{marginHorizontal: 0}} />

            <TouchableOpacity
                style={{
                    backgroundColor: colorScheme === 'dark' ? '#1F1F1F' : '#F0F0F0',
                    borderRadius: 10,
                    padding: scale(10),
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: scale(5),
                    marginBottom: scale(10),
                }}
            >
                <View style={{backgroundColor: '#1F1F1F', padding: scale(5), borderRadius: 20}}>
                    <GiftIcon/>
                </View>
                <ThemedText type={'defaultRegular'}>Ввести промокод</ThemedText>
            </TouchableOpacity>

            <ProfileSection title={'Клубы Underground'} event={() => router.push({pathname: '/(tabs)/profile/BranchesPage'})} />
            <ProfileSection title={'Абонементы'} event={() => router.push({pathname: '/(tabs)/profile/SubscriptionsPage'})} />
            <ProfileSection title={'Мои карты'} event={() => router.push({pathname: '/(tabs)/profile/MyCardsPage'})} />
            <ProfileSection title={'История платежей'} event={() => router.push({pathname: '/(tabs)/profile/PaymentHistoryPage'})} />
            <ProfileSection title={'Настройки'} event={() => router.push({pathname: '/(tabs)/profile/SettingsPage'})} />
            <ProfileSection title={'Помощь'} event={() => router.push({pathname: '/(tabs)/profile/HelpPage'})} />
        </ThemedMainView>
    );
}