import { Avatar, Qr, Users, Schedule, Coachs, Payments, Notifications, Branches, Gamification, StoriesIcon, FrozenUsers } from '@/src/components/icons/Icon';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
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
            <AdminScreenButton icon={<Qr />} route="./qrScanner" size='100%'/>
            <View style={styles.buttonContainer}>
              <AdminScreenButton title="Пользователи" icon={<Users />} route="./users" size='48%' />
              <AdminScreenButton title="Расписание" icon={<Schedule />} route="./schedule" size='48%' />
              <AdminScreenButton title="Тренеры" icon={<Coachs />} route="./coachs" size='48%' />
              <AdminScreenButton title="Платежи" icon={<Payments />} route="./payments" size='48%' />
              <AdminScreenButton title="Уведомления" icon={<Notifications />} route="./notification" size='48%' />
              <AdminScreenButton title="Филиалы" icon={<Branches />} route="./branches" size='48%' />
              <AdminScreenButton title="Геймификация" icon={<Gamification />} route="./gamification" size='48%' />
              <AdminScreenButton title="Геймификация" icon={<Gamification />} route="./(authorization)" size='48%' />
              <AdminScreenButton title="Сторис" icon={<StoriesIcon/>} route="./stories" size='48%' />
              <AdminScreenButton title="Заморозка" icon={<FrozenUsers width={40} height={40}/>} route="./frozen" size='48%' />
              <AdminScreenButton title="Абонементы" icon={<FrozenUsers width={40} height={40}/>} route="./subscription" size='48%' />
              <AdminScreenButton title="Магазин" icon={<FrozenUsers width={40} height={40}/>} route="./store" size='48%' />
              <AdminScreenButton title="Занятия" icon={<FrozenUsers width={40} height={40}/>} route="./classes" size='48%' />
              <AdminScreenButton title="Баннер" icon={<FrozenUsers width={40} height={40}/>} route="./banner" size='48%' />
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
