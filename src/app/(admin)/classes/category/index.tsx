import { FlatList, StyleSheet, Text, View } from 'react-native'
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView'
import { PageHeader } from '@/src/components/PageHeader'
import { CLASSESCATEGORY } from '@/src/screens/data/data'
import DeleteModel from '@/src/components/admin/DeleteModal'
import ListBtn from '@/src/components/admin/ListBtn'
import React, {useState} from 'react'
import { useRouter } from 'expo-router'
import GradientButton from '@/src/components/admin/GradientButton'

const index = () => {
    const router = useRouter();
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const addCategory = () => {
        router.push({ pathname: `/classes/category/addClassesCategory`, params: {} });
    }
    return (
        <ThemedMainView>
            <PageHeader title='Категории'/>
            <View>
                <FlatList
                data={CLASSESCATEGORY}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <ListBtn
                        Id={item.id}
                        path='/classes/category'
                        deleteBtn={true}
                        title={item.title}
                        onDeletePress={() => setDeleteModalVisible(true)}
                    />
                )}
                />
                <GradientButton title='+ Добавить категорию' toDo={addCategory}/>
            </View>
            <DeleteModel modalVisible={isDeleteModalVisible} setModalVisible={()=>setDeleteModalVisible(false)}/>
        </ThemedMainView>
    )
}

export default index

const styles = StyleSheet.create({})