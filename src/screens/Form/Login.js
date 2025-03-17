import { StyleSheet, Image, Text, TextInput, View, KeyboardAvoidingView, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import React from "react";
import GooglePng from "../../assets/img/Google.png";
import IcloudPng from "../../assets/img/Facebook.png";
import FacebookPng from "../../assets/img/Apple.png";
import Line from "../../assets/img/Divider-ine-copy.png"
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const { navigate } = useNavigation()
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding" // Android için uygun davranış biçimi
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email ünvan</Text>
              <View style={styles.inputField}>
                <TextInput
                  style={styles.input}
                  placeholder="Email ünvanınızı daxil edin"
                  placeholderTextColor="rgba(178,188,201,1)"
                  keyboardType="email-address"
                />
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Şifrəniz</Text>
              <View style={styles.inputField}>
                <TextInput
                  style={styles.input}
                  placeholder="Şifrənizi daxil edin"
                  placeholderTextColor="rgba(178,188,201,1)"
                  secureTextEntry
                />
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/m7ujnaub38c-I401%3A8620%3B25%3A2271?alt=media&token=7b267e5d-d288-4d87-85ac-647359697752",
                  }}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.SignIn}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.Login}>
            <Text style={styles.text}>Hesabınız yoxdur? </Text>
            <TouchableOpacity onPress={() => navigate("Register")}>
              <Text style={styles.buttonText}>Qeydiyyat</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerLine}>
            <Image
              source={Line}
              style={styles.dividerLine}
            />

            <Text style={styles.textLine}>Or</Text>

            <Image
              source={Line}
              style={styles.dividerLine}
            />
          </View>
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
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Yatayda ortalama
    justifyContent: "space-evenly", // Dikeyde ortalama
    padding: 16,
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
  inputField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 7, // Paddingi küçülttük
    borderWidth: 1,
    borderColor: "rgba(244,244,246,1)",
    borderRadius: 16,
    backgroundColor: "rgba(250,250,252,1)",
  },
  input: {
    flex: 1,
    fontSize: 14, // Font boyutunu küçülttük
    color: "#333",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },

  Button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    height: 56,
    padding: 16,
    borderRadius: 32,
    boxSizing: "border-box",
    backgroundColor: "rgba(46,111,243,1)",
  },
  SignIn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: 'white',
    fontSize: 16,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    textAlign: "center",
  },
  Login: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  text: {
    fontSize: 16,
    color: '#7D8A95',
    marginRight: 8,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
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
    backgroundColor: '#3b5998', // Facebook'un mavi rengi, her buton için özelleştirilebilir
    borderRadius: 5,
  },

  containerIcon: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    width: 250,
    marginBottom: 20,
  },
  containerLine: {
    flexDirection: 'row', // Bu, öğeleri yatay hizalamak için kullanılır.
    alignItems: 'center',
    gap: 16, // Bu değeri, flexbox ile benzer şekilde sağladık.
    position: 'relative', // Gereksiz olsa da, orijinal yapının davranışını taklit edebilmek için ekledik.
  },
  dividerLine: {
    width: 137,
    height: 1,
    resizeMode: 'cover', // object-cover benzeri işlevsellik
    position: 'relative', // Yine orijinal yapı ile uyumlu olması için
  },
  textLine: {
    fontFamily: 'body-2-regular', // Font ailesi, stil dosyanızda tanımlı olmalı.
    fontSize: 14, // `var(--body-2-regular-font-size)` yerine uygun bir font boyutu
    fontWeight: '400', // `var(--body-2-regular-font-weight)` yerine uygun bir font ağırlığı
    color: '#B1B1B1', // `text-graygray-1` yerine uygun bir renk
    textAlign: 'center',
    letterSpacing: 0.5, // `tracking-[var(--body-2-regular-letter-spacing)]` yerine uygun bir letter-spacing
    lineHeight: 20, // `var(--body-2-regular-line-height)` yerine uygun bir line-height
    marginTop: -1, // `mt-[-1.00px]` yerine uygun margin-top değeri
    whiteSpace: 'nowrap', // React Native'de `nowrap` varsayılan olarak uygulanır.
  },

});
