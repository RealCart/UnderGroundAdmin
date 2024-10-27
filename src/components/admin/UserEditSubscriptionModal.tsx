import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import { UserEditSubscription } from '@/src/constants/Validations';
import { RightTurnArrow } from '../icons/Icon';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { TYPEOFSUBS } from '@/src/screens/data/data';
import { STATUS } from '@/src/screens/data/data';
import { Formik } from 'formik'
import { scale } from 'react-native-size-matters';
import Snackbar from './SnackBar';
import PopUp from './PopUp'
import InfoFormInput from './InfoFormInput';
import GradientButton from './GradientButton'
import DatePickerModal from './datepicker';
import DropdownList from './Dropdown';
import React from 'react'

interface UserEditSubscriptionModalProps {
    type: string,
    dataStart: string,
    dataEnd:string,
    price:number,
    status:string,
    modalVisible: boolean,
    setModalVisible: (visible: Boolean) => void,
}

const UserEditSubscriptionModal: React.FC<UserEditSubscriptionModalProps> = ({
  type,
  dataStart,
  dataEnd,
  price,
  status,
  modalVisible,
  setModalVisible,
}) => {
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  return (
    <PopUp modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <Formik
          validationSchema={UserEditSubscription} 
          initialValues={{
            type: type,
            dataStart: dataStart,
            dataEnd: dataEnd,
            price: price.toString(),
            status: status,
          }}
          onSubmit={(values) => {
            console.log(values);
            Alert.alert(JSON.stringify(values));
            setModalVisible(false);
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
                      <Text style={styles.ttl}>Тип абонемента</Text>
                      <DropdownList  options={TYPEOFSUBS} selectedOption={values.type} onChange={handleChange('type')}/>
                      {touched.type && errors.type && <Text style={styles.error}>{errors.type}</Text>}
                    </View>
                    <View>
                      <Text style={styles.ttl}>Дата начала</Text>
                      <DatePickerModal initialDate={values.dataStart} onDateChange={handleChange('dataStart')}/>
                      {touched.type && errors.type && <Text style={styles.error}>{errors.type}</Text>} 
                    </View>
                    <View>
                      <Text style={styles.ttl}>Дата окончания</Text>
                      <DatePickerModal initialDate={values.dataEnd} onDateChange={handleChange('dataEnd')}/>
                      {touched.dataEnd && errors.dataEnd && <Text style={styles.error}>{errors.dataEnd}</Text>}
                    </View>
                    <InfoFormInput 
                      title='Стоимость' 
                      placeholder='Введите стоимость абонемента' 
                      value={values.price} 
                      onChangeText={handleChange('price')}
                    />
                    <View>
                      <Text style={styles.ttl}>Статус</Text>
                      <DropdownList options={STATUS} selectedOption={values.status} onChange={handleChange('status')}/>
                    </View>
                  </View>
                  <View style={{marginTop:10}}>
                    <GradientButton title='Сохранить' toDo={handleSubmit}/>
                  </View>
              </View>
            )}
        </Formik>
      </PopUp>
  );
};

export default UserEditSubscriptionModal;

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
});
