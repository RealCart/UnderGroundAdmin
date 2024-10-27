import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import { UserExtendSubscription } from '@/src/constants/Validations';
import { RightTurnArrow } from '../icons/Icon';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import PopUp from './PopUp'
import Snackbar from './SnackBar';
import { Formik } from 'formik'
import React, {useState} from 'react'
import InfoFormInput from './InfoFormInput';
import GradientButton from './GradientButton'
import DatePickerModal from './datepicker';
import { scale } from 'react-native-size-matters';

interface UserExtendSubscriptionModalProps {
    dataStart: string,
    modalVisible: boolean,
    setModalVisible: (visible: Boolean) => void,
}

const UserExtendSubscriptionModal:React.FC<UserExtendSubscriptionModalProps> = ({dataStart, modalVisible, setModalVisible}) => {
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    return (
        <PopUp modalVisible={modalVisible} setModalVisible={setModalVisible}>
            <Formik
                validationSchema={UserExtendSubscription} 
                initialValues={{
                dataStart: dataStart,
                dataEnd: new Date().toLocaleDateString(),
                price: 0,
                }}
                onSubmit={(values) => {
                console.log(values)
                Alert.alert(JSON.stringify(values))
                setModalVisible(false)
                }}
            >
                {({handleChange, handleSubmit, values, errors, touched}) => (
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
                                <Text style={styles.ttl}>Текущая дата окончания</Text>
                                <DatePickerModal initialDate={values.dataStart} onDateChange={handleChange('dataStart')}/>
                                {touched.dataStart && errors.dataStart && <Text style={styles.error}>{errors.dataStart}</Text>}
                            </View>
                            <View>
                                <Text style={styles.ttl}>Новая дата окончания</Text>
                                <DatePickerModal initialDate={values.dataEnd} onDateChange={handleChange('dataEnd')}/>
                                {touched.dataEnd && errors.dataEnd && <Text style={styles.error}>{errors.dataEnd}</Text>}
                            </View>
                            <InfoFormInput title='Стоимость' placeholder='Введите стоимость абонемента' value={values.price} onChangeText={handleChange('price')}/>
                            {touched.price && errors.price && <Text style={styles.error}>{errors.price}</Text>}
                        </View>
                        <View style={{marginTop:10}}>
                        <GradientButton title='Сохранить' toDo={handleSubmit}/>
                        </View>
                    </View>
                )}
            </Formik>
        </PopUp>
    )
}

export default UserExtendSubscriptionModal 

const styles = StyleSheet.create({
  arrow: {
    transform: [{ rotate: '180deg' }],
    marginRight:scale(80),
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  ttl: {
    fontSize: 12,
    color: '#787878',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 25,
    justifyContent: 'center',
    position: 'relative',
  },
})