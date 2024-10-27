import { StyleSheet, FlatList, View } from 'react-native';
import { InputSearch } from '@/src/components/admin/InputSearch';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { BRANCHES } from '@/src/screens/data/data';
import DeleteModel from '@/src/components/admin/DeleteModal';
import { PageHeader } from '@/src/components/PageHeader';
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";
import ListBtn from '@/src/components/admin/ListBtn';
import GradientButton from '@/src/components/admin/GradientButton';
import React, {useState} from 'react';

const BranchesScreen = () => {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const router = useRouter();

  const addBranch = () => {
    router.push({ pathname: `/branches/addBranch`, params: {} });
  }

  return (
    <ThemedMainView>
      <PageHeader title='Филиалы'/>
      <View style={[styles.container, {backgroundColor}]}>
        <InputSearch />
        <FlatList
          data={BRANCHES}
          style={{marginVertical:10, flex:1}}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <ListBtn
              path="branches"
              Id={item.id}
              adress={item.title}
              countOfCoach={item.countOfCoaches.toString()}
              countOfUser={item.countOfUsers.toString()}
              status={item.status}
              deleteBtn={true}
              onDeletePress={() => setDeleteModalVisible(true)}
            />
          )}
        />
        <GradientButton title="+ Добавить филиал" toDo={addBranch} />
      </View>
      <DeleteModel modalVisible={isDeleteModalVisible} setModalVisible={()=>setDeleteModalVisible(false)}/>
    </ThemedMainView>
  );
};

export default BranchesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
