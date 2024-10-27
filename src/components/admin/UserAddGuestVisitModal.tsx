import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import { UserEditGuestValidation } from '@/src/constants/Validations';
import { RightTurnArrow } from '../icons/Icon';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { Formik } from 'formik'
import React, {useState} from 'react'
import Snackbar from './SnackBar';
import PopUp from './PopUp'
import InfoFormInput from './InfoFormInput';
import GradientButton from './GradientButton'
import DatePickerModal from './datepicker';
import PhoneNumberInput from './PhoneNumberInput'
import { scale } from 'react-native-size-matters';

interface UserAddGuestVisitModalProps {
    modalVisible: boolean,
    setModalVisible: (visible: Boolean) => void,
}

const UserAddGuestVisitModal:React.FC<UserAddGuestVisitModalProps> = ({ modalVisible, setModalVisible }) => {
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  return (
    <PopUp modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Formik
        validationSchema={UserEditGuestValidation}
        initialValues={{
          name: '',
          phoneNumber: '',
          data: new Date().toLocaleDateString(),
        }}
        onSubmit={(values) => {
          console.log(values)
          Alert.alert(JSON.stringify(values))
          setModalVisible(false)
        }}
      >
        {({errors, touched, values, handleChange, handleSubmit}) => (
          <View>
            <View style={{flexDirection:'row', alignItems:'center', marginBottom:15}}> 
              <TouchableOpacity 
                style={styles.arrow}
                hitSlop={{ top: 20, bottom: 20, right:20, left:20 }} 
                onPress={() => setModalVisible(false)}
              >
                <RightTurnArrow color={textColor}/>
              </TouchableOpacity>
              <Text style={[styles.mainTitle, {color:textColor}]}>Добавить абонемент</Text>
            </View>
            <View>
              <InfoFormInput title='ФИО' placeholder='Введите ФИО пользователя' value={values.name} onChangeText={handleChange('name')}/>
              {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
              <PhoneNumberInput value={values.phoneNumber} onChangeText={handleChange('phoneNumber')}/>
              {touched.phoneNumber && errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}
              <View>
                <Text style={styles.ttl}>Дата</Text>
                <DatePickerModal initialDate={values.data} onDateChange={handleChange('data')}/>
                {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
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

export default UserAddGuestVisitModal

const styles = StyleSheet.create({
    arrow: {
      transform: [{ rotate: '180deg' }],
      marginRight:scale(60),
    },
    mainTitle: {
        fontSize:16,
        fontWeight:'500',
    },
    ttl: {
          fontSize: 12, 
          color: '#787878'
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
})