import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Button, Animated, Easing, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Logo from "../../assets/img/Logo.png"
const { height } = Dimensions.get('window')

const Personal = ({ showModal, setShowModal }) => {

  // const [photo, setPhoto] = useState(null);
  // const selectImage = () => {
  //   const options = {
  //     mediaType: 'photo',
  //     quality: 1,
  //   };

  //   launchImageLibrary(options, response => {
  //     if (response.didCancel) {
  //       console.log('Kullanıcı iptal etti');
  //     } else if (response.errorCode) {
  //       console.log('Hata:', response.errorMessage);
  //     } else {
  //       const source = { uri: response.assets[0].uri };
  //       setPhoto(source);
  //     }
  //   });
  // };


  const slideAnim = useRef(new Animated.Value(height)).current

  useEffect(() => {
    if (!showModal) {
      setShowModal(true)
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }).start()
    } else {
      Animated.timing(slideAnim, {
        toValue: height,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.in(Easing.ease),
      }).start(() => setShowModal(false))
    }
  }, [showModal])

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={Logo}
            style={{ width: 300, height: 300, marginTop: 20, borderRadius: 10 }}
          />
      </View>
      <Animated.View style={[styles.panel, { top: slideAnim }]}>
        <TextInput placeholder="Adınız" style={styles.input} />
        <TextInput placeholder="Soyadınız" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
      </Animated.View>
    </View>
  )
}

export default Personal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f97316',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
})

