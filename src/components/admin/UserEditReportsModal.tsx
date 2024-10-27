import { StyleSheet, Text, View } from 'react-native'
import PopUp from './PopUp'
import React, {useState} from 'react'

interface UserEditReportsModalProps {
    modalVisible: boolean,
    setModalVisible: (visible: Boolean) => void,
}

const UserEditReportsModal:React.FC<UserEditReportsModalProps> = ({modalVisible, setModalVisible}) => {
  return (
    <PopUp modalVisible={modalVisible} setModalVisible={setModalVisible}>
        
    </PopUp>
  )
}

export default UserEditReportsModal

const styles = StyleSheet.create({})