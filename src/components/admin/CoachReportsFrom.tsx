import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useThemeColor } from '@/src/hooks/useThemeColor';
import React from 'react'

interface reportsInfo {
  count:string,
  avgRaiting:string,
  income:string,
}

interface Coach {
  reportsInfo: reportsInfo[];
}

const UserReportsForm:React.FC<{coach: Coach}> = ({coach}) => {
  const backgroundColor = useThemeColor({ light: '#F2EDED', dark: '#1F1F1F' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const highlightedColor = useThemeColor({ light: '#000000', dark: '#F4C443' }, 'text');
  const handleGradient = () => {

  }
  return (
    <View>
      <FlatList 
        style={{marginBottom:15}} 
        data={coach.reportsInfo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <View style={[styles.container, {backgroundColor}]}>
                <View><Text style={[{color:textColor}]}>Количество тренировок{'\n'}за месяц</Text></View>
                <View style={{position:'absolute', right:50, top:17}}><Text style={[{color:highlightedColor}]}>{item.count}</Text></View>
            </View>
            <View style={[styles.container, {backgroundColor}]}>
                <Text style={[{color:textColor}]}>Средний рейтинг</Text>
                <View style={{position:'absolute', right:50, top:10}}><Text style={[{color:highlightedColor}]}>{item.avgRaiting}</Text></View>
            </View>
            <View style={[styles.container, {backgroundColor}]}>
                <Text style={[{color:textColor}]}>Доход</Text>
                <View style={{position:'absolute', right:10, top:10}}><Text style={[{color:highlightedColor}]}>{item.income}</Text></View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default UserReportsForm

const styles = StyleSheet.create({
    container: {
        flexWrap:'wrap',
        padding:10,
        fontSize:12,
        backgroundColor:'#F2EDED',
        flexDirection:'row',
        marginBottom:5,
        borderRadius:10,
    },
})