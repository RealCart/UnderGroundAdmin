import { useState } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
import { StoriesInfoValidation } from '@/src/constants/Validations';
import { PageHeader } from '@/src/components/PageHeader';
import { Formik } from 'formik';
import Snackbar from '@/src/components/admin/SnackBar';
import MultilineInput from '@/src/components/admin/MultilineInput';
import MediaInput from '@/src/components/admin/MediaInput';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import DatePickerModal from '@/src/components/admin/datepicker';
import GradientButton from '@/src/components/admin/GradientButton';
import InfoFormInput from '@/src/components/admin/InfoFormInput';

function AddStories() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 

    const [snackbarVisible, setSnackbarVisible] = useState(false);
  
    const handleCloseSnackbar = () => {
      setSnackbarVisible(false);
    };

    return (
        <Formik 
        initialValues={{
            title: '',
            data: new Date().toLocaleDateString(),
            status: '',
            desc: '',
            media: ''
          }}
          validationSchema={StoriesInfoValidation}
          onSubmit={(values) => {
            Alert.alert(JSON.stringify(values))
            console.log(values)
            setSnackbarVisible(true);
          }}
        >
            {({ handleChange, handleSubmit, values, errors, touched}) => (
                <ThemedMainView>
                <PageHeader title='Добавить советы'/>
                    <ScrollView style={[styles.container, { backgroundColor }]}>
                        <View style={styles.section}>
                            <InfoFormInput title='Название' placeholder='Напишите название сториса' value={values.title} onChangeText={handleChange('title')}/>
                            {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
                        </View>
                        <View style={styles.section}>
                            <MultilineInput title='Описание' placeholder='Напишите описание сториса' value={values.desc} onChangeText={handleChange('desc')}/>
                            {touched.desc && errors.desc && <Text style={styles.error}>{errors.desc}</Text>}
                        </View>
                        <View style={styles.section}>
                            <MediaInput title='Медиа' placeholder='Прикрепите файлы' editable={false} value={values.media} onChangeText={handleChange('media')}/>
                            {touched.media && errors.media && <Text style={styles.error}>{errors.media}</Text>}
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.ttl}>Дата публикации</Text>
                            <DatePickerModal initialDate={values.data} onDateChange={handleChange('data')}/>
                            {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
                        </View>
                        <View>
                            <GradientButton title='Сохранить' toDo={handleSubmit}/>
                        </View>
                    </ScrollView>
                    {snackbarVisible && (
                        <Snackbar onClose={handleCloseSnackbar}/>
                    )}
                </ThemedMainView>
            )}
        </Formik>
    );
}

export default AddStories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
    error: {
      color: 'red',
      fontSize: 12,
    },
    ttl: {
        fontSize: 12, 
        color: '#787878'
    },
    section: {
        marginBottom:10,
    }
});