import { StyleSheet, Text, TextInput, View, TouchableOpacity  } from 'react-native'
import { useThemeColor } from '@/src/hooks/useThemeColor';
import React, { useState } from 'react'

interface MultilineProps {
    title:string,
    placeholder:string, 
    value: string,
    onChangeText: (text: string) => void
}

const MultilineInput:React.FC<MultilineProps> = ({title, placeholder, value, onChangeText}) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background'); 
  const iconColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  return (
    <View>
      <Text style={styles.ttl}>{title}</Text>
      <TextInput
        placeholderTextColor={textColor}
        style={[styles.input, {backgroundColor}, {color:textColor}]}
        placeholder={placeholder}
        value={value}
        multiline={true}
        numberOfLines={6}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  )
}

export default MultilineInput

const styles = StyleSheet.create({
      ttl: {
        fontSize: 12,
        color:'#787878'
      },
      dots: {
        position:"absolute",
        right:10,
        bottom:30,
      },
      input: {
        textAlignVertical:'top',
        backgroundColor:'#F0F0F0',
        paddingVertical: 8,
        paddingRight:30,
        paddingLeft:25,
        borderRadius: 10,
        marginVertical: 5,
      },
})