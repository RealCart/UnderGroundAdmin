import React from 'react';
import { Formik } from 'formik';
import { ScrollView, View, Text, StyleSheet, Alert } from 'react-native';
import UserInfoFormInput from './InfoFormInput';
import PhoneNumberInput from './PhoneNumberInput';
import GradientButton from './GradientButton';
import DatePickerModal from '@/src/components/admin/datepicker';
import { UserInfoValidationSchema } from '@/src/constants/Validations';
import {scale} from "react-native-size-matters";
import {ThemedRadioButton} from "@/src/components/themedComponents/ThemedRadioButton";

interface User {
  date:string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string,
  gender: string,
}

const UserInfoForm: React.FC< {user: User} > = ({ user }) => {
  return (
    <Formik
      initialValues={{
        phoneNumber: user.phoneNumber,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        date: user.date,
        gender: user.gender,
      }}
      validationSchema={UserInfoValidationSchema}
      onSubmit={(values) => {
        Alert.alert(JSON.stringify(values))
        console.log(values)
      }}
    >
      {({ handleChange, handleSubmit, setFieldValue, values, errors, touched }) => (
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.label}>Контакты</Text>
              <PhoneNumberInput 
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
              />
              {touched.phoneNumber && errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}

              <UserInfoFormInput
                title="Email"
                placeholder="Электронный адрес"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
          </View>

          <View>
            <Text style={styles.label}>Личные данные</Text>
            <UserInfoFormInput
              title="Имя"
              placeholder="Имя пользователя"
              value={values.firstname}
              onChangeText={handleChange('firstname')}
            />
            {touched.firstname && errors.firstname && <Text style={styles.error}>{errors.firstname}</Text>}
            
            <UserInfoFormInput
              title="Фамилия"
              placeholder="Фамилия пользователя"
              value={values.lastname}
              onChangeText={handleChange('lastname')}
            />
            {touched.lastname && errors.lastname && <Text style={styles.error}>{errors.lastname}</Text>}

            <View>
              <Text style={styles.ttl}>Дата рождения</Text>
              <DatePickerModal
                initialDate={values.date}
                onDateChange={handleChange('date')}
              />
              {touched.date && errors.date && <Text style={styles.error}>{errors.date}</Text>}
            </View>

            <View>
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
            </View>
          </View>

          <View style={{marginTop:20}}>
            <GradientButton title="Сохранить" toDo={() => handleSubmit()} />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#787878',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: scale(10),
  },
  ttl: {
    fontSize: 12,
    color:'#787878'
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default UserInfoForm;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView} from 'react-native';
// import UserInfoFormInput from './InfoFormInput';
// import GradientButton from './GradientButton';
// import DatePickerModal from '@/src/components/admin/datepicker';
// import { GENDER_OPTIONS } from '../../screens/data/data';
// import Dropdown from './Dropdown';

// interface User {
//   date:string;
//   firstname: string;
//   lastname: string;
//   phoneNumber: string;
//   email: string,
//   gender: string,
// }

// const UserInfoForm: React.FC< {user: User} > = ({ user }) => {
//   const [phone, setPhone] = useState(user.phoneNumber);
//   const [email, setEmail] = useState(user.email);
//   const [firstName, setFirstName] = useState(user.firstname);
//   const [lastName, setLastName] = useState(user.lastname);
//   const [birthDate, setBirthDate] = useState(user.date);
  
//   const handleGradient = () => {
    
//   }

//   return (
//     <ScrollView showsVerticalScrollIndicator={false}
//     >
//       <View style={styles.section}>
//         <Text style={styles.label}>Контакты</Text>
//         <UserInfoFormInput title="Телефон" placeholder='Номер телефона' value={phone} onChangeText={setPhone}/>
//         <UserInfoFormInput title="Email" placeholder='Электронный адресс' value={email} onChangeText={setEmail}/>
//       </View>

//       <View>
//         <Text style={styles.label}>Личные данные</Text>
//         <UserInfoFormInput title="Имя" placeholder='Имя пользователя' value={firstName} onChangeText={setFirstName}/>
//         <UserInfoFormInput title="Фамилия" placeholder='Фамилия пользователя' value={lastName} onChangeText={setLastName}/>

//         <View>
//             <Text style={styles.ttl}>Дата рождения</Text>
//             <DatePickerModal  initialDate={birthDate} onDateChange={setBirthDate}/>
//         </View>

//         <View>
//             <Text style={styles.ttl}>Пол</Text>
//             <Dropdown selectedOption={user.gender} options={GENDER_OPTIONS}/>
//         </View>
//         <View style={{marginTop:20}}>
//           <GradientButton title="Сохранить" toDo={handleGradient}/>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   inputForm: {
//     padding: 5,
//   },
//   label: {
//     fontSize: 14,
//     marginBottom:5,
//     color:'#787878',
//   },
//   ttl: {
//     fontSize: 12,
//     color:'#787878'
//   },
//   icon: {
//     position:"absolute",
//     zIndex:2,
//     width:24,
//     height:24,
//     top:37,
//     right: 20, 
//   },
//   section: {
//     marginBottom:20,
//   },
//   input: {
//     fontWeight:"600",
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor:'#e8e8e8',
//     padding: 8,
//     borderRadius: 10,
//     marginVertical: 5,
//   },
// });

// export default UserInfoForm;