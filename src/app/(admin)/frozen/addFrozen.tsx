import { ScrollView, View, Text, StyleSheet, Alert } from 'react-native'; 
import { useState } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { FrozenInfoValidation } from '@/src/constants/Validations';
import { PageHeader } from '@/src/components/PageHeader';
import { Formik } from 'formik';
import Snackbar from '@/src/components/admin/SnackBar';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import DatePickerModal from '@/src/components/admin/datepicker';
import TermPickerModal from '@/src/components/admin/Termpicker';
import GradientButton from '@/src/components/admin/GradientButton';
import InfoFormInput from '@/src/components/admin/InfoFormInput';

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

function EditFrozen() {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleCloseSnackbar = () => {
    setSnackbarVisible(false);
  };

  return (
    <Formik 
      initialValues={{
        name: '',
        reason: '',
        phone: '',
        data: formatDate(new Date()),
        termDate: {
          startDate: formatDate(new Date()),
          endDate: formatDate(new Date()),
        },
        status: '',
      }}
      validationSchema={FrozenInfoValidation}
      onSubmit={(values) => {
        Alert.alert(JSON.stringify(values));
        console.log(values);
        setSnackbarVisible(true);
      }}
    >
      {({ handleChange, handleSubmit, setFieldValue, values, errors, touched }) => (
        <ThemedMainView>
          <PageHeader title='Заморозка' />
          <ScrollView style={[styles.container, { backgroundColor }]}>
            <View style={styles.section}>
              <InfoFormInput
                title='Имя'
                placeholder='Напишите ФИО пользователя'
                value={values.name}
                onChangeText={handleChange('name')}
              />
              {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
            </View>
            <View style={styles.section}>
              <InfoFormInput
                title='Контактные данные'
                placeholder='Напишите контактные данные пользователя'
                value={values.phone}
                onChangeText={handleChange('phone')}
              />
              {touched.phone && errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
            </View>
            <View style={styles.section}>
              <Text style={styles.ttl}>Дата подачи заявки</Text>
              <DatePickerModal
                initialDate={values.data}
                onDateChange={(date) => setFieldValue('data', date)}
              />
              {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
            </View>
            <View style={styles.section}>
              <Text style={styles.ttl}>Период заморозки</Text>
              <TermPickerModal
                initialDate={values.termDate}
                onDateChange={(dates) => setFieldValue('termDate', dates)}
              />
              {touched.termDate?.startDate && errors.termDate?.startDate && (
                <Text style={styles.error}>{errors.termDate.startDate}</Text>
              )}
              {touched.termDate?.endDate && errors.termDate?.endDate && (
                <Text style={styles.error}>{errors.termDate.endDate}</Text>
              )}
            </View>
            <View style={styles.section}> 
              <InfoFormInput
                title='Причина заморозки'
                placeholder='Напишите причину заморозки пользователя'
                value={values.reason}
                onChangeText={handleChange('reason')}
              />
              {touched.reason && errors.reason && <Text style={styles.error}>{errors.reason}</Text>}
            </View>
            <View style={styles.section}>
              <InfoFormInput
                title='Статус'
                placeholder='Напишите cтатус пользователя'
                value={values.status}
                onChangeText={handleChange('status')}
              />
              {touched.status && errors.status && <Text style={styles.error}>{errors.status}</Text>}
            </View>
            <View>
              <GradientButton title='Добавить заморозку' toDo={handleSubmit} />
            </View>
          </ScrollView>
          {snackbarVisible && <Snackbar onClose={handleCloseSnackbar} />}
        </ThemedMainView>
      )}
    </Formik>
  );
}

export default EditFrozen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  btn: {
    backgroundColor: 'white',
    marginRight: 5,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 30,
  },
  btnText: {
    fontSize: 12,
  },
  ttl: {
    fontSize: 12, 
    color: '#787878',
  },
  section: {
    marginBottom: 10,
  },
});
