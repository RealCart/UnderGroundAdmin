import { StyleSheet, Text, View, FlatList } from 'react-native'
import GradientButton from './GradientButton';
import InfoListBtn from './InfoListBtn';
import { InputSearch } from './InputSearch';
import React from 'react'

interface reportsInfo {
  date:string,
  price:string,
  statusOfPayment:string,
  title:string,
  payedBy:string,
}

interface User {
  reportsInfo: reportsInfo[];
}

const UserReportsForm:React.FC<{user: User}> = ({user}) => {
  const handleGradient = () => {

  }
  return (
    <View>
      <View style={{marginBottom:15}} >
        <InputSearch />
      </View>
      <FlatList 
        style={{marginBottom:15}} 
        data={user.reportsInfo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <InfoListBtn date={item.date}  price={item.price} statusOfPayment={item.statusOfPayment} title={item.title} payedBy={item.payedBy}/>
        )}
      />
      <View><GradientButton title="+ Добавить платеж" toDo={handleGradient}/></View>
    </View>
  )
}

export default UserReportsForm

const styles = StyleSheet.create({})