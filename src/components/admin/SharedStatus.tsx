import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import React from 'react';

interface SharedStatusProps {
  title:string;
  count:number;
  icon:any;
}

export const SharedStatus: React.FC<SharedStatusProps> = ({ title, count, icon}) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#252525' }, 'background'); 
  const iconColor = useThemeColor({ light: 'black', dark: 'white' }, 'icon');
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

  return (
    <View style={[styles.usersButton, {backgroundColor}]}>
      <View style={styles.topSharedStatus}>
        <View style={styles.icon}>{React.cloneElement(icon, { color: iconColor })}</View>
        <Text style={[styles.count, {color: textColor}]}>{count}</Text>
      </View>
      <View style={{marginTop:12, alignItems:'center'}}>
        <Text style={[styles.title, {color: textColor}]}>{ title }</Text>
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  usersButton: {
    backgroundColor: '#eee',
    padding: 20,
    marginVertical: 5,
    borderRadius: 8,
    width:'48%'
  },
  title: {
    fontSize: 16,
  },
  count: {
    fontSize:20,
    marginHorizontal:10,
  },
  icon: {
    
  },
  topSharedStatus: {
    justifyContent:'space-between', 
    flexDirection:'row', 
    alignItems: "center",
  },
});