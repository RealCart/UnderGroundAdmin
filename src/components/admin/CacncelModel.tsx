import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useThemeColor } from '@/src/hooks/useThemeColor'
import PopUp from './PopUp'
import GradientButton from './GradientButton'

interface CancelModelProps {
    modalVisible: boolean,
    cancelGradient: () => void;
    setModalVisible: (visible: Boolean) => void,
}

const CancelModel:React.FC<CancelModelProps> = ({modalVisible, cancelGradient, setModalVisible}) => {
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const cancel = () => {
        cancelGradient()
        setModalVisible(false)
    }
    return (
        <View>
            <PopUp modalVisible={modalVisible} setModalVisible={setModalVisible}>
                <View style={{alignItems:'center', justifyContent:'center', marginBottom:25}}>
                    <Text style={[{color:textColor}]}>Вы уверенны, что хотите{'\n'}              отменить?</Text>
                </View>
                <View style={{marginBottom:10}}>
                    <GradientButton title='Да, отменить' toDo={cancel}/>
                </View>
                <View>
                    <TouchableOpacity style={styles.close} onPress={() => setModalVisible(false)}>
                        <Text>Закрыть</Text>
                    </TouchableOpacity>
                </View>
            </PopUp>
        </View>
    )
}

export default CancelModel

const styles = StyleSheet.create({
    close: {
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        borderRadius:15,
        paddingVertical:10,
    },
})