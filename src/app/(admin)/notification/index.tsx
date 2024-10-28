import { StyleSheet, FlatList, View } from 'react-native';
import { InputSearch } from '@/src/components/admin/InputSearch';
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";
import ListBtn from '@/src/components/admin/ListBtn';
import { useRouter } from 'expo-router';
import { PageHeader } from '@/src/components/PageHeader';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import DeleteModel from '@/src/components/admin/DeleteModal';
import GradientButton from '@/src/components/admin/GradientButton';
import { NOTIFICATIONS } from '@/src/screens/data/data';
import React, {useState} from 'react';

const NotificationScreen = () => {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const router = useRouter();

  const addWorkOut = () => {
    router.push({ pathname: `/notification/addNotification`, params: {} });
  }
  
  const deleteModal = () => {

  }

  return (
    <ThemedMainView>
      <PageHeader title='Уведомления'/>
      <View style={[styles.container, {backgroundColor}]}>
        <InputSearch />
        <FlatList
          data={NOTIFICATIONS}
          style={{marginVertical:10, flex:1}}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <ListBtn
              path="notification"
              Id={item.id} 
              adress={item.title}
              date={item.date}
              typeOfNotification={item.typeOfNotification}
              status={item.statusOfNotification}
              coach={item.method}
              payedBy={item.toWho}
              deleteBtn={true}
              onDeletePress={() => setDeleteModalVisible(true)}
            />
          )}
        />
        <GradientButton title="+ Добавить тренировку" toDo={addWorkOut} />
      </View>
      <DeleteModel modalVisible={isDeleteModalVisible} deleteGradient={deleteModal} setModalVisible={()=>setDeleteModalVisible(false)}/>
    </ThemedMainView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
