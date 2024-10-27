import { FlatList, StyleSheet, Text, View } from 'react-native'
import GradientButton from './GradientButton'
import CoachAddWorkOutModals from './CoachAddWorkOutModal'
import { InputSearch } from './InputSearch'
import CoachEditWorkOutModel from './CoachEditWorkOutModel'
import CancelModel from './CacncelModel'
import InfoListBtn from './InfoListBtn'
import React, {useState} from 'react'

interface workoutInfo {
    date:string,
    time:string,
    statusOfTraining:string,
    typeOfTrainig:string,
    coach:string,
    amountOfTime:string,
}
  
interface Coach {
    workoutInfo: workoutInfo[];
}

const CoachWorkoutForm:React.FC<{coach: Coach}> = ({coach}) => {
    const [selectedWorkout, setSelectedWorkout] = useState<workoutInfo | null>(null);
    const [isEditWorkOutModalVisible, setEditWorkOutModalVisible] = useState(false);
    const [isAddWorkOutModalVisible, setAddWorkOutModalVisible] = useState(false);
    const [isCancelModalVisible, setCancelModalVisible] = useState(false);

    const openEditModal = (workout: workoutInfo) => {
        setSelectedWorkout(workout);
        setEditWorkOutModalVisible(true);
    };

    const cancelModal = () => {

    }

    return (
        <View>
            <View style={{marginBottom:15}}><InputSearch/></View>
            <FlatList 
                style={{marginBottom:15}} 
                data={coach.workoutInfo}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <InfoListBtn 
                        data={item.date} 
                        time={item.time} 
                        statusOfTraining={item.statusOfTraining} 
                        typeOfTrainig={item.typeOfTrainig} 
                        coach={item.coach} 
                        amountOfTime={item.amountOfTime} 
                        onEditPress={() => openEditModal(item)} 
                        setCancelModalVisible={setCancelModalVisible}/>
                )}
            />
            <View><GradientButton title='+ Добавить тренировку' toDo={()=>setAddWorkOutModalVisible(true)}/></View>
            <CoachEditWorkOutModel 
                typeOfTraining={selectedWorkout?.typeOfTrainig || ''}
                coach={selectedWorkout?.coach || ''}
                data={selectedWorkout?.date || ''}
                time={selectedWorkout?.time || ''}
                modalVisible={isEditWorkOutModalVisible}
                setModalVisible={() => setEditWorkOutModalVisible(false)}
            />
            <CoachAddWorkOutModals 
                modalVisible={isAddWorkOutModalVisible} 
                setModalVisible={()=>setAddWorkOutModalVisible(false)}
            />
            <CancelModel 
                modalVisible={isCancelModalVisible} 
                cancelGradient={cancelModal} 
                setModalVisible={()=>setCancelModalVisible(false)}
            />
        </View>
    )
}

export default CoachWorkoutForm

const styles = StyleSheet.create({})