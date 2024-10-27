import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet,  Alert } from 'react-native'; 
import { Formik } from 'formik';
import { GamificationInfoValidation } from '@/src/constants/Validations';
import { OPTIONSTITLE } from '@/src/screens/data/data';
import { OPTIONSPRIZE } from '@/src/screens/data/data';
import { PageHeader } from '@/src/components/PageHeader';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import Dropdown from '@/src/components/admin/Dropdown';
import GradientButton from '@/src/components/admin/GradientButton';
import MultilineInput from '@/src/components/admin/MultilineInput';


function EditGamification() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 

    return (
        <Formik 
        initialValues={{
            title: '',
            desc: '',
            amountOfPeople: '',
            prize: '',
          }}
          validationSchema={GamificationInfoValidation}
          onSubmit={(values) => {
            Alert.alert(JSON.stringify(values))
            console.log(values)
          }}
        >
            {({ handleChange, handleSubmit, values, errors, touched}) => (
                <ThemedMainView>
                <PageHeader title='Добавить геймификацию'/>
                <ScrollView style={[styles.container, { backgroundColor }]}>
                    <View>
                        <View style={styles.section}>
                            <Text style={styles.ttl}>Название</Text>
                            <Dropdown options={OPTIONSTITLE} selectedOption={values.title} onChange={handleChange('title')} placeholder='Выберите название'/>
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
                            <Dropdown options={OPTIONSPRIZE} selectedOption={values.prize} onChange={handleChange('prize')} placeholder='Выберите приз'/>
                            {touched.prize && errors.prize && <Text style={styles.error}>{errors.prize}</Text>}
                        </View>
                        <View style={{justifyContent:"center",}}>
                            <GradientButton title="Сохранить" toDo={handleSubmit} />
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