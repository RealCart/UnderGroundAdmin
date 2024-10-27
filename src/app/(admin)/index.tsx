import { Avatar, Users, Schedule, Coachs, Payments, Notifications, Branches, Gamification, StoriesIcon, FrozenUsers } from '@/src/components/icons/Icon';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import React, { useEffect, useState } from 'react';
import SplashScreen from '@/src/components/admin/SplashScreen';
import AdminScreenButton from '@/src/components/admin/AdminScreenButton';
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";

export default function AdminScreen() {
  const [isShowSplash, setISShowSplash] = useState(true);
  const backgroundColor = useThemeColor({ light: '#FFFFFF', dark: '#181818' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

  useEffect(() => {
    setTimeout(()=>{
      setISShowSplash(false)
    }, 3500)
  });

  return <>{isShowSplash ? <SplashScreen/> : (
    <ThemedMainView style={styles.container}>
      <View style={{flex:1, backgroundColor: backgroundColor}}>
        <View style={styles.header}>
          <Avatar style={{width:60, height:60}}/>
          <Text style={[styles.username, { color: textColor }]}>Алина М.</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.buttonContainer}>
              <AdminScreenButton title="Пользователи" icon={<Users />} route="./users" />
              <AdminScreenButton title="Расписание" icon={<Schedule />} route="./schedule" />
              <AdminScreenButton title="Тренеры" icon={<Coachs />} route="./coachs" />
              <AdminScreenButton title="Платежи" icon={<Payments />} route="./payments" />
              <AdminScreenButton title="Уведомления" icon={<Notifications />} route="./notification" />
              <AdminScreenButton title="Филиалы" icon={<Branches />} route="./branches" />
              <AdminScreenButton title="Геймификация" icon={<Gamification />} route="./gamification" />
              <AdminScreenButton title="Геймификация" icon={<Gamification />} route="./(authorization)" />
              <AdminScreenButton title="Сторис" icon={<StoriesIcon/>} route="./stories" />
              <AdminScreenButton title="Заморозка" icon={<FrozenUsers width={40} height={40}/>} route="./frozen" />
              <AdminScreenButton title="Абонементы" icon={<FrozenUsers width={40} height={40}/>} route="./subscription" />
              <AdminScreenButton title="Магазин" icon={<FrozenUsers width={40} height={40}/>} route="./store" />
              <AdminScreenButton title="Занятия" icon={<FrozenUsers width={40} height={40}/>} route="./classes" />
              <AdminScreenButton title="Баннер" icon={<FrozenUsers width={40} height={40}/>} route="./banner" />
            </View>
        </ScrollView>
      </View>
    </ThemedMainView>
  )}</>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop:16,
  },
  header: {
    flexDirection:'row',
    marginBottom: 10,
  },
  username: {
    marginTop: 12,
    fontSize: 18,
    marginLeft: 12,
  },
  buttonContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
});

