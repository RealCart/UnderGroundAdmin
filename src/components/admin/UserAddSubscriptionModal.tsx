import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import { UserEditSubscription } from '@/src/constants/Validations';
import { RightTurnArrow } from '../icons/Icon';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { TYPEOFSUBS } from '@/src/screens/data/data';
import { STATUS } from '@/src/screens/data/data';
import React, {useState} from 'react'
import { Formik } from 'formik'
import Snackbar from './SnackBar';
import PopUp from './PopUp'
import InfoFormInput from './InfoFormInput';
import GradientButton from './GradientButton'
import DatePickerModal from './datepicker';
import DropdownList from './Dropdown';

interface UserAddSubscriptionModalProps {
    modalVisible: boolean,
    setModalVisible: (visible: Boolean) => void,
}

const UserAddSubscriptionModal:React.FC<UserAddSubscriptionModalProps> = ({ modalVisible, setModalVisible }) => {
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  return (
    <PopUp modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Formik
        validationSchema={UserEditSubscription}
        initialValues={{
          type:'',
          dataStart:new Date().toLocaleDateString(),
          dataEnd:new Date().toLocaleDateString(),
          price:'',
          status:'',
        }} 
        onSubmit={(values) => {
          console.log(values)
          Alert.alert(JSON.stringify(values))
          setModalVisible(false)
        }}
      >
        {({touched, errors, values, handleChange, handleSubmit}) => (
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
              <View>
                <Text style={styles.ttl}>Тип абонемента</Text>
                <DropdownList options={TYPEOFSUBS} selectedOption={values.type} onChange={handleChange('type')}/>
                {touched.type && errors.type && <Text style={styles.error}>{errors.type}</Text>}
              </View>
              <View>
                <Text style={styles.ttl}>Дата начала</Text>
                <DatePickerModal initialDate={values.dataStart} onDateChange={handleChange('dataStart')}/>
                {touched.dataStart && errors.dataStart && <Text style={styles.error}>{errors.dataStart}</Text>}
              </View>
              <View>
                <Text style={styles.ttl}>Дата окончания</Text>
                <DatePickerModal initialDate={values.dataEnd} onDateChange={handleChange('dataEnd')}/>
                {touched.dataEnd && errors.dataEnd && <Text style={styles.error}>{errors.dataEnd}</Text>}
              </View>
              <InfoFormInput title='Стоимость' placeholder='Введите стоимомть' value={values.price} onChangeText={handleChange('price')}/>
              {touched.price && errors.price && <Text style={styles.error}>{errors.price}</Text>}
              <View>
                <Text style={styles.ttl}>Статус</Text>
                <DropdownList options={STATUS} selectedOption={values.status} onChange={handleChange('status')}/>
                {touched.status && errors.status && <Text style={styles.error}>{errors.status}</Text>}
              </View>
              <View style={{marginTop:10}}>
                <GradientButton title='Сохранить' toDo={handleSubmit}/>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </PopUp>
  )
}

export default UserAddSubscriptionModal

const styles = StyleSheet.create({
    arrow: {
        justifyContent:'center',
        position:'absolute',
        left:4,
        top:6,
        transform:[{rotate:'180deg'}]
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