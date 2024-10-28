import { FlatList, StyleSheet, Text, View } from 'react-native'
import { PageHeader } from '@/src/components/PageHeader'
import { PRODUCTS } from '@/src/screens/data/data'
import { useRouter } from 'expo-router'
import DeleteModel from '@/src/components/admin/DeleteModal'
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView'
import React, {useState} from 'react'
import ListBtn from '@/src/components/admin/ListBtn'
import GradientButton from '@/src/components/admin/GradientButton'

const index = () => {
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const router = useRouter();
    const addStoreProducts = () => {
        router.push({pathname: '/store/products/addProducts', params: {}})
    }

    const deleteModal = () => {
        
    }
    return (
        <ThemedMainView>
            <PageHeader title='Товар'/>
            <View style={{paddingHorizontal:12}}>
                <FlatList
                    data={PRODUCTS}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <ListBtn
                            Id={item.id}
                            path='/store/products'
                            name={item.title}
                            typeOfTrainig={`Цена: ${item.price} ₸`}
                            coach={`Со скидкой: ${item.discountPrice} ₸`}
                            typeOfNotification={`${item.count} кол-во`}
                            deleteBtn={true}
                            onDeletePress={() => setDeleteModalVisible(true)}
                        />
                    )}
                />
                <GradientButton title='+ Добавить товар' toDo={addStoreProducts}/>
            </View>
            <DeleteModel modalVisible={isDeleteModalVisible} deleteGradient={deleteModal} setModalVisible={()=>setDeleteModalVisible(false)}/>
        </ThemedMainView>
    )
}

export default index

const styles = StyleSheet.create({})