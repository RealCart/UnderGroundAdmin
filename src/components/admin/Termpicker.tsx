import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Platform } from 'react-native';
import { CalendatLinear } from '@/src/components/icons/Icon';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import DateTimePicker from '@react-native-community/datetimepicker';
import { scale } from 'react-native-size-matters';
import { ThemedText } from './ThemedText';

const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split('.').map(Number);
  return new Date(year, month - 1, day);
};

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

interface TermPickerModalProps {
  initialDate: { startDate: string; endDate: string };
  onDateChange: (dates: { startDate: string; endDate: string }) => void;
}

const TermPickerModal: React.FC<TermPickerModalProps> = ({ initialDate, onDateChange }) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  
  const [startDate, setStartDate] = useState<Date>(parseDate(initialDate.startDate));
  const [endDate, setEndDate] = useState<Date>(parseDate(initialDate.endDate));

  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const toggleStartDatePicker = () => {
    setShowStartPicker((prevState) => !prevState);
  };

  const toggleEndDatePicker = () => {
    setShowEndPicker((prevState) => !prevState);
  };

  const onChangeStartDate = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowStartPicker(false);
    }

    if (selectedDate) {
      setStartDate(selectedDate);
      onDateChange({
        startDate: formatDate(selectedDate),
        endDate: formatDate(endDate),
      });
    }
  };

  const onChangeEndDate = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowEndPicker(false);
    }

    if (selectedDate) {
      setEndDate(selectedDate);
      onDateChange({
        startDate: formatDate(startDate),
        endDate: formatDate(selectedDate),
      });
    }
  };

  return (
    <View>
      {showStartPicker && (
        <DateTimePicker 
          mode='date'
          display='spinner'
          value={startDate}
          onChange={onChangeStartDate}
        />
      )}
      {showEndPicker && (
        <DateTimePicker 
          mode='date'
          display='spinner'
          value={endDate}
          onChange={onChangeEndDate}
        />
      )}
      <View style={[styles.datePicker, { backgroundColor }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={toggleStartDatePicker}>
            <ThemedText>{formatDate(startDate)}</ThemedText>
          </TouchableOpacity>
          <Text style={{ color: textColor, marginHorizontal: 5 }}> - </Text>
          <TouchableOpacity onPress={toggleEndDatePicker}>
            <ThemedText>{formatDate(endDate)}</ThemedText>
          </TouchableOpacity>
        </View>
        <CalendatLinear />
      </View>
    </View>
  );
};

export default TermPickerModal;

const styles = StyleSheet.create({
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: Platform.OS === 'android' ? scale(5) : scale(10),
    paddingHorizontal: scale(15),
  },
  datePickerInput: {
    flex: 1,
  },
});
