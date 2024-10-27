import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { SPECIALIZED_OPTIONS } from '@/src/screens/data/data';
import { COACH } from '@/src/screens/data/data';
import { TIME_OPTIONS } from '@/src/screens/data/data';
import { BRANCH } from '@/src/screens/data/data';
import { ScheduleInfoValidation } from '@/src/constants/Validations';
import { Formik } from 'formik';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import { PageHeader } from '@/src/components/PageHeader';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import DatePickerModal from '@/src/components/admin/datepicker';
import Dropdown from '@/src/components/admin/Dropdown';
import GradientButton from '@/src/components/admin/GradientButton';
import React from 'react';

const addWorkOutForm = () => {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

  return (
    <Formik
      initialValues={{
        title:'',
        coach:'',
        data: new Date().toLocaleDateString(),
        time:'',
        branch:'',
        recorded:'',
        notes:'',
      }}
      validationSchema={ScheduleInfoValidation}
      onSubmit={(values) => {
        Alert.alert(JSON.stringify(values))
        console.log(values)
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <ThemedMainView>
          <PageHeader title='Добавить тренировку'/>
          <ScrollView style={[styles.container, {backgroundColor}]}>
          <View>
            <View>
              <View>
                <Text style={styles.ttl}>Название занятия</Text>
                <Dropdown 
                  options={SPECIALIZED_OPTIONS} 
                  selectedOption={values.title} 
                  placeholder='Выберите занятие'
                  onChange={handleChange('title')}
                />
                {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
              </View>
              <View>
                <Text style={styles.ttl}>Тренер</Text>
                <Dropdown 
                  options={COACH} 
                  selectedOption={values.coach} 
                  placeholder='Выберите тренера'
                  onChange={handleChange('coach')}
                />
                {touched.coach && errors.coach && <Text style={styles.error}>{errors.coach}</Text>}
              </View>
              <View>
                <Text style={styles.ttl}>Дата</Text>
                <DatePickerModal 
                  initialDate={values.data} 
                  onDateChange={handleChange('data')} 
                />
                {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
              </View>
              <View>
                <Text style={styles.ttl}>Время</Text>
                <Dropdown 
                  options={TIME_OPTIONS} 
                  selectedOption={values.time} 
                  placeholder='Выберите время'
                  onChange={handleChange('time')}
                />
                {touched.time && errors.time && <Text style={styles.error}>{errors.time}</Text>}
              </View>
              <View>
                <Text style={styles.ttl}>Филиал</Text>
                <Dropdown 
                  options={BRANCH} 
                  selectedOption={values.branch} 
                  placeholder='Выберите филиал'
                  onChange={handleChange('branch')}
                />
                {touched.branch && errors.branch && <Text style={styles.error}>{errors.branch}</Text>}
              </View>
              <InfoFormInput 
                title="Записаны" 
                placeholder='Напишите записи пользователя'
                value={values.recorded} 
                onChangeText={handleChange('recorded')} 
              />
              {touched.recorded && errors.recorded && <Text style={styles.error}>{errors.recorded}</Text>}
              <InfoFormInput 
                title="Заметки" 
                placeholder='Напишите заметки пользователя' 
                value={values.notes} 
                onChangeText={handleChange('notes')} 
              />
            </View>
            <View style={{marginTop:20}}>
              <GradientButton title="Сохранить" toDo={handleSubmit}/>
            </View>
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
  ttl: {
    fontSize:12, 
    color:'#787878'
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

