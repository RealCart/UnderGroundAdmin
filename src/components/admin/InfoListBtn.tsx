import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import React from 'react';
import { scale } from 'react-native-size-matters';

interface InfoListBtnProps {
    name?: string;
    data: string;
    price?: string;
    time?: string;
    statusOfTraining?: string;
    statusOfPayment?: string;
    typeOfTrainig?: string;
    title?: string;
    coach?: string;
    payedBy?: string;
    branch?:string,
    amountOfTime?: string;
    onEditPress: () => void;
    setCancelModalVisible: (visible: boolean) => void;
}

const InfoListBtn: React.FC<InfoListBtnProps> = ({
    name,
    data,
    time,
    statusOfTraining,
    statusOfPayment,
    typeOfTrainig,
    title,
    coach,
    amountOfTime,
    payedBy,
    branch,
    price,
    onEditPress,
    setCancelModalVisible,
}) => {
    const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background');
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

    return (
        <View>
            <View style={[styles.container, { backgroundColor }]}>
                <View style={styles.infoContainer}>
                    <View>
                        {name ? (
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.text, { color: textColor }]}>
                                    {name}
                                </Text>
                            </View>
                        ) : null}
                        <View style={styles.dateContainer}>
                            <View style={styles.dateRow}>
                                <Text style={[styles.date, { color: textColor }]}>{data}</Text>
                                <Text style={[styles.text, { color: textColor }]}>
                                    {time}
                                    {price}
                                </Text>
                            </View>
                            {statusOfPayment || statusOfTraining ? (
                                <Text style={styles.statusText}>
                                    {statusOfTraining} {statusOfPayment}
                                </Text>
                            ) : null}
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.text, { color: textColor }]}>
                            {typeOfTrainig} {title}
                        </Text>
                        {coach || payedBy ? (
                            <View style={styles.coachRow}>
                                <Text style={[styles.payedBy, { color: textColor }]}>
                                    {coach} {payedBy}
                                </Text>
                                <Text style={[styles.text, { color: textColor }]}>{amountOfTime}</Text>
                            </View>
                        ) : null}
                        {branch ? (
                            <View style={{marginTop:scale(5)}}>
                                <Text style={[styles.text, { color: textColor }]}>{branch}</Text>
                            </View>
                        ) : null}
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.btn} onPress={onEditPress}>
                        <Text style={styles.btnText}>Редактировать</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => setCancelModalVisible(true)}>
                        <Text style={styles.btnText}>Отменить</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default InfoListBtn;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    dateContainer: {
        marginRight: 35,
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

