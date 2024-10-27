import React, { useState } from 'react';
import {View, TextInput, TouchableOpacity, Image, StyleSheet, useColorScheme} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Text } from 'react-native';
import {scale} from "react-native-size-matters";
import {CalendarIcon} from "@/src/components/icons/AuthorizationIcons";

interface DatePickerModalProps {
  value: Date;
  onChange: (date: Date) => void; // Updated type to accept a Date parameter
  label: string;
}

export const ThemedDatepicker: React.FC<DatePickerModalProps> = ({ value, onChange, label }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const colorScheme = useColorScheme();

  const showPicker = () => {
    setShowDatePicker(true);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  return (
      <View>
        {label && <Text style={{ color: '#787878', marginBottom: scale(5), marginTop: scale(10) }}>{label}</Text>}
        <View>
          <TouchableOpacity onPress={showPicker}>
            <TextInput
                style={colorScheme === 'light' ? styles.inputLight : styles.inputDark}
                placeholder="Дата рождения"
                value={formatDate(value)}
                editable={false}
                pointerEvents="none"
            />
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <CalendarIcon style={styles.icon} stroke={colorScheme === 'light' ? 'black' : 'white'} />
          </View>
        </View>
        {showDatePicker && (
            <DatePicker
                modal
                open={showDatePicker}
                date={value}
                mode="date"
                onConfirm={(selectedDate) => {
                  setShowDatePicker(false);
                  onChange(selectedDate); // Pass selected date back to Formik
                }}
                onCancel={() => setShowDatePicker(false)}
                maximumDate={new Date()}
            />
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  inputLight: {
    color: 'black',
    fontSize: 18,
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingVertical: scale(12),
    paddingLeft: scale(12),
  },
  inputDark: {
    color: 'white',
    fontSize: 18,
    width: "100%",
    backgroundColor: "#1F1F1F",
    borderRadius: 10,
    paddingVertical: scale(12),
    paddingLeft: scale(12),
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    height: "100%",
    paddingHorizontal: scale(8),
    alignItems: 'center',
    justifyContent: "center",
  }
});
