import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AllUsers, ActiveCoachs, NonActiveCoachs } from '@/src/components/icons/Icon';
import { useLocalSearchParams } from 'expo-router';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { SharedStatus } from '@/src/components/admin/SharedStatus';
import { InputSearch } from '@/src/components/admin/InputSearch';
import { SharedList } from '@/src/components/admin/SharedList';
import { PageHeader } from '@/src/components/PageHeader';
import { BRANCHES } from '@/src/screens/data/data';
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";

export default function BranchCoach() {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background');
  const { id } = useLocalSearchParams();
  const branchId = Number(id);

  const branch = BRANCHES.find(branch => branch.id === branchId);

  if (!branch) {
    return <Text>Филиал не найден</Text>;
  }

  const coaches = branch.coaches || [];
  return (
    <ThemedMainView>
      <PageHeader title='Тренеры'/>
      <View style={[styles.container, { backgroundColor }]}>
        <View style={styles.SharedButton}>
          <SharedStatus title="Тренеры" count={coaches.length} icon={<AllUsers />} />
          <SharedStatus title="Активные" count={coaches.filter(coach => coach.status === 'Активный').length} icon={<ActiveCoachs />} />
          <SharedStatus title="Больничный" count={coaches.filter(coach => coach.status === 'Больничный').length} icon={<NonActiveCoachs />} />
          <SharedStatus title="Отпуск" count={coaches.filter(coach => coach.status === 'Отпуск').length} icon={<NonActiveCoachs />} />
        </View>
        <View>
          <Text style={{ fontSize: 14, color: '#787878', marginBottom: 5 }}>Тренеры</Text>
          <InputSearch />
        </View>
        <View>
          <FlatList
            data={coaches} 
            style={{ marginTop: 10 }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <SharedList
                firstname={item.firstname}
                lastname={item.lastname}
                phone={item.phoneNumber}
                status={item.status}
                route={item.id}
                path="coachs"
              />
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