import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { useRouter } from 'expo-router';

interface SharedListProps {
  firstname: string;
  lastname:string;
  phone:string;
  route:number;
  status:string;
  image?:React.JSX.Element;
  path:string,
}

export const SharedList: React.FC<SharedListProps> = ({ firstname, lastname, phone, route, status, image, path }) => {
  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#252525' }, 'background'); 
  const textColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const router = useRouter();

  return (
    <View>
        <View style={[styles.list, {backgroundColor}]}>
          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text style={{color:textColor}}>{firstname} {lastname}</Text>
            <Text style={{color:textColor}}>+7 {phone}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.dots}>
              {image}
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.subs, {borderColor:textColor}]}
              onPress={() => {
                router.push({
                  pathname: `${path}/[id]`,
                  params: { id: route},
                });
              }}
            >
              <Text style={{color:textColor}}>{ status }</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor:'#F0F0F0', 
    borderRadius:10, 
    marginBottom: 5, 
    flexDirection: 'row', 
    padding: 5, 
    alignItems: 'center'
  },
  subs: {
    borderWidth:1,
    borderRadius:10,
    padding:4,
  },
  dots: {
    alignItems:'flex-end',
  },
});