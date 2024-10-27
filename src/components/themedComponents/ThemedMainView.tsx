import type { PropsWithChildren } from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import { ThemedView } from '@/src/components/themedComponents/ThemedView';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';

type Props = PropsWithChildren<{
    edges?: Edge[];
    style?: ViewStyle;
}>;

export default function ThemedMainView({ children, edges = ['top', 'bottom', 'left', 'right'], style }: Props) {
    return (
        <ThemedView style={styles.container}>
            <SafeAreaView edges={edges} style={[styles.container, style]}>
                {children}
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 0,
        marginBottom: 0,
    },
});
