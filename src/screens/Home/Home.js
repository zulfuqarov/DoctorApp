import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, StatusBar, Modal, } from 'react-native'
import React, { useState } from 'react'
import HomeTop from '../../components/Home/HomeTop'
import SliderCard from '../../components/Home/SliderCard'
import CategoryCard from '../../components/Home/CategoryCard';
import DoctorCard from '../../components/Home/DoctorCard';
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchModal from '../../components/Home/SearchModal';


const { width, height } = Dimensions.get('window'); // Ekran genişliğini almak için

// const Home = () => {
//   const { navigate } = useNavigation()

//   const categoryNameSlice = (name) => {
//     return name.length > 5 ? name.slice(0, 7) + "..." : name
//   }

//   const [showCategoryModal, setShowCategoryModal] = useState(false)


//   const [showSearchModal, setShowSearchModal] = useState(false)
//   const SearchButton = () => {
//     setShowSearchModal(!showSearchModal)
//   }
//   return (
//     <SafeAreaView style={[styles.container, { paddingTop: StatusBar.currentHeight + 5 }]}>

//       <View>
//         <HomeTop showSearchModal={showSearchModal} SearchButton={SearchButton} />
//       </View>

//       {/* Slider top Retings Doctor */}
//       <View style={styles.slider}>
//         <Text style={{ fontSize: 24, fontWeight: "bold" }}>Reytinqi Yüksək Həkimlər</Text>
//         <ScrollView
//           horizontal={true}
//           showsHorizontalScrollIndicator={false}
//         >
//           <TouchableOpacity
//             onPress={() => navigate('DoctorDetails')}
//             activeOpacity={0.7}
//           >
//             <SliderCard />
//           </TouchableOpacity>
//           <TouchableOpacity
//             activeOpacity={0.7}
//           >
//             <SliderCard />
//           </TouchableOpacity>
//           <TouchableOpacity
//             activeOpacity={0.7}
//           >
//             <SliderCard />
//           </TouchableOpacity>
//           <TouchableOpacity
//             activeOpacity={0.7}
//           >
//             <SliderCard />
//           </TouchableOpacity>
//         </ScrollView>
//       </View>

//       {/* Category */}
//       <View style={styles.categoryView}>
//         <View style={styles.categoryTop}>
//           <Text style={styles.categoryText}>Kateqoriyalar</Text>
//           <TouchableOpacity onPress={() => setShowCategoryModal(true)} ><Text style={styles.seeAllText}>Hamısı</Text></TouchableOpacity>
//         </View>
//         <View style={styles.categoryCardView}>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
//           >
//             <CategoryCard name={categoryNameSlice("Fizioterapiya")} property1="dark" />
//             <CategoryCard name={categoryNameSlice("Stomatoloq")} />
//             <CategoryCard name={categoryNameSlice("Ortoped")} />
//             <CategoryCard name={categoryNameSlice("Psixoloq")} />
//             <CategoryCard name={categoryNameSlice("Nevroloq")} />
//             <CategoryCard name={categoryNameSlice("Kardioloq")} />
//             <CategoryCard name={categoryNameSlice("Ginekoloq")} />
//           </ScrollView>
//         </View>

//       </View>

//       {/* all Dosctor  */}
//       <View style={styles.categoryView}>
//         <View style={styles.categoryTop}>
//           <Text style={styles.categoryText}>Həkimlər</Text>
//           <TouchableOpacity onPress={() => navigate("AllDoctor")}><Text style={styles.seeAllText}>Hamısı</Text></TouchableOpacity>
//         </View>
//       </View>
//       <ScrollView
//         contentContainerStyle={styles.doctorSliderCard}>
//         <DoctorCard />
//         <DoctorCard />
//         <DoctorCard />
//         <DoctorCard />
//         <DoctorCard />
//         <DoctorCard />
//         <DoctorCard />
//       </ScrollView>

//       {/* Category Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={showCategoryModal}
//         onRequestClose={() => setShowCategoryModal(false)}
//         statusBarTranslucent={true}
//         hardwareAccelerated={true}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>

//             <TouchableOpacity style={styles.closeModalCategory}
//               onPress={() => setShowCategoryModal(false)}
//             >
//               <Ionicons name="close" size={26} color="#2E6FF3"
//               />
//             </TouchableOpacity>

//             <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
//               <CategoryCard name={categoryNameSlice("Fizioterapiya")} property1="dark" />
//               <CategoryCard name={categoryNameSlice("Stomatoloq")} />
//               <CategoryCard name={categoryNameSlice("Ortoped")} />
//               <CategoryCard name={categoryNameSlice("Psixoloq")} />
//               <CategoryCard name={categoryNameSlice("Nevroloq")} />
//               <CategoryCard name={categoryNameSlice("Kardioloq")} />
//               <CategoryCard name={categoryNameSlice("Ginekoloq")} />
//               <CategoryCard name={categoryNameSlice("Ortoped")} />
//               <CategoryCard name={categoryNameSlice("Psixoloq")} />
//               <CategoryCard name={categoryNameSlice("Nevroloq")} />
//               <CategoryCard name={categoryNameSlice("Kardioloq")} />
//               <CategoryCard name={categoryNameSlice("Ginekoloq")} />
//               <CategoryCard name={categoryNameSlice("Ortoped")} />
//               <CategoryCard name={categoryNameSlice("Psixoloq")} />
//               <CategoryCard name={categoryNameSlice("Nevroloq")} />
//               <CategoryCard name={categoryNameSlice("Kardioloq")} />
//               <CategoryCard name={categoryNameSlice("Ginekoloq")} />
//             </ScrollView>
//           </View>
//         </View>
//       </Modal>

//       {/* Search Modal */}
//       {
//         showSearchModal &&
//         <SearchModal setShowSearchModal={setShowSearchModal} />
//       }

//     </SafeAreaView>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     // padding: 16,
//     backgroundColor: "#fff",
//   },
//   slider: {
//     width: "100%",
//     paddingHorizontal: 13,
//     paddingTop: 25,
//   },
//   categoryView: {
//     width: "100%",
//     paddingHorizontal: 16,
//     paddingTop: 10,
//     paddingBottom: 10,
//   },
//   categoryTop: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   categoryText: {
//     fontSize: 22,
//     fontWeight: "500",
//     color: "gray",
//   },
//   seeAllText: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: "#2E6FF3",
//   },
//   categoryCardView: {
//     paddingTop: 16,
//   },
//   doctorSliderCard: {
//     // paddingTop: 16,
//     width: "100%",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: "100%",
//     height: "50%",
//     backgroundColor: 'white',
//     borderRadius: 10,
//     alignItems: 'center',
//     flexDirection: "column",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     gap: 10,
//     padding: 10,
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   closeModalCategory: {
//     alignSelf: "flex-end",
//     padding: 10,
//   }

// })


import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home = () => {

  const { navigate } = useNavigation()

  const categoryNameSlice = (name) => {
    return name.length > 5 ? name.slice(0, 7) + "..." : name
  }

  const [showCategoryModal, setShowCategoryModal] = useState(false)


  const [showSearchModal, setShowSearchModal] = useState(false)
  const SearchButton = () => {
    setShowSearchModal(!showSearchModal)
  }

  return (
    <SafeAreaView style={{ height: height, backgroundColor: "#fff", alignItems: "center" }}>
      {/* Home Top */}
      <View >
        <HomeTop showSearchModal={showSearchModal} SearchButton={SearchButton} />
      </View>

      {/* Slider top Retings Doctor */}
      <View style={styles.slider}>
        <Text style={{ fontSize: wp('6%'), fontWeight: "bold", paddingLeft: 8 }}>Reytinqi Yüksək Həkimlər</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
        >
          <TouchableOpacity
            onPress={() => navigate('DoctorDetails')}
            activeOpacity={0.7}
            
          >
            <SliderCard />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
          >
            <SliderCard />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
          >
            <SliderCard />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
          >
            <SliderCard />
          </TouchableOpacity>
        </ScrollView>
      </View>

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
      <View style={styles.categoryView}>
        <View style={styles.categoryTop}>
          <Text style={styles.categoryText}>Həkimlər</Text>
          <TouchableOpacity onPress={() => navigate("AllDoctor")}><Text style={styles.seeAllText}>Hamısı</Text></TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.doctorSliderCard}
      >
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </ScrollView>


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



      {/* Search Modal Show */}
      {
        showSearchModal &&
        <SearchModal setShowSearchModal={setShowSearchModal} />
      }
    </SafeAreaView >
  )
}

export default Home

const styles = StyleSheet.create({
  slider: {
    width: "100%",
    paddingTop: 15,
  },

  categoryView: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  categoryTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
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
    paddingBottom: 50
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
  }

})

