import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Platform } from 'react-native';
import { CalendatLinear } from '@/src/components/icons/Icon';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import DateTimePicker from '@react-native-community/datetimepicker';
import { scale } from 'react-native-size-matters';
import { ThemedText } from './ThemedText';

const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split('.').map(Number);
  return new Date(year, month - 1, day);
};

const DatePickerModal = ({ initialDate, onDateChange }: { initialDate: string, onDateChange: (date: string) => void }) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  
  const [date, setDate] = useState<Date>(parseDate(initialDate));
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker((prevState) => !prevState);
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const onChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }

    if (selectedDate) {
      setDate(selectedDate);
      onDateChange(formatDate(selectedDate));
    }
  };

  return (
    <View>
      {showPicker && (
        <DateTimePicker 
          mode='date'
          display='spinner'
          value={date}
          onChange={onChange}
        />
      )}
      <TouchableOpacity style={[styles.datePicker, {backgroundColor}]} onPress={toggleDatepicker}>
          <ThemedText style={[styles.datePickerInput, { color: textColor }]}>{formatDate(date)}</ThemedText>
          <CalendatLinear/>
      </TouchableOpacity>
    </View>
  );
};

export default DatePickerModal;


const styles = StyleSheet.create({
  datePicker: {
    flexDirection:'row',
    alignItems:'center',
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical:Platform.OS === 'android' ? scale(5) : scale(10),
    paddingHorizontal:scale(15),
  },
  datePickerInput: {
    flex:1,
  },
});