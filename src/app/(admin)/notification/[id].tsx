import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
import { getNotificationById } from '@/src/api/Api';
import { TITLENOTIFICATIONS, TOWHONOTIFICATIONS, METHODNOTIFICATIONS, STATUSNOTIFICATIONS } from '@/src/screens/data/data';
import { NotificationInfoValidation } from '@/src/constants/Validations';
import DateTimePickerModal from '@/src/components/admin/DateTimePicker';
import { PageHeader } from '@/src/components/PageHeader';
import { Formik } from 'formik';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import DatePickerModal from '@/src/components/admin/datepicker';
import Dropdown from '@/src/components/admin/Dropdown';
import GradientButton from '@/src/components/admin/GradientButton';

const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  
  const formatTime = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

interface NotificationInfo {
    id: number; 
    title:string; 
    dateTime: {
        date: string,
        time: string,
    },
    typeOfNotification: string; 
    statusOfNotification: string; 
    method: string; 
    toWho: string; 
}

function EditNotification() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const { id } = useLocalSearchParams();
    const notificationId = Number(id);
    const [notification, setNotification] = useState<NotificationInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotification = async () => {
            setLoading(true); 
            try {
                const fetchNotification = await getNotificationById(notificationId);
                if (fetchNotification) {
                    setNotification(fetchNotification);
                } else {
                    setNotification(null);
                }
            } catch (error) {
                console.error('Error fetching notification page data:', error);
                setNotification(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchNotification();
    }, [notificationId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!notification) {
        return <Text style={{ color: textColor }}>Notification not found</Text>;
    }

    return (
        <Formik 
        initialValues={{
            typeOf: notification.title || '',
            toWho: notification.toWho || '',
            method: notification.method || '',
            dateTime: notification.dateTime || {
                date: formatDate(new Date()),
                time: formatTime(new Date())
            },
            status: notification.statusOfNotification || '',
          }}
          validationSchema={NotificationInfoValidation}
          onSubmit={(values) => {
            Alert.alert(JSON.stringify(values))
            console.log(values)
          }}
        >
            {({ handleChange, handleSubmit, setFieldValue, values, errors, touched}) => (
                <ThemedMainView>
                <PageHeader title='Уведомления'/>
                <ScrollView style={[styles.container, { backgroundColor }]}>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Тема</Text>
                        <Dropdown options={TITLENOTIFICATIONS} selectedOption={values.typeOf} onChange={handleChange('typeOf')}/>
                        {touched.typeOf && errors.typeOf && <Text style={styles.error}>{errors.typeOf}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Получатель</Text>
                        <Dropdown options={TOWHONOTIFICATIONS} selectedOption={values.toWho} onChange={handleChange('toWho')}/>
                        {touched.toWho && errors.toWho && <Text style={styles.error}>{errors.toWho}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Метод отправки</Text>
                        <Dropdown options={METHODNOTIFICATIONS} selectedOption={values.method} onChange={handleChange('method')}/>
                        {touched.method && errors.method && <Text style={styles.error}>{errors.method}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Дата и время отправки</Text>
                        <DateTimePickerModal
                            initialDate={values.dateTime}
                            onDateChange={(dateTime) => setFieldValue('dateTime', dateTime)}
                        />
                        {touched.dateTime?.date && errors.dateTime?.date && (
                        <Text style={styles.error}>{errors.dateTime.date}</Text>
                        )}
                        {touched.dateTime?.time && errors.dateTime?.time && (
                        <Text style={styles.error}>{errors.dateTime.time}</Text>
                        )}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Статус</Text>
                        <Dropdown options={STATUSNOTIFICATIONS} selectedOption={values.status} onChange={handleChange('status')}/>
                        {touched.status && errors.status && <Text style={styles.error}>{errors.status}</Text>}
                    </View>
                    <View>
                        <GradientButton title='Сохранить' toDo={handleSubmit}/>
                    </View>
                </ScrollView>
                </ThemedMainView>
            )}
        </Formik>
    );
}

export default EditNotification;

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