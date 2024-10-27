import {StyleSheet, useColorScheme, View} from 'react-native';
import {ThemedText} from "@/src/components/themedComponents/ThemedText";
import {scale} from "react-native-size-matters";
import MapView from "react-native-maps";

export function MapCard() {
    const colorScheme = useColorScheme();
    return (
        <View style={{backgroundColor: colorScheme === 'dark' ? '#1F1F1F' : '#F0F0F0', borderRadius: 10, padding: scale(10), marginBottom: scale(15)}}>
            <MapView style={styles.map}>

            </MapView>
            <View style={{flexDirection: 'row'}}>
                <ThemedText type={'defaultSemiBold'} style={{flex: 1}}>улица Сейфуллина, 1</ThemedText>
                <ThemedText style={{marginLeft: 'auto'}}>120 м от вас</ThemedText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: scale(150),
        borderRadius: 10,
        marginBottom: scale(10)
    }
});