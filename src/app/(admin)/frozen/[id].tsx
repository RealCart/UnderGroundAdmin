import { ScrollView, View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'; 
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
import TermPickerModal from '@/src/components/admin/Termpicker';
import GradientButton from '@/src/components/admin/GradientButton';
import InfoFormInput from '@/src/components/admin/InfoFormInput';

interface FrozenInfo {
  id: number;
  name: string;
  data: string;
  reason: string;
  status: string;
  phone: string;
  termDate: {
    startDate: string;
    endDate: string;
  };
}

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

function EditFrozen() {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const { id } = useLocalSearchParams();
  const frozenId = Number(id);
  const [frozen, setFrozen] = useState<FrozenInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  
  const handleCloseSnackbar = () => {
    setSnackbarVisible(false);
  };

  const acceptBtn = () => {
    Alert.alert('Заявка принята');
  };

  const cancelBtn = () => {
    Alert.alert('Заявка отклонена');
  };

  useEffect(() => {
    const fetchFrozen  = async () => {
      setLoading(true); 
      try {
        const fetchFrozen = await getFrozenById(frozenId);
        if (fetchFrozen) {
          setFrozen(fetchFrozen);
        } else {
          setFrozen(null);
        }
      } catch (error) {
        console.error('Error fetching frozen data:', error);
        setFrozen(null); 
      } finally {
        setLoading(false); 
      }
    };

    fetchFrozen();
  }, [frozenId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!frozen) {
    return <Text style={{ color: textColor }}>Заморозка не найдена</Text>;
  }

  return (
    <Formik 
      initialValues={{
        name: frozen.name || '',
        reason: frozen.reason || '',
        phone: frozen.phone || '',
        data: frozen.data || formatDate(new Date()),
        termDate: frozen.termDate || {
          startDate: formatDate(new Date()),
          endDate: formatDate(new Date()),
        },
        status: frozen.status || '',
      }}
      validationSchema={FrozenInfoValidation}
      onSubmit={(values) => {
        Alert.alert('Данные сохранены', JSON.stringify(values));
        console.log(values);
        setSnackbarVisible(true);
      }}
    >
      {({ handleChange, handleSubmit, setFieldValue, values, errors, touched }) => (
        <ThemedMainView>
          <PageHeader title='Заморозка'/>
          <ScrollView style={[styles.container, { backgroundColor }]}>
            <View style={styles.section}>
              <InfoFormInput
                title='Имя'
                placeholder='Напишите ФИО пользователя'
                value={values.name}
                onChangeText={handleChange('name')}
              />
              {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
            </View>
            <View style={styles.section}>
              <InfoFormInput
                title='Контактные данные'
                placeholder='Напишите контактные данные пользователя'
                value={values.phone}
                onChangeText={handleChange('phone')}
              />
              {touched.phone && errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
            </View>
            <View style={styles.section}>
              <Text style={styles.ttl}>Дата подачи заявки</Text>
              <DatePickerModal
                initialDate={values.data}
                onDateChange={(date) => setFieldValue('data', date)}
              />
              {touched.data && errors.data && <Text style={styles.error}>{errors.data}</Text>}
            </View>
            <View style={styles.section}>
              <Text style={styles.ttl}>Период заморозки</Text>
              <TermPickerModal
                initialDate={values.termDate}
                onDateChange={(dates) => setFieldValue('termDate', dates)}
              />
              {touched.termDate?.startDate && errors.termDate?.startDate && (
                <Text style={styles.error}>{errors.termDate.startDate}</Text>
              )}
              {touched.termDate?.endDate && errors.termDate?.endDate && (
                <Text style={styles.error}>{errors.termDate.endDate}</Text>
              )}
            </View>
            <View style={styles.section}> 
              <InfoFormInput
                title='Причина заморозки'
                placeholder='Напишите причину заморозки пользователя'
                value={values.reason}
                onChangeText={handleChange('reason')}
              />
              {touched.reason && errors.reason && <Text style={styles.error}>{errors.reason}</Text>}
            </View>
            <View style={styles.section}>
              <InfoFormInput
                title='Статус'
                placeholder='Напишите статус пользователя'
                value={values.status}
                onChangeText={handleChange('status')}
                editable={false}
              />
              {touched.status && errors.status && <Text style={styles.error}>{errors.status}</Text>}
            </View>
            {values.status === 'Ожидает' ? (
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <View style={{ flex: 1, marginRight: 5 }}>
                  <GradientButton title='Принять' toDo={acceptBtn} />
                </View>
                <View style={{ flex: 1 }}>
                  <GradientButton title='Отклонить' toDo={cancelBtn} />
                </View>
              </View>
            ) : null}
            <View>
              <GradientButton title='Сохранить изменения' toDo={handleSubmit} />
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
  ttl: {
    fontSize: 12, 
    color: '#787878',
  },
  section: {
    marginBottom: 10,
  },
});
