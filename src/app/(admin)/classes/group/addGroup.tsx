import { useState } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, Alert } from 'react-native'; 
import { Formik } from 'formik';
import { ClassesGroupValidation } from '@/src/constants/Validations';
import { PageHeader } from '@/src/components/PageHeader';
import { SPECIALIZED_OPTIONS } from '@/src/screens/data/data';
import Snackbar from '@/src/components/admin/SnackBar';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import GradientButton from '@/src/components/admin/GradientButton';
import DropdownList from '@/src/components/admin/Dropdown';
import DatePickerModal from '@/src/components/admin/datepicker';

function addClassesGroup() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 

    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
    };

    return (
        <Formik 
            initialValues={{
                title: '',
                coach:'',
                category: '',
                data: new Date().toLocaleDateString(),
                scheudle: new Date().toLocaleDateString(),
                time: '',
                branch: '',
                participants: 0,
                price: 0,
                notes:'',
            }}
            validationSchema={ClassesGroupValidation}
            onSubmit={(values) => {
                Alert.alert(JSON.stringify(values))
                console.log(values)
                setSnackbarVisible(true);
            }}
        >
            {({ handleChange, handleSubmit, values, errors, touched}) => (
                <ThemedMainView>
                <PageHeader title='Редактировать занятие'/>
                <ScrollView style={[styles.container, { backgroundColor }]}>
                    <View style={styles.section}>
                        <InfoFormInput title='Название занятия' placeholder='Введите название занятия' value={values.title} onChangeText={handleChange('title')}/>
                        {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Тренер</Text>
                        <DropdownList options={SPECIALIZED_OPTIONS} selectedOption={values.coach} onChange={handleChange('coach')} placeholder='Выберите тренера'/>
                        {touched.coach && errors.coach && <Text style={styles.error}>{errors.coach}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Категория ' placeholder='Введите категорию занятия' value={values.category} onChangeText={handleChange('category')}/>
                        {touched.category && errors.category && <Text style={styles.error}>{errors.category}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Дата</Text>
                        <DatePickerModal initialDate={values.data} onDateChange={handleChange('data')}/>
                        {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Расписание</Text>
                        <DatePickerModal initialDate={values.scheudle} onDateChange={handleChange('scheudle')}/>
                        {touched.scheudle && errors.scheudle && <Text style={styles.error}>{errors.scheudle}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Время</Text>
                        <DropdownList options={SPECIALIZED_OPTIONS} selectedOption={values.time} onChange={handleChange('time')} placeholder='Выберите время'/>
                        {touched.time && errors.time && <Text style={styles.error}>{errors.time}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Филиал</Text>
                        <DropdownList options={SPECIALIZED_OPTIONS} selectedOption={values.branch} onChange={handleChange('branch')} placeholder='Выберите филиал'/>
                        {touched.branch && errors.branch && <Text style={styles.error}>{errors.branch}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Максимально количество участников' placeholder='Введите макс. кол-во участников' value={values.participants} onChangeText={handleChange('participants')} keyboardType={'numeric'}/>
                        {touched.participants && errors.participants && <Text style={styles.error}>{errors.participants}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Стоимость' placeholder='Введите стоимость' value={values.price !== undefined ? String(values.price) : ''} onChangeText={handleChange('price')} keyboardType={'numeric'}/>
                        {touched.price && errors.price && <Text style={styles.error}>{errors.price}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Заметки' placeholder='Напишите заметку' value={values.notes} onChangeText={handleChange('notes')}/>
                    </View>
                    <View style={{marginBottom:10}}>
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

export default addClassesGroup;

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