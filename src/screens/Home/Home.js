import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeTop from '../../components/Home/HomeTop'
import SliderCard from '../../components/Home/SliderCard'
import CategoryCard from '../../components/Home/CategoryCard';

const { width: windowWidth } = Dimensions.get('window'); // Ekran genişliğini almak için

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <HomeTop />
      </View>
      <View style={styles.slider}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Reytinqi Yüksək Həkimlər</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
        </ScrollView>
      </View>

      <View style={styles.categoryView}>
        <View style={styles.categoryTop}>
          <Text style={styles.categoryText}>Kateqoriyalar</Text>
          <TouchableOpacity ><Text style={styles.seeAllText}>Hamısı</Text></TouchableOpacity>
        </View>
        <View style={styles.categoryCardView}>
          <CategoryCard name="Fiziotera" property1="dark" />
          <CategoryCard name="Stomato" />
          <CategoryCard name="Ortoped" />
          <CategoryCard name="Psixoloq" />
          <CategoryCard name="Nevroloq" />
          <CategoryCard name="Kardioloq" />
          <CategoryCard name="Ginekoloq" />
        </View>
      </View>



    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 16,
    backgroundColor: "#fff",
  },
  slider: {
    width: "100%",
  },
  categoryView: {
    width: "100%",
    paddingHorizontal: 16,
  },
  categoryTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2E6FF3",
  },
  categoryCardView: {
    flexDirection: 'row', // Yatay hizalama
    flexWrap: 'wrap', // Satırlara sarması için
    paddingTop: 16,
  }
})
