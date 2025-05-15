import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import GooglePng from "../../assets/img/Google.png";
import IcloudPng from "../../assets/img/Facebook.png";
import FacebookPng from "../../assets/img/Apple.png";
import Line from "../../assets/img/Divider-ine-copy.png";
import { useNavigation } from "@react-navigation/native";
import { DoctorContext } from "../../context/ContextDoctor";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
const Login = () => {
  const { signInUser } = useContext(DoctorContext);
  const { navigate } = useNavigation();
  const [error, setError] = useState({})

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const errorFunction = () => {
    const errorText = {}

    if (email === "") {
      errorText.email = "Email ünvanınızı daxil edin"
    } else if (!email.includes("@")) {
      errorText.email = "Email ünvanınızı düzgün daxil edin"
    }

    if (password === "") {
      errorText.password = "Şifrənizi daxil edin"
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
      extraScrollHeight={Platform.OS === 'ios' ? -80 : 0}
    >
      <View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email ünvan</Text>
          <View style={[styles.inputField, { borderColor: error.email ? 'red' : 'rgba(244,244,246,1)' }]}>
            <TextInput
              style={styles.input}
              placeholder="Email ünvanınızı daxil edin"
              placeholderTextColor="rgba(178,188,201,1)"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
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
            <TextInput
              style={styles.input}
              placeholder="Şifrənizi daxil edin"
              placeholderTextColor="rgba(178,188,201,1)"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Image
              style={styles.icon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/m7ujnaub38c-I401%3A8620%3B25%3A2271?alt=media&token=7b267e5d-d288-4d87-85ac-647359697752",
              }}
            />
          </View>
          {
            error.password &&
            <Text style={{ color: 'red', fontSize: wp('3.5%'), marginTop: 7, marginLeft: 7 }}>{error.password} !</Text>
          }
        </View>

        <TouchableOpacity
          onPress={() => {
            const errorCheck = errorFunction()

            if (Object.keys(errorCheck).length === 0) {
              signInUser(email, password)
            } else {
              Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Zəhmət olmasa, email ünvanınızı və şifrənizi düzgün daxil edin.!',
                visibilityTime: 2000,
                autoHide: true,
              });
              console.log(errorCheck.email || errorCheck.password);
            }

          }}
          style={styles.Button}
        >
          <Text style={styles.SignIn}>Continue</Text>
        </TouchableOpacity>
      </View>



      <View style={styles.Login}>
        <Text style={styles.text}>Hesabınız yoxdur? </Text>
        <TouchableOpacity onPress={() => navigate("Register")}>
          <Text style={styles.buttonText}>Qeydiyyat</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerLine}>
        <Image source={Line} style={styles.dividerLine} />
        <Text style={styles.textLine}>Və ya</Text>
        <Image source={Line} style={styles.dividerLine} />
      </View>

      <View style={styles.containerIcon}>
        <TouchableOpacity
          style={styles.buttonIcon}
          onPress={() => alert("Google ilə giriş yapıldı!")}
        >
          <Image source={GooglePng} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonIcon}
          onPress={() => alert("iCloud ilə giriş yapıldı!")}
        >
          <Image source={IcloudPng} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonIcon}
          onPress={() => alert("Facebook ilə giriş yapıldı!")}
        >
          <Image source={FacebookPng} />
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
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
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "rgba(250,250,252,1)",
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    height: hp("5%"),
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  Button: {
    width: 327,
    height: 56,
    padding: 16,
    borderRadius: 32,
    backgroundColor: "rgba(46,111,243,1)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
    paddingTop: 40,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 250,
    marginTop: 20,
  },
  buttonIcon: {
    padding: 10,
  },
  containerLine: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  dividerLine: {
    width: 137,
    height: 1,
    resizeMode: "cover",
  },
  textLine: {
    fontSize: 14,
    fontWeight: "400",
    color: "#B1B1B1",
    textAlign: "center",
    letterSpacing: 0.5,
    lineHeight: 20,
    marginHorizontal: 10,
  },
});
