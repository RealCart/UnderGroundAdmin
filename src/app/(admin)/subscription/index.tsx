import { StyleSheet, FlatList, View } from 'react-native';
import { InputSearch } from '@/src/components/admin/InputSearch';
import { useRouter } from 'expo-router';
import { PageHeader } from '@/src/components/PageHeader';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import React, {useState} from 'react';
import { SUBSCRIPTION } from '@/src/screens/data/data';
import DeleteModel from '@/src/components/admin/DeleteModal';
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";
import ListBtn from '@/src/components/admin/ListBtn';
import GradientButton from '@/src/components/admin/GradientButton';

const SubscriptionScreen = () => {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const router = useRouter();

  const addSubscription = () => {
    router.push({ pathname: `/subscription/addSubscription`, params: {} });
  }

  return (
    <ThemedMainView>
      <PageHeader title='Абонементы'/>
      <View style={[styles.container, {backgroundColor}]}>
        <InputSearch />
        <FlatList
          data={SUBSCRIPTION}
          style={{marginVertical:10, flex:1}}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <ListBtn
              path="subscription"
              Id={item.id}
              title={item.title}
              date={item.price}
              typeOfNotification={item.type}
              typeOfTrainig={`${item.term} месяц`}
              coach={`${item.countOfTraining} тренировок`}
              branch={item.include}
              deleteBtn={true}
              onDeletePress={() => setDeleteModalVisible(true)}
            />
            )}
          />
        <GradientButton title="+ Добавить абонемент" toDo={addSubscription} />
      </View>
      <DeleteModel modalVisible={isDeleteModalVisible} setModalVisible={()=>setDeleteModalVisible(false)}/>
    </ThemedMainView>
  );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
