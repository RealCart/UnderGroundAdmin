import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import React from 'react';

const AdminScreenButton: React.FC<{ title: string, icon: React.JSX.Element, route: string }> = ({ title, icon, route }) => {
    const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#252525' }, 'background');
    const iconColor = useThemeColor({ light: 'black', dark: 'white' }, 'icon');
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const router = useRouter();

    return (
        <TouchableOpacity
            style={[styles.adminButton, { backgroundColor }]}
            onPress={() => {
                router.push({
                    pathname: route,
                    params: {},
                });
            }}
        >
            <View style={{ alignItems: 'center' }}>
                {React.cloneElement(icon, { color: iconColor })}
                <Text style={[styles.title, { color: textColor }]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default AdminScreenButton;

const styles = StyleSheet.create({
    adminButton: {
        width: '48%',
        padding: 20,
        marginVertical: 5,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
    },
});
