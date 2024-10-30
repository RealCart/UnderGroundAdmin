import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Platform } from 'react-native';
import { CalendatLinear } from '@/src/components/icons/Icon';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import DateTimePicker from '@react-native-community/datetimepicker';
import { scale } from 'react-native-size-matters';
import { ThemedText } from './ThemedText';

const parseTime = (timeString: string): Date => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const now = new Date();
    now.setHours(hours, minutes, 0, 0);
    return now;
};

const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split('.').map(Number);
  return new Date(year, month - 1, day);
};
  

const DateTimePickerModal = ({ initialDate, onDateChange }: { initialDate: {date:string, time:string}, onDateChange: (dateTime: {date:string, time:string}) =>void }) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  
  const [time, setTime] = useState<Date>(parseTime(initialDate.time));
  const [date, setDate] = useState<Date>(parseDate(initialDate.date));

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const toggleTimepicker = () => {
    setShowTimePicker((prevState) => !prevState);
  };

  const toggleDatepicker = () => {
    setShowDatePicker((prevState) => !prevState);
  };

  const formatTime = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const onChangeTime = (event: any, selectedTime?: Date) => {
    if (Platform.OS === 'android') {
      setShowTimePicker(false);
    }

    if (selectedTime) {
      setTime(selectedTime);
      onDateChange({
        time: formatTime(selectedTime),
        date: formatTime(time)
      });
    }
  };
  
  const onChangeDate = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (selectedDate) {
      setDate(selectedDate);
      onDateChange({
        time: formatDate(selectedDate),
        date: formatDate(date)
      });
    }
  };


  return (
    <View>
      {showTimePicker && (
        <DateTimePicker 
          mode='time'
          display='spinner'
          value={time}
          onChange={onChangeTime}
        />
      )}
      {showDatePicker && (
        <DateTimePicker
          mode='date'
          display='spinner'
          value={date}
          onChange={onChangeDate}
        />
      )}
      <View style={[styles.datePicker, {backgroundColor: backgroundColor}]}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={toggleDatepicker} style={{marginRight:scale(10)}}>
            <ThemedText style={styles.datePickerInput}>{formatDate(date)}</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleTimepicker}>
            <ThemedText style={[styles.datePickerInput, { color: textColor }]}>{formatTime(time)}</ThemedText>
          </TouchableOpacity>
        </View>
        <CalendatLinear/>
      </View>
    </View>
  );
};

export default DateTimePickerModal;


const styles = StyleSheet.create({
  datePicker: {
    flexDirection:'row',
    alignItems:'center',
    marginVertical: 5,
    paddingVertical:Platform.OS === 'android' ? scale(5) : scale(10),
    paddingHorizontal:scale(15),
    justifyContent:'space-between',
    borderRadius:10,
  },
  datePickerInput: {
    flex:1,
  },
});