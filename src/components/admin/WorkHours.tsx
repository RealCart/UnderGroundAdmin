import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform, ScrollView, TextInput } from 'react-native';
import { useFormikContext } from 'formik';
import MaskInput from 'react-native-mask-input';
import { CalendatLinear } from '@/src/components/icons/Icon';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import GradientButton from './GradientButton';
import PopUp from './PopUp';

const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

interface FormValues {
  title: string;
  adress: string;
  phoneNumber: string;
  email: string;
  workHour: {
    [key: string]: string;
  };
  countOfCoaches: string;
  countOfUsers: string;
}

const WorkHours: React.FC = () => {
  const { values, errors, touched, setFieldValue } = useFormikContext<FormValues>();
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleTimeInput = (formatted: string, day: string) => {
    const [startHours, startMinutes, endHours, endMinutes] = formatted.match(/\d{2}/g) || [];
    if (
      (startHours && parseInt(startHours, 10) > 23) ||
      (startMinutes && parseInt(startMinutes, 10) > 59) ||
      (endHours && parseInt(endHours, 10) > 23) ||
      (endMinutes && parseInt(endMinutes, 10) > 59)
    ) {
      return;
    }
    setFieldValue(`workHour.${day}`, formatted);
  };

  return (
    <View>
      <PopUp modalVisible={showModal} setModalVisible={setShowModal}>
        <ScrollView>
          {daysOfWeek.map((day) => (
            <View key={day} style={{ marginBottom: 5 }}>
              <Text style={styles.ttl}>{day}</Text>
              <MaskInput
                maxLength={11}
                style={[styles.input, { color: textColor, backgroundColor, borderRadius: 10 }]}
                placeholder="00:00-00:00"
                placeholderTextColor={textColor}
                keyboardType="numeric"
                mask={[/\d/, /\d/, ':', /\d/, /\d/, '-', /\d/, /\d/, ':', /\d/, /\d/]}
                value={values.workHour[day]}
                onChangeText={(formatted) => handleTimeInput(formatted, day)}
              />
              {touched.workHour && touched.workHour[day] && errors.workHour && errors.workHour[day] && (
                <Text style={styles.error}>{errors.workHour[day]}</Text>
              )}
            </View>
          ))}
          <View style={{ marginTop: 10 }}>
            <GradientButton title="Сохранить" toDo={() => setShowModal(false)} />
          </View>
        </ScrollView>
      </PopUp>
      <View style={styles.buttonContainer}>
        <Text style={styles.ttl}>Режим работы</Text>
        <TouchableOpacity onPress={toggleModal} style={[styles.button, { backgroundColor }]}>
          <TextInput 
            placeholder='Режим работы'
            value={
              Object.values(values.workHour).some((time) => time)
                ? "Режим работы установлен"
                : ""
            }
            style={{ color: textColor }}
            placeholderTextColor={textColor}
            editable={false}
          />
          <CalendatLinear />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkHours;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius: 10,
    paddingVertical: Platform.OS === 'android' ? 5 : 5,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  ttl: {
    fontSize: 12,
    color: '#787878',
    marginBottom: 5,
  },
  input: {
    marginVertical: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical: Platform.OS === 'android' ? 3 : 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});
