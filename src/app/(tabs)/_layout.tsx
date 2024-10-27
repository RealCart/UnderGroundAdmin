import {Tabs} from 'expo-router';
import React, {useEffect, useReducer, useRef} from 'react';
import { scale } from 'react-native-size-matters';
import {Colors} from '@/src/constants/Colors';
import {useColorScheme} from '@/src/hooks/useColorScheme';
import {ExercisesIcon, HouseIcon, ProfileIcon, QrIcon, ShopIcon} from "@/src/components/navigation/NavigationLogos";
import {LayoutChangeEvent, Platform, Pressable, Text, View} from "react-native";
import {useIsFocused} from "@react-navigation/native";
import {BottomTabBarProps, BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import Animated, {useAnimatedStyle, useDerivedValue, withTiming} from "react-native-reanimated";
import { styles } from '@/src/styles/styles';

const AnimatedTabBar = ({ state: { index: activeIndex, routes }, navigation, descriptors } : BottomTabBarProps) => {

    const reducer = (state: any, action: { x: number, index: number }) => {
        // Add the new value to the state
        return [...state, { x: action.x, index: action.index }]
    }
    const colorScheme = useColorScheme();

    const [layout, dispatch] = useReducer(reducer, [])
    console.log(layout)

    const handleLayout = (event: LayoutChangeEvent, index: number) => {
        dispatch({ x: event.nativeEvent.layout.x, index })
    }

    // animations ------------------------------------------------------

    const xOffset = useDerivedValue(() => {
        if (layout.length !== routes.length) return 0;
        return [...layout].find(({ index }) => index === activeIndex)!.x - 25
    }, [activeIndex, layout])

    const animatedStyles = useAnimatedStyle(() => {
        return {
            // translateX to the calculated offset with a smooth transition
            transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
        }
    })

    return (
        <View style={[styles.tabBar, {backgroundColor: Colors[colorScheme ?? 'light'].tabBackground}]}>
            <Animated.View
                style={[styles.activeBackground, animatedStyles, {backgroundColor: colorScheme == 'dark' ? "#FFFFFF" : "#000000"}]}
            >
            </Animated.View>

            <View style={styles.tabBarContainer}>
                {routes.map((route, index) => {
                    const active = index === activeIndex
                    const { options } = descriptors[route.key]

                    return (
                        <TabBarComponent
                            key={route.key}
                            active={active}
                            options={options}
                            onLayout={(e) => handleLayout(e, index)}
                            onPress={() => navigation.navigate(route.name)}
                        />
                    )
                })}
            </View>
        </View>
    )
}

type TabBarComponentProps = {
    active?: boolean
    options: BottomTabNavigationOptions
    onLayout: (e: LayoutChangeEvent) => void
    onPress: () => void
}

const TabBarComponent = ({ active, options, onLayout, onPress }: TabBarComponentProps) => {
    // handle lottie animation -----------------------------------------
    const ref = useRef(null)
    const colorScheme = useColorScheme();

    useEffect(() => {
        if (active && ref?.current) {
            // @ts-ignore
            ref.current.play()
        }
    }, [active])


    return (
        <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
            <Animated.View
                style={[styles.componentCircle]}
            />
            <Animated.View style={[styles.iconContainer]}>
                {/* @ts-ignore */}
                {options.tabBarIcon ? options.tabBarIcon({ ref, focused: active }) : <Text>?</Text>}
                <Text style={{color: colorScheme == 'dark' ? active ? '#FFFFFF' : '#C4C4C4' : active ? '#000000' : '#4F4F4F', marginTop: Platform.OS === "ios" ? scale(5) : scale(5), fontSize: 12 }}>{options.title ? options.title : ''}</Text>
            </Animated.View>
        </Pressable>
    )
}

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const isFocused = useIsFocused();

    // @ts-ignore
    return (
        <Tabs
            tabBar={(props) => <AnimatedTabBar {...props} />}
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarItemStyle: {
                    paddingTop: Platform.OS === "ios" ? scale(0) : scale(10),
                    paddingBottom: scale(0),
                },
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarItemStyle: {
                        borderTopColor: isFocused ? "white" : "transparent",
                        borderTopWidth: isFocused ? 2 : 0,
                    },
                    title: 'Главная',
                    tabBarIcon: ({ focused }) => (
                        <HouseIcon color={focused ? Colors[colorScheme ?? 'light'].tabIconSelected : Colors[colorScheme ?? 'light'].tabIconDefault} />
                    ),
                }}
            />
            <Tabs.Screen
                name="exercises"
                options={{
                    title: 'Занятия',
                    tabBarIcon: ({ focused }) => (
                        <ExercisesIcon color={colorScheme == 'dark' ? focused ? '#FFFFFF' : '#C4C4C4' : focused ? '#000000' : '#4F4F4F'} />
                    ),
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabelStyle: {
                        display: "none",
                    },
                    tabBarItemStyle: {
                        paddingTop: scale(0),
                        paddingBottom: scale(0),
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={{backgroundColor: colorScheme == 'dark' ? "#FFFFFF" : "#000000", padding: scale(10), borderRadius: scale(10)}}>
                            <QrIcon color={colorScheme == 'dark' ? "#000000" : "#FFFFFF"} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="shop"
                options={{
                    title: 'Магазин',
                    tabBarIcon: ({ focused }) => (
                        <ShopIcon color={colorScheme == 'dark' ? focused ? '#FFFFFF' : '#C4C4C4' : focused ? '#000000' : '#4F4F4F'} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Профиль',
                    tabBarIcon: ({ focused }) => (
                        <ProfileIcon color={colorScheme == 'dark' ? focused ? '#FFFFFF' : '#C4C4C4' : focused ? '#000000' : '#4F4F4F'} />
                    ),
                }}
            />
        </Tabs>
    );
}
