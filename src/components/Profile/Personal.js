import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Button, Animated, Easing, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Logo from "../../assets/img/Logo.png"
const { height } = Dimensions.get('window')

const Personal = ({ showModal, setShowModal }) => {

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
          style={{ width: 200, height: 200, marginTop: 20, borderRadius: 10 }}
        />
      </View>
      <Animated.View style={[styles.panel, { top: slideAnim }]}>

        <TouchableOpacity style={styles.imageView} onPress={selectImage}>
          <View style={styles.ImageColor}>

          </View>
          <Ionicons
            name="camera-outline"
            size={30}
            color="white"
            style={styles.ImageIcon}
          />
          <Image
            source={{ uri: `${photo
              ? photo.uri
              : "https://pngimg.com/uploads/doctor/doctor_PNG16019.png"
            }` }}
            style={styles.image}
          />
        </TouchableOpacity>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Ad</Text>
          <TextInput style={styles.input} placeholder="Adınızı daxil edin" placeholderTextColor="rgba(178,188,201,1)" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Soyad</Text>
          <TextInput style={styles.input} placeholder="Soyadınızı daxil edin" placeholderTextColor="rgba(178,188,201,1)" />
        </View>
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
    // justifyContent: 'center',
  },
  imageView: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    marginBottom: 25,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  ImageColor: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: "black",
    borderRadius: "50%",
    opacity: 0.3,
  },
  ImageIcon: {
    position: "absolute",
    top: 37.5,
    left: 37.5,
    right: 37.5,
    bottom: 37.5,
    zIndex: 2,
    fontSize: wp("15%"),
    fontWeight: "600",
    textAlign: "center",
    // lineHeight: 250,
    textTransform: "uppercase",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  inputGroup: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: 20,
  },
  label: {
    color: "rgba(51,56,75,1)",
    fontSize: wp("4%"),
    lineHeight: 26,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(244,244,246,1)",
    borderRadius: 16,
    backgroundColor: "rgba(250,250,252,1)",
    fontSize: wp("4"),
    color: "#333",
  },
})

