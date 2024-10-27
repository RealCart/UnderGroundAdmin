import React, { useEffect, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { SuccessSnackBar } from '../icons/Icon';
import { CloseSnackBar } from '../icons/Icon';

interface SnackbarProps {
  duration?: number;
  onClose?: () => void; 
}

const Snackbar: React.FC<SnackbarProps> = ({ duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    setVisible(true);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const hideTimeout = setTimeout(() => {
      hideSnackbar();
    }, duration);

    return () => clearTimeout(hideTimeout);
  }, []);

  const hideSnackbar = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      if (onClose) {
        onClose();
      }
    });
  };

  if (!visible) return null;

  return (
    <Animated.View style={[styles.container, { opacity }]}>
        <View style={{paddingHorizontal:10}}>
            <SuccessSnackBar/>
        </View>
        <Text style={styles.text}><Text style={styles.boldText}>Успешно</Text>{'\n'}Изменения успешно сохранены</Text>
        <Pressable onPress={()=>setVisible(false)} style={{marginRight:20}}>
            <CloseSnackBar/>
        </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#80DA95',
    top: 40, 
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  boldText: {
    fontWeight:'400',
    fontSize:13,
    flex: 1,
  },
  text: {
    fontWeight:'300',
    fontSize:13,
    flex: 1,
  },
});

export default Snackbar;
