import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { WAYTOPAY } from '@/src/screens/data/data';
import { TYPEOFSUBS } from '@/src/screens/data/data';
import { TYPEOFSTATUS } from '@/src/screens/data/data';
import { PageHeader } from '@/src/components/PageHeader';
import { Formik } from 'formik';
import { PaymentsInfoValidation } from '@/src/constants/Validations';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import DatePickerModal from '@/src/components/admin/datepicker';
import Dropdown from '@/src/components/admin/Dropdown';
import GradientButton from '@/src/components/admin/GradientButton';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import React, {useState} from 'react';

const addWorkOutForm = () => {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

  return (
    <Formik
      initialValues={{
        data:new Date().toLocaleDateString(),
        client:'',
        payedBy:'',
        service:'',
        amountOf:'',
        status:'',
      }}
      validationSchema={PaymentsInfoValidation}
      onSubmit={(values) => {
        Alert.alert(JSON.stringify(values))
        console.log(values)
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <ThemedMainView>
        <PageHeader title='Добавить платеж'/>
        <ScrollView style={[styles.container, {backgroundColor}]}>
            <InfoFormInput title='Клиент' placeholder='ФИО клиента' value={values.client} onChangeText={handleChange('client')}/>
            {touched.client && errors.client && <Text style={styles.error}>{errors.client}</Text>}
            <View>
              <Text style={styles.ttl}>Дата платежа</Text>
              <DatePickerModal initialDate={values.data} onDateChange={handleChange('data')}/>
              {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
            </View>
            <View>
                <Text style={styles.ttl}>Метод оплаты</Text>
                <Dropdown options={WAYTOPAY} selectedOption={values.payedBy} onChange={handleChange('payedBy')} placeholder=' '/>
                {touched.payedBy && errors.payedBy && <Text style={styles.error}>{errors.payedBy}</Text>}
            </View>
            <View>
                <Text style={styles.ttl}>Услуга</Text>
                <Dropdown options={TYPEOFSUBS} selectedOption={values.service} onChange={(handleChange('service'))} placeholder=' '/>
                {touched.service && errors.service && <Text style={styles.error}>{errors.service}</Text>}
            </View>
            <InfoFormInput title='Сумма' placeholder='Сумма платежа' value={values.amountOf} onChangeText={handleChange('amountOf')}/>
            {touched.amountOf && errors.amountOf && <Text style={styles.error}>{errors.amountOf}</Text>}
            <View>
                <Text style={styles.ttl}>Статус</Text>
                <Dropdown options={TYPEOFSTATUS} selectedOption={values.status} onChange={handleChange('status')} placeholder=' '/>
                {touched.status && errors.status && <Text style={styles.error}>{errors.status}</Text>}
            </View>
            <View style={{marginTop:10}}>
              <GradientButton title='Добавить платеж' toDo={handleSubmit}/>
            </View>
        </ScrollView>
        </ThemedMainView>
      )}
    </Formik>
  );
};

export default addWorkOutForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  ttl: {
    fontSize:12, 
    color:'#787878'
  }
});