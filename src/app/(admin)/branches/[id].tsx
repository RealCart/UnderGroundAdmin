import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
import { Formik } from 'formik';
import { BranchInfoValidation } from '@/src/constants/Validations';
import { PageHeader } from '@/src/components/PageHeader';
import { getBranchById } from '@/src/api/Api';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import WorkHours from '@/src/components/admin/WorkHours';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import NotEditableInput from '@/src/components/admin/NotEditableInput';
import BranchLoader from '@/src/components/admin/BranchLoader';
import PhoneNumberInput from '@/src/components/admin/PhoneNumberInput';
import GradientButton from '@/src/components/admin/GradientButton';

interface BranchesInfo {
    id: number; 
    title:string,
    adress:string,
    phoneNumber:string,
    email:string,
    countOfCoaches:number,
    countOfUsers:number,
    load:string,
}

function EditBranch() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const { id } = useLocalSearchParams();
    const BranchdId = Number(id);
    const [branch, setBranch] = useState<BranchesInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const [title, setTitle] = useState('');
    const [adress, setAdress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [countOfCoaches, setCountOfCoaches] = useState('');
    const [countOfUsers, setCountOfUsers] = useState('');
    const [load, setLoad] = useState('');

    useEffect(() => {
        const fetchBranch = async () => {
            setLoading(true); 
            try {
                const fetchedBranch = await getBranchById(BranchdId);
                if (fetchedBranch) {
                    setBranch(fetchedBranch); 
                    setTitle(fetchedBranch.title)
                    setAdress(fetchedBranch.adress)
                    setPhoneNumber(fetchedBranch.phoneNumber)
                    setEmail(fetchedBranch.email)
                    setCountOfCoaches(fetchedBranch.countOfCoaches.toString())
                    setCountOfUsers(fetchedBranch.countOfUsers.toString())
                    setLoad(fetchedBranch.load)
                } else {
                    setBranch(null);
                }
            } catch (error) {
                console.error('Error fetching branch:', error);
                setBranch(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchBranch();
    }, [BranchdId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!branch) {
        return <Text style={{ color: textColor }}>Workout not found</Text>;
    }

    return (
        <Formik 
        initialValues={{
            title: title,
            adress: adress,
            phoneNumber:  phoneNumber,
            email:  email,
            countOfCoaches: countOfCoaches,
            countOfUsers: countOfUsers,
          }}
          validationSchema={BranchInfoValidation}
          onSubmit={(values) => {
                console.log(values)
                Alert.alert(JSON.stringify(values))
          }}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <ThemedMainView style={{flex:1}}>
                <PageHeader title={values.title}/>
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
                        </View>
                        <View style={styles.section}>
                            <NotEditableInput title='Число тренеров' value={values.countOfCoaches} path='BranchCoach' branchId={BranchdId} onChangeText={handleChange('countOfCoaches')}/> 
                            {touched.countOfCoaches && errors.countOfCoaches && <Text style={styles.error}>{errors.countOfCoaches}</Text>}
                        </View> 
                        <View style={styles.section}>
                            <NotEditableInput title='Число пользователей' value={values.countOfUsers} path='BranchUsers' branchId={BranchdId} onChangeText={handleChange('countOfUsers')}/> 
                            {touched.countOfUsers && errors.countOfUsers && <Text style={styles.error}>{errors.countOfUsers}</Text>}
                        </View>
                        <View style={styles.section}>
                            <BranchLoader title='Загрузка филиала' value={`${load} от максимальной вместимости`}/> 
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
