import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
import { Formik } from 'formik';
import { ClassesGroupValidation } from '@/src/constants/Validations';
import { getClassesGroupById } from '@/src/api/Api';
import { PageHeader } from '@/src/components/PageHeader';
import { SPECIALIZED_OPTIONS } from '@/src/screens/data/data';
import Snackbar from '@/src/components/admin/SnackBar';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import GradientButton from '@/src/components/admin/GradientButton';
import DropdownList from '@/src/components/admin/Dropdown';
import DatePickerModal from '@/src/components/admin/datepicker';

interface ClassesGroupInfo {
    id: number,
    title:string, 
    coachName:string, 
    category:string, 
    data:string,
    schedule:string,
    time:string,
    branch:string,
    participants:number,
    price:number, 
    notes:string,
}

function EditClassesGroup() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const { id } = useLocalSearchParams();
    const ClassesGroupId = Number(id);
    const [ClassesGroup, setClassesGroup] = useState<ClassesGroupInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const [title, setTitle] = useState('');
    const [coachName, setCoachName] = useState('');
    const [category, setCategory] = useState('');
    const [data, setData] = useState('');
    const [scheudle, setScheudle] = useState('');
    const [time, setTime] = useState('');
    const [branch, setBranch] = useState('');
    const [participants, setParticipants] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [notes, setNotes] = useState('');


    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
    };

    useEffect(() => {
        const fetchClassesGroup = async () => {
            setLoading(true); 
            try {
                const fetchedClassesGroup = await getClassesGroupById(ClassesGroupId);
                if (fetchedClassesGroup) {
                    setClassesGroup(fetchedClassesGroup); 
                    setTitle(fetchedClassesGroup.title);
                    setCoachName(fetchedClassesGroup.coachName);
                    setCategory(fetchedClassesGroup.category)
                    setData(fetchedClassesGroup.data)
                    setScheudle(fetchedClassesGroup.schedule)
                    setTime(fetchedClassesGroup.time)
                    setBranch(fetchedClassesGroup.branch);
                    setParticipants(fetchedClassesGroup.participants)
                    setPrice(fetchedClassesGroup.price)
                    setNotes(fetchedClassesGroup.notes)
                } else {
                    setClassesGroup(null);
                }
            } catch (error) {
                console.error('Error fetching ClassesGroup:', error);
                setClassesGroup(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchClassesGroup();
    }, [ClassesGroupId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!ClassesGroup) {
        return <Text style={{ color: textColor }}>ClassesGroup not found</Text>;
    }

    return (
        <Formik 
            initialValues={{
                title: title,
                coach: coachName,
                category: category,
                data: data,
                scheudle:scheudle,
                time: time,
                branch: branch,
                participants: participants,
                price: price,
                notes:notes,
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
                            <InfoFormInput title='Стоимость' placeholder='Введите стоимость' value={values.price} onChangeText={handleChange('price')} keyboardType={'numeric'}/>
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

export default EditClassesGroup;

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