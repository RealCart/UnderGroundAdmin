import { FlatList, StyleSheet, View } from 'react-native';
import { InputSearch } from './InputSearch';
import CancelModel from './CacncelModel';
import UserEditScheduleModel from './UserEditScheduleModel';
import UserAddScheudleModel from './UserAddScheduleModal';
import GradientButton from './GradientButton';
import InfoListBtn from './InfoListBtn';
import React, { useState } from 'react';

interface workoutInfo {
    id: number;
    date: string;
    time: string;
    statusOfTraining?: string;
    typeOfTrainig: string;
    coach: string;
    amountOfTime?: string;
}

interface User {
    workoutInfo: workoutInfo[];
}

const ScheduleList: React.FC<{ user: User }> = ({ user }) => {
    const [selectedWorkout, setSelectedWorkout] = useState<workoutInfo | null>(null);
    const [isScheduleModalVisible, setScheduleModalVisible] = useState(false);
    const [isAddScheduleModalVisible, setAddScheduleModalVisible] = useState(false);
    const [isCancelModalVisible, setCancelModalVisible] = useState(false);

    const addSchedule = () => {
        setAddScheduleModalVisible(true);
    };

    const openEditModal = (workout: workoutInfo) => {
        setSelectedWorkout(workout);
        setScheduleModalVisible(true);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginBottom: 15 }}>
                <InputSearch />
            </View>
            <FlatList
                style={{ marginBottom: 15 }}
                showsVerticalScrollIndicator={false}
                data={user.workoutInfo}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <InfoListBtn
                            data={item.date}
                            time={item.time}
                            statusOfTraining={item.statusOfTraining}
                            typeOfTrainig={item.typeOfTrainig}
                            coach={item.coach}
                            amountOfTime={item.amountOfTime}
                            onEditPress={() => openEditModal(item)}
                            setCancelModalVisible={setCancelModalVisible}
                        />
                    </View>
                )}
            />
            <View style={{ position: 'static' }}>
                <GradientButton title="+ Добавить тренировку" toDo={addSchedule} />
            </View>
            <UserEditScheduleModel
                typeOfTraining={selectedWorkout?.typeOfTrainig || ''}
                coach={selectedWorkout?.coach || ''}
                data={selectedWorkout?.date || ''}
                time={selectedWorkout?.time || ''}
                modalVisible={isScheduleModalVisible}
                setModalVisible={() => setScheduleModalVisible(false)}
            />
            <UserAddScheudleModel
                modalVisible={isAddScheduleModalVisible}
                setModalVisible={() => setAddScheduleModalVisible(false)}
            />
            <CancelModel
                modalVisible={isCancelModalVisible}
                cancelGradient={() => {}}
                setModalVisible={() => setCancelModalVisible(false)}
            />
        </View>
    );
};

export default ScheduleList;

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 12,
    },
    ttl: {
        fontSize: 12, 
        color: '#787878'
    },
    mainTitle: {
        fontSize:16,
        fontWeight:'500',
    
    },
    arrow: {
        justifyContent:'center',
        position:'absolute',
        left:4,
        top:6,
        transform:[{rotate:'180deg'}]
    },
})

