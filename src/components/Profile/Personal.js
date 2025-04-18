import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Animated,
  Easing,
  Dimensions,
  Platform
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { launchImageLibrary } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Logo from '../../assets/img/Logo.png';

const { height } = Dimensions.get('window');

const Personal = ({ showModal, setShowModal }) => {
  const [photo, setPhoto] = useState(null);
  const slideAnim = useRef(new Animated.Value(height)).current;

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

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: showModal ? 0 : height,
      duration: 300,
      useNativeDriver: false,
      easing: showModal ? Easing.out(Easing.ease) : Easing.in(Easing.ease),
    }).start(() => {
      if (!showModal) {
        setShowModal(false);
      }
    });
  }, [showModal]);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <Animated.View style={[styles.panel, { top: slideAnim }]}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: wp("40%") }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={Platform.OS === 'ios' ? -80 : 0}

        >
          
          <TouchableOpacity style={styles.imageView} onPress={selectImage}>
            <Image
              source={{
                uri: photo
                  ? photo.uri
                  : 'https://pngimg.com/uploads/doctor/doctor_PNG16019.png',
              }}
              style={styles.image}
            />
            <View style={styles.imageOverlay} />
            <Ionicons name="camera-outline" size={30} color="white" style={styles.imageIcon} />
          </TouchableOpacity>
                
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Soyad</Text>
            <TextInput
              style={styles.input}
              placeholder="Soyadınızı daxil edin"
              placeholderTextColor="rgba(178,188,201,1)"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Soyad</Text>
            <TextInput
              style={styles.input}
              placeholder="Soyadınızı daxil edin"
              placeholderTextColor="rgba(178,188,201,1)"
            />
          </View>
                        
          <TouchableOpacity style={styles.submitButton} onPress={() => setShowModal(false)}>
            <Text style={styles.submitButtonText}>Təsdiqlə</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </Animated.View>
    </View>
  );
};

export default Personal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  panel: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: height,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    paddingBottom: wp("25%")
  },
  imageView: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 25,
    alignSelf: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.3,
    zIndex: 1,
    borderRadius: 75,
  },
  imageIcon: {
    position: 'absolute',
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: 'rgba(51,56,75,1)',
    fontSize: wp('4%'),
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(244,244,246,1)',
    borderRadius: 16,
    backgroundColor: 'rgba(250,250,252,1)',
    fontSize: wp('4%'),
    color: '#333',
  },
  submitButton: {
    width: '100%',
    padding: 12,
    borderRadius: 16,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: '600',
  },
});
