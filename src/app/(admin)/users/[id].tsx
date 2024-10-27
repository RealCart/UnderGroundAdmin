import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { getUserById } from '@/src/api/Api';
import {PageHeader} from "@/src/components/PageHeader";
import ProfileHeader from '@/src/components/admin/ProfileHeader';
import TabBar from '@/src/components/admin/TabBar';
import UserInfoForm from '@/src/components/admin/UserInfoForm';
import UserWorkoutForm from '@/src/components/admin/UserWorkoutForm';
import UserScheduleList from '@/src/components/admin/UserScheduleList';
import UserReportsInfo from '@/src/components/admin/UserReportsForm';
import UserGuestVisitForm from '@/src/components/admin/UserGuestVisitForm';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';

interface User {
  id: number,
  avatar:string,
  date:string,
  firstname: string,
  lastname: string,
  phoneNumber: string,
  email: string,
  gender: string,
  status: string,
  subs: any,
  workoutInfo: any,
  reportsInfo: any,
  guestVisit:any,
}

const UserData = () => {
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const [activeTab, setActiveTab] = useState('Данные');
  const { id } = useLocalSearchParams();
  const userId = Number(id);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAvatarShow, setAvatarShow] = useState(false);
  const tabs = ['Данные', 'Тренировки', 'Расписание', 'Отчеты', 'Гостевые посещения'];

  const DleteAvatar = () => {

  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUserById(userId);
        setUser(fetchedUser);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!user) {
    return <Text style={{color:textColor}}>User not found</Text>;
  }

  return (
    <ThemedMainView>
      <PageHeader title='Пользователи'/>
      <View style={styles.container}>
        <ProfileHeader src={user.avatar} isAvatarShow={isAvatarShow} onDelete={DleteAvatar} setAvatarShow={setAvatarShow} firstname={user.firstname} lastname={user.lastname} />
        <TabBar style={{marginRight:5}} tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === 'Данные' && <UserInfoForm user={user}/>}
        {activeTab === 'Тренировки' && <UserWorkoutForm user={user}/>}
        {activeTab === 'Расписание' && <UserScheduleList user={user}/>}
        {activeTab === 'Отчеты' && <UserReportsInfo user={user}/>}
        {activeTab === 'Гостевые посещения' && <UserGuestVisitForm user={user}/>}
      </View>
    </ThemedMainView>
  );
};

export default UserData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:10,
  },
});

