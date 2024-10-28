import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import { UserEditSchedule } from '@/src/constants/Validations'
import { Formik } from 'formik'
import { RightTurnArrow } from '../icons/Icon';
import { BRANCH, TIME_OPTIONS } from '@/src/screens/data/data';
import PopUp from './PopUp'
import GradientButton from './GradientButton';
import Snackbar from './SnackBar';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import DropdownList from './Dropdown';
import InfoFormInput from './InfoFormInput';
import DatePickerModal from './datepicker';
import React, {useState} from 'react'
import { scale } from 'react-native-size-matters';

interface CoachAddWorkOutModalProps {
    modalVisible:boolean,
    setModalVisible: (visible: Boolean) => void,
}

const CoachAddWorkOutModal:React.FC<CoachAddWorkOutModalProps> = ({modalVisible, setModalVisible}) => {
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    return (
        <PopUp modalVisible={modalVisible} setModalVisible={setModalVisible}>
            <Formik
                validationSchema={UserEditSchedule}
                initialValues={{
                    class: '',
                    coach: '',
                    branch: '',
                    data: new Date().toLocaleDateString(),
                    time:'',
                }}
                onSubmit={(values) => {
                    console.log(values)
                    Alert.alert(JSON.stringify(values))
                    setModalVisible(false)
                }}
            >
                {({errors, touched, values, handleChange, handleSubmit}) => (
                    <View>
                        <View style={{flexDirection:'row', marginBottom:scale(25), alignItems:'center'}}>
                            <TouchableOpacity 
                                style={styles.arrow}
                                hitSlop={{ top: 20, bottom: 20, right:20, left:20 }} 
                                onPress={() => setModalVisible(false)}
                            >
                                <RightTurnArrow color={textColor}/>
                            </TouchableOpacity>
                            <Text style={[styles.mainTitle, {color:textColor}]}>Редактрировать</Text>
                        </View>
                        <InfoFormInput title='Название занятия' placeholder='Введите название занятия' value={values.class} onChangeText={handleChange('class')}/>
                        {touched.class && errors.class && <Text style={styles.error}>{errors.class}</Text>}
                        <InfoFormInput title='Тренер' placeholder='Введите ФИО тренера' value={values.coach} onChangeText={handleChange('coach')}/>
                        {touched.coach && errors.coach && <Text style={styles.error}>{errors.coach}</Text>}
                        <View>
                            <Text style={styles.ttl}>Филиал</Text>
                            <DropdownList options={BRANCH} selectedOption={values.branch} onChange={handleChange('branch')} placeholder='Выберите филиал'/> 
                            {touched.branch && errors.branch && <Text style={styles.error}>{errors.branch}</Text>}
                        </View>
                        <View>
                            <Text style={styles.ttl}>Дата</Text>
                            <DatePickerModal initialDate={values.data} onDateChange={handleChange('data')}/>
                            {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
                        </View>
                        <View>
                            <Text style={styles.ttl}>Время</Text>
                            <DropdownList options={TIME_OPTIONS} selectedOption={values.time} onChange={handleChange('time')} placeholder='Выберите время'/>
                            {touched.time && errors.time && <Text style={styles.error}>{errors.time}</Text>}
                        </View>
                        <View style={{marginTop:scale(10)}}>
                            <GradientButton title='Сохранить' toDo={handleSubmit}/>
                        </View>
                    </View>
                )}
            </Formik>
        </PopUp>
    )
}

export default CoachAddWorkOutModal

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