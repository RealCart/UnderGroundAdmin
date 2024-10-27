import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { EditIcon, MessageIcon, DeleteIcon, LockIcon } from '../icons/Icon'
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { Avatar } from '@/src/components/icons/Icon';
import PopUp from './PopUp';
import React from 'react'

interface AvatarProps {
  src: string;
  isAvatarShow: boolean;
  firstname:string, 
  lastname:string
  onDelete: () => void;
  setAvatarShow: (visible: boolean) => void;
}


const ProfileHeader:React.FC<AvatarProps> = ({ src, isAvatarShow, firstname, lastname, onDelete, setAvatarShow }) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#FFFFFF' }, 'background'); 
  const iconColor = useThemeColor({ light: 'black', dark: 'white' }, 'icon');
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  return (
    <View>
      <View style={{flexDirection:'row', marginBottom:20, alignItems:'center'}}>
        <View>
          <TouchableOpacity onPress={() => setAvatarShow(true)}>
            {src ? (
              <Image source={{ uri: src }} style={styles.avatar} />
            ) : (
              <Avatar style={styles.avatar}/>
            )}
          </TouchableOpacity>
          <PopUp modalVisible={isAvatarShow} setModalVisible={setAvatarShow}>
              <View>
                <View style={{alignItems:'center'}}>
                  {src ? (
                    <Image source={{ uri: src }} style={styles.WideAvatar}/>
                  ) : (
                    <Avatar style={styles.WideAvatar}/>
                  )}
                </View>
                <View>
                  <TouchableOpacity style={{marginVertical:10}} onPress={() => onDelete}>
                    <View style={[styles.btn, {backgroundColor:backgroundColor}]}>
                      <Text style={{color:'red'}}>Удалить</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setAvatarShow(false)}>
                    <View style={[styles.btn, {backgroundColor:backgroundColor}]}>
                      <Text>Отменить</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
          </PopUp>
        </View>
        <View style={{marginLeft:15}}>
            <Text style={[{color:textColor}]}>{firstname} {lastname}</Text>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:5,}}>  
                <TouchableOpacity style ={{marginRight:10}}>
                  <EditIcon color={iconColor}/>
                </TouchableOpacity>
                <TouchableOpacity style ={{marginRight:10}}>
                    <MessageIcon color={iconColor}/>
                </TouchableOpacity> 
                <TouchableOpacity style ={{marginRight:10}}>
                    <DeleteIcon color={iconColor}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LockIcon color={iconColor}/>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
  avatar: {
    width:58, 
    height:58, 
    borderRadius:100
  },
  WideAvatar: {
    width:300,
    height:300,
    borderRadius:40
  },
  btn: {
    alignItems:'center',
    paddingVertical:8,
    borderRadius:10,
  }
})