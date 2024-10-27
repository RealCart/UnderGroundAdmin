import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import InfoFormInput from './InfoFormInput';
import GradientButton from '@/src/components/admin/GradientButton';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import DatePickerModal from './datepicker';
import { Formik } from 'formik';
import { EXPERINCE_OPTIONS } from '../../screens/data/data';
import { CoachInfoValidationSchema } from '@/src/constants/Validations';
import { SPECIALIZED_OPTIONS } from '../../screens/data/data';
import {scale} from "react-native-size-matters";
import {ThemedRadioButton} from "@/src/components/themedComponents/ThemedRadioButton";
import PhoneNumberInput from './PhoneNumberInput';
import MultiSelectDropdownList from './MultiDropdown';
import Dropdown from '@/src/components/admin/Dropdown';
import NotEditableInput from './NotEditableInput';
import MultilineInput from './MultilineInput';
import DynamicInputForm from './DynamicInputForm';
import MediaInput from './MediaInput';

interface Coach {
  phoneNumber: string,
  email: string,
  firstname: string,
  lastname: string,
  proffession:string,
  rating:number,
  sertificate:string[],
  expInput:string[],
  photoFromWorkOut:string[],
  changePhoto:string[],
  desc:string,
  date:string,
  gender: string,
  exp:string,
  specialized:any,
}

const CoachInfoForm: React.FC< {coach: Coach} > = ({ coach }) => {

  return (
    <Formik
      initialValues={{
        phoneNumber: coach.phoneNumber,
        email: coach.email,
        firstname: coach.firstname,
        lastname: coach.lastname,
        profession:coach.proffession,
        rating: coach.rating || 0,
        desc: coach.desc,
        sertificate:coach.sertificate,
        expInput:coach.expInput,
        photoFromWorkOut:coach.photoFromWorkOut,
        changePhoto:coach.changePhoto,
        date: coach.date,
        gender: coach.gender,
        exp: coach.exp,
        specialize: coach.specialized || [],
      }}
      validationSchema={CoachInfoValidationSchema}
      onSubmit={(values) => {
        Alert.alert(JSON.stringify(values))
        console.log(values)
      }}
    >
      {({handleChange, handleSubmit, setFieldValue, values, errors, touched}) => (
        <ScrollView showsVerticalScrollIndicator={false} style={[{}]}>
        <View style={styles.section}>
          <Text style={styles.label}>Контакты</Text>
          <PhoneNumberInput value={values.phoneNumber} onChangeText={handleChange('phoneNumber')}/>
          {touched.phoneNumber && errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}
          <InfoFormInput title="Email" placeholder='Электронный адресс' value={values.email} onChangeText={handleChange('email')}/>
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
        </View>

        <View>
          <Text style={styles.label}>Личные данные</Text>
            <InfoFormInput title="Имя" placeholder='Имя тренера' value={values.firstname} onChangeText={handleChange('firstname')}/>
            {touched.firstname && errors.firstname && <Text style={styles.error}>{errors.firstname}</Text>}
            <InfoFormInput title="Фамилия" placeholder='Фамилия тренера' value={values.lastname} onChangeText={handleChange('lastname')}/>
            {touched.lastname && errors.lastname && <Text style={styles.error}>{errors.lastname}</Text>}
            <InfoFormInput title='Проффессия' placeholder='Проффессия тренера' value={values.profession} onChangeText={handleChange('profession')}/>
            {touched.profession && errors.profession && <Text style={styles.error}>{errors.profession}</Text>}
            <NotEditableInput title='Рейтинг' value={String(values.rating)} onChangeText={handleChange('rating')} editable={false}/>
            <MultilineInput title='Описание' placeholder='Введите описание' value={values.desc} onChangeText={handleChange('desc')}/>
            {touched.desc && errors.desc && <Text style={styles.error}>{errors.desc}</Text>}
            <View>
              <Text style={styles.ttl}>Специальность</Text>
              <MultiSelectDropdownList
                options={SPECIALIZED_OPTIONS}
                selectedOption={values.specialize}
                onChange={(selectedValues) => setFieldValue('specialize', selectedValues)}
              />
              {touched.specialize && errors.specialize && (
                <Text style={styles.error}>{String(errors.specialize)}</Text>
              )}
            </View>
          {/* <View>
              <Text style={styles.ttl}>Дата рождения</Text>
              <DatePickerModal  initialDate={values.date} onDateChange={handleChange('date')}/>
              {touched.date && errors.date && <Text style={styles.error}>{errors.date}</Text>}
          </View> */}

          {/* <View style={{marginBottom:40}}>
              <Text style={styles.ttl}>Пол</Text>
              <View style={styles.radioGroup}>
                <ThemedRadioButton
                  label="Женский"
                  selected={values.gender === "Женский"}
                  onPress={() => setFieldValue("gender", "Женский")}
                />
               <ThemedRadioButton
                  label="Мужской"
                  selected={values.gender === "Мужской"}
                  onPress={() => setFieldValue("gender", "Мужской")}
                />
              </View>
              {touched.gender && errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
          </View> */}
          
          {/* <View>
            <Text style={styles.ttl}>Опыт работы</Text>
            <Dropdown selectedOption={values.exp} options={EXPERINCE_OPTIONS} onChange={handleChange('exp')} placeholder='Выберите опыт работы'/>
            {touched.exp && errors.exp && <Text style={styles.error}>{errors.exp}</Text>}
          </View> */}
          <View style={styles.section}>
            <DynamicInputForm 
              title='Образование и сертификаты' 
              placeholder='' 
              value={values.sertificate} 
              onChangeText={(newValues) => setFieldValue('sertificate', newValues)}  
              errors={Array.isArray(errors.sertificate) ? errors.sertificate : []}
              touched={Array.isArray(touched.sertificate) ? touched.sertificate : []} 
            />
          </View>
          <View style={styles.section}>
            <DynamicInputForm 
              title='Опыт' 
              placeholder='' 
              value={values.expInput} 
              onChangeText={(newValues) => setFieldValue('expInput', newValues)}  
              errors={Array.isArray(errors.expInput) ? errors.expInput : []}
              touched={Array.isArray(touched.expInput) ? touched.expInput : []} 
            />
          </View>
          <View style={styles.section}>
              <MediaInput
                title='Фотографии с тренировок' 
                value={values.photoFromWorkOut} 
                onImageSelect={(uris: string[]) => setFieldValue('photoFromWorkOut', uris)} 
              />
          </View>
          <View style={styles.section}>
              <MediaInput
                title='Фотографии до/после' 
                value={values.changePhoto} 
                onImageSelect={(uris: string[]) => setFieldValue('changePhoto', uris)} 
              />
          </View>

          <View style={{marginTop:20}}>
            <GradientButton title="Сохранить" toDo={handleSubmit}/>
          </View>
        </View>
      </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  inputForm: {
    padding: 5,
  },
  label: {
    fontSize: 14,
    marginBottom:5,
    color:'#787878',
  },
  ttl: {
    fontSize: 12,
    color:'#787878'
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: scale(10),
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  icon: {
    position:"absolute",
    zIndex:2,
    width:24,
    height:24,
    top:37,
    right: 20, 
  },
  section: {
    marginBottom:10,
  },
  input: {
    fontWeight:"600",
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor:'#e8e8e8',
    padding: 8,
    borderRadius: 10,
    marginVertical: 5,
  },
});

export default CoachInfoForm;