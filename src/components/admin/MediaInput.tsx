import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Alert, 
  Image, 
  ScrollView, 
  Modal, 
  Platform 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { MediaIcon } from '../icons/Icon';
import DeleteModel from './DeleteModal';
import GradientButton from './GradientButton';

interface MediaInputProps {
  title: string;
  value: string[];
  onImageSelect: (uris: string[]) => void;
}

const MediaInput: React.FC<MediaInputProps> = ({
  title,
  value = [],
  onImageSelect,
}) => {
  const [images, setImages] = useState<string[]>(value);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); 
  const [isModalVisible, setModalVisible] = useState(false); 
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false); 

  const backgroundColor = useThemeColor({ light: '#F0F0F0', dark: '#1F1F1F' }, 'background');
  const iconColor = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');

  const openGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'We need permission to access your photos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const newUris = result.assets.map((asset) => asset.uri);
      const updatedUris = [...images, ...newUris];
      setImages(updatedUris);
      onImageSelect(updatedUris);
    }
  };

  const openImageInModal = (uri: string) => {
    setSelectedImage(uri);
    setModalVisible(true);
  };

  return (
    <View>
      <Text style={styles.ttl}>{title}</Text>
      <View style={[styles.inputContainer, { backgroundColor }]}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.imageScrollView}
        >
          {images.map((uri, index) => (
            <TouchableOpacity key={index} onPress={() => openImageInModal(uri)}>
              <Image source={{ uri }} style={styles.image} resizeMode="cover" />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity onPress={openGallery}>
          {React.cloneElement(<MediaIcon />, { color: iconColor })}
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={styles.fullscreenImage} resizeMode="contain" />
          )}
          <View style={{flexDirection:'row'}}>
            <View style={{width:'48%', marginRight:10}}>
              <GradientButton title='Удалить' toDo={()=>setDeleteModalVisible(true)}/>
            </View>
            <View style={{width:'48%'}}>
              <GradientButton title='Отменить' toDo={()=>setModalVisible(false)}/>
            </View>
          </View>
        </View>
      </Modal>
      <DeleteModel modalVisible={isDeleteModalVisible} setModalVisible={()=>setDeleteModalVisible(false)}/>
    </View>
  );
};

export default MediaInput;

const styles = StyleSheet.create({
  ttl: {
    fontSize: 12,
    color: '#787878',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 8,
  },
  imageScrollView: {
    flex: 1,
    marginRight: 10,
    maxHeight: 100,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  fullscreenImage: {
    width: '90%',
    height: '80%',
    borderRadius: 10,
  },
});
