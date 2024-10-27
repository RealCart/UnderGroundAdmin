import { StyleSheet, FlatList, View } from 'react-native';
import { InputSearch } from '@/src/components/admin/InputSearch';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { GAMIFICATION } from '@/src/screens/data/data';
import { PageHeader } from '@/src/components/PageHeader';
import DeleteModel from '@/src/components/admin/DeleteModal';
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";
import ListBtn from '@/src/components/admin/ListBtn';
import GradientButton from '@/src/components/admin/GradientButton';
import React, {useState} from 'react';

const GamificationScreen = () => {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const router = useRouter();

  const addWorkOut = () => {
    router.push({ pathname: `/gamification/addGamification`, params: {} });
  }

  return (
    <ThemedMainView>
      <PageHeader title='Список активных программ'/>
      <View style={[styles.container, {backgroundColor}]}>
        <InputSearch />
        <FlatList
          data={GAMIFICATION}
          style={{marginVertical:10, flex:1}}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <ListBtn
              path="gamification"
              Id={item.id} 
              title={item.title}
              date={item.dateStart}
              typeOfNotification={item.dateEnd}
              status={item.status}
              coach={`${item.amountOfPeople} участников`}
              payedBy={item.prize}
              completeBtn={true}
              deleteBtn={true}
              onDeletePress={() => setDeleteModalVisible(true)}
            />
          )}
        />
        <GradientButton title="+ Добавить тренировку" toDo={addWorkOut} />
      </View>
      <DeleteModel modalVisible={isDeleteModalVisible} setModalVisible={()=>setDeleteModalVisible(false)}/>
    </ThemedMainView>
  );
};

export default GamificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});