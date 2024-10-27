import { StyleSheet, Text, View, Alert } from 'react-native'
import { CategoryValidation } from '@/src/constants/Validations'
import { PageHeader } from '@/src/components/PageHeader'
import { Formik } from 'formik'
import Snackbar from '@/src/components/admin/SnackBar'
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView'
import GradientButton from '@/src/components/admin/GradientButton'
import InfoFormInput from '@/src/components/admin/InfoFormInput'
import React, {useState} from 'react'

const addClassesClasses = () => {
    const [snackbarVisible, setSnackbarVisible] = useState(false);
  
    const handleCloseSnackbar = () => {
      setSnackbarVisible(false);
    };

    return (
        <ThemedMainView>
            <PageHeader title='Категории'/>
            <View>
                <Formik
                    initialValues={{
                        title:'',
                    }}
                    validationSchema={CategoryValidation}
                    onSubmit={(values) => {
                        Alert.alert(JSON.stringify(values))
                        console.log(values)
                        setSnackbarVisible(true);
                    }}
                >
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                        <View>
                            <InfoFormInput title='Название' placeholder='Название категории' value={values.title} onChangeText={handleChange('title')}/>
                            {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
                            <View style={{marginTop:5}}>
                                <GradientButton title='Сохранить' toDo={handleSubmit}/>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
            {snackbarVisible && (
                <Snackbar onClose={handleCloseSnackbar}/>
            )}
        </ThemedMainView>
    )
}

export default addClassesClasses

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 12,
      },
})