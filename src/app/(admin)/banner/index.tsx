import { StyleSheet, Text, View, Alert } from 'react-native';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import MediaInput from '@/src/components/admin/MediaInput';
import Snackbar from '@/src/components/admin/SnackBar';
import { PageHeader } from '@/src/components/PageHeader';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { MediaScreenValidation } from '@/src/constants/Validations';
import GradientButton from '@/src/components/admin/GradientButton';

const BannerScreen = () => {
    const [snackbarVisible, setSnackbarVisible] = useState(false);
  
    const handleCloseSnackbar = () => {
      setSnackbarVisible(false);
    };
  
    return (
      <ThemedMainView>
        <PageHeader title="Баннер" />
        <Formik
          initialValues={{ images: [] }}
          validationSchema={MediaScreenValidation}
          onSubmit={(values) => {
            Alert.alert('Успешно!', JSON.stringify(values));
            console.log(values);
            setSnackbarVisible(true);
          }}
        >
          {({ handleChange, handleSubmit, setFieldValue, values, errors, touched }) => (
            <View style={styles.formContainer}>
              <MediaInput
                title="Медиа"
                value={values.images}
                onImageSelect={(uris: string[]) => setFieldValue('images', uris)} 
              />
              {touched.images && errors.images && (
                <Text style={styles.error}>{errors.images}</Text>
              )}
              <GradientButton title="Сохранить" toDo={handleSubmit} />
            </View>
          )}
        </Formik>
        {snackbarVisible && <Snackbar onClose={handleCloseSnackbar} />}
      </ThemedMainView>
    );
  };
  
  export default BannerScreen;
  
  const styles = StyleSheet.create({
    formContainer: {
      padding: 16,
    },
    error: {
      color: 'red',
      fontSize: 12,
      marginTop: 4,
    },
  });

