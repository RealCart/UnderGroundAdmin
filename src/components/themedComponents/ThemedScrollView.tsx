import type { PropsWithChildren, ReactElement } from 'react';
import {StyleSheet, useColorScheme, ViewStyle} from 'react-native';
import Animated, {
    useAnimatedRef,
} from 'react-native-reanimated';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import { ThemedView } from '@/src/components/themedComponents/ThemedView';

type Props = PropsWithChildren<{
    edges?: Edge[];
    style?: ViewStyle;
}>;

export default function ThemedScrollView({
                                               style, children, edges = ['top', 'bottom', 'left', 'right']
                                           }: Props) {
    const colorScheme = useColorScheme() ?? 'light';
    const scrollRef = useAnimatedRef<Animated.ScrollView>();

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView edges={edges} style={styles.container}>
                <Animated.ScrollView
                    ref={scrollRef}
                    scrollEventThrottle={16}
                    contentContainerStyle={styles.scrollViewContainer}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <ThemedView style={[styles.container, style]}>{children}</ThemedView>
                </Animated.ScrollView>
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
    }
});
