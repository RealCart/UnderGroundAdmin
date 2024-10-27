import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AllUsers, ActiveCoachs, NonActiveCoachs } from '@/src/components/icons/Icon';
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { PageHeader } from '@/src/components/PageHeader';
import { SharedStatus } from '@/src/components/admin/SharedStatus';
import { InputSearch } from '@/src/components/admin/InputSearch'
import { SharedList } from '@/src/components/admin/SharedList';
import { coachList } from '@/src/screens/data/coachData';
import { useState } from 'react';
import GradientButton from '@/src/components/admin/GradientButton';
import { useRouter } from 'expo-router';

export default function CoachsScreen() {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background');
  const router = useRouter()
  const addCoach = () => {
    router.push({
      pathname: '/(admin)/coachs/addCoach', 
      params: {}
    })
  }
  return (
    <ThemedMainView>
      <PageHeader title='Тренеры'/>
      <View style={[styles.container, {backgroundColor}]}>
        <View style={styles.SharedButton}>
          <SharedStatus title="Тренеры" count={coachList.length} icon={<AllUsers/>}/>
          <SharedStatus title="Активные" count={coachList.filter(coach => coach.status === 'Активный').length} icon={<ActiveCoachs/>}/>
          <SharedStatus title="Больничный" count={coachList.filter(coach => coach.status === 'Больничный').length} icon={<NonActiveCoachs/>}/>
          <SharedStatus title="Отпуск" count={coachList.filter(coach => coach.status === 'Отпуск').length} icon={<NonActiveCoachs/>}/>
        </View>
        <View>
          <Text style={{fontSize:14, color:'#787878', marginBottom:5}}>Тренеры</Text>
          <InputSearch/>
        </View>
        <View style={{flex:1}}>
          <View style={{flex:1}}>
            <FlatList 
                data={coachList}
                style={{marginTop:10}}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <SharedList firstname={item.firstname} lastname={item.lastname} phone={item.phoneNumber} status={item.status} route={item.id} path="coachs"/>
                )}
            />
          </View>
          <View style={{position:'static'}}>
            <GradientButton title='+ Добавить тренера' toDo={addCoach}/>
          </View>
        </View>
      </View>
    </ThemedMainView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:12,
  },
  SharedButton: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    marginBottom:20,
  },
})
