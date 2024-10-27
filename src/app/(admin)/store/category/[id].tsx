import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
import { Formik } from 'formik';
import { CategoryValidation } from '@/src/constants/Validations';
import { getStoreCategoryById } from '@/src/api/Api';
import { PageHeader } from '@/src/components/PageHeader';
import Snackbar from '@/src/components/admin/SnackBar';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import GradientButton from '@/src/components/admin/GradientButton';

interface StoreCategoryInfo {
    id: number,
    title:string,
}

function EditStoreCategory() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const { id } = useLocalSearchParams();
    const StoreCategoryId = Number(id);
    const [StoreCategory, setStoreCategory] = useState<StoreCategoryInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const [title, setTitle] = useState('');

    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
    };

    useEffect(() => {
        const fetchStoreCategory = async () => {
            setLoading(true); 
            try {
                const fetchedStoreCategory = await getStoreCategoryById(StoreCategoryId);
                if (fetchedStoreCategory) {
                    setStoreCategory(fetchedStoreCategory); 
                    setTitle(fetchedStoreCategory.title);
                } else {
                    setStoreCategory(null);
                }
            } catch (error) {
                console.error('Error fetching StoreCategory:', error);
                setStoreCategory(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchStoreCategory();
    }, [StoreCategoryId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!StoreCategory) {
        return <Text style={{ color: textColor }}>StoreCategory not found</Text>;
    }

    return (
        <Formik 
        initialValues={{
            title: title,
          }}
          validationSchema={CategoryValidation}
          onSubmit={(values) => {
            Alert.alert(JSON.stringify(values))
            console.log(values)
            setSnackbarVisible(true);
          }}
        >
            {({ handleChange, handleSubmit, values, errors, touched}) => (
                <ThemedMainView>
                <PageHeader title='Категории'/>
                <ScrollView style={[styles.container, { backgroundColor }]}>
                    <View style={styles.section}>
                     <InfoFormInput title='Название' placeholder='Заполните название категории' value={values.title} onChangeText={handleChange('title')}/>
                     {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
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

export default EditStoreCategory;

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