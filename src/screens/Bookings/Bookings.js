import { StyleSheet, Text, View, StatusBar, Dimensions, ScrollView, Image } from 'react-native';
import React from 'react';
import HomeTop from '../../components/Home/HomeTop';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DoctorImg from '../../assets/img/DoctorImage.png';

const { width } = Dimensions.get('window'); // Ekran ölçülərini əldə et

const Bookings = () => {
  const doctors = [
    { name: "David H. Brown", profession: "Psychologist | Apollo Hospital", rate: "$25.00", rating: "4.8", image: DoctorImg, date: "2024-03-30", time: "14:00" },
    { name: "Sarah J. Smith", profession: "Dentist | HealthCare Clinic", rate: "$30.00", rating: "4.9", image: DoctorImg, date: "2024-04-02", time: "09:30" },
    { name: "John P. Doe", profession: "Cardiologist | City Hospital", rate: "$40.00", rating: "4.7", image: DoctorImg, date: "2024-04-10", time: "16:45" },
    { name: "Alice L. Miller", profession: "Neurologist | Metro Health", rate: "$35.00", rating: "4.6", image: DoctorImg, date: "2024-05-05", time: "10:15" }
  ];

  return (
    <View style={[styles.container, { paddingTop: StatusBar.currentHeight + 10 }]}>
      <HomeTop />
      <Text style={styles.title}>Rezervasiyalar</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {doctors.map((doctor, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.profileContainer}>
              <Image style={styles.image} source={doctor.image} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{doctor.name}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.rating}>{doctor.rating}</Text>
                  <Ionicons name="star" size={16} color="yellow" />
                </View>
              </View>
            </View>
            <Text style={styles.profession}>{doctor.profession}</Text>
            {/* <Text style={styles.hourlyRate}>
              <Text style={styles.label}>Hourly Rate: </Text>
              <Text style={styles.rate}>{doctor.rate}</Text>
            </Text> */}

            {/* Rezervasiya Tarixi və Saatı */}
            <Text style={styles.reservationInfo}>
              <Text style={styles.label}>Gün: </Text>
              <Text style={styles.info}>{doctor.date}</Text>
              {"  "}
              <Text style={styles.label}>Saat: </Text>
              <Text style={styles.info}>{doctor.time}</Text>
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 10
  },
  scrollContainer: {
    paddingTop: 20,
    paddingLeft: 10
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    marginBottom: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    width: width * 0.9,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12
  },
  textContainer: {
    flexDirection: "column"
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 4
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  rating: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
    marginRight: 4
  },
  profession: {
    fontSize: 16,
    color: "#777",
    marginBottom: 8
  },
  hourlyRate: {
    fontSize: 16,
    color: "#000"
  },
  label: {
    fontWeight: "600",
    color: "#333"
  },
  rate: {
    fontWeight: "700",
    color: "#007AFF"
  },
  reservationInfo: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
    fontWeight: "500"
  },
  info: {
    color: "#007AFF",
    fontWeight: "700"
  }
});
