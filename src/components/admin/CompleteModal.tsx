import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/src/hooks/useThemeColor'
import PopUp from './PopUp'
import GradientButton from './GradientButton'

interface CompleteModalProps {
    modalVisible: boolean,
    completeModal: () => void,
    setModalVisible: (visible: Boolean) => void,
}

const CompleteModal:React.FC<CompleteModalProps> = ({modalVisible, completeModal, setModalVisible}) => {
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const deleteGradient = () => {
        completeModal
        setModalVisible(false);
    }
    return (
        <View>
            <PopUp modalVisible={modalVisible} setModalVisible={setModalVisible}>
                <View style={{alignItems:'center', justifyContent:'center', marginBottom:25}}>
                    <Text style={[{color:textColor,}]}>Вы уверенны, что хотите{'\n'}               завершить?</Text>
                </View>
                <View style={{marginBottom:10}}>
                    <GradientButton title='Да, завершить' toDo={() => deleteGradient()}/>
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

export default CompleteModal

const styles = StyleSheet.create({
    close: {
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        borderRadius:15,
        paddingVertical:10,
    },
})