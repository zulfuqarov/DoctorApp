import { StyleSheet, Image, Text, TextInput, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView, Platform } from "react-native";
import React, { useContext, useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import GooglePng from "../../assets/img/Google.png";
import IcloudPng from "../../assets/img/Facebook.png";
import FacebookPng from "../../assets/img/Apple.png";
import { DoctorContext } from "../../context/ContextDoctor";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
const Register = () => {
  const { RegisterUser } = useContext(DoctorContext)
  const { navigate } = useNavigation();
  const [selectedPrefix, setSelectedPrefix] = useState("050");

  const [registerData, setRegisterData] = useState({
    userName: "",
    userSurname: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleInputChange = (name, value) => {
    setRegisterData({ ...registerData, [name]: value });
  };

  const handlePhoneNumberChange = (value) => {
    handleInputChange("phone", `+994${selectedPrefix}${value}`);
  };

  // const handleRegister = async () => {
  //   try {
  //     await RegisterUser(registerData);
  //   } catch (error) {
  //     console.error("Registration error:", error);
  //   }
  // };

  // const handleSubmit = () => {
  //   if (!registerData.userName || !registerData.userSurname || !registerData.email || !registerData.password || !registerData.phone) {
  //     alert("Bütün sahələri doldurun");
  //     return;
  //   }
  //   handleRegister();
  // };

  const [error, setError] = useState({})

  const errorFunction = () => {
    const errorText = {}

    if (registerData.userName === "") {
      errorText.userName = "Adınızı daxil edin"
    }

    if (registerData.userSurname === "") {
      errorText.userSurname = "Soyadınızı daxil edin"
    }

    if (registerData.email === "") {
      errorText.email = "Email ünvanınızı daxil edin"
    } else if (!registerData.email.includes("@")) {
      errorText.email = "Email ünvanınızı düzgün daxil edin"
    }

    if (registerData.password === "") {
      errorText.password = "Şifrənizi daxil edin"
    }

    if (registerData.phone === "") {
      errorText.phone = "Telefon nömrənizi daxil edin"
    }

    setError(errorText)
    return errorText
  }


  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#fff", justifyContent: "space-evenly", alignItems: "center", paddingBottom: 60 }}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={Platform.OS === 'ios' ? -35 : 0}
    >
      <View style={styles.container}>
        <View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ad</Text>
            <View style={[styles.inputField, { borderColor: error.userName ? 'red' : 'rgba(244,244,246,1)' }]}>
              <TextInput

                style={styles.input}
                placeholder="Adınızı daxil edin"
                placeholderTextColor="rgba(178,188,201,1)"
                value={registerData.userName}
                onChangeText={(text) => handleInputChange("userName", text)}
              />
            </View>
            {
              error.userName &&
              <Text style={{ color: 'red', fontSize: wp('3.5%'), marginTop: 7, marginLeft: 7 }}>{error.userName} !</Text>
            }
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Soyad</Text>
            <View style={[styles.inputField, { borderColor: error.userSurname ? 'red' : 'rgba(244,244,246,1)' }]}>
              <TextInput
                value={registerData.userSurname}
                onChangeText={(text) => handleInputChange("userSurname", text)}
                style={styles.input}
                placeholder="Soyadınızı daxil edin"
                placeholderTextColor="rgba(178,188,201,1)"
              />
            </View>
            {
              error.userSurname &&
              <Text style={{ color: 'red', fontSize: wp('3.5%'), marginTop: 7, marginLeft: 7 }}>{error.userSurname} !</Text>
            }
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email ünvan</Text>
            <View style={[styles.inputField, { borderColor: error.email ? 'red' : 'rgba(244,244,246,1)' }]}>
              <TextInput
                style={styles.input}
                placeholder="Email ünvanınızı daxil edin"
                placeholderTextColor="rgba(178,188,201,1)"
                keyboardType="email-address"
                value={registerData.email}
                onChangeText={(text) => handleInputChange("email", text)}
              />
            </View>
            {
              error.email &&
              <Text style={{ color: 'red', fontSize: wp('3.5%'), marginTop: 7, marginLeft: 7 }}>{error.email} !</Text>
            }
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Şifrəniz</Text>
            <View style={[styles.inputField, { borderColor: error.password ? 'red' : 'rgba(244,244,246,1)' }]}>
              <TextInput style={styles.input} placeholder="Şifrənizi daxil edin" placeholderTextColor="rgba(178,188,201,1)" secureTextEntry
                value={registerData.password}
                onChangeText={(text) => handleInputChange("password", text)}
              />
            </View>
            {
              error.password &&
              <Text style={{ color: 'red', fontSize: wp('3.5%'), marginTop: 7, marginLeft: 7 }}>{error.password} !</Text>
            }
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Telefon nömrəniz</Text>
            <View style={[styles.phoneInputContainer, { borderColor: error.phone ? 'red' : 'rgba(244,244,246,1)' }]}>
              <Text style={styles.prefix}>+994</Text>
              <Picker
                mode="dropdown"
                prompt="Prefix"
                selectedValue={selectedPrefix}
                style={styles.picker}

                onValueChange={(itemValue) => setSelectedPrefix(itemValue)}
              >
                <Picker.Item label="050" value="050" />
                <Picker.Item label="051" value="051" />
                <Picker.Item label="055" value="055" />
                <Picker.Item label="070" value="070" />
                <Picker.Item label="077" value="077" />
                <Picker.Item label="099" value="099" />
              </Picker>
              <TextInput
                style={styles.phoneInput}
                placeholder="XXXXXX"
                placeholderTextColor="rgba(178,188,201,1)"
                keyboardType="number-pad"
                maxLength={7}
                value={registerData.phone.slice(7)}
                onChangeText={(text) => handlePhoneNumberChange(text)}
              />
            </View>
            {
              error.phone &&
              <Text style={{ color: 'red', fontSize: wp('3.5%'), marginTop: 7, marginLeft: 7 }}>{error.phone} !</Text>
            }
          </View>
        </View>
        <TouchableOpacity style={styles.Button}
          onPress={() => {
            const error = errorFunction()
            if (Object.keys(error).length === 0) {
              RegisterUser(registerData)
            } else {
              Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Zəhmət olmasa, bütün sahələri düzgün doldurun.!',
                visibilityTime: 2000,
                autoHide: true,
              });
              console.log(error.userName || error.userSurname || error.email || error.password || error.phone);
            }
          }}
        >
          <Text style={styles.SignIn}>Qeydiyyatdan keç</Text>
        </TouchableOpacity>
        <View style={styles.Login}>
          <Text style={styles.text}>Hesabınız var? </Text>
          <TouchableOpacity onPress={() => navigate("Login")}>
            <Text style={styles.buttonText}>Daxil olun</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* login email,facebook,icloud */}
      <View style={styles.containerIcon}>
        {/* Google Login Button */}
        <TouchableOpacity style={styles.buttonIcon} onPress={() => alert('Google ile giriş yapıldı!')}>
          <Image source={GooglePng} />
        </TouchableOpacity>

        {/* iCloud Login Button */}
        <TouchableOpacity style={styles.buttonIcon} onPress={() => alert('iCloud ile giriş yapıldı!')}>
          <Image source={IcloudPng} />
        </TouchableOpacity>

        {/* Facebook Login Button */}
        <TouchableOpacity style={styles.buttonIcon} onPress={() => alert('Facebook ile giriş yapıldı!')}>
          <Image source={FacebookPng} />
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingTop: 36,
    paddingBottom: 36,
    backgroundColor: "#fff",
  },
  inputGroup: {
    width: "100%",
    maxWidth: 327,
    marginBottom: 20,
  },
  label: {
    color: "rgba(51,56,75,1)",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    flex: 1,
    fontSize: 14, // Font boyutunu küçülttük
    color: "#333",
    height: hp("5%"),

  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "rgba(250,250,252,1)",
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(244,244,246,1)",
    borderRadius: 16,
    backgroundColor: "rgba(250,250,252,1)",
    paddingHorizontal: 10,
  },
  prefix: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
  },
  picker: {
    width: 100,
  },
  phoneInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  Button: {
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    height: 56,
    borderRadius: 32,
    backgroundColor: "rgba(46,111,243,1)",
  },
  SignIn: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  Login: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  text: {
    fontSize: 16,
    color: "#7D8A95",
    marginRight: 8,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  containerIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#3b5998',
    borderRadius: 5,
  },

  containerIcon: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    width: 250,
    marginBottom: 20,
  },

});
