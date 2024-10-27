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

export default function CoachPage() {

    return (
        <ThemedScrollView edges={['top', 'left', 'right']}>
        </ThemedScrollView>
    );
}