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
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import Logo from '../../assets/img/Logo.png';

const { height } = Dimensions.get('window');

const DoctorProfile = ({ showModal, setShowModal }) => {
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

  const [category, setCategory] = useState("")
  const days = ['B.e', 'Ç.a', 'Ç', 'C.a', 'C', 'Ş', 'B'];
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {

    const checkDay = selectedDays.some(d => d.workDate === day);
    console.log(checkDay)
    console.log(day)
    if (checkDay) {
      setSelectedDays(selectedDays.filter(d => d.workDate !== day));
    } else {
      setSelectedDays([...selectedDays, { workDate: day }]);
    }
  };


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


          {/* name input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ad</Text>
            <TextInput
              style={styles.input}
              placeholder="Adınızı daxil edin"
              placeholderTextColor="rgba(178,188,201,1)"
            />
          </View>
          {/* surname Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Soyad</Text>
            <TextInput
              style={styles.input}
              placeholder="Soyadınızı daxil edin"
              placeholderTextColor="rgba(178,188,201,1)"
            />
          </View>


          {/* category */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>İxtisas</Text>
            <Picker
              mode="dropdown"
              prompt="Prefix"
              selectedValue={category}
              style={styles.picker}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item
                label="Ixtisas Seçin"
                value=""
                color="gray"
              />
              <Picker.Item label="050" value="050" />
              <Picker.Item label="051" value="051" />
              <Picker.Item label="055" value="055" />
              <Picker.Item label="070" value="070" />
              <Picker.Item label="077" value="077" />
              <Picker.Item label="099" value="099" />
            </Picker>
          </View>

          {/* details indput */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ətraflı</Text>
            <TextInput
              multiline={true}
              numberOfLines={5}
              style={[styles.input, {
                height: 120,
                textAlignVertical: 'top',
              }]}
              placeholder="Ətraflı məlumat Yazın"
              placeholderTextColor="rgba(178,188,201,1)"
            />
          </View>

          {/* work dealy */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>İş Günləri</Text>
            <View style={styles.daysContainer}>
              {days.map((day, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dayButton,
                    selectedDays.some((d) => d.workDate === day) && styles.selectedDay
                  ]}
                  onPress={() => toggleDay(day)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      selectedDays.some((d) => d.workDate === day) && styles.selectedText
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>İş Saat Aralıqları</Text>

            {
              selectedDays && selectedDays.length > 0 &&
              selectedDays.map((day, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                    paddingBottom: 5,
                  }}
                >
                  <Text style={[styles.label, { fontSize: wp('3.5%') }]}>{day.workDate}</Text>
                  <Text style={[styles.label, { fontSize: wp('3.5%') }]}>Saat</Text>
                </View>
              ))

            }

          </View>


          <TouchableOpacity style={styles.submitButton} onPress={() => setShowModal(false)}>
            <Text style={styles.submitButtonText}>Təsdiqlə</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </Animated.View>
    </View>
  );
};

export default DoctorProfile;

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
  picker: {
    width: "100%",
    borderWidth: 1,
    borderColor: 'rgba(244,244,246,1)',
    borderRadius: 16,
    backgroundColor: 'rgba(250,250,252,1)',
    fontSize: wp('4%'),
    color: '#333',
  },

  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
    gap: 10,
  },

  dayButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    minWidth: '28%',
    alignItems: 'center',
  },

  selectedDay: {
    backgroundColor: '#007BFF',
  },

  dayText: {
    fontSize: wp('4%'),
    color: '#333',
  },

  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },


});
