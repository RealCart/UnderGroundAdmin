import { FlatList, StyleSheet, Text, View } from 'react-native'
import GradientButton from './GradientButton'
import { InputSearch } from './InputSearch'
import InfoListBtn from './InfoListBtn'
import CoachEditScheduleListModal from './CoachEditScheduleListModal'
import CoachAddScheduleModal from './CoachAddScheduleModal'
import CancelModel from './CacncelModel'
import React, {useState} from 'react'

interface scheduleInfo {
    id: number
    date:string,
    time:string,
    typeOfTrainig:string,
}
  
interface Coach {
    scheduleInfo: scheduleInfo[];
}

const CoachScheduleList:React.FC<{coach: Coach}> = ({coach}) => {
    const [selectedScheduleList, setSelectedScheduleList] = useState<scheduleInfo | null>(null);
    const [isEditScheduleModalVisible, setEditScheduleModalVisible] = useState(false);
    const [isAddScheduleModalVisible, setAddScheduleModalVisible] = useState(false);
    const [isCancelModalVisible, setCancelModalVisible] = useState(false);
    const [currentTypeOfTraining, setCurrentTypeOfTraining] = useState<string>('');
    const [currentData, setCurrentData] = useState<string>('');
    const [currentTime, setCurrentTime] = useState<string>('');

    const openEditModal = (schedule: scheduleInfo) => {
        setSelectedScheduleList(schedule)
        setEditScheduleModalVisible(true)
    }

    const cancelModal = () => {
        
    }

    return (
        <View>
            <View style={{marginBottom:15}}><InputSearch/></View>
            <FlatList 
                style={{marginBottom:15}} 
                data={coach.scheduleInfo}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <InfoListBtn data={item.date} time={item.time} typeOfTrainig={item.typeOfTrainig} onEditPress={() => openEditModal(item)} setCancelModalVisible={setCancelModalVisible}/>
                )}
            />
            <View><GradientButton title="+ Добавить тренировку" toDo={()=>setAddScheduleModalVisible(true)}/></View>
            <CoachEditScheduleListModal 
                typeOfTraining={selectedScheduleList?.typeOfTrainig || ''} 
                data={selectedScheduleList?.date || ''} 
                time={selectedScheduleList?.time || ''} 
                modalVisible={isEditScheduleModalVisible}  
                setModalVisible={()=>setEditScheduleModalVisible(false)}
            />
            <CoachAddScheduleModal modalVisible={isAddScheduleModalVisible} setModalVisible={()=>setAddScheduleModalVisible(false)}/>
            <CancelModel modalVisible={isCancelModalVisible} cancelGradient={() => cancelModal}setModalVisible={()=>setCancelModalVisible(false)}/>
        </View>
    )
}

export default CoachScheduleList

const styles = StyleSheet.create({})