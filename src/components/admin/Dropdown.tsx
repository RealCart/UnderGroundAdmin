import { StyleSheet, Platform } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { scale } from 'react-native-size-matters';
import React, { useState } from 'react';

interface OPTIONS {
  key: string;
  value: string;
}

interface DropdownProps {
  options: OPTIONS[],
  selectedOption: string,
  placeholder?: string,
  onChange: (text: string) => void,
}

const DropdownList: React.FC<DropdownProps> = ({ selectedOption, options, placeholder, onChange }) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background');
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

  return (
    <Dropdown
      style={[styles.input, {backgroundColor}]}
      data={options}
      placeholderStyle={{color:textColor}}
      selectedTextStyle={{color:textColor}}
      containerStyle={{backgroundColor:backgroundColor, borderColor:backgroundColor, borderRadius:10}}
      itemTextStyle={{color:textColor}}
      activeColor='false'
      showsVerticalScrollIndicator={false}
      dropdownPosition={'bottom'}
      iconStyle={{right:12}}
      placeholder={placeholder}
      value={selectedOption}
      labelField='value' 
      valueField='value'
      onChange={item => {
        onChange(item.value);
      }}
    />
  );
};

export default DropdownList;

const styles = StyleSheet.create({
  input: {
    fontSize:12,
    backgroundColor:'#F0F0F0',
    paddingVertical:Platform.OS === 'android' ? scale(7) : scale(10),
    paddingHorizontal:scale(15),
    borderRadius: 10,
    marginVertical: 5,
  },
});
