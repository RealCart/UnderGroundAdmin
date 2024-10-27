import { FlatList, StyleSheet, Text, View } from 'react-native'
import { PageHeader } from '@/src/components/PageHeader'
import { PERSONAL } from '@/src/screens/data/data'
import { useRouter } from 'expo-router'
import CompleteModal from '@/src/components/admin/CompleteModal'
import DeleteModel from '@/src/components/admin/DeleteModal'
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView'
import ListBtn from '@/src/components/admin/ListBtn'
import GradientButton from '@/src/components/admin/GradientButton'
import { InputSearch } from '@/src/components/admin/InputSearch'
import React, {useState} from 'react'

const PetsonalScreen = () => {
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [isCompleteModalVisible, setCompleteModalVisible] = useState(false);
    const router = useRouter();
    const addStoreProducts = () => {
        router.push({pathname: '/classes/personal/addPersonal', params: {}})
    }
    return (
        <ThemedMainView>
            <PageHeader title='Список персональных занятий'/>
            <View style={{paddingHorizontal:12}}>
                <View style={{marginBottom:10}}>
                    <InputSearch/>
                </View>
                <FlatList
                    data={PERSONAL}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <ListBtn
                            Id={item.id}
                            path='/classes/personal'
                            name={item.name}
                            date={item.data}
                            time={item.time}
                            status={item.status}
                            coach={item.coachName}
                            payedBy={item.branch}
                            branch={`${item.price}₸`}
                            completeBtn={true}
                            deleteBtn={true}
                            onDeletePress={() => setDeleteModalVisible(true)}
                            onCompletePress={() => setCompleteModalVisible(true)}
                        />
                    )}
                />
                <GradientButton title='+ Добавить товар' toDo={addStoreProducts}/>
            </View>
            <DeleteModel modalVisible={isDeleteModalVisible} setModalVisible={()=>setDeleteModalVisible(false)}/>
            <CompleteModal modalVisible={isCompleteModalVisible} setModalVisible={()=>setCompleteModalVisible(false)}/>
        </ThemedMainView>
    )
}

export default PetsonalScreen

const styles = StyleSheet.create({})