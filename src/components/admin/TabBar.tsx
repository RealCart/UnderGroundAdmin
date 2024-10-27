import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemeColor } from '@/src/hooks/useThemeColor';

interface TabBarProps {
  tabs:string[],
  activeTab: string;
  style:ViewStyle,
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab, style, onTabChange }) => {
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

  return (
    <View style={styles.container}>
        <ScrollView style={{flexDirection:'row'}} horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map((tab) => (
            <TouchableOpacity key={tab} onPress={() => onTabChange(tab)} style={style}>
            {activeTab === tab ? (
                <LinearGradient
                  colors={['#F4C443', '#FF9735']}
                  start={{ x: 0, y: 0.5 }} 
                  end={{ x: 1, y: 0.5 }} 
                  style={{paddingHorizontal:7, paddingVertical:3, borderRadius:10}}
                >
                  <Text style={styles.activeTabText}>{tab}</Text>
                </LinearGradient>
              ) : (
                <View  style={{paddingHorizontal:7, paddingVertical:3}}>
                  <Text style={[styles.inactiveTabText, {color:textColor}]}>{tab}</Text>
                </View>
              )}
          </TouchableOpacity>
          ))}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom:20,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: '#000', 
    fontWeight:'400',
  },
});

export default TabBar;