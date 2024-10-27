import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
import { getStoriesById } from '@/src/api/Api';
import { StoriesInfoValidation } from '@/src/constants/Validations';
import { PageHeader } from '@/src/components/PageHeader';
import { Formik } from 'formik';
import Snackbar from '@/src/components/admin/SnackBar';
import MultilineInput from '@/src/components/admin/MultilineInput';
import MediaInput from '@/src/components/admin/MediaInput';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import DatePickerModal from '@/src/components/admin/datepicker';
import GradientButton from '@/src/components/admin/GradientButton';
import InfoFormInput from '@/src/components/admin/InfoFormInput';


interface StoriesInfo {
    id: number,
    title:string,
    dataStart:string,
    status:string,
    desc:string,
    media:any,
}

function EditStories() {
    const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const { id } = useLocalSearchParams();
    const storiesId = Number(id);
    const [stories, setStories] = useState<StoriesInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const [title, setTitle] = useState('');
    const [dataStart, setDataStart] = useState('');
    const [status, setStatus] = useState('');
    const [desc, setDesc] = useState('');
    const [media, setMedia] = useState('');

    const [snackbarVisible, setSnackbarVisible] = useState(false);
  
    const handleCloseSnackbar = () => {
      setSnackbarVisible(false);
    };
    useEffect(() => {
        const fetchStories  = async () => {
            setLoading(true); 
            try {
                const fetchStories = await getStoriesById(storiesId);
                if (fetchStories) {
                    setStories(fetchStories);
                    setTitle(fetchStories.title);
                    setDataStart(fetchStories.dataStart);
                    setStatus(fetchStories.status);
                    setDesc(fetchStories.desc);
                    setMedia(fetchStories.media);
                } else {
                    setStories(null);
                }
            } catch (error) {
                console.error('Error fetching schedule:', error);
                setStories(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchStories();
    }, [storiesId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!stories) {
        return <Text style={{ color: textColor }}>Stories not found</Text>;
    }

    return (
        <Formik 
        initialValues={{
            title: title,
            data: dataStart,
            status: status,
            desc: desc,
            media: media
          }}
          validationSchema={StoriesInfoValidation}
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
                            <InfoFormInput title='Название' placeholder='Напишите название сториса' value={values.title} onChangeText={handleChange('title')}/>
                            {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
                        </View>
                        <View style={styles.section}>
                            <MultilineInput title='Описание' placeholder='Напишите описание сториса' value={values.desc} onChangeText={handleChange('desc')}/>
                            {touched.desc && errors.desc && <Text style={styles.error}>{errors.desc}</Text>}
                        </View>
                        <View style={styles.section}>
                            <MediaInput title='Медиа' placeholder='Прикрепите файлы' editable={false} value={values.media} onChangeText={handleChange('media')}/>
                            {touched.media && errors.media && <Text style={styles.error}>{errors.media}</Text>}
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.ttl}>Дата публикации</Text>
                            <DatePickerModal initialDate={values.data} onDateChange={handleChange('data')}/>
                            {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
                        </View>
                        <View>
                            <GradientButton title='Сохранить' toDo={handleSubmit}/>
                        </View>
                    </ScrollView>
                    {snackbarVisible && (
                        <Snackbar onClose={handleCloseSnackbar}/>
                    )}
                </ThemedMainView>
            )}
        </Formik>
    );
}

export default EditStories;

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