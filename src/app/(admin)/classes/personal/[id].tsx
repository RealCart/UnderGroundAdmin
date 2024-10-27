import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
import { Formik } from 'formik';
import { ClassesPersonalValidation } from '@/src/constants/Validations';
import { getClassesPersonalById } from '@/src/api/Api';
import { PageHeader } from '@/src/components/PageHeader';
import { SPECIALIZED_OPTIONS } from '@/src/screens/data/data';
import Snackbar from '@/src/components/admin/SnackBar';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import GradientButton from '@/src/components/admin/GradientButton';
import DropdownList from '@/src/components/admin/Dropdown';
import DatePickerModal from '@/src/components/admin/datepicker';

interface ClassesPersonalInfo {
    id: number,
    title:string, 
    data:string, 
    time:string, 
    status:string,
    coachName:string, 
    price:number, 
    branch:string,
    notes:string,
}

function EditClassesPersonal() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const { id } = useLocalSearchParams();
    const ClassesPersonalId = Number(id);
    const [ClassesPersonal, setClassesPersonal] = useState<ClassesPersonalInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const [title, setTitle] = useState('');
    const [data, setData] = useState('');
    const [time, setTime] = useState('');
    const [coachName, setCoachName] = useState('');
    const [price, setPrice] = useState<number>(0);
    const [branch, setBranch] = useState('');
    const [notes, setNotes] = useState('');


    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
    };

    useEffect(() => {
        const fetchClassesPersonal = async () => {
            setLoading(true); 
            try {
                const fetchedClassesPersonal = await getClassesPersonalById(ClassesPersonalId);
                if (fetchedClassesPersonal) {
                    setClassesPersonal(fetchedClassesPersonal); 
                    setTitle(fetchedClassesPersonal.title);
                    setData(fetchedClassesPersonal.data);
                    setTime(fetchedClassesPersonal.time);
                    setCoachName(fetchedClassesPersonal.coachName);
                    setPrice(fetchedClassesPersonal.price);
                    setBranch(fetchedClassesPersonal.branch);
                    setNotes(fetchedClassesPersonal.notes)
                } else {
                    setClassesPersonal(null);
                }
            } catch (error) {
                console.error('Error fetching ClassesPersonal:', error);
                setClassesPersonal(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchClassesPersonal();
    }, [ClassesPersonalId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!ClassesPersonal) {
        return <Text style={{ color: textColor }}>ClassesPersonal not found</Text>;
    }

    return (
        <Formik 
            initialValues={{
                title: title,
                coach: coachName,
                data: data,
                time: time,
                branch: branch,
                price: price,
                notes:notes,
            }}
            validationSchema={ClassesPersonalValidation}
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
                        <Text style={styles.ttl}>Название занятия</Text>
                        <DropdownList options={SPECIALIZED_OPTIONS} selectedOption={values.title} onChange={handleChange('title')} placeholder='Выберите название занятия'/>
                        {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Тренер</Text>
                        <DropdownList options={SPECIALIZED_OPTIONS} selectedOption={values.coach} onChange={handleChange('coach')} placeholder='Выберите тренера'/>
                        {touched.coach && errors.coach && <Text style={styles.error}>{errors.coach}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Дата</Text>
                        <DatePickerModal initialDate={values.data} onDateChange={handleChange('data')}/>
                        {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
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
                        <InfoFormInput title='Стоимость' placeholder='Введите стоимость' value={values.price !== undefined ? String(values.price) : ''} onChangeText={handleChange('price')} keyboardType={'numeric'}/>
                        {touched.price && errors.price && <Text style={styles.error}>{errors.price}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Заметки' placeholder='Напишите заметку' value={values.notes} onChangeText={handleChange('notes')}/>
                    </View>
                    <GradientButton title='Сохранить' toDo={handleSubmit}/>
                </ScrollView>
                {snackbarVisible && (
                    <Snackbar onClose={handleCloseSnackbar}/>
                )}
                </ThemedMainView>
            )}
        </Formik>
    );
}

export default EditClassesPersonal;

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