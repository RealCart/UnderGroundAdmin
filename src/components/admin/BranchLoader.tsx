import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { useRouter } from 'expo-router';
import React from 'react'

interface BranchLoaderProps {
    title:string,
    value: string,
}

const BranchLoader:React.FC<BranchLoaderProps> = ({title, value}) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

  return (
    <View>
      <Text style={styles.ttl}>{title}</Text>
        <TextInput
          placeholderTextColor={textColor}
          style={[styles.input, {backgroundColor}, {color:textColor}]}
          value={value}
          editable={false}
        />
    </View>
  )
}

export default BranchLoader

const styles = StyleSheet.create({
      ttl: {
        fontSize: 12,
        color:'#787878'
      },
      dots: {
        position:"absolute",
        right:15,
        bottom:22,
      },
      input: {
        backgroundColor:'#F0F0F0',
        paddingVertical: 8,
        paddingRight:30,
        paddingLeft:25,
        borderRadius: 10,
        marginVertical: 5,
      },
})