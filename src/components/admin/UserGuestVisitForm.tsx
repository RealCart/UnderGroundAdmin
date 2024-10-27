import { StyleSheet, View, FlatList, Text} from 'react-native'
import { useThemeColor } from '@/src/hooks/useThemeColor'
import InfoListBtn from './InfoListBtn'
import CancelModel from './CacncelModel'
import React, {useState} from 'react'
import GradientButton from './GradientButton'
import UserEditGuestVisitModal from './UserEditGuestVisitModal'
import UserAddGuestVisitModal from './UserAddGuestVisitModal'

interface guestVisit {
    id:number,
    name:string
    phoneNumber:string,
    data:string,
    time:string,
    typeOfTraining: string,
    coach:string,
    status:string,
    amountOfTime:number,
}

interface User {
    guestVisit: guestVisit[],
}

const UserGuestVisitForm:React.FC<{user: User}> = ({user}) => {
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const [selectedGuestVisitor, setGuestVisitor] = useState<guestVisit | null>(null);
    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const [isAddModalVisible, setAddModalVisible] = useState(false);
    const [isCancelModalVisible, setCancelModalVisible] = useState(false);

    const openEditModal = (workout: guestVisit) => {
        setGuestVisitor(workout);
        setEditModalVisible(true);
    };

    const CancelModal = () => {

    }

    return (
        <View>
            <Text style={{color:textColor}}>Осталось визитов: 3 из 6</Text>
            <View style={[styles.visitorsContainer, {borderColor: textColor}]}>
                <View style={{backgroundColor:textColor, borderRadius:30, paddingVertical:2,}}>
                    <Text></Text>
                </View>
            </View>
            <FlatList 
                style={{marginBottom:15}} 
                data={user.guestVisit}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <InfoListBtn 
                        name={item.name}
                        statusOfTraining={item.status}
                        amountOfTime={`${item.amountOfTime} мин`}
                        data={item.data}
                        time={item.time}
                        typeOfTrainig={item.typeOfTraining}
                        coach={item.coach}
                        onEditPress={()=>openEditModal(item)} 
                        setCancelModalVisible={setCancelModalVisible}
                    />
                )}
            />
            <View style={{position:'static'}}>
                <GradientButton title='+ Добавить гостевое посещение' toDo={() => setAddModalVisible(true)}/>
            </View>
            <UserAddGuestVisitModal modalVisible={isAddModalVisible} setModalVisible={() => setAddModalVisible(false)}/>
            <UserEditGuestVisitModal
                name={selectedGuestVisitor?.name || ''}
                phoneNumber={selectedGuestVisitor?.phoneNumber || ''}
                data={selectedGuestVisitor?.data || ''}
                modalVisible={isEditModalVisible} 
                setModalVisible={()=>setEditModalVisible(false)}
            />
            <CancelModel modalVisible={isCancelModalVisible} cancelGradient={()=> CancelModal} setModalVisible={() => setCancelModalVisible(false)}/>
        </View>
    )
}

export default UserGuestVisitForm

const styles = StyleSheet.create({
    visitorsContainer: {
        marginVertical:10,
        borderWidth:1,
        padding:2,
        borderRadius:30, 
    }
})