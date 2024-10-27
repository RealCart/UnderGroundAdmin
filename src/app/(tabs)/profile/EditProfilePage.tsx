import {Image, StyleSheet, Platform, View, ScrollView} from 'react-native';;
import { styles } from '@/src/styles/styles'
import {BranchCard} from "@/src/components/home/branches/BranchCard";
import {router} from "expo-router";
import {PageHeader} from "@/src/components/PageHeader";
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";

export default function EditProfilePage() {
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