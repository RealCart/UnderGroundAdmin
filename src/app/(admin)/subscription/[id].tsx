import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
import { Formik } from 'formik';
import { SubscriptionInfoValidation } from '@/src/constants/Validations';
import { getSubscriptionById } from '@/src/api/Api';
import { PageHeader } from '@/src/components/PageHeader';
import { OPTIONSTYPE, SPECIALIZED_OPTIONS, TYPEOFSTATUS } from '@/src/screens/data/data';
import Snackbar from '@/src/components/admin/SnackBar';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import Dropdown from '@/src/components/admin/Dropdown';
import GradientButton from '@/src/components/admin/GradientButton';
import MultiSelectDropdownList from '@/src/components/admin/MultiDropdown';
interface SubscriptionInfo {
    id: number,
    title:string,
    price:string,
    typeOf:string,
    term:string,
    countOfTraining:string, 
    include:string[],
}

function EditSubscription() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const { id } = useLocalSearchParams();
    const SubscriptionId = Number(id);
    const [Subscription, setSubscription] = useState<SubscriptionInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [typeOf, setTypeOf] = useState('');
    const [term, setTerm] = useState('');
    const [countOfTraining, setCountOfTraining] = useState('');
    const [include, setInclude] = useState(['']);

    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
    };

    useEffect(() => {
        const fetchSubscription = async () => {
            setLoading(true); 
            try {
                const fetchedSubscription = await getSubscriptionById(SubscriptionId);
                if (fetchedSubscription) {
                    setSubscription(fetchedSubscription); 
                    setTitle(fetchedSubscription.title);
                    setPrice(fetchedSubscription.price);
                    setTypeOf(fetchedSubscription.typeOf);
                    setTerm(fetchedSubscription.term);
                    setCountOfTraining(fetchedSubscription.countOfTraining);
                    setInclude(fetchedSubscription.include);
                } else {
                    setSubscription(null);
                }
            } catch (error) {
                console.error('Error fetching Subscription:', error);
                setSubscription(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchSubscription();
    }, [SubscriptionId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!Subscription) {
        return <Text style={{ color: textColor }}>Subscription not found</Text>;
    }

    const deleteBtn = () => {

    }

    return (
        <Formik 
        initialValues={{
            title: title,
            price: price,
            typeOf: typeOf,
            term:term,
            countOfTraining: countOfTraining,
            include: include,
          }}
          validationSchema={SubscriptionInfoValidation}
          onSubmit={(values) => {
            Alert.alert(JSON.stringify(values))
            console.log(values)
            setSnackbarVisible(true);
          }}
        >
            {({ handleChange, handleSubmit, setFieldValue, values, errors, touched}) => (
                <ThemedMainView>
                <PageHeader title='Добавить абонемент'/>
                <ScrollView style={[styles.container, { backgroundColor }]}>
                    <View style={styles.section}>
                     <InfoFormInput title='Название абонемента' placeholder='Заполните название абонимента' value={values.title} onChangeText={handleChange('title')}/>
                     {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Продолжительность</Text>
                        <Dropdown options={OPTIONSTYPE} selectedOption={values.term} onChange={handleChange('term')}/>
                        {touched.term && errors.term && <Text style={styles.error}>{errors.term}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Количество тренировок' placeholder='Заполните количество тренировок' value={values.countOfTraining} onChangeText={handleChange('countOfTraining')}/>
                        {touched.countOfTraining && errors.countOfTraining && <Text style={styles.error}>{errors.countOfTraining}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.ttl}>Тип</Text>
                        <Dropdown options={SPECIALIZED_OPTIONS} selectedOption={values.typeOf} onChange={handleChange('typeOf')}/>
                        {touched.typeOf && errors.typeOf && <Text style={styles.error}>{errors.typeOf}</Text>}
                    </View>
                    <View>
                        <Text style={styles.ttl}>Дополнительно</Text>
                        <MultiSelectDropdownList
                            options={SPECIALIZED_OPTIONS}
                            selectedOption={values.include}
                            onChange={(selectedValues) => setFieldValue('include', selectedValues)}
                        />
                        {touched.include && errors.include && (
                            <Text style={styles.error}>{String(errors.include)}</Text>
                        )}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Стоимость' placeholder='Заполните стоимость абонимента' keyboardType='numeric' value={values.price} onChangeText={handleChange('price')}/>
                        {touched.price && errors.price && <Text style={styles.error}>{errors.price}</Text>}
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

export default EditSubscription;

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