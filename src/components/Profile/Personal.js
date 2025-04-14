import React, { useState } from 'react';
import { View, Button, Image, Text } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const Personal = () => {
  const [photo, setPhoto] = useState(null);

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('Kullanıcı iptal etti');
      } else if (response.errorCode) {
        console.log('Hata:', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setPhoto(source);
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Fotoğraf Seç" onPress={selectImage} />
      {photo && (
        <Image
          source={photo}
          style={{ width: 200, height: 200, marginTop: 20, borderRadius: 10 }}
        />
      )}
    </View>
  );
};

export default Personal;
