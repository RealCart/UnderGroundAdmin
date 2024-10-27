import { View, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { SearchIcon, MageFilter, CalendatLinear } from '../icons/Icon';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import React from 'react';

export const InputSearch: React.FC = () => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#F2EDED' }, 'background'); 
  const iconColor = useThemeColor({ light: 'black', dark: 'white' }, 'icon');
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={[styles.inputBack, {backgroundColor}]}>
        <View style={{justifyContent: 'center', marginRight:5}}>
          <SearchIcon/>
        </View>
        <TextInput
          placeholder="Поиск"
          placeholderTextColor={'#C4C4C4'}
          style={styles.input}
        />
        <View style={{justifyContent: 'center'}}>
          <CalendatLinear color={iconColor}/>
        </View>
      </View>
      <TouchableOpacity style={{marginLeft: 10, flex: 1}}>
        <MageFilter color={iconColor}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBack: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'android' ? 2 : 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
  }
});

