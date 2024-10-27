import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import MaskInput from 'react-native-mask-input';
import { scale } from 'react-native-size-matters';

interface PhoneNumberInputProps {
  value: string,
  onChangeText: (text: string) => void,
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ value, onChangeText }) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

  return (
    <View>
      <Text style={styles.ttl}>Телефон</Text>
      <View style={[styles.input, {backgroundColor}]}>
        <Text style={{color:textColor}}>+7 </Text>
        <MaskInput
          style={{color:textColor, flex:1}}
          value={value}
          maxLength={15}
          keyboardType="phone-pad"
          onChangeText={(masked) =>{
            onChangeText(masked)
          }}
          placeholderTextColor={textColor}
          mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ttl: {
    fontSize: 12,
    color: '#787878',
  },
  input: {
    flexDirection:'row', 
    alignItems:'center',
    paddingVertical:Platform.OS === 'android' ? scale(5) : scale(10),
    paddingHorizontal:scale(15),
    borderRadius: 10,
    marginVertical: 5,
  },
});

export default PhoneNumberInput;