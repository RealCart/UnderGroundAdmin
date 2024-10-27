import React from 'react';
import {ScrollView, View, StyleSheet, ViewStyle} from 'react-native';

export function XScrollView({ children, style }: { children: React.ReactNode, style?: ViewStyle }) {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.container, style]}>{children}</View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Arrange children in a row for horizontal scroll
        padding: 10,
        gap: 6,
    },
});
