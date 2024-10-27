import type { PropsWithChildren, ReactElement } from 'react';
import {StyleSheet, TouchableOpacity, useColorScheme, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/src/components/themedComponents/ThemedView';
import {scale} from "react-native-size-matters";
import {router} from "expo-router";
import {ChevronLeft, ChevronLeftMini} from "@/src/components/icons/AuthorizationIcons";
import {ShareIcon} from "@/src/components/icons/ClientIcons";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView showsVerticalScrollIndicator={false} ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}>
          {headerImage}
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>

        <View style={{position: 'absolute', paddingHorizontal: scale(10), paddingTop: scale(40), flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity style={styles.circleForIcon} onPress={() => router.back()}>
            <ChevronLeftMini stroke={'black'} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.circleForIcon, {marginLeft: 'auto'}]} onPress={() => router.back()}>
            <ShareIcon />
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 10,
    gap: 5,
    overflow: 'hidden',
  },
  circleForIcon: {
    backgroundColor: 'white',
    borderRadius: 30,
    height: scale(30),
    width: scale(30),
    alignItems: 'center',
    justifyContent: 'center'
  },
});
