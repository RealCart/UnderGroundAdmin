import { useState } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, Alert } from 'react-native'; 
import { Formik } from 'formik';
import { StoreProductsValidation } from '@/src/constants/Validations';
import { PageHeader } from '@/src/components/PageHeader';
import Snackbar from '@/src/components/admin/SnackBar';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import GradientButton from '@/src/components/admin/GradientButton';
import MediaInput from '@/src/components/admin/MediaInput';
import MultilineInput from '@/src/components/admin/MultilineInput';
import DynamicInputForm from '@/src/components/admin/DynamicInputForm';

function EditStoreProducts() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 

    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
    };

    return (
        <Formik 
            initialValues={{
                media: '',
                title: '',
                price: '',
                discountPrice: '',
                count: '',
                color: '',
                size: '',
                character: [''],  
                desc: '',
            }}
            validationSchema={StoreProductsValidation}
            onSubmit={(values) => {
                Alert.alert(JSON.stringify(values))
                console.log(values)
                setSnackbarVisible(true);
            }}
        >
            {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
                <ThemedMainView>
                <PageHeader title='Добавить товар'/>
                <ScrollView style={[styles.container, { backgroundColor }]}>
                    <View style={styles.section}>
                        <MediaInput title='Медиа' placeholder='' value={values.media} onChangeText={handleChange('media')} editable={false}/>
                        {touched.media && errors.media && <Text style={styles.error}>{errors.media}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Название' placeholder='Напишите название товара' value={values.title} onChangeText={handleChange('title')}/>
                        {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Цена' placeholder='Введите цену товара' keyboardType='numeric' value={String(values.price)} onChangeText={handleChange('price')}/>
                        {touched.price && errors.price && <Text style={styles.error}>{errors.price}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Цена по скидке' keyboardType='numeric' placeholder='Введите цену по скидке' value={String(values.discountPrice)} onChangeText={handleChange('discountPrice')}/>
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Количество' keyboardType='numeric' placeholder='Введите количество товаров' value={values.count} onChangeText={handleChange('count')}/>
                        {touched.count && errors.count && <Text style={styles.error}>{errors.count}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Цвета' placeholder='Введите цвета товара' value={values.color} onChangeText={handleChange('color')}/>
                        {touched.color && errors.color && <Text style={styles.error}>{errors.color}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Размеры' placeholder='Введите размеры товара' value={values.size} onChangeText={handleChange('size')}/>
                        {touched.size && errors.size && <Text style={styles.error}>{errors.size}</Text>}
                    </View>
                    <View style={styles.section}>
                        <DynamicInputForm
                            title='Характеристики'
                            placeholder=''
                            value={values.character}
                            onChangeText={(newValues) => setFieldValue('character', newValues)}
                            errors={Array.isArray(errors.character) ? errors.character : []}
                            touched={Array.isArray(touched.character) ? touched.character : []} 
                        />
                    </View>
                    <View style={styles.section}>
                        <MultilineInput title='Описание' placeholder='' value={values.desc} onChangeText={handleChange('desc')}/>
                        {touched.desc && errors.desc && <Text style={styles.error}>{errors.desc}</Text>}
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

export default EditStoreProducts;

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
