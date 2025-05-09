import { StyleSheet, Image, Text, TextInput, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import GooglePng from "../../assets/img/Google.png";
import IcloudPng from "../../assets/img/Facebook.png";
import FacebookPng from "../../assets/img/Apple.png";
import { DoctorContext } from "../../context/ContextDoctor";
const Register = () => {
  const { RegisterUser } = useContext(DoctorContext)
  const { navigate } = useNavigation();
  const [selectedPrefix, setSelectedPrefix] = useState("050");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          <View style={styles.container}>
            <View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Ad</Text>
                <TextInput style={styles.input} placeholder="Adınızı daxil edin" placeholderTextColor="rgba(178,188,201,1)" />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Soyad</Text>
                <TextInput style={styles.input} placeholder="Soyadınızı daxil edin" placeholderTextColor="rgba(178,188,201,1)" />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email ünvan</Text>
                <TextInput style={styles.input} placeholder="Email ünvanınızı daxil edin" placeholderTextColor="rgba(178,188,201,1)" keyboardType="email-address" />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Şifrəniz</Text>
                <TextInput style={styles.input} placeholder="Şifrənizi daxil edin" placeholderTextColor="rgba(178,188,201,1)" secureTextEntry />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Telefon nömrəniz</Text>
                <View style={styles.phoneInputContainer}>
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
                    onChangeText={setPhoneNumber}
                    value={phoneNumber}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.Button}
              onPress={async () => {
                await RegisterUser({
                  userName: "nebi",
                  userSurname: "nebi1234",
                  email: "nebi7@gmail.com",
                  password: "nebi1234",
                  phone: `+994708115399`,
                })
                // Handle registration logic here
                // alert("Qeydiyyat tamamlandı!");
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
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
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(244,244,246,1)",
    borderRadius: 16,
    backgroundColor: "rgba(250,250,252,1)",
    fontSize: 14,
    color: "#333",
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
