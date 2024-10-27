import { StyleSheet, Text, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import React from 'react';

interface OPTIONS {
  key: string;
  value: string;
}

interface MultiSelectProps {
  options: OPTIONS[],
  selectedOption: string[],
  onChange: (text: string[]) => void,
}

const MultiSelectDropdownList: React.FC<MultiSelectProps> = ({ selectedOption, options,  onChange }) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background');
  const activeColor = useThemeColor({ light:'#FFFFFF', dark:'#181818'}, 'background');
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

  return (
    <MultiSelect
      style={[styles.input, { backgroundColor }]}
      placeholderStyle={{ color: textColor }}
      containerStyle={{ backgroundColor: backgroundColor, borderColor: backgroundColor, borderRadius: 10, top:-32 }}
      itemTextStyle={{ color: textColor }}
      itemContainerStyle={{shadowColor:'black'}}
      data={options}
      labelField="value"
      valueField="value"
      activeColor={activeColor}
      placeholder={selectedOption.join(', ')}
      dropdownPosition='top'
      iconStyle={{right:12}}
      value={selectedOption}
      onChange={item => {
        onChange(item);
      }}
      renderSelectedItem={(item) => (
        <Text style={{display:'none'}}>{item.value}</Text>
      )}
    />
  );
};

export default MultiSelectDropdownList;

const styles = StyleSheet.create({
  input: {
    fontSize: 12,
    backgroundColor: '#F0F0F0',
    paddingVertical: 12,
    paddingLeft: 25,
    borderRadius: 10,
    marginVertical: 5,
  },
});
