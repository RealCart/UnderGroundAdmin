import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
import { Formik } from 'formik';
import { ScheduleInfoValidation } from '@/src/constants/Validations';
import { getScheduleById } from '@/src/api/Api';
import { TIME_OPTIONS } from '@/src/screens/data/data';
import { BRANCH } from '@/src/screens/data/data';
import { PageHeader } from '@/src/components/PageHeader';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import DatePickerModal from '@/src/components/admin/datepicker';
import Dropdown from '@/src/components/admin/Dropdown';
import GradientButton from '@/src/components/admin/GradientButton';

interface WorkoutInfo {
    id: number; 
    date: string; 
    time: string; 
    statusOfTraining: string; 
    status: string; 
    branch: string; 
    recorded: string; 
    typeOfTrainig: string; 
    coach: string; 
    amountOfTime: string; 
}

function EditWorkout() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const { id } = useLocalSearchParams();
    const scheduleId = Number(id);
    const [schedule, setSchedule] = useState<WorkoutInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const [typeOfTrainig, setTypeOfTrainig] = useState('');
    const [coach, setCoach] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [branch, setBranch] = useState('');
    const [recorded, setRecorded] = useState('');

    useEffect(() => {
        const fetchSchedule = async () => {
            setLoading(true); 
            try {
                const fetchedSchedule = await getScheduleById(scheduleId);
                if (fetchedSchedule) {
                    setSchedule(fetchedSchedule); 
                    setTypeOfTrainig(fetchedSchedule.typeOfTrainig);
                    setCoach(fetchedSchedule.coach);
                    setDate(fetchedSchedule.date);
                    setTime(fetchedSchedule.time);
                    setBranch(fetchedSchedule.branch);
                    setRecorded(fetchedSchedule.recorded);
                } else {
                    setSchedule(null);
                }
            } catch (error) {
                console.error('Error fetching schedule:', error);
                setSchedule(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchSchedule();
    }, [scheduleId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!schedule) {
        return <Text style={{ color: textColor }}>Workout not found</Text>;
    }

    return (
        <Formik 
        initialValues={{
            title: typeOfTrainig,
            coach: coach,
            data: date,
            time: time,
            branch: branch,
            recorded: recorded,
            notes:'',
          }}
          validationSchema={ScheduleInfoValidation}
          onSubmit={(values) => {
            Alert.alert(JSON.stringify(values))
            console.log(values)
          }}
        >
            {({ handleChange, handleSubmit, values, errors, touched}) => (
                <ThemedMainView>
                <PageHeader title={values.title}/>
                <ScrollView style={[styles.container, { backgroundColor }]}>
                    <View>
                        <View style={styles.section}>
                            <InfoFormInput title="Название занятия" placeholder='Занятия' value={values.title} onChangeText={handleChange('title')} />
                            {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
                        </View>
                        <View style={styles.section}>
                            <InfoFormInput title="Тренер" placeholder='Тренер' value={values.coach} onChangeText={handleChange('coach')} />
                            {touched.coach && errors.coach && <Text style={styles.error}>{errors.coach}</Text>}
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.ttl}>Дата</Text>
                            <DatePickerModal initialDate={values.data} onDateChange={handleChange('data')} />
                            {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.ttl}>Время</Text>
                            <Dropdown options={TIME_OPTIONS} selectedOption={values.time} onChange={handleChange('time')}/>
                            {touched.time && errors.time && <Text style={styles.error}>{errors.time}</Text>}
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.ttl}>Филиал</Text>
                            <Dropdown options={BRANCH} selectedOption={values.branch} onChange={handleChange('branch')}/>
                            {touched.branch && errors.branch && <Text style={styles.error}>{errors.branch}</Text>}
                        </View>
                        <View style={styles.section}>
                            <InfoFormInput title="Записаны" placeholder='Напишите записи' value={values.recorded} onChangeText={handleChange('recorded')} />
                            {touched.recorded && errors.recorded && <Text style={styles.error}>{errors.recorded}</Text>}
                        </View>
                        <View style={styles.section}>
                            <InfoFormInput title="Заметки" placeholder='Напишите заметки' value={values.notes} onChangeText={handleChange('notes')} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <GradientButton title="Сохранить" toDo={handleSubmit} />
                        </View>
                    </View>
                </ScrollView>
                </ThemedMainView>
            )}
        </Formik>
    );
}

export default EditWorkout;

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
