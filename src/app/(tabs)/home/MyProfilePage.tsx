import {Image, TouchableOpacity, useColorScheme, View} from "react-native";
import {styles} from "@/src/styles/styles";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";
import React from "react";
import ThemedScrollView from "@/src/components/themedComponents/ThemedScrollView";
import SubscriptionsPage from "@/src/app/(tabs)/profile/SubscriptionsPage";
import {XScrollView} from "@/src/components/home/XScrollView";
import {AchievementMiniCard} from "@/src/components/home/branches/AchievementMiniCard";
import {
    BigHeartIcon,
    CameraIcon,
    DestinationIcon,
    FlameIcon,
    GearIcon,
    PencilIcon
} from "@/src/components/icons/ClientIcons";
import {ChevronLeftMini} from "@/src/components/icons/AuthorizationIcons";
import {scale} from "react-native-size-matters";
import {router} from "expo-router";
import {Subscription} from "@/src/components/Subscription";
import {MetricsCard} from "@/src/components/MetricsCard";
import {MyProgramCard} from "@/src/components/MyProgramCard";

export default function MyProfilePage() {
    const colorScheme = useColorScheme();
    return (
        <ThemedScrollView style={{padding: scale(10)}} edges={['top', 'left', 'right']}>
            <View style={[styles.row, {position: 'absolute', top: 0, width: '100%'}]}>
                <TouchableOpacity style={{padding: scale(10)}} onPress={() => router.back()}>
                    <ChevronLeftMini stroke={colorScheme === 'dark' ? 'white' : 'black'}/>
                </TouchableOpacity>
                <View style={[styles.row, {marginLeft: 'auto', gap: scale(8)}]}>
                    <TouchableOpacity onPress={() => router.push({pathname: '/(tabs)/home/EditProfilePage', params: {}})} style={{backgroundColor: '#D9D9D9', height: scale(26), width: scale(26), borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <PencilIcon />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push({pathname: '/(tabs)/home/SettingsPage', params: {}})} style={{backgroundColor: '#D9D9D9', height: scale(26), width: scale(26), borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <GearIcon />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: scale(20)}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={require('@/assets/images/partial-react-logo.png')}
                        style={styles.circleImage}
                    />
                    <View style={{backgroundColor: colorScheme === 'dark' ? 'white' : '#C0C0C0', position: 'absolute', bottom: scale(2), right: scale(2), height: scale(18), width: scale(18), borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <CameraIcon/>
                    </View>
                </View>
                <View style={{marginVertical: scale(5)}}>
                    <ThemedText type='sectionHeaderRegular' style={{textAlign: 'center'}}>Иванов Иван</ThemedText>
                </View>
            </View>

            <View style={[styles.row, {gap: scale(15), marginVertical: scale(10)}]}>
                <View style={{flexDirection: 'column'}}>
                    <ThemedText type={'sectionHeaderRegular'}>14</ThemedText>
                    <ThemedText type={'defaultRegular'} style={{color: colorScheme === 'dark' ? '#787878' : '#3E3E3E'}}>Друзья</ThemedText>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <ThemedText type={'sectionHeaderRegular'}>35</ThemedText>
                    <ThemedText type={'defaultRegular'} style={{color: colorScheme === 'dark' ? '#787878' : '#3E3E3E'}}>Достижения</ThemedText>
                </View>
                <View style={{flexDirection: 'column', marginLeft: 'auto'}}>
                    <ThemedText type={'sectionHeaderRegular'}>234</ThemedText>
                    <ThemedText type={'defaultRegular'} style={{color: colorScheme === 'dark' ? '#787878' : '#3E3E3E'}}>Просмотры</ThemedText>
                </View>
            </View>

            <ThemedText type={'label'}>Абонементы</ThemedText>
            <Subscription days={295} />

            <View style={styles.row}>
                <ThemedText type={'label'}>Гостевые посещения</ThemedText>
                <ThemedText type={"defaultRegular"} style={{marginLeft: 'auto', fontSize: 14}}>5 из 5</ThemedText>
            </View>
            <View>
                <XScrollView style={{paddingHorizontal: 0}}>
                    <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.guestImage} />
                    <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.guestImage} />
                    <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.guestImage} />
                    <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.guestImage} />
                    <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.guestImage} />
                </XScrollView>
            </View>

            <ThemedText type={'label'}>Победы в челленджах</ThemedText>
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

            <ThemedText type={'label'}>Метрики здоровья</ThemedText>
            <View style={[styles.row, {gap: scale(5), justifyContent: 'space-between', marginVertical: scale(10)}]}>
                <MetricsCard icon={<FlameIcon/>} text={'879 кКал'} />
                <MetricsCard icon={<BigHeartIcon/>} text={'90 уд/мин'} />
                <MetricsCard icon={<DestinationIcon/>} text={'10893 шагов'} />
            </View>

            <ThemedText type={'label'}>Мои программы тренировок</ThemedText>
            <MyProgramCard level={'Сложная'} done={10} total={30} title={'Набор мышечной массы'} />
        </ThemedScrollView>
    );
}