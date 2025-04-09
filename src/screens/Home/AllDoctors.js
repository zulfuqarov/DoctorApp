import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, StatusBar, TextInput, SafeAreaView, Modal, } from 'react-native'
import React, { useState } from 'react'
import HomeTop from '../../components/Home/HomeTop'
import SliderCard from '../../components/Home/SliderCard'
import CategoryCard from '../../components/Home/CategoryCard';
import DoctorCard from '../../components/Home/DoctorCard';
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const { width: windowWidth } = Dimensions.get('window'); // Ekran genişliğini almak için

const AllDoctors = () => {
  const { navigate } = useNavigation()

  const categoryNameSlice = (name) => {
    return name.length > 5 ? name.slice(0, 7) + "..." : name
  }

  const [inputValue, setInputValue] = useState('');


  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      {/* Category */}
      <View style={styles.categoryView}>
        <View style={styles.categoryTop}>
          <Text style={styles.categoryText}>Kateqoriyalar</Text>
          <TouchableOpacity onPress={() => setShowCategoryModal(true)} ><Text style={styles.seeAllText}>Hamısı</Text></TouchableOpacity>
        </View>
        <View style={styles.categoryCardView}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
          >
            <CategoryCard name={categoryNameSlice("Fizioterapiya")} property1="dark" />
            <CategoryCard name={categoryNameSlice("Stomatoloq")} />
            <CategoryCard name={categoryNameSlice("Ortoped")} />
            <CategoryCard name={categoryNameSlice("Psixoloq")} />
            <CategoryCard name={categoryNameSlice("Nevroloq")} />
            <CategoryCard name={categoryNameSlice("Kardioloq")} />
            <CategoryCard name={categoryNameSlice("Ginekoloq")} />
          </ScrollView>
        </View>

      </View>

      {/* all Dosctor  */}
      <View style={[styles.categoryView, { paddingBottom: 30 }]}>
        <View style={styles.categoryTop}>
          <Text style={styles.categoryText}>Həkimlər</Text>
          <TouchableOpacity onPress={() => setShowSearchModal(true)} >
            <Ionicons name="search" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.doctorSliderCard}>
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </ScrollView>

      {/* Category Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCategoryModal}
        onRequestClose={() => setShowCategoryModal(false)}
        statusBarTranslucent={true}
        hardwareAccelerated={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <TouchableOpacity style={styles.closeModalCategory}
              onPress={() => setShowCategoryModal(false)}
            >
              <Ionicons name="close" size={26} color="#2E6FF3"
              />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
              <CategoryCard name={categoryNameSlice("Fizioterapiya")} property1="dark" />
              <CategoryCard name={categoryNameSlice("Stomatoloq")} />
              <CategoryCard name={categoryNameSlice("Ortoped")} />
              <CategoryCard name={categoryNameSlice("Psixoloq")} />
              <CategoryCard name={categoryNameSlice("Nevroloq")} />
              <CategoryCard name={categoryNameSlice("Kardioloq")} />
              <CategoryCard name={categoryNameSlice("Ginekoloq")} />
              <CategoryCard name={categoryNameSlice("Ortoped")} />
              <CategoryCard name={categoryNameSlice("Psixoloq")} />
              <CategoryCard name={categoryNameSlice("Nevroloq")} />
              <CategoryCard name={categoryNameSlice("Kardioloq")} />
              <CategoryCard name={categoryNameSlice("Ginekoloq")} />
              <CategoryCard name={categoryNameSlice("Ortoped")} />
              <CategoryCard name={categoryNameSlice("Psixoloq")} />
              <CategoryCard name={categoryNameSlice("Nevroloq")} />
              <CategoryCard name={categoryNameSlice("Kardioloq")} />
              <CategoryCard name={categoryNameSlice("Ginekoloq")} />
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Doctor Search Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSearchModal}
        onRequestClose={() => setShowSearchModal(false)}
        statusBarTranslucent={true}
        hardwareAccelerated={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent2}>
            <Text style={styles.modalTitle}>Axdarış Edin</Text>

            <TextInput
              style={styles.input}
              placeholder="Hekim və ya ixtisas axtarın"
              value={inputValue}
              onChangeText={setInputValue}
            />

            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setShowSearchModal(false);
                }}
              >
                <Text style={styles.buttonText}>Axdar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#ccc' }]}
                onPress={() => setShowSearchModal(false)}
              >
                <Text style={styles.buttonText}>Bağla</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  )
}

export default AllDoctors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  slider: {
    width: "100%",
    paddingHorizontal: 13,
    paddingTop: 25,
  },
  categoryView: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  categoryTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 22,
    fontWeight: "500",
    color: "gray",
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2E6FF3",
  },
  categoryCardView: {
    paddingTop: 16,
  },
  doctorSliderCard: {
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: "100%",
    height: "50%",
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    padding: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeModalCategory: {
    alignSelf: "flex-end",
    padding: 10,
  },

  // ----------

  // Sreach modal styles
  modalContent2: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#2E6FF3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

})
