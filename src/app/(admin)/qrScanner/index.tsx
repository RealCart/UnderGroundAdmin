import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ThemedMainView from '@/src/components/themedComponents/ThemedMainView';
import { PageHeader } from '@/src/components/PageHeader';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isIs, setIsIs] = useState<boolean>(false);
  const router = useRouter()

  useEffect(() => {
    if(!permission) {
      requestPermission()
    }
  }, [permission])

  if (!permission) {
    return <View />;
  }

  return (
    <ThemedMainView>
      <PageHeader title='QR сканнер'/>
      <CameraView 
        style={styles.camera} 
        onBarcodeScanned={({data}) => {
          if(!isIs) {
            router.push({pathname: `/(admin)/users/${data}`, params: {}})
            setIsIs(true);
          }
        }}
      />
    </ThemedMainView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

