import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, Alert } from 'react-native'; 
import { Formik } from 'formik';
import { BranchInfoValidation } from '@/src/constants/Validations';
import { PageHeader } from '@/src/components/PageHeader';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import WorkHours from '@/src/components/admin/WorkHours';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import NotEditableInput from '@/src/components/admin/NotEditableInput';
import PhoneNumberInput from '@/src/components/admin/PhoneNumberInput';
import GradientButton from '@/src/components/admin/GradientButton';

function EditBranch() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

    return (
        <Formik 
        initialValues={{
            title: '',
            adress: '',
            phoneNumber: '',
            email:  '',
            workHour: '',
            countOfCoaches: '',
            countOfUsers: ''
          }}
          validationSchema={BranchInfoValidation}
          onSubmit={(values) => {
                console.log(values)
                Alert.alert(JSON.stringify(values))
          }}
        >
            {({ handleChange, handleSubmit, values, errors, touched}) => (
                <ThemedMainView style={{flex:1}}>
                <PageHeader title='Добавить филиал'/>
                <ScrollView style={[styles.container, { backgroundColor }]}>
                    <View>
                        <View style={styles.section}>
                            <InfoFormInput title="Название" placeholder='Название' value={values.title} onChangeText={handleChange('title')} />
                            {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
                        </View>
                        <View style={styles.section}>
                            <InfoFormInput title="Адрес" placeholder='Адрес филиала' value={values.adress} onChangeText={handleChange('adress')} />
                            {touched.adress && errors.adress && <Text style={styles.error}>{errors.adress}</Text>}
                        </View>
                        <View style={styles.section}>
                            <PhoneNumberInput value={values.phoneNumber} onChangeText={handleChange('phoneNumber')} />
                            {touched.phoneNumber && errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}
                        </View>
                        <View style={styles.section}>
                            <InfoFormInput title="Электронная почта" placeholder='Электронная почта' value={values.email} onChangeText={handleChange('email')} />
                            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                        </View>
                        <View>
                            <WorkHours/>
                            {touched.workHour && errors.countOfCoaches && <Text style={styles.error}>{errors.countOfCoaches}</Text>}
                        </View>
                        <View style={styles.section}>
                            <NotEditableInput title='Число тренеров' value={values.countOfCoaches} onChangeText={handleChange('countOfCoaches')}/> 
                            {touched.countOfCoaches && errors.countOfCoaches && <Text style={styles.error}>{errors.countOfCoaches}</Text>}
                        </View> 
                        <View style={styles.section}>
                            <NotEditableInput title='Число пользователей' value={values.countOfUsers} onChangeText={handleChange('countOfUsers')}/> 
                            {touched.countOfUsers && errors.countOfUsers && <Text style={styles.error}>{errors.countOfUsers}</Text>}
                        </View>
                        <View>
                            <GradientButton title="Сохранить" toDo={handleSubmit} />
                        </View>
                    </View>
                </ScrollView>
                </ThemedMainView>
            )}
        </Formik>
    );
}

export default EditBranch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
    ttl: {
        fontSize: 12, 
        color: '#787878'
    },
    section: {
        marginBottom:10,
    },
    error: {
      color: 'red',
      fontSize: 12,
    },
});
