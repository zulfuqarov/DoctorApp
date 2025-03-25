import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import HomeTop from '../../components/Home/HomeTop'
import SliderCard from '../../components/Home/SliderCard'
import CategoryCard from '../../components/Home/CategoryCard';
import DoctorCard from '../../components/Home/DoctorCard';
import { useNavigation } from '@react-navigation/native';

const { width: windowWidth } = Dimensions.get('window'); // Ekran genişliğini almak için

const Home = () => {
  const { navigate } = useNavigation()

  const categoryNameSlice = (name) => {
    return name.length > 5 ? name.slice(0, 7) + "..." : name
  }

  return (
    <SafeAreaView style={[styles.container, { paddingTop: StatusBar.currentHeight + 5 }]}>
      <View>
        <HomeTop />
      </View>

      <View style={styles.slider}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Reytinqi Yüksək Həkimlər</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
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

      <View style={styles.categoryView}>
        <View style={styles.categoryTop}>
          <Text style={styles.categoryText}>Kateqoriyalar</Text>
          <TouchableOpacity ><Text style={styles.seeAllText}>Hamısı</Text></TouchableOpacity>
        </View>
        <View style={styles.categoryCardView}>
          <CategoryCard name={categoryNameSlice("Fizioterapiya")} property1="dark" />
          <CategoryCard name={categoryNameSlice("Stomatoloq")} />
          <CategoryCard name={categoryNameSlice("Ortoped")} />
          <CategoryCard name={categoryNameSlice("Psixoloq")} />
          <CategoryCard name={categoryNameSlice("Nevroloq")} />
          <CategoryCard name={categoryNameSlice("Kardioloq")} />
          <CategoryCard name={categoryNameSlice("Ginekoloq")} />
        </View>
      </View>

      <View style={styles.categoryView}>
        <View style={styles.categoryTop}>
          <Text style={styles.categoryText}>Həkimlər</Text>
          <TouchableOpacity ><Text style={styles.seeAllText}>Hamısı</Text></TouchableOpacity>
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
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // padding: 16,
    backgroundColor: "#fff",
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
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 16,
    gap: 21,
  },
  doctorSliderCard: {
    // paddingTop: 16,
    width: "100%",
  }
})
