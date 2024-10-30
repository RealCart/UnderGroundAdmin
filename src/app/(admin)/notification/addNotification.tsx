import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { TOWHONOTIFICATIONS, METHODNOTIFICATIONS, USERSFILTER } from '@/src/screens/data/data';
import { AddNotificationInfoValidation } from '@/src/constants/Validations';
import { PageHeader } from '@/src/components/PageHeader';
import { Formik } from 'formik';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import MultilineInput from '@/src/components/admin/MultilineInput';
import Dropdown from '@/src/components/admin/Dropdown';
import GradientButton from '@/src/components/admin/GradientButton';
import DatePickerModal from '@/src/components/admin/datepicker';
import DateTimePickerModal from '@/src/components/admin/DateTimePicker';


const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const formatTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const AddNotificationForm = () => {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background');

  const Plan = () => {

  };

  return (
    <ThemedMainView>
      <PageHeader title="Создать уведомление" />
      <ScrollView>
        <Formik
          initialValues={{
            typeOf: '',
            title: '',
            text: '',
            toWho: '',
            filter: '',
            method: '',
            dateTime: {
              date: formatDate(new Date()),
              time: formatTime(new Date())
            },
          }}
          validationSchema={AddNotificationInfoValidation}
          onSubmit={(values) => {
            console.log('Submitting values:', values);
            Alert.alert('Submitted values', JSON.stringify(values));
          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
            <View style={[styles.container, { backgroundColor }]}>
              <View>
                <InfoFormInput
                  title="Тип уведомления"
                  placeholder="Напишите какой тип уведомления"
                  value={values.typeOf}
                  onChangeText={handleChange('typeOf')}
                />
                {touched.typeOf && errors.typeOf && (
                  <Text style={styles.error}>{errors.typeOf}</Text>
                )}

                <View style={styles.fromTop}>
                  <InfoFormInput
                    title="Заголовок уведомления"
                    placeholder="Введите заголовок"
                    value={values.title}
                    onChangeText={handleChange('title')}
                  />
                  {touched.title && errors.title && (
                    <Text style={styles.error}>{errors.title}</Text>
                  )}
                </View>

                <View style={styles.fromTop}>
                  <MultilineInput
                    title="Текст уведомления"
                    placeholder="Введите текст"
                    value={values.text}
                    onChangeText={handleChange('text')}
                  />
                  {touched.text && errors.text && (
                    <Text style={styles.error}>{errors.text}</Text>
                  )}
                </View>
              </View>

              <View style={styles.fromTop}>
                <Text style={styles.ttl}>Получатель</Text>
                <Dropdown
                  options={TOWHONOTIFICATIONS}
                  placeholder="Выберите получателя"
                  selectedOption={values.toWho}
                  onChange={(option) => setFieldValue('toWho', option)}
                />
                {touched.toWho && errors.toWho && (
                  <Text style={styles.error}>{errors.toWho}</Text>
                )}
              </View>

              <View style={styles.fromTop}>
                <Text style={styles.ttl}>Фильтр для клиентов</Text>
                <Dropdown
                  options={USERSFILTER}
                  selectedOption={values.filter}
                  placeholder="Выберите фильтр для клиентов"
                  onChange={(option) => setFieldValue('filter', option)}
                />
                {touched.filter && errors.filter && (
                  <Text style={styles.error}>{errors.filter}</Text>
                )}
              </View>

              <View style={styles.fromTop}>
                <Text style={styles.ttl}>Метод отправки</Text>
                <Dropdown
                  options={METHODNOTIFICATIONS}
                  placeholder="Выберите метод отправки"
                  selectedOption={values.method}
                  onChange={(option) => setFieldValue('method', option)}
                />
                {touched.method && errors.method && (
                  <Text style={styles.error}>{errors.method}</Text>
                )}
              </View>

              <View style={styles.fromTop}>
                <Text style={styles.ttl}>Дата и время отправки</Text>
                <DateTimePickerModal
                  initialDate={values.dateTime}
                  onDateChange={(dateTime) => setFieldValue('dateTime', dateTime)}
                />
                {touched.dateTime?.date && errors.dateTime?.date && (
                <Text style={styles.error}>{errors.dateTime.date}</Text>
                )}
                {touched.dateTime?.time && errors.dateTime?.time && (
                  <Text style={styles.error}>{errors.dateTime.time}</Text>
                )}
              </View>

              <View
                style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}
              >
                <View style={{ width: '48%', marginRight: 5 }}>
                  <GradientButton title="Отправить" toDo={() => handleSubmit()} />
                </View>
                <View style={{ width: '48%' }}>
                  <GradientButton title="Запланировать" toDo={Plan} />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </ThemedMainView>
  );
};

export default AddNotificationForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  ttl: {
    fontSize: 12,
    color: '#787878',
  },
  fromTop: {
    marginTop: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});
