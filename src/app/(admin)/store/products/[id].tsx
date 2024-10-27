import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
import { Formik } from 'formik';
import { StoreProductsValidation } from '@/src/constants/Validations';
import { getProductCategoryById } from '@/src/api/Api';
import { PageHeader } from '@/src/components/PageHeader';
import DynamicInputForm from '@/src/components/admin/DynamicInputForm';
import Snackbar from '@/src/components/admin/SnackBar';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import InfoFormInput from '@/src/components/admin/InfoFormInput';
import GradientButton from '@/src/components/admin/GradientButton';
import MediaInput from '@/src/components/admin/MediaInput';
import MultilineInput from '@/src/components/admin/MultilineInput';

interface StoreProductsInfo {
    id: number,
    title:string,
    price:string,
    discountPrice:string, 
    count:string, 
    media:string,
    color:string, 
    size:string, 
    character:string[], 
    desc:string,
}

function EditStoreProducts() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const { id } = useLocalSearchParams();
    const StoreProductsId = Number(id);
    const [StoreProducts, setStoreProducts] = useState<StoreProductsInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [discountPrice, setDiscountPrice] = useState('');
    const [count, setCount] = useState('');
    const [media, setMedia] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [character, setCharacter] = useState(['']);
    const [desc, setDesc] = useState('');


    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
    };

    useEffect(() => {
        const fetchStoreProducts = async () => {
            setLoading(true); 
            try {
                const fetchedStoreProducts = await getProductCategoryById(StoreProductsId);
                if (fetchedStoreProducts) {
                    setStoreProducts(fetchedStoreProducts); 
                    setTitle(fetchedStoreProducts.title)
                    setPrice(fetchedStoreProducts.price)
                    setDiscountPrice(fetchedStoreProducts.discountPrice)
                    setCount(fetchedStoreProducts.count)
                    setMedia(fetchedStoreProducts.media)
                    setColor(fetchedStoreProducts.color)
                    setSize(fetchedStoreProducts.size)
                    setCharacter(fetchedStoreProducts.character)
                    setDesc(fetchedStoreProducts.desc)
                } else {
                    setStoreProducts(null);
                }
            } catch (error) {
                console.error('Error fetching StoreProducts:', error);
                setStoreProducts(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchStoreProducts();
    }, [StoreProductsId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!StoreProducts) {
        return <Text style={{ color: textColor }}>StoreProducts not found</Text>;
    }

    return (
        <Formik 
            initialValues={{
                media: media,
                title: title,
                price: price,
                count: count,
                color: color,
                size: size,
                character: character,
                desc: desc,
            }}
            validationSchema={StoreProductsValidation}
            onSubmit={(values) => {
                Alert.alert(JSON.stringify(values))
                console.log(values)
                setSnackbarVisible(true);
            }}
        >
            {({ handleChange, handleSubmit, setFieldValue, values, errors, touched}) => (
                <ThemedMainView>
                <PageHeader title='Добавить товар'/>
                <ScrollView style={[styles.container, { backgroundColor }]}>
                    <View style={styles.section}>
                        <MediaInput title='Медиа' placeholder='' value={values.media} onChangeText={handleChange('media')}/>
                        {touched.media && errors.media && <Text style={styles.error}>{errors.media}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Название' placeholder='Напишите название товара' value={values.title} onChangeText={handleChange('title')}/>
                        {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Цена' placeholder='Введите цену товара' value={values.price} onChangeText={handleChange('price')} keyboardType='numeric'/>
                        {touched.price && errors.price && <Text style={styles.error}>{errors.price}</Text>}
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Цена по скидке' placeholder='' value={discountPrice} onChangeText={handleChange('discountPrice')} keyboardType='numeric'/>
                    </View>
                    <View style={styles.section}>
                        <InfoFormInput title='Количество' keyboardType='numeric' placeholder='Введите количество товара' value={values.count} onChangeText={handleChange('count')}/>
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