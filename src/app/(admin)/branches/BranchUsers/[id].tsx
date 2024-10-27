import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AllUsers, FrozenUsers } from '@/src/components/icons/Icon';
import { useLocalSearchParams } from 'expo-router';
import { PageHeader } from '@/src/components/PageHeader';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { SharedStatus } from '@/src/components/admin/SharedStatus';
import { InputSearch } from '@/src/components/admin/InputSearch';
import { SharedList } from '@/src/components/admin/SharedList';
import { BRANCHES } from '@/src/screens/data/data';
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";

export default function BranchUsers() {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background');
  const { id } = useLocalSearchParams();
  const branchId = Number(id);

  const branch = BRANCHES.find(branch => branch.id === branchId);

  if (!branch) {
    return <Text>Филиал не найден</Text>;
  }

  const users = branch.users || [];
  return (
    <ThemedMainView>
      <PageHeader title='Пользователи'/>
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={{fontSize:14, color:'#787878'}}>Обзор пользователей</Text>
        <View style={styles.SharedButton}>
          <SharedStatus title={'Пользователи'} count={users.length} icon={<AllUsers/>}/>
          <SharedStatus title={'Заморозка'} count={users.filter(users => users.status === 'Заморозка').length} icon={<FrozenUsers/>}/>
        </View>
        <View>
          <Text style={{fontSize:14, color:'#787878'}}>Пользователи</Text>
          <View style={{marginVertical:12}}><InputSearch /></View>
        </View>
        <View style={{flex: 1}}>
          <FlatList 
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <SharedList firstname={item.firstname} lastname={item.lastname} phone={item.phoneNumber} status={item.status} route={item.id} path="users"/>
            )}
          />
        </View>
      </View>
    </ThemedMainView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  SharedButton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});