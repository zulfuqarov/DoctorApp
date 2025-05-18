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
  Button,
  Alert,
  Keyboard
} from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { launchImageLibrary } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-toast-message';
import Logo from '../../assets/img/Logo.png';
import { DoctorContext } from '../../context/ContextDoctor';

const { height } = Dimensions.get('window');


const hekimIxtisaslari = [
  "Kardioloq",
  "Nevroloq",
  "Dəri xəstəlikləri mütəxəssisi",
  "Endokrinoloq",
  "Pediatr",
  "Terapevt",
  "Ginekoloq",
  "Uroloq",
  "Oftalmoloq",
  "Ortoped",
  "Cərrah",
  "Psixiatr",
  "Stomatoloq",
  "Radioloq",
  "Fizioterapevt",
  "Anestezioloq",
  "Təbii terapiya mütəxəssisi",
  "Mikrobioloq"
];

const DoctorProfile = ({ showModal, setShowModal }) => {
  const { userData, LogoutUser, updateUserData } = useContext(DoctorContext)
  const slideAnim = useRef(new Animated.Value(height)).current;

  const [name, setName] = useState(userData.userName)
  const [surname, setSurname] = useState(userData.userSurname)
  const [category, setCategory] = useState("")
  const [details, setDetails] = useState("")

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

  const days = ['B.e', 'Ç.a', 'Ç', 'C.a', 'C', 'Ş', 'B'];
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {

    const checkDay = selectedDays.some(d => d.workDate === day);
    console.log(checkDay)
    console.log(day)
    if (checkDay) {
      setSelectedDays(selectedDays.filter(d => d.workDate !== day));
    } else {
      setSelectedDays([...selectedDays, { workDate: day, startTime: '', endTime: '' }]);
    }
  };

  const [showWrokTimeButton, setshowWrokTimeButton] = useState()
  const showWrokTimeFunck = (workDay) => {
    if (showWrokTimeButton === workDay) {
      setshowWrokTimeButton(null)
    } else {
      setshowWrokTimeButton(workDay)
    }
  }

  const [showPicker, setShowPicker] = useState({
    show: false,
    date: null
  });
  const [pickerType, setPickerType] = useState('start');

  const onChangePicker = (event, selectedDate) => {
    if (event.type === 'dismissed') {
      setShowPicker({
        show: false,
        date: null
      });
      return;
    }

    if (!selectedDate) {
      setShowPicker({
        show: false,
        date: null
      });
      return;
    }

    const updatedDate = new Date(selectedDate);
    setSelectedDays(prevState =>
      prevState.map(day =>
        day.workDate === showWrokTimeButton
          ? {
            ...day,
            ...(pickerType === 'start'
              ? { startTime: updatedDate }
              : { endTime: updatedDate }),
          }
          : day
      )
    );

    setShowPicker({
      show: false,
      date: null
    });
  };

  const showDatePicker = (type, date) => {
    setPickerType(type);
    setShowPicker({
      show: true,
      date: date.workDate
    })
  };



  // doctor diploma upload start
  const [diplomaPhoto, setDiplomaPhoto] = useState(null);
  const selectImageDiplom = () => {
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
        setDiplomaPhoto(source);
      }
    });
  };

  const [error, setError] = useState(false)

  const errorFunction = () => {
    const errorText = {}

    if (!name) {
      errorText.name = "Adınızı daxil edin"
    } else if (name.length < 3) {
      errorText.name = "Adınız 3 simvoldan az ola bilməz"
    }
    if (!surname) {
      errorText.surname = "Soyadınızı daxil edin"
    } else if (surname.length < 3) {
      errorText.surname = "Soyadınız 3 simvoldan az ola bilməz"
    }
    if (!category) {
      errorText.category = "İxtisasınızı seçin"
    }

    if (details.length < 10) {
      errorText.details = "Məlumatınız 10 simvoldan az ola bilməz"
    }

    if (selectedDays.length === 0) {
      errorText.workDays = "İş günlərinizi seçin"
    }

    if (selectedDays.length > 0) {
      selectedDays.map((day) => {
        if (!day.startTime || !day.endTime) {
          errorText.workTime = true
        }
      })
    }

    if (!diplomaPhoto) {
      errorText.diploma = "Diplom şəkilinizi seçin"
    }

    // if (!photo) {
    //   errorText.photo = "Şəkilinizi seçin"
    // }


    setError(errorText)

    return errorText

  }

  const submitDoctorForm = async () => {
    try {
      const errorCheck = errorFunction()
      if (Object.keys(errorCheck).length > 0) {
        if (errorCheck.workTime) {
          Toast.show({
            type: 'error',
            text1: 'Xətalı məlumat',
            text2: 'İş saat aralığını seçin',
            position: 'top',
            visibilityTime: 2000,
            autoHide: true,
            bottomOffset: 50,
          })
          return
        }
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
        text2: 'Həkim profiliniz uğurla düzəldildi',
        position: 'top',
        visibilityTime: 2000,
        autoHide: true,
        bottomOffset: 50,
      })
      Keyboard.dismiss()
      setShowModal(false)

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
              style={[styles.input, { borderColor: error?.name ? 'red' : 'rgba(244,244,246,1)', color: 'rgb(128, 128, 128)' }]}
              placeholderTextColor="rgba(178,188,201,1)"
              editable={false}
            />
            {error?.name && <Text style={{ color: 'red', fontSize: wp("3.5%") }}>{error.name}</Text>}
          </View>

          {/* name input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ad</Text>
            <TextInput
              style={[styles.input, { borderColor: error.name ? 'red' : 'rgba(244,244,246,1)' }]}
              placeholder="Adınızı daxil edin"
              placeholderTextColor="rgba(178,188,201,1)"
              value={name}
              onChangeText={text => setName(text)}
            />
            {
              error.name &&
              <Text style={{ color: 'red', fontSize: wp('3.5%'), marginTop: 5 }}>{error.name} !</Text>
            }
          </View>
          {/* surname Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Soyad</Text>
            <TextInput
              style={[styles.input, { borderColor: error.surname ? 'red' : 'rgba(244,244,246,1)' }]}
              placeholder="Soyadınızı daxil edin"
              placeholderTextColor="rgba(178,188,201,1)"
              value={surname}
              onChangeText={text => setSurname(text)}
            />
            {
              error.surname &&
              <Text style={{ color: 'red', fontSize: wp('3.5%'), marginTop: 5 }}>{error.surname} !</Text>
            }
          </View>


          {/* category */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>İxtisas</Text>
            <View style={{ borderColor: error.category ? 'red' : 'rgba(244,244,246,1)', borderWidth: 1 }}>
              <Picker
                mode="dropdown"
                prompt="İxtisas"
                selectedValue={category}
                style={styles.picker}
                onValueChange={(itemValue) => setCategory(itemValue)}
                dropdownIconColor="#007BFF"
              >
                <Picker.Item
                  label="Ixtisas Seçin"
                  value=""
                  color="gray"
                />
                {
                  hekimIxtisaslari.map((map, index) => (
                    <Picker.Item label={map} value={map} key={index} />
                  ))
                }
              </Picker>
            </View>
            {
              error.category &&
              <Text style={{ color: 'red', fontSize: wp('3.5%'), marginTop: 5 }}>{error.category} !</Text>
            }
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
                borderColor: error.details ? 'red' : 'rgba(244,244,246,1)',
              }]}
              placeholder="Ətraflı məlumat Yazın"
              placeholderTextColor="rgba(178,188,201,1)"
              value={details}
              onChangeText={text => setDetails(text)}
            />
            {
              error.details &&
              <Text style={{ color: 'red', fontSize: wp('3.5%'), marginTop: 5 }}>{error.details} !</Text>
            }
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
            {
              error.workDays &&
              <Text style={{ color: 'red', fontSize: wp('3.5%'), marginTop: 5 }}>{error.workDays} !</Text>
            }
          </View>
          {
            selectedDays.length > 0 && <View style={styles.inputGroup}>
              <Text style={styles.label}>İş Saat Aralıqları</Text>

              {
                selectedDays && selectedDays.length > 0 &&
                selectedDays.map((day, index) => (
                  <View
                    key={index}
                    style={{
                      paddingTop: 20,
                      borderBottomWidth: 1,
                      borderBottomColor: day.startTime && day.endTime ? 'rgba(244,244,246,1)' : 'red',
                      paddingBottom: 5,

                    }}
                  >
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}>
                      <Text style={[styles.label, { fontSize: wp('3.5%') }]}>{day.workDate}</Text>
                      <TouchableOpacity
                        onPress={() => showWrokTimeFunck(day.workDate)}
                        style={[styles.label, { flexDirection: 'row', justifyContent: "center", alignItems: 'center' }]}>
                        <Text style={{ fontSize: wp('4%'), marginRight: 8 }}>
                          Vaxt seçin
                        </Text>
                        <Ionicons name={showWrokTimeButton === day.workDate ? "chevron-up" : 'chevron-down'} size={wp('4%')} color="#007BFF" />
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 20,
                        display: showWrokTimeButton === day.workDate ? "flex" : "none",
                      }}
                    >

                      <TouchableOpacity
                        onPress={() => showDatePicker('start', day)}
                        style={{
                          backgroundColor: '#007BFF',
                          paddingVertical: 8,
                          paddingHorizontal: 16,
                          borderRadius: 6,
                          justifyContent: 'center',
                          alignItems: 'center',
                          elevation: 2,
                          width: wp('35%'),
                        }}
                      >
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: wp('3.5%'),
                            fontWeight: '500',
                            textAlign: 'center',
                            paddingBottom: 7
                          }}
                        >
                          Başlama Saatı
                        </Text>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: wp('3.5%'),
                            fontWeight: '500',
                            textAlign: 'center',
                          }}
                        >
                          {day.startTime
                            ? day.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
                            : '----'}
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => showDatePicker('end', day)}
                        style={{
                          backgroundColor: '#007BFF',
                          paddingVertical: 8,
                          paddingHorizontal: 16,
                          borderRadius: 6,
                          justifyContent: 'center',
                          alignItems: 'center',
                          elevation: 2,
                          width: wp('35%'),
                        }}
                      >
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: wp('3.5%'),
                            fontWeight: '500',
                            textAlign: 'center',
                            paddingBottom: 7
                          }}
                        >
                          Bitmə Saatı
                        </Text>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: wp('3.5%'),
                            fontWeight: '500',
                            textAlign: 'center',
                          }}
                        >
                          {day.endTime
                            ? day.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
                            : '----'
                          }
                        </Text>
                      </TouchableOpacity>

                    </View>


                    {showPicker.show && showPicker.date === day.workDate && (
                      <DateTimePicker
                        value={pickerType === 'start'
                          ? (selectedDays.find(day => day.workDate === showWrokTimeButton)?.startTime || new Date())
                          : (selectedDays.find(day => day.workDate === showWrokTimeButton)?.endTime || new Date())
                        }
                        mode="time"
                        is24Hour={true}
                        display="spinner"
                        onChange={onChangePicker}
                        onCancel={() => setShowPicker({ show: false, date: null })}
                      />
                    )}

                  </View>
                ))

              }

            </View>
          }


          {/* upload Dimplor Doctor */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Həkimlik Sənədi</Text>
            <TouchableOpacity onPress={selectImageDiplom} activeOpacity={0.4}>
              <View style={{ backgroundColor: '#f4f4f4', borderRadius: 5 }}>
                <Text style={{
                  height: 50,
                  lineHeight: 50,
                  paddingHorizontal: 10,
                  fontSize: wp('4%'),
                  color: diplomaPhoto ? '#333' : '#999',
                  borderColor: error.diploma ? 'red' : 'rgba(244,244,246,1)',
                  borderWidth: 1,
                  borderRadius: 5,
                }}>
                  {diplomaPhoto ? diplomaPhoto.uri : 'Sənədi seçin...'}
                </Text>
              </View>
            </TouchableOpacity>
            {
              error.diploma &&
              <Text style={{ color: 'red', fontSize: wp('3.5%'), marginTop: 5 }}>{error.diploma} !</Text>
            }
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={() => submitDoctorForm()}>
            <Text style={styles.submitButtonText}>Təsdiqlə</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.submitButton, { backgroundColor: '#f87171' }]} onPress={() => submitUserProfile()}>
            <Text style={styles.submitButtonText}>Şifrəni Dəyiş</Text>
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
