import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { userList } from '../../screens/data/userData'

const UserActiveSubs:React.FC = () => {
  return (
    <View>
        <FlatList 
            data={userList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View>
                    <View>
                        <Text>{item.subs.type}</Text>
                        <View>
                            <Text>Дата начала:{item.subs.dateStart}</Text>
                            <Text>Окончание:{item.subs.dateEnd}</Text>
                        </View>
                        <Text>Осталось: {item.subs.remainder} дней</Text>
                    </View>
                    <View>
                        <TouchableOpacity><Text>Продлить</Text></TouchableOpacity>
                        <TouchableOpacity><Text>Редактировать</Text></TouchableOpacity>
                        <TouchableOpacity><Text>Отменить</Text></TouchableOpacity>
                    </View>
                </View>
            )}
        />
    </View>
  )
}

export default UserActiveSubs

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#F0F0F0",
    },  
})