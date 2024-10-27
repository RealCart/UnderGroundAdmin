import { StyleSheet, FlatList, View } from 'react-native';
import { InputSearch } from '@/src/components/admin/InputSearch';
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";
import { PageHeader } from '@/src/components/PageHeader';
import ListBtn from '@/src/components/admin/ListBtn';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import GradientButton from '@/src/components/admin/GradientButton';
import CancelModel from '@/src/components/admin/CacncelModel';
import { WORKOUTFORM } from '@/src/screens/data/data';
import React, {useState} from 'react';

const ScheduleScreen = () => {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const [isCancelModalVisible, setCancelModalVisible] = useState(false);
  const router = useRouter();

  const addWorkOut = () => {
    router.push({ pathname: `/schedule/addWorkOut`, params: {} });
  }

  return (
    <ThemedMainView>
      <PageHeader title='Расписание'/>
      <View style={[styles.container, {backgroundColor}]}>
        <InputSearch />
        <FlatList
          data={WORKOUTFORM}
          style={{marginVertical:10, flex:1}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <ListBtn
              path="schedule"
              Id={item.id} 
              date={item.date}
              time={item.time}
              status={item.statusOfTraining}
              typeOfTrainig={item.typeOfTrainig}
              coach={item.coach}
              branch={item.branch}
              recorded={item.recorded}
              amountOfTime={item.amountOfTime}
              cancelBtn={true}
              onCancelPress={() => setCancelModalVisible(true)}
            />
          )}
        />
        <GradientButton title="+ Добавить тренировку" toDo={addWorkOut} />
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

