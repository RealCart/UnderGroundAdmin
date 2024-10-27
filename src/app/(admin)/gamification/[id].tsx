import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
import { Formik } from 'formik';
import { GamificationInfoValidation } from '@/src/constants/Validations';
import { getGamificationById } from '@/src/api/Api';
import { OPTIONSTITLE } from '@/src/screens/data/data';
import { OPTIONSPRIZE } from '@/src/screens/data/data';
import { PageHeader } from '@/src/components/PageHeader';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import Dropdown from '@/src/components/admin/Dropdown';
import GradientButton from '@/src/components/admin/GradientButton';
import MultilineInput from '@/src/components/admin/MultilineInput';
interface GamificationInfo {
    id: number,
    title:string,
    dateStart: string,
    dateEnd:string,
    status:string,
    amountOfPeople:number,
    prize:string,
    desc:string,
}

function EditGamification() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const { id } = useLocalSearchParams();
    const gamificationId = Number(id);
    const [gamification, setGamification] = useState<GamificationInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const [title, setTitle] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [status, setStatus] = useState('');
    const [amountOfPeople, setAmountOfPeople] = useState('');
    const [prize, setPrize] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(() => {
        const fetchGamification = async () => {
            setLoading(true); 
            try {
                const fetchedGamification = await getGamificationById(gamificationId);
                if (fetchedGamification) {
                    setGamification(fetchedGamification); 
                    setTitle(fetchedGamification.title);
                    setDateStart(fetchedGamification.dateStart);
                    setDateEnd(fetchedGamification.dateEnd);
                    setStatus(fetchedGamification.status);
                    setAmountOfPeople(fetchedGamification.amountOfPeople.toString());
                    setPrize(fetchedGamification.prize);
                    setDesc(fetchedGamification.desc);
                } else {
                    setGamification(null);
                }
            } catch (error) {
                console.error('Error fetching Gamification:', error);
                setGamification(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchGamification();
    }, [gamificationId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!gamification) {
        return <Text style={{ color: textColor }}>Gamification not found</Text>;
    }

    const deleteBtn = () => {

    }

    return (
        <Formik 
        initialValues={{
            title: title,
            desc: desc,
            amountOfPeople: amountOfPeople,
            prize: prize,
          }}
          validationSchema={GamificationInfoValidation}
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
                            <Text style={styles.ttl}>Название</Text>
                            <Dropdown options={OPTIONSTITLE} selectedOption={values.title} onChange={handleChange('title')}/>
                            {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
                        </View>
                        <View style={styles.section}>
                            <MultilineInput title='Описание' placeholder='Описание' value={values.desc} onChangeText={handleChange('desc')}/>
                            {touched.desc && errors.desc && <Text style={styles.error}>{errors.desc}</Text>}
                        </View>
                        <View style={styles.section}>
                            <InfoFormInput title='Участники' placeholder='Количество участнкиов' value={values.amountOfPeople} onChangeText={handleChange('amountOfPeople')}/>
                            {touched.amountOfPeople && errors.amountOfPeople && <Text style={styles.error}>{errors.amountOfPeople}</Text>}
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.ttl}>Приз</Text>
                            <Dropdown options={OPTIONSPRIZE} selectedOption={values.prize} onChange={handleChange('prize')}/>
                            {touched.prize && errors.prize && <Text style={styles.error}>{errors.prize}</Text>}
                        </View>
                        <View style={{flexDirection:'row', justifyContent:"center"}}>
                            <View style={{width:'48%', marginRight:5}}>
                                <GradientButton title="Сохранить" toDo={handleSubmit} />
                            </View>
                            <View style={{width:'48%'}}>
                                <GradientButton title="Удалить" toDo={deleteBtn} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                </ThemedMainView>
            )}
        </Formik>
    );
}

export default EditGamification;

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
