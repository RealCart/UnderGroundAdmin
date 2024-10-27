import {StyleSheet} from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withTiming,
} from 'react-native-reanimated';

import {ThemedText} from '@/src/components/themedComponents/ThemedText';
import {useFocusEffect} from "expo-router";
import {useCallback} from "react";

export function HelloWave() {
    const rotationAnimation = useSharedValue(0);

    useFocusEffect(useCallback(() => {
            rotationAnimation.value = withRepeat(
                withSequence(withTiming(25, {duration: 150}), withTiming(0, {duration: 150})),
                4,
                false);

            return () => {
                rotationAnimation.value = 0;
            };
        }, []));

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{rotate: `${rotationAnimation.value}deg`}],
    }));

    return (
        <Animated.View style={animatedStyle}>
            <ThemedText style={styles.text}>👋</ThemedText>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        lineHeight: 32,
        marginTop: -6,
    },
});
