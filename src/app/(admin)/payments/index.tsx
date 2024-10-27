import { StyleSheet, FlatList, View } from 'react-native';
import { InputSearch } from '@/src/components/admin/InputSearch';
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";
import ListBtn from '@/src/components/admin/ListBtn';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { PageHeader } from '@/src/components/PageHeader';
import GradientButton from '@/src/components/admin/GradientButton';
import CancelModel from '@/src/components/admin/CacncelModel';
import { PAYMENTSFORM } from '@/src/screens/data/data';
import React, {useState} from 'react';

const ScheduleScreen = () => {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const [isCancelModalVisible, setCancelModalVisible] = useState(false);
  const router = useRouter();

  const addWorkOut = () => {
    router.push({ pathname: `/payments/addPayment`, params: {} });
  }

  return (
    <ThemedMainView>
      <PageHeader title='Платежи'/>
      <View style={[styles.container, {backgroundColor}]}>
        <InputSearch />
        <FlatList
          data={PAYMENTSFORM}
          style={{marginVertical:10, flex:1}}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <ListBtn
              path="payments"
              Id={item.id} 
              date={item.date}
              status={item.statusOfPayments}
              name={item.name}
              coach={item.coach}
              typeOfTrainig={item.typeOfSub}
              payedBy={item.payedBy}
              price={item.totalAmount}
              onCancelPress={() => setCancelModalVisible(true)}
              cancelBtn={true}
            />
          )}
        />
        <GradientButton title="+ Добавить платеж" toDo={addWorkOut} />
        <CancelModel modalVisible={isCancelModalVisible} setModalVisible={()=>setCancelModalVisible(false)}/>
      </View>
    </ThemedMainView>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});

