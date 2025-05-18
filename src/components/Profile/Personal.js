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
  Platform,
  Keyboard
} from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { launchImageLibrary } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';

import Logo from '../../assets/img/Logo.png';
import { DoctorContext } from '../../context/ContextDoctor';

const { height } = Dimensions.get('window');

const Personal = ({ showModal, setShowModal }) => {
  const { userData, LogoutUser, updateUserData } = useContext(DoctorContext)
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

  const [name, setName] = useState(userData.userName)
  const [surname, setSurname] = useState(userData.userSurname)

  const [error, setError] = useState()

  const validate = () => {
    const errorText = {}

    if (!name) {
      errorText.name = 'Adınızı daxil edin'
    } else if (name.length < 3) {
      errorText.name = 'Adınız 3 simvoldan az olmamalıdır'
    }
    if (!surname) {
      errorText.surname = 'Soyadınızı daxil edin'
    }

    return errorText

  }

  const submitUserProfile = async () => {
    try {
      const errorText = validate()
      setError(errorText)
      if (Object.keys(errorText).length > 0) {
        Toast.show({
          type: 'error',
          text1: 'Xətalı məlumat',
          position: 'top',
          visibilityTime: 2000,
          autoHide: true,
          bottomOffset: 50,
        })
        return
      }

      await updateUserData({
        userName: name,
        userSurname: surname,
        img: photo ? photo.uri : userData.img,
      })

      Toast.show({
        type: 'success',
        text1: 'Təbriklər',
        text2: 'profiliniz uğurla düzəldildi',
        position: 'top',
        visibilityTime: 2000,
        autoHide: true,
        bottomOffset: 50,
      })
      Keyboard.dismiss()
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Düzəliş edilmədi',
        text2: 'Profiliniz düzəldilmədi applicationdan çıxın və yenidən yoxlayın',
        position: 'top',
        visibilityTime: 2000,
        autoHide: true,
        bottomOffset: 50,
      })
    }
  }

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
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#2E6FF3',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 30,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
          onPress={() => {
            LogoutUser()
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, marginRight: 8 }}>
            Çıxış
          </Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={[styles.panel, { top: slideAnim }]}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: wp("40%") }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={Platform.OS === 'ios' ? -80 : 0}

        >
          {/* image start */}
          <TouchableOpacity style={styles.imageView} onPress={selectImage}>
            <Image
              source={{
                uri: photo
                  ? photo.uri
                  : `${userData.img}`,
              }}
              style={styles.image}
            />
            <View style={styles.imageOverlay} />
            <Ionicons name="camera-outline" size={30} color="white" style={styles.imageIcon} />
          </TouchableOpacity>

          {/* email input start */}
          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: 'rgb(128, 128, 128)' }]}>Email</Text>
            <TextInput
              value={userData.email}
              style={[styles.input, { borderColor: 'rgba(244,244,246,1)', color: 'rgb(128, 128, 128)' }]}
              placeholderTextColor="rgba(178,188,201,1)"
              editable={false}
            />
          </View>
          {/*name input start  */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ad</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={[styles.input, { borderColor: error?.name ? 'red' : 'rgb(158, 158, 158)' }]}
              placeholder="Adınızı daxil edin"
              placeholderTextColor="rgba(178,188,201,1)"
            />
            {error?.name && <Text style={{ color: 'red', fontSize: wp("3.5%") }}>{error.name}</Text>}
          </View>
          {/* surname input start */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Soyad</Text>
            <TextInput
              value={surname}
              onChangeText={setSurname}
              style={[styles.input, { borderColor: error?.surname ? 'red' : 'rgb(158, 158, 158)' }]}
              placeholder="Soyadınızı daxil edin"
              placeholderTextColor="rgba(178,188,201,1)"
            />
            {error?.surname && <Text style={{ color: 'red', fontSize: wp("3.5%") }}>{error.surname}</Text>}
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={() => submitUserProfile()}>
            <Text style={styles.submitButtonText}>Düzəlişi Təsdiqlə</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.submitButton, { backgroundColor: '#f87171' }]} onPress={() => submitUserProfile()}>
            <Text style={styles.submitButtonText}>Şifrəni Dəyiş</Text>
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
