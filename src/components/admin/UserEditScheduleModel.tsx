import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import { UserEditSchedule } from '@/src/constants/Validations'
import { Formik } from 'formik'
import { RightTurnArrow } from '../icons/Icon';
import { TIME_OPTIONS, SPECIALIZED_OPTIONS } from '@/src/screens/data/data';
import { scale } from 'react-native-size-matters';
import PopUp from './PopUp'
import Snackbar from './SnackBar';
import GradientButton from './GradientButton';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import DropdownList from './Dropdown';
import InfoFormInput from './InfoFormInput';
import DatePickerModal from './datepicker';
import React, {useState} from 'react'

interface UserEditScheduleModelProps {
    typeOfTraining:string,
    coach:string,
    data:string,
    time:string,
    modalVisible:boolean,
    setModalVisible: (visible: Boolean) => void,
}

const UserEditScheduleModel:React.FC<UserEditScheduleModelProps> = ({typeOfTraining, coach, data, time, modalVisible, setModalVisible}) => {
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    return (
        <PopUp modalVisible={modalVisible} setModalVisible={setModalVisible}>
            <Formik
                validationSchema={UserEditSchedule}
                initialValues={{
                    class:typeOfTraining,
                    coach:coach,
                    data:data,
                    time:time,
                }}
                onSubmit={(values) => {
                    console.log(values),
                    Alert.alert(JSON.stringify(values)),
                    setModalVisible(false)
                }}
            >
                {({errors, values, touched, handleChange, handleSubmit}) => (
                    <View>
                        <View style={{flexDirection:'row', alignItems:'center', marginBottom:15}}> 
                            <TouchableOpacity 
                            style={styles.arrow}
                            hitSlop={{ top: 20, bottom: 20, right:20, left:20 }} 
                            onPress={() => setModalVisible(false)}
                            >
                            <RightTurnArrow color={textColor}/>
                            </TouchableOpacity>
                            <Text style={[styles.mainTitle, {color:textColor}]}>Редактировать</Text>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.ttl}>Название занятия</Text>
                                <DropdownList options={SPECIALIZED_OPTIONS} selectedOption={values.class} onChange={handleChange('class')}/>
                                {touched.class && errors.class && <Text style={styles.error}>{errors.class}</Text>} 
                            </View>
                            <InfoFormInput title='Тренер' placeholder='Введите ФИО тренера' value={values.coach} onChangeText={handleChange('coach')}/>
                            {touched.coach && errors.coach && <Text style={styles.error}>{errors.coach}</Text>}
                            <View>
                                <Text style={styles.ttl}>Дата</Text>
                                <DatePickerModal initialDate={values.data} onDateChange={handleChange('data')}/>
                                {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
                            </View>
                            <View>
                                <Text style={styles.ttl}>Время</Text>
                                <DropdownList options={TIME_OPTIONS} selectedOption={values.time} onChange={handleChange('time')}/>
                                {touched.time && errors.time && <Text style={styles.error}>{errors.time}</Text>}
                            </View>
                            <View style={{marginTop:scale(10)}}>
                                <GradientButton title='Сохранить' toDo={handleSubmit}/>
                            </View>
                        </View>
                    </View>
                )}
            </Formik>
        </PopUp>
    )
}

export default UserEditScheduleModel

const styles = StyleSheet.create({
    arrow: {
        transform: [{ rotate: '180deg' }],
        marginRight:scale(80),
    },
    mainTitle: {
        fontSize:16,
        fontWeight:'500',
    },
    ttl: {
          fontSize: 12, 
          color: '#787878'
    },
    close: {
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        borderRadius:15,
        paddingVertical:10,
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
})