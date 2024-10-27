import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AllUsers, ActiveUsers, NonActiveUsers, FrozenUsers } from '@/src/components/icons/Icon';
import { PageHeader } from '@/src/components/PageHeader';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { SharedStatus } from '@/src/components/admin/SharedStatus';
import { InputSearch } from '@/src/components/admin/InputSearch';
import { SharedList } from '@/src/components/admin/SharedList';
import { userList } from '@/src/screens/data/userData';
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";

export default function UsersIndex() {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 

  return (
    <ThemedMainView>
      <PageHeader title='Пользователи'/>
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={{fontSize: 14, color: '#787878'}}>Обзор пользователей</Text>
        <View style={styles.SharedButton}>
          <SharedStatus title={'Пользователи'} count={userList.length} icon={<AllUsers/>}/>
          <SharedStatus title={'C абонементом'} count={userList.filter(user => user.status === 'Абонимент').length} icon={<ActiveUsers/>}/>
          <SharedStatus title={'Без абонемента'} count={userList.filter(user => user.status === 'Без абонимент').length} icon={<NonActiveUsers/>}/>
          <SharedStatus title={'Заморозка'} count={userList.filter(user => user.status === 'Заморозка').length} icon={<FrozenUsers/>}/>
        </View>
        <View>
          <Text style={{fontSize: 14, color: '#787878'}}>Пользователи</Text>
          <View style={{marginVertical: 12}}>
            <InputSearch/>
          </View>
        </View>
        <View style={{flex: 1}}>
          <FlatList 
            data={userList}
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
    paddingHorizontal: 10,
  },
  SharedButton: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

