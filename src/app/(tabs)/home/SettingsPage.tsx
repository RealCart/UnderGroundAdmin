import {Image, StyleSheet, Platform, View, ScrollView, TouchableOpacity, useColorScheme} from 'react-native';;
import { styles } from '@/src/styles/styles'
import {BranchCard} from "@/src/components/home/branches/BranchCard";
import {router} from "expo-router";
import {PageHeader} from "@/src/components/PageHeader";
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";
import {ProfileSection} from "@/src/components/profile/ProfileSection";
import React from "react";
import {scale} from "react-native-size-matters";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";
import {ChevronRight} from "@/src/components/icons/AuthorizationIcons";
import {ExitIcon} from "@/src/components/icons/ClientIcons";

export default function SettingsPage() {
    const colorScheme = useColorScheme();
    return (
        <ThemedMainView edges={['top', 'left', 'right']}>
            <PageHeader title={''} />
            <View style={styles.containerWithPadding}>
                <ProfileSection title={'Клубы Underground'} event={() => router.push({pathname: '/(tabs)/profile/BranchesPage'})} />
                <ProfileSection title={'Абонементы'} event={() => router.push({pathname: '/(tabs)/profile/SubscriptionsPage'})} />
                <ProfileSection title={'Заморозка абонемента'} event={() => router.push({pathname: '/(tabs)/profile/HelpPage'})} />
                <ProfileSection title={'Мои карты'} event={() => router.push({pathname: '/(tabs)/profile/MyCardsPage'})} />
                <ProfileSection title={'История платежей'} event={() => router.push({pathname: '/(tabs)/profile/PaymentHistoryPage'})} />
                <ProfileSection title={'История посещений'} event={() => router.push({pathname: '/(tabs)/profile/HelpPage'})} />
                <ProfileSection title={'Помощь'} event={() => router.push({pathname: '/(tabs)/profile/HelpPage'})} />
                <ProfileSection title={'Язык'} subtitle={'Русский'} event={() => router.push({pathname: '/(tabs)/profile/HelpPage'})} />

                <View style={{marginTop: scale(20)}}>
                    <ProfileSection title={'Стать частью команды'} event={() => router.push({pathname: '/(tabs)/profile/HelpPage'})} />
                    <ProfileSection title={'Публичная оферта'} event={() => router.push({pathname: '/(tabs)/profile/SettingsPage'})} />
                </View>
                <TouchableOpacity onPress={() => console.log('Выход из аккаунта...')} style={{flexDirection: "row", paddingVertical: scale(10), marginTop: scale(10), alignItems: 'center', borderTopColor: '#706F6F', borderTopWidth: 1}}>
                    <ThemedText type={"sectionHeaderRegular"} style={{fontSize: 18}}>Выйти из аккаунта</ThemedText>
                    <View style={{marginLeft: "auto", flexDirection: 'row', alignItems: 'center'}}>
                        <ExitIcon stroke={ colorScheme === 'light' ? 'black' : 'white' } />
                    </View>
                </TouchableOpacity>
            </View>
        </ThemedMainView>
    );
}