import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import { useThemeColor } from '@/src/hooks/useThemeColor';
import UserExtendSubscriptionModal from './UserExtendSubscriptionModal';
import UserEditSubscriptionModal from './UserEditSubscriptionModal';
import UserAddSubscriptionModal from './UserAddSubscriptionModal';
import GradientButton from './GradientButton';
import React, {useState} from 'react'
import CancelModel from './CacncelModel';
interface Subscription {
  id: number,
  type:string,
  dateStart:string,
  dateEnd:string,
  remainder:number
  status: string,
  price:number,
}

interface User {
  subs: Subscription[];
}

const UserWorkoutForm:React.FC<{user: User}> = ({user}) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const [isExtendModalVisible, setExtendModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isCancelModalVisible, setCancelModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [currentDataStart, setCurrentDataStart] = useState<string>('');
  const [currentDataEnd, setCurrentDataEnd] = useState<string>('');
  const [currentType, setType] = useState<string>('');
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [currentStatus, setStatus] = useState<string>('');

  const handleExtended = (dataEnd: string) => {
    setExtendModalVisible(true);
    setCurrentDataEnd(dataEnd);
  }

  const handleEdit = (type:string, dataStart:string, dataEnd:string, price:number, status:string) => {
    setEditModalVisible(true);
    setType(type);
    setCurrentDataStart(dataStart);
    setCurrentDataEnd(dataEnd);
    setCurrentPrice(price);
    setStatus(status);
  }

  const cancelGradient = () => {
    
  }

  
  return (
    <View style={{flex:1}}>
      <GradientButton title="+ Добавить абонемент" toDo={() => setAddModalVisible(true)}/>
      <View style={{marginTop:20, flex:1}}>
        <Text style={{color:'#787878', marginBottom:12}}>Активные абонементы</Text>
        <FlatList 
            data={user.subs}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <View style={[styles.container, {backgroundColor}]}>
                    <View style={{marginBottom:30}}>
                        <Text style={[styles.typeStyle, {color:textColor}]}>{item.type}</Text>
                        <View style={{marginVertical:10}}>
                            <Text style={{color:'#706E6E'}}>Дата начала: <Text style={{color:'#F4C443'}}>{item.dateStart}</Text></Text>
                            <Text style={{color:'#706E6E'}}>Окончание: <Text style={{color:'#F4C443'}}>{item.dateEnd}</Text></Text>
                        </View>
                        <Text style={[{color:textColor}]}>Осталось: <Text style={{color:'#F4C443'}}>{item.remainder}</Text> дней</Text>
                    </View>
                    <View style={{flexDirection:'row',}}>
                        <TouchableOpacity style={styles.bottomButtons} onPress={() => handleExtended(item.dateEnd)} hitSlop={{ top: 5, bottom: 5, right:5, left:5 }} ><Text style={[styles.bottomButtonsText, {color:textColor}]}>Продлить</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.bottomButtons} onPress={() => handleEdit(item.type, item.dateStart, item.dateEnd, item.price, item.status)} hitSlop={{ top: 5, bottom: 5, right:5, left:5 }} ><Text style={[styles.bottomButtonsText, {color:textColor}]}>Редактировать</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.bottomButtons} onPress={() => setCancelModalVisible(true)} hitSlop={{ top: 5, bottom: 5, right:5, left:5 }} ><Text style={[styles.bottomButtonsText, {color:textColor}]}>Отменить</Text></TouchableOpacity>
                    </View>
                </View>
              </View>
            )}
        />
      </View>
      <UserExtendSubscriptionModal dataStart={currentDataEnd} setModalVisible={()=>setExtendModalVisible(false)} modalVisible={isExtendModalVisible}/>
      <UserEditSubscriptionModal type={currentType} dataStart={currentDataStart} dataEnd={currentDataEnd} price={currentPrice} status={currentStatus} modalVisible={isEditModalVisible} setModalVisible={()=>setEditModalVisible(false)}/>
      <UserAddSubscriptionModal modalVisible={isAddModalVisible} setModalVisible={()=>setAddModalVisible(false)}/>
      <CancelModel modalVisible={isCancelModalVisible} cancelGradient={() => cancelGradient()} setModalVisible={()=>setCancelModalVisible(false)}/>
    </View>
  )
}

export default UserWorkoutForm

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F0F0F0',
    marginBottom:10,
    borderRadius:10,
    padding:10,
  },
  typeStyle: {
    fontSize:16, 
    fontWeight:'600'
  },
  bottomButtons: {
    marginRight:12,
    paddingVertical:4,
    paddingHorizontal:19,
  },
  bottomButtonsText: {
    fontSize:12
  },
})