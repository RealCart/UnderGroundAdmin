import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, Alert } from 'react-native'; 
import { Formik } from 'formik';
import { SubscriptionInfoValidation } from '@/src/constants/Validations';
import { PageHeader } from '@/src/components/PageHeader';
import { OPTIONSTYPE } from '@/src/screens/data/data';
import Snackbar from '@/src/components/admin/SnackBar';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import Dropdown from '@/src/components/admin/Dropdown';
import GradientButton from '@/src/components/admin/GradientButton';

function addSubscription() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

    return (
        <Formik 
        initialValues={{
            title: '',
            price: '',
            type: '',
            term:'',
            countOfTraining:'',
            include: '',
          }}
          validationSchema={SubscriptionInfoValidation}
          onSubmit={(values) => {
            Alert.alert(JSON.stringify(values))
            console.log(values)
          }}
        >
            {({ handleChange, handleSubmit, values, errors, touched}) => (
                <ThemedMainView>
                <PageHeader title='Добавить абонемент'/>
                <ScrollView style={[styles.container, { backgroundColor }]}>
                    <View style={styles.section}>
                     <InfoFormInput title='Название абонемента' placeholder='Заполните название абонимента' value={values.title} onChangeText={handleChange('title')}/>
                     {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Продолжительность</Text>
                        <Dropdown options={OPTIONSTYPE} selectedOption={values.term} placeholder='Выберите продолжительность' onChange={handleChange('term')}/>
                        {touched.term && errors.term && <Text style={styles.error}>{errors.term}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Количество тренировок' placeholder='Заполните количество тренировок' value={values.countOfTraining} onChangeText={handleChange('countOfTraining')}/>
                        {touched.countOfTraining && errors.countOfTraining && <Text style={styles.error}>{errors.countOfTraining}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Тип</Text>
                        <Dropdown options={OPTIONSTYPE} selectedOption={values.term} placeholder='Выберите тип' onChange={handleChange('type')}/>
                        {touched.type && errors.type && <Text style={styles.error}>{errors.type}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Дополнительно</Text>
                        <Dropdown options={OPTIONSTYPE} selectedOption={values.term} placeholder='Выберите какие занятия' onChange={handleChange('include')}/>
                        {touched.include && errors.include && <Text style={styles.error}>{errors.include}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Стоимость' placeholder='Заполните стоимость абонимента' value={values.price} onChangeText={handleChange('price')}/>
                        {touched.price && errors.price && <Text style={styles.error}>{errors.price}</Text>}
                    </View>
                    <GradientButton title='Сохранить' toDo={handleSubmit}/>
                </ScrollView>
                </ThemedMainView>
            )}
        </Formik>
    );
}

export default addSubscription;

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