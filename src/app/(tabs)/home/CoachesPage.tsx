import ThemedScrollView from "@/src/components/themedComponents/ThemedScrollView";
import {BranchCard} from "@/src/components/home/branches/BranchCard";
import {router} from "expo-router";

export default function CoachesPage() {
    return (
        <ThemedScrollView edges={['top', 'left', 'right']}>
            <BranchCard event={() => router.push({pathname: '/home/CoachPage', params: {}})} title={'Seifullina 1'} distance={'1.0 km ot vas'} zones={'силовые, кардио, свободные веса, функциональный тренинг'} />
        </ThemedScrollView>
    );
}