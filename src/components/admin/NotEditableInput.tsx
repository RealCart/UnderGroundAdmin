import { StyleSheet, Text, TextInput, View, TouchableOpacity, Platform  } from 'react-native'
import { RightTurnArrow } from '../icons/Icon';
import { scale } from 'react-native-size-matters';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { useRouter } from 'expo-router';
import React from 'react'

interface NotEditableInputProps {
    title:string,
    value: any,
    path?:string,
    editable?:boolean,
    branchId?:number,
    onChangeText: (text: string) => void
}

const NotEditableInput:React.FC<NotEditableInputProps> = ({title, value, path, branchId, editable, onChangeText}) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background'); 
  const iconColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const router = useRouter(); 

  return (
    <View>
      <Text style={styles.ttl}>{title}</Text>
      <View style={[styles.inputBox, {backgroundColor}]}>
        <TextInput
          placeholderTextColor={textColor}
          value={value}
          editable={editable}
          style={[styles.input, {color:textColor}]}
          onChangeText={(text) => onChangeText(text)}
          keyboardType='number-pad'
        />
        <TouchableOpacity 
          hitSlop={{ top:20, bottom:20, right:20, left:20 }} 
          onPress={() => {
            router.push({
              pathname: `./${path}/[id]`,
              params: {id: branchId}
            })
          }}
        >
          <View style={styles.icon}>
            {React.cloneElement(<RightTurnArrow/>, { color: iconColor })}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NotEditableInput

const styles = StyleSheet.create({
      ttl: {
        fontSize: 12,
        color:'#787878'
      },
      input: {
        flex:1,
        paddingVertical:Platform.OS === 'android' ? scale(5) : scale(10),
        paddingHorizontal:scale(15),
      },
      inputBox: {
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
      },
      icon: {
        marginRight:19,
      },
})