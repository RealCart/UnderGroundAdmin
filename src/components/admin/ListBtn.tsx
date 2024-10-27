import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import React from 'react';

interface ListBtnProps {
    date?: string;
    price?: any;
    title?: string;
    name?: string;
    time?: string;
    status?: string;
    typeOfTrainig?: string;
    coach?: string;
    typeOfNotification?: string;
    payedBy?: string;
    amountOfTime?: string;
    branch?: string;
    recorded?: string;
    countOfCoach?: string;
    countOfUser?: string;
    adress?: string;
    completeBtn?: Boolean;
    deleteBtn?: Boolean;
    cancelBtn?: Boolean;
    onCancelPress?: () => void; 
    onCompletePress?: () => void;
    onDeletePress?: () => void; 
    Id?: number;
    path?: string;
}

const ListBtn: React.FC<ListBtnProps> = ({
    date, 
    time, 
    title,
    name,
    path, 
    status,
    typeOfTrainig, 
    coach, 
    branch, 
    recorded, 
    typeOfNotification,
    countOfCoach,
    countOfUser,
    amountOfTime, 
    adress,
    payedBy, 
    completeBtn,
    deleteBtn,
    cancelBtn,
    onCancelPress,  
    onCompletePress,
    onDeletePress,  
    price, 
    Id,
}) => {
    const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background');
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const router = useRouter();

    const navigateToEdit = () => {
        router.push({ pathname: `${path}/[id]`, params: { id: Id } });
    };


    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View>
                {adress ? (
                    <View style={{flex:1, marginBottom:5}}>
                        <Text style={[styles.name, {color:textColor}]}>
                            {adress} 
                        </Text>
                    </View>
                ) : null}
                <View style={styles.infoContainer}>
                    <View style={styles.dateContainer}>
                        {name || title ? (
                            <View>
                                <Text style={[styles.name, {color:textColor}]}>
                                    {name} {title}
                                </Text>
                            </View>
                        ) : null}
                        {date || time ? (
                            <View style={styles.dateRow}>
                                <Text style={[styles.date, { color: textColor }]}>{date}</Text>
                                <Text style={[styles.text, { color: textColor }]}>{time}</Text>
                                </View>
                        ) : null}
                        {countOfCoach ? (
                            <Text style={[styles.text,  {color:textColor}, {marginBottom:7}]}>{countOfCoach} тренеров</Text>
                        ) : null}
                        {typeOfNotification ? (
                            <Text style={[styles.text, { color: textColor }, {marginBottom:5}]}>{typeOfNotification}</Text>
                        ) : null}
                        {status ? (
                            <Text style={styles.statusText}>{status}</Text>
                        ) : null}
                    </View>
                    <View style={styles.dateContainer}>
                        {typeOfTrainig ? (
                            <Text style={[styles.text, { color: textColor }]}>{typeOfTrainig}</Text>
                        ) : null}
                        {countOfUser ? (
                            <Text style={[styles.text,  {color:textColor}]}>{countOfUser} пользователей</Text>
                        ) : null}
                        {coach ? (
                            <View style={styles.coachRow}>
                                <Text style={[styles.payedBy, { color: textColor }]}>{coach}</Text>
                                <Text style={[styles.text, { color: textColor }]}>{amountOfTime}</Text>
                            </View>
                        ) : null}
                        {branch ? (
                            <View style={styles.branchRow}>
                                <Text style={[styles.text, { color: textColor }]}>{branch}</Text>
                                <Text style={[styles.text, { color: textColor }]}>{recorded}</Text>
                            </View>
                        ) : null}
                        {payedBy ? (
                            <View style={styles.branchRow}>
                                <Text style={[styles.text, { color: textColor }, {marginRight:5}]}>{payedBy}</Text>
                                <Text style={[styles.text, { color: textColor }]}>{price}</Text>
                            </View>
                        ) : null}
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btn} onPress={navigateToEdit}>
                    <Text style={styles.btnText}>Редактировать</Text>
                </TouchableOpacity>
                {cancelBtn && onCancelPress ? (
                    <TouchableOpacity style={styles.btn} onPress={onCancelPress}>
                        <Text style={styles.btnText}>Отменить</Text>
                    </TouchableOpacity>
                ) : null}
                {completeBtn && onCompletePress ? (
                    <TouchableOpacity style={styles.btn} onPress={onCompletePress}>
                        <Text style={styles.btnText}>Завершить</Text>
                    </TouchableOpacity>
                ) : null}
                {deleteBtn && onDeletePress ? (
                    <TouchableOpacity style={styles.btn} onPress={onDeletePress}>
                        <Text style={styles.btnText}>Удалить</Text>
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
}

export default ListBtn;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    name: {
        fontWeight:'500', 
        fontSize:12,
        marginBottom:5,
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    dateContainer: {
        flex:1,
    },
    dateRow: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    statusText: {
        color: '#F4C443',
        fontSize: 12,
    },
    coachRow: {
        flexDirection: 'row',
        marginTop: 5,
    },
    branchRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 5,
    },
    btn: {
        backgroundColor: 'white',
        marginRight: 5,
        paddingHorizontal: 14,
        paddingVertical: 4,
        borderRadius: 30,
    },
    date: {
        marginRight: 12, 
        fontSize: 12,
    },
    text: {
        fontSize: 12,
    },
    payedBy: {
        marginRight: 30, 
        fontSize: 12,
    },
    btnText: {
        fontSize: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
});