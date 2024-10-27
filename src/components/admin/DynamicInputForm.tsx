import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Platform } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { scale } from 'react-native-size-matters';
import React, { useState, useEffect } from 'react';
import GradientButton from './GradientButton';

interface DynamicInputFormProps {
  title: string;
  placeholder: string;
  value: string[];
  editable?: boolean;
  errors?: string[];
  touched?: boolean[]; 
  onChangeText: (values: string[]) => void;
}

const DynamicInputForm: React.FC<DynamicInputFormProps> = ({
  title,
  placeholder,
  value,
  editable = true,
  errors = [], 
  touched = [],
  onChangeText,
}) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background');
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const [inputs, setInputs] = useState<string[]>(value);

  useEffect(() => {
    setInputs(value);
  }, [value]);

  const handleAddInput = () => {
    const newInputs = [...inputs, ''];
    setInputs(newInputs);
    onChangeText(newInputs);
  };

  const handleRemoveInput = (index: number) => {
    if (inputs.length > 1) {
      const newInputs = inputs.filter((_, i) => i !== index);
      setInputs(newInputs);
      onChangeText(newInputs);
    }
  };

  const handleInputChange = (text: string, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = text;
    setInputs(newInputs);
    onChangeText(newInputs);
  };

  return (
    <ScrollView>
      <Text style={styles.ttl}>{title}</Text>
      {inputs.map((input, index) => ( 
        <View
          key={index}
        >
          <View 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: backgroundColor,
              borderRadius: 10,
              marginTop: 5,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{color:textColor, marginLeft:2}}>
              •
            </Text>
            <TextInput
              style={[styles.input, { color: textColor }]}
              value={input}
              placeholder={placeholder}
              editable={editable}
              onChangeText={(text) => handleInputChange(text, index)}
            />
            {index > 0 && ( 
              <Pressable onPress={() => handleRemoveInput(index)} style={styles.removeButton}>
                <Text style={[styles.ttl, {fontSize:18}]}>✕</Text>
              </Pressable>
            )}
          </View>
          <View>
            {touched[index] && errors[index] && (
              <Text style={styles.error}>{errors[index]}</Text>
            )}
          </View>
        </View>
      ))}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <GradientButton title='+ Добавить еще' toDo={handleAddInput} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ttl: {
    fontSize: 12,
    color: '#787878',
  },
  inputConatiner: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    paddingVertical: Platform.OS === 'android' ? scale(5) : scale(10),
    paddingHorizontal: scale(8),
  },
  removeButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default DynamicInputForm;
