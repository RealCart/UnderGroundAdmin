import { StyleSheet, View, FlatList} from 'react-native'
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView'
import { PageHeader } from '@/src/components/PageHeader'
import { InputSearch } from '@/src/components/admin/InputSearch'
import ListBtn from '@/src/components/admin/ListBtn'
import { STORIES } from '@/src/screens/data/data'
import GradientButton from '@/src/components/admin/GradientButton'
import React, {useState} from 'react'
import DeleteModel from '@/src/components/admin/DeleteModal'
import { useRouter } from 'expo-router'

const StoriesScreen = () => {
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const router = useRouter();
    const addAdvice = () => {
        router.push({ pathname: `/stories/addStories`, params: {} });
    }
    return (
        <ThemedMainView style={{paddingHorizontal:12}}>
            <PageHeader title='Сторис советы'/>
            <View>
                <View style={{marginBottom:10}}>
                    <InputSearch/>
                </View>
                <FlatList
                    data={STORIES}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <ListBtn
                            path='stories'
                            Id={item.id}
                            title={item.title}
                            date={item.dataStart}
                            status={item.status}
                            deleteBtn={true}
                            onDeletePress={() => setDeleteModalVisible(true)}
                        />
                    )}
                />
                <GradientButton title="+ Добавить совет" toDo={addAdvice} />
                <DeleteModel modalVisible={isDeleteModalVisible} setModalVisible={()=>setDeleteModalVisible(false)}/>
            </View>
        </ThemedMainView>
    )
}

export default StoriesScreen

const styles = StyleSheet.create({})