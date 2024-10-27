import {Image, StyleSheet, Platform, View, ScrollView, TouchableOpacity, Dimensions, Text} from 'react-native';
import { ThemedText } from '@/src/components/themedComponents/ThemedText';
import { styles } from '@/src/styles/styles'
import ThemedScrollView from "@/src/components/themedComponents/ThemedScrollView";
import {Story} from "@/src/components/home/Story";
import {BuySubscriptionCard} from "@/src/components/home/BuySubscriptionCard";
import {BranchMiniCard} from "@/src/components/home/branches/BranchMiniCard";
import {XScrollView} from "@/src/components/home/XScrollView";
import {SectionHeader} from "@/src/components/home/SectionHeader";
import {TrainerMiniCard} from "@/src/components/home/TrainerMiniCard";
import {Bell} from "@/src/components/icons/ClientIcons";
import {router} from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import {scale} from "react-native-size-matters";
import React, {useEffect, useState} from "react";

export default function IndexHome() {
    const list = [
        {
            id: 1,
            image: require('@/assets/images/partial-react-logo.png'),
        },
        {
            id: 2,
            image: require('@/assets/images/partial-react-logo.png'),
        },
        {
            id: 3,
            image: require('@/assets/images/partial-react-logo.png'),
        },
    ];

    const width = Dimensions.get('window').width - scale(20);
    const [autoPlay, setAutoPlay] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const delay = setTimeout(() => setAutoPlay(true), 10000); // Delay autoplay by 2 seconds

        return () => clearTimeout(delay); // Cleanup on unmount
    }, []);

    return (
        <ThemedScrollView edges={['top', 'left', 'right']}>
            <View style={[styles.row, {padding: scale(10)}]}>
                <TouchableOpacity onPress={() => router.push({pathname: '/(tabs)/home/MyProfilePage', params: {}})}>
                    {/* Guest */}
                    {/*<TouchableOpacity onPress={() => router.push({pathname: '/(authorization)', params: {}})}>*/}
                    {/*<ThemedText type={"defaultRegular"}>Вход / Регистрация</ThemedText>*/}

                    {/* Client */}
                    <View style={[styles.row, {padding: 0, gap: scale(10)}]}>
                        <Image
                            source={require('@/assets/images/partial-react-logo.png')}
                            style={styles.circleImage}
                        />
                        <View>
                            <ThemedText type={'defaultSemiBold'}>Алина М.</ThemedText>
                            <ThemedText type={'smallText'}>Мой абонемент</ThemedText>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push({pathname: '/(tabs)/home/NewsPage', params: {}})} style={{marginLeft: 'auto'}}>
                    <Bell />
                </TouchableOpacity>
            </View>

            <View>
                <XScrollView>
                    <Story title='Питание и спорт' />
                </XScrollView>
            </View>

            <BuySubscriptionCard/>

            <View>
                <SectionHeader event={() => router.push({pathname: '/home/BranchesPage', params: {}})} title={'Филиалы'} />
                <View>
                    <XScrollView>
                        <BranchMiniCard title={'Сейфуллина 1'} />
                    </XScrollView>
                </View>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, marginVertical: scale(10)}}>
                <Carousel
                    width={width}
                    height={width/4}
                    data={list}
                    autoPlay={false}
                    loop={true}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => setActiveIndex(index)}
                    renderItem={({item}) => (
                        <Image
                            source={item.image}
                            style={{width: width, height: "100%", resizeMode: 'contain'}}
                        />
                    )}
                />
                <View style={styles.paginationContainer}>
                    {list.map((_, i) => (
                        <View
                            key={i}
                            style={[
                                styles.dot,
                                activeIndex === i ? styles.activeDot : styles.inactiveDot,
                            ]}
                        />
                    ))}
                </View>

            </View>

            <View>
                <SectionHeader event={() => router.push({pathname: '/home/BranchesPage', params: {}})} title={'Тренеры'} />
                <View>
                    <XScrollView>
                        <TrainerMiniCard name='Ivan' surname='Ivanov' />
                    </XScrollView>
                </View>
            </View>
        </ThemedScrollView>
    );
}