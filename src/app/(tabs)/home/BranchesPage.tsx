import {Image, StyleSheet, Platform, View, ScrollView} from 'react-native';

import { HelloWave } from '@/src/components/HelloWave';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import { ThemedText } from '@/src/components/themedComponents/ThemedText';
import { ThemedView } from '@/src/components/themedComponents/ThemedView';
import { styles } from '@/src/styles/styles'
import ThemedScrollView from "@/src/components/themedComponents/ThemedScrollView";
import {Story} from "@/src/components/home/Story";
import {BuySubscriptionCard} from "@/src/components/home/BuySubscriptionCard";
import {BranchMiniCard} from "@/src/components/home/branches/BranchMiniCard";
import {XScrollView} from "@/src/components/home/XScrollView";
import {SectionHeader} from "@/src/components/home/SectionHeader";
import {BranchCard} from "@/src/components/home/branches/BranchCard";
import {router} from "expo-router";
import {PageHeader} from "@/src/components/PageHeader";
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";

export default function BranchesPage() {
    return (
        <ThemedMainView edges={['top', 'left', 'right']}>
            <PageHeader title={'Филиалы'} />
            <ScrollView>
                <View style={styles.containerWithPadding}>
                    <BranchCard event={() => router.push({pathname: '/BranchPage', params: {}})} title={'Seifullina 1'} distance={'12.0 km ot vas'} zones={'силовые, кардио, свободные веса, функциональный тренинг'} />
                    <BranchCard event={() => router.push({pathname: '/BranchPage', params: {}})} title={'Seifullina 1'} distance={'12.0 km ot vas'} zones={'силовые, кардио, свободные веса, функциональный тренинг'} />
                </View>
            </ScrollView>
        </ThemedMainView>
    );
}