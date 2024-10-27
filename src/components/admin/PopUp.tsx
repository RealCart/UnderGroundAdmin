import { StyleSheet, Pressable, View, TouchableWithoutFeedback } from 'react-native'
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { Modal } from 'react-native'
import React from 'react'

type PopUpProps = {
    children: React.ReactNode,
    modalVisible: boolean,
    setModalVisible: (visible: boolean) => void,
}

const Popup:React.FC<PopUpProps> = ({ children, modalVisible, setModalVisible}) => {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType='fade'
            onRequestClose={() => setModalVisible(false)}
        >
            <Pressable style={styles.modalContainer} onPress={() => setModalVisible(false)}>
                <TouchableWithoutFeedback>
                    <View style={[styles.modalContent, { backgroundColor }]}>
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </Pressable>
        </Modal>
    )
}

export default Popup;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        zIndex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        zIndex:2,
        width: '90%',
        borderRadius: 15,
        padding: 20,
    },
})