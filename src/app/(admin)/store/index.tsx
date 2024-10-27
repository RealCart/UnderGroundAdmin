import { StyleSheet, Text, View } from 'react-native'
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView'
import { PageHeader } from '@/src/components/PageHeader'
import { FrozenUsers } from '@/src/components/icons/Icon'
import AdminScreenButton from '@/src/components/admin/AdminScreenButton'
import React from 'react'

const StoreScreen = () => {
  return (
    <ThemedMainView>
        <PageHeader title='Магазин'/>
        <View style={styles.container}>
            <AdminScreenButton title='Категории' icon={<FrozenUsers/>} route='/store/category'/>
            <AdminScreenButton title='Товары' icon={<FrozenUsers/>} route='/store/products'/>
        </View>
    </ThemedMainView>
  )
}

export default StoreScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:12,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})