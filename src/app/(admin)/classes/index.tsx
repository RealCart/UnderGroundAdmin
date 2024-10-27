import { StyleSheet, Text, View } from 'react-native'
import { PageHeader } from '@/src/components/PageHeader'
import { FrozenUsers } from '@/src/components/icons/Icon'
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView'
import AdminScreenButton from '@/src/components/admin/AdminScreenButton'
import React from 'react'

const StoreScreen = () => {
  return (
    <ThemedMainView>
        <PageHeader title='Занятия'/>
        <View style={styles.container}>
            <AdminScreenButton title='Персональные' icon={<FrozenUsers/>} route='/classes/personal'/>
            <AdminScreenButton title='Групповые' icon={<FrozenUsers/>} route='/classes/group'/>
            <AdminScreenButton title='Категории' icon={<FrozenUsers/>} route='/classes/category'/>
        </View>
    </ThemedMainView>
  )
}

export default StoreScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:12,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    }
})