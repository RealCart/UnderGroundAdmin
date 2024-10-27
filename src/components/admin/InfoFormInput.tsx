import { StyleSheet, Text, TextInput, View, TouchableOpacity, Platform  } from 'react-native'
import { Dots } from '@/src/components/icons/Icon'
import { useThemeColor } from '@/src/hooks/useThemeColor';
import React, { useState } from 'react'
import { scale } from 'react-native-size-matters';

interface InfoFormInputProps {
    title:string,
    placeholder:string, 
    value: any,
    editable?:boolean,
    keyboardType?: 'default' | 'numeric';
    onChangeText: (text: string) => void
}

const InfoFormInput:React.FC<InfoFormInputProps> = ({title, placeholder, value, editable, keyboardType, onChangeText}) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background'); 
  const iconColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  return (
    <View>
      <Text style={styles.ttl}>{title}</Text>
      <View style={[styles.inputConatiner, {backgroundColor}]}>
        <TextInput
          placeholderTextColor={textColor}
          style={[styles.input, {color:textColor}]}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          onChangeText={(text) => onChangeText(text)}
          editable={editable}
        />
        <TouchableOpacity style={{marginRight:17}}>
          {React.cloneElement(<Dots/>, { color: iconColor })}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default InfoFormInput

const styles = StyleSheet.create({
      ttl: {
        fontSize: 12,
        color:'#787878'
      },
      inputConatiner: {
        marginVertical:5,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
      },
      input: {
        flex:1,
        paddingVertical:Platform.OS === 'android' ? scale(5) : scale(10),
        paddingHorizontal:scale(15),
      },
})