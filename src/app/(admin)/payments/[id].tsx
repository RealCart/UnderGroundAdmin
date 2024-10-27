import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
import { getPaymentsById } from '@/src/api/Api';
import { WAYTOPAY } from '@/src/screens/data/data';
import { TYPEOFSUBS } from '@/src/screens/data/data';
import { TYPEOFSTATUS } from '@/src/screens/data/data';
import { PageHeader } from '@/src/components/PageHeader';
import { Formik } from 'formik';
import { PaymentsInfoValidation } from '@/src/constants/Validations';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import DatePickerModal from '@/src/components/admin/datepicker';
import Dropdown from '@/src/components/admin/Dropdown';
import GradientButton from '@/src/components/admin/GradientButton';

interface PaymentsInfo {
    id: number; 
    name:string; 
    date:string,
    statusOfPayments: string; 
    typeOfSub: string; 
    coach: string; 
    payedBy: string; 
    totalAmount:string,
}

function EditPayments() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const { id } = useLocalSearchParams();
    const paymentsId = Number(id);
    const [payment, setPayment] = useState<PaymentsInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const [name, setName] = useState('');
    const [coach, setCoach] = useState('');
    const [date, setDate] = useState('');
    const [statusOfPayments, setStatusOfPayments] = useState('');
    const [typeOfSub, setTypeOfSub] = useState('');
    const [payedBy, setPayedBy] = useState('');
    const [totalAmount, setTotalAmount] = useState('');

    const Refund = () => {
        
    }

    useEffect(() => {
        const fetchSchedule = async () => {
            setLoading(true); 
            try {
                const fetchedPayment = await getPaymentsById(paymentsId);
                if (fetchedPayment) {
                    setPayment(fetchedPayment);
                    setName(fetchedPayment.name); 
                    setStatusOfPayments(fetchedPayment.statusOfPayments);
                    setCoach(fetchedPayment.coach);
                    setDate(fetchedPayment.date);
                    setTypeOfSub(fetchedPayment.typeOfSub);
                    setPayedBy(fetchedPayment.payedBy);
                    setTotalAmount(fetchedPayment.totalAmount);
                } else {
                    setPayment(null);
                }
            } catch (error) {
                console.error('Error fetching schedule:', error);
                setPayment(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchSchedule();
    }, [paymentsId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!payment) {
        return <Text style={{ color: textColor }}>Payments not found</Text>;
    }

    return (
        <Formik
            initialValues={{
                data: date,
                client: name,
                payedBy: payedBy,
                service: typeOfSub,
                amountOf: totalAmount,
                status: statusOfPayments,
            }}
            validationSchema={PaymentsInfoValidation}
            onSubmit={(values) => {
                Alert.alert(JSON.stringify(values))
                console.log(values)
            }}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <ThemedMainView>
                <PageHeader title='Платежи'/>
                <ScrollView style={[styles.container, { backgroundColor }]}>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Дата платежа</Text>
                        <DatePickerModal initialDate={values.data} onDateChange={handleChange('data')}/>
                        {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title="Клиент" value={values.client} onChangeText={handleChange('client')} placeholder="ФИО клиента"/>
                        {touched.client && errors.client && <Text style={styles.error}>{errors.client}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Метод оплаты</Text>
                        <Dropdown options={WAYTOPAY} selectedOption={values.payedBy} onChange={handleChange('payedBy')}/>
                        {touched.payedBy && errors.payedBy && <Text style={styles.error}>{errors.payedBy}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Услуга</Text>
                        <Dropdown options={TYPEOFSUBS} selectedOption={values.service} onChange={handleChange('service')}/>
                        {touched.service && errors.service && <Text style={styles.error}>{errors.service}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput placeholder='Сумма платежа' title='Сумма' value={values.amountOf} onChangeText={handleChange('amountOf')}/>
                        {touched.amountOf && errors.amountOf && <Text style={styles.error}>{errors.amountOf}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Статус</Text>
                        <Dropdown options={TYPEOFSTATUS} selectedOption={values.status} onChange={handleChange('status')}/>
                        {touched.status && errors.status && <Text style={styles.error}>{errors.status}</Text>}
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        <View style={{width:'48%', marginRight:5}}>
                            <GradientButton title='Отправить квитанцию' toDo={handleSubmit}/>
                        </View>
                        <View style={{width:'48%'}}>
                            <GradientButton title='Возврат средств' toDo={Refund}/>
                        </View>
                    </View>
                </ScrollView>
                </ThemedMainView>
            )}
        </Formik>
    );
}

export default EditPayments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
    ttl: {
        fontSize: 12, 
        color: '#787878'
    },
    error: {
      color: 'red',
      fontSize: 12,
    },
    section: {
        marginBottom:10,
    }
});
