import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from 'react-native'; 
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { getFrozenById } from '@/src/api/Api';
import { FrozenInfoValidation } from '@/src/constants/Validations';
import { PageHeader } from '@/src/components/PageHeader';
import { Formik } from 'formik';
import Snackbar from '@/src/components/admin/SnackBar';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import DatePickerModal from '@/src/components/admin/datepicker';
import GradientButton from '@/src/components/admin/GradientButton';
import InfoFormInput from '@/src/components/admin/InfoFormInput';


interface FrozenInfo {
    id: number,
    name:string,
    data:string,
    reason:string,
    status:string,
    phone:string,
    termData:string,
}

function EditFrozen() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const { id } = useLocalSearchParams();
    const FrozenId = Number(id);
    const [Frozen, setFrozen] = useState<FrozenInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const [name, setName] = useState('');
    const [data, setData] = useState('');
    const [reason, setReason] = useState('');
    const [status, setStatus] = useState('');
    const [phone, setPhone] = useState('');
    const [termData, setTermData] = useState('');

    const [snackbarVisible, setSnackbarVisible] = useState(false);
  
    const handleCloseSnackbar = () => {
      setSnackbarVisible(false);
    };
    const acceptBtn = () => {

    };
    const cancelBtn = () => {

    };
    useEffect(() => {
        const fetchFrozen  = async () => {
            setLoading(true); 
            try {
                const fetchFrozen = await getFrozenById(FrozenId);
                if (fetchFrozen) {
                    setFrozen(fetchFrozen);
                    setName(fetchFrozen.name);
                    setData(fetchFrozen.data);
                    setReason(fetchFrozen.reason);
                    setStatus(fetchFrozen.status);
                    setPhone(fetchFrozen.phone);
                    setTermData(fetchFrozen.termData);
                } else {
                    setFrozen(null);
                }
            } catch (error) {
                console.error('Error fetching schedule:', error);
                setFrozen(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchFrozen();
    }, [FrozenId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!Frozen) {
        return <Text style={{ color: textColor }}>Frozen not found</Text>;
    }

    return (
        <Formik 
        initialValues={{
            name: name,
            reason: reason,
            phone: phone,
            data: data,
            termData: termData,
            status: status,
          }}
          validationSchema={FrozenInfoValidation}
          onSubmit={(values) => {
            Alert.alert(JSON.stringify(values))
            console.log(values)
            setSnackbarVisible(true);
          }}
        >
            {({ handleChange, handleSubmit, values, errors, touched}) => (
                <ThemedMainView>
                <PageHeader title='Сторис советы'/>
                    <ScrollView style={[styles.container, { backgroundColor }]}>
                        <View style={styles.section}>
                            <InfoFormInput title='Имя' placeholder='Напишите ФИО пользователя' value={values.name} onChangeText={handleChange('name')}/>
                        </View>
                        <View style={styles.section}>
                            <InfoFormInput title='Контактные данные' placeholder='Напишите контактные данные пользователя' value={values.phone} onChangeText={handleChange('phone')}/>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.ttl}>Дата подачи заявки</Text>
                            <DatePickerModal initialDate={values.data} onDateChange={handleChange('data')}/>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.ttl}>Период заморозки</Text>
                            <DatePickerModal initialDate={values.termData} onDateChange={handleChange('termData')}/>
                        </View>
                        <View style={styles.section}> 
                            <InfoFormInput title='Причина заморозки' placeholder='Напишите причину заморозки пользователя' value={values.reason} onChangeText={handleChange('reason')}/>
                        </View>
                        <View style={styles.section}>
                            <InfoFormInput title='Статус' placeholder='Напишите cтатус пользователя' value={values.status} onChangeText={handleChange('status')} editable={false}/>
                        </View>
                        {values.status == 'Ожидает' ? (
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex:1, marginRight:5}}>
                                    <GradientButton title='Принять' toDo={acceptBtn}/>
                                </View>
                                <View style={{flex:1}}>
                                    <GradientButton title='Отклонить' toDo={cancelBtn}/>
                                </View>
                            </View>
                        ) : null}
                    </ScrollView>
                    {snackbarVisible && (
                        <Snackbar onClose={handleCloseSnackbar}/>
                    )}
                </ThemedMainView>
            )}
        </Formik>
    );
}

export default EditFrozen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
    error: {
      color: 'red',
      fontSize: 12,
    },
    btn: {
        backgroundColor: 'white',
        marginRight: 5,
        paddingHorizontal: 14,
        paddingVertical: 4,
        borderRadius: 30,
    },
    btnText: {
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