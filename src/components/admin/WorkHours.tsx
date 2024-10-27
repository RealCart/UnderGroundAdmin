import { StyleSheet, Text, TouchableOpacity, View, Modal, Platform, ScrollView } from 'react-native';
import { CalendatLinear } from '@/src/components/icons/Icon';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { WorkHourValidation } from '@/src/constants/Validations';
import { scale } from 'react-native-size-matters';
import { Formik } from 'formik';
import React, { useState } from 'react';
import MaskInput from 'react-native-mask-input';
import GradientButton from './GradientButton';
import PopUp from './PopUp';

const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const WorkHours = () => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background'); 
  const ModalColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const [showModal, setShowModal] = useState(false);

  const initialWorkHours = daysOfWeek.reduce((acc, day) => {
    acc[day] = ''; 
    return acc;
  }, {} as { [key: string]: string });

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleTimeInput = (formatted: string, setFieldValue: (field: string, value: any) => void, day: string) => {
    const [startHours, startMinutes, endHours, endMinutes] = formatted.match(/\d{2}/g) || [];

    if (startHours && (parseInt(startHours, 10) > 23)) return;
    if (startMinutes && (parseInt(startMinutes, 10) > 59)) return;
    if (endHours && (parseInt(endHours, 10) > 23)) return;
    if (endMinutes && (parseInt(endMinutes, 10) > 59)) return;

    setFieldValue(day, formatted);
  };

  return (
    <View>
      <Text style={styles.ttl}>Режим работы</Text>
      <PopUp modalVisible={showModal} setModalVisible={setShowModal}>
        <Formik 
            initialValues={initialWorkHours}
            validationSchema={WorkHourValidation}
            onSubmit={(values) => {
              console.log(values); 
              setShowModal(false); 
            }}
          >
            {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
              <View>
                <ScrollView>
                  {daysOfWeek.map((day) => (
                    <View key={day} style={{marginBottom:scale(5)}}>
                      <Text style={styles.ttl}>{day}</Text>
                      <View>
                        <MaskInput
                          maxLength={11}
                          style={[styles.input, { color: textColor, backgroundColor: backgroundColor, borderRadius: 10 }]}
                          placeholder="00:00-00:00"
                          placeholderTextColor={textColor}
                          keyboardType="numeric"
                          mask={[/\d/, /\d/, ':', /\d/, /\d/, '-', /\d/, /\d/, ':', /\d/, /\d/]}
                          value={values[day]}
                          onChangeText={(formatted) => handleTimeInput(formatted, setFieldValue, day)}
                        />
                        {touched[day] && errors[day] && <Text style={styles.error}>{errors[day]}</Text>}
                      </View>
                    </View>
                  ))}
                  <View style={{ marginTop: scale(10) }}>
                    <GradientButton title='Сохранить' toDo={handleSubmit}/>
                  </View>
                </ScrollView>
              </View>
            )}
          </Formik>
      </PopUp>
      <TouchableOpacity onPress={toggleModal} style={[styles.button, { backgroundColor }]}>
        <Text style={{ flex: 1, color: textColor }}>Режим работы</Text>
        <View>
          <CalendatLinear />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WorkHours;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: Platform.OS === 'android' ? scale(10) : scale(10),
    paddingHorizontal: scale(15),
  },
  modalContainer: {
    flex: 1,
  },
  modalContent: {
    paddingTop: 12,
    paddingHorizontal: 12,
  },
  ttl: {
    fontSize: 12,
    color: '#787878',
    marginBottom: 5,
  },
  input: {
    marginVertical: scale(1),
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical: Platform.OS === 'android' ? scale(3) : scale(10),
    paddingHorizontal: scale(15),
    borderRadius: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});
