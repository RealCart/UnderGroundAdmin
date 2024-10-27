import { StyleSheet, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { getCoachById } from '@/src/api/Api';
import { PageHeader } from '@/src/components/PageHeader';
import ProfileHeader from '@/src/components/admin/ProfileHeader';
import TabBar from '@/src/components/admin/TabBar';
import CoachInfoForm from '@/src/components/admin/CoachInfoForm';
import CoachWorkoutForm from '@/src/components/admin/CoachWorkoutForm';
import CoachScheduleList from '@/src/components/admin/CoachScheduleList';
import CoachReportsFrom from '@/src/components/admin/CoachReportsFrom';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';

interface Coach {
  id: number;
  avatar:string,
  date:string;
  firstname: string;
  lastname: string;
  proffession:string;
  photoFromWorkOut:string[],
  changePhoto:string[],
  rating:number;
  desc:string;
  sertificate:string[],
  expInput:string[],
  phoneNumber: string;
  email: string,
  gender: string,
  exp:string,
  specialized:string[],
  workoutInfo:any,
  scheduleInfo:any,
  reportsInfo:any,
}

const CoachData = () => {
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const [activeTab, setActiveTab] = useState('Данные');
  const { id } = useLocalSearchParams();
  const coachId = Number(id);
  const [coach, setCoach] = useState<Coach | null>(null);
  const [isAvatarShow, setAvatarShow] = useState(false);
  const tabs = ['Данные', 'Тренировки', 'Расписание', 'Отчеты']

  const DleteAvatar = () => {

  }

  useEffect(() => {
    const fetchCoach = async () => {
      const fetchedCoach = await getCoachById(coachId);
      setCoach(fetchedCoach);
    };

    fetchCoach();
  }, [coachId]);


  return (
    <ThemedMainView>
    <PageHeader title='Тренеры'/>
    <View style={[styles.container, {backgroundColor}]}>
      {coach ? (
        <View style={{flex:1}}>
          <ProfileHeader src={coach.avatar} isAvatarShow={isAvatarShow} onDelete={DleteAvatar} setAvatarShow={setAvatarShow} firstname={coach.firstname} lastname={coach.lastname} />
          <TabBar style={{marginRight:12}} tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          {activeTab === 'Данные' && <CoachInfoForm coach={coach}/>}
          {activeTab === 'Тренировки' && <CoachWorkoutForm coach={coach}/>}
          {activeTab === 'Расписание' && <CoachScheduleList coach={coach}/>}
          {activeTab === 'Отчеты' && <CoachReportsFrom coach={coach}/>}
        </View>
      ) : (
        <Text>Coach not found</Text>
      )}
    </View>
    </ThemedMainView>
  );
}

export default CoachData;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 12,
  },
});
