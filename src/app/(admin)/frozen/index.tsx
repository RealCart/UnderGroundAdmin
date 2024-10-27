import { StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native'
import { PageHeader } from '@/src/components/PageHeader'
import { InputSearch } from '@/src/components/admin/InputSearch'
import { FROZEN } from '@/src/screens/data/data'
import { useThemeColor } from '@/src/hooks/useThemeColor'
import { useRouter } from 'expo-router'
import React from 'react'
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView'
import GradientButton from '@/src/components/admin/GradientButton'

const FrozenScreen = () => {
    const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background');
    const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
    const router = useRouter();
    const addFrozen = () => {
        router.push({ pathname: `/frozen/addFrozen`});
    }
    return (
        <ThemedMainView style={{paddingHorizontal:12}}>
            <PageHeader title='Сторис советы'/>
            <View>
                <View style={{marginBottom:10}}>
                    <InputSearch/>
                </View>
                <FlatList
                    data={FROZEN}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <View style={[styles.container, {backgroundColor:backgroundColor}]}>
                          <View style={{flexDirection:'row'}}>
                            <View style={styles.infoContainer}>
                              <Text style={[styles.name, {color:textColor}]}>{item.name}</Text>
                              <Text style={[styles.text, {color:textColor}]}>{item.data}</Text>
                              <Text style={[styles.text, {color:textColor}]}>{item.reason}</Text>
                              <Text style={styles.status}>{item.status}</Text>
                            </View>
                            <View style={styles.infoContainer}>
                              <Text style={[styles.text, {color:textColor}]}>{item.phone}</Text>
                              <Text style={[styles.text, {color:textColor}]}>{item.term}</Text>
                            </View>
                          </View>
                          <View style={{flexDirection: 'row', marginTop:10}}>
                              {item.status == 'Ожидает' ? (
                                <View style={{flexDirection: 'row'}}>
                                  <View style={{flexDirection: 'row', marginRight: 20}}>
                                    <TouchableOpacity style={styles.btn}>
                                      <Text style={styles.btnText}>Принять</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btn}>
                                      <Text style={styles.btnText}>Отклонить</Text>
                                    </TouchableOpacity>
                                  </View>
                                  <TouchableOpacity style={styles.btn} onPress={() => router.push({ pathname:'/frozen/[id]', params: { id: item.id }})}>
                                    <Text style={styles.btnText}>Просмотреть</Text>
                                  </TouchableOpacity>
                                </View>
                              ) : (
                                <View style={{flexDirection:'row'}}>
                                  <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btnText} onPress={() => router.push({ pathname:'/frozen/[id]', params: { id: item.id }})}>Просмотреть</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btnText}>Отменить</Text>
                                  </TouchableOpacity>
                                </View>
                              )}
                          </View>
                        </View>
                    )}
                />
                <GradientButton title="+ Добавить заморозку" toDo={addFrozen} />
            </View>
        </ThemedMainView>
    )
}

export default FrozenScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  infoContainer: {
    flex:1,
  },
  name:{
    fontSize:12, 
    fontWeight:'500',
    marginBottom:5,
  },
  btn: {
    backgroundColor: 'white',
    marginRight: 5,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 30,
  },
  btnText: {
    fontSize: 12,
  },
  text: {
    fontSize: 12,
    marginBottom:5,
  },
  status: {
    fontSize: 12,
    color:'#F4C443',
  },
})