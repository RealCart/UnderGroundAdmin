import { FlatList, StyleSheet, View } from 'react-native'
import { InputSearch } from '@/src/components/admin/InputSearch'
import { PageHeader } from '@/src/components/PageHeader'
import { GROUP } from '@/src/screens/data/data'
import { useRouter } from 'expo-router'
import CompleteModal from '@/src/components/admin/CompleteModal'
import DeleteModel from '@/src/components/admin/DeleteModal'
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView'
import ListBtn from '@/src/components/admin/ListBtn'
import GradientButton from '@/src/components/admin/GradientButton'
import React, {useState} from 'react'

const GroupScreen = () => {
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [isCompleteModalVisible, setCompleteModalVisible] = useState(false);
    const router = useRouter();
    const addStoreProducts = () => {
        router.push({pathname: '/classes/group/addGroup', params: {}})
    }

    const deleteModal = () => {

    }
    return (
        <ThemedMainView>
            <PageHeader title='Список групповых занятий'/>
            <View style={{paddingHorizontal:12}}>
                <View style={{marginBottom:10}}>
                    <InputSearch/>
                </View>
                <FlatList
                    data={GROUP}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <ListBtn
                            Id={item.id}
                            path='/classes/group'
                            name={item.name}
                            date={item.category}
                            status={item.status}
                            coach={item.coachName}
                            price={`${item.price}₸`}
                            payedBy={`участники(10/${item.participants})`}
                            branch={item.schedule}
                            deleteBtn={true}
                            onDeletePress={() => setDeleteModalVisible(true)}
                        />
                    )}
                />
                <GradientButton title='+ Добавить занятие' toDo={addStoreProducts}/>
            </View>
            <DeleteModel modalVisible={isDeleteModalVisible} deleteGradient={deleteModal} setModalVisible={()=>setDeleteModalVisible(false)}/>
        </ThemedMainView>
    )
}

export default GroupScreen

const styles = StyleSheet.create({})