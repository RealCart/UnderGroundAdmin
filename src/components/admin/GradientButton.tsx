import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientButtonProps {
  title:string;
  toDo: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ title, toDo }) => {
  return (
    <LinearGradient
        colors={['#F4C443', '#FF9735']}
        start={{ x: 0, y: 0.5 }} 
        end={{ x: 1, y: 0.5 }} 
        style={styles.gradientBorder}
    >
      <TouchableOpacity style={styles.button} onPress={toDo}>
          <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 15,
  },
  button: {
    borderRadius: 15,
    alignItems: 'center',
    marginVertical:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default GradientButton;
