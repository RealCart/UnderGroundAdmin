import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';

const SplashScreen = () => {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const opacity = useRef(new Animated.Value(0)).current; 
    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true, 
        }).start();
    }, [opacity]);
    return (
        <View style={[styles.container, {backgroundColor}]}>
            <Animated.Image 
                source={require('@/assets/images/SplashScreen.png')}
                style={{ opacity }}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})