import {Image, StyleSheet, Platform, View} from 'react-native';

import { HelloWave } from '@/src/components/HelloWave';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import { ThemedText } from '@/src/components/themedComponents/ThemedText';
import { ThemedView } from '@/src/components/themedComponents/ThemedView';
import { styles } from '@/src/styles/styles'
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";
import {ShopHeader} from "@/src/components/shop/ShopHeader";
import {router} from "expo-router";
import {CategoryCard} from "@/src/components/shop/CategoryCard";

export default function Index() {
    return (
        <ThemedMainView edges={['top', 'left', 'right']}>
            <ShopHeader title={'Магазин'} />
            {/*<SearchBar/>*/}
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                <CategoryCard title={'Женщинам'} event={() => router.push({pathname: '/(tabs)/shop/CategoryPage', params: {}})} />
                <CategoryCard title={'Мужчинам'} event={() => router.push({pathname: '/(tabs)/shop/CategoryPage', params: {}})} />
                <CategoryCard title={'Спортпит'} event={() => router.push({pathname: '/(tabs)/shop/CategoryPage', params: {}})} />
                <CategoryCard title={'Аксессуары'} event={() => router.push({pathname: '/(tabs)/shop/CategoryPage', params: {}})} />
                <CategoryCard title={'Женщинам'} event={() => router.push({pathname: '/(tabs)/shop/CategoryPage', params: {}})} />
                <CategoryCard title={'Женщинам'} event={() => router.push({pathname: '/(tabs)/shop/CategoryPage', params: {}})} />
                <CategoryCard title={'Женщинам'} event={() => router.push({pathname: '/(tabs)/shop/CategoryPage', params: {}})} />
                <CategoryCard title={'Женщинам'} event={() => router.push({pathname: '/(tabs)/shop/CategoryPage', params: {}})} />
            </View>
        </ThemedMainView>
    );
}