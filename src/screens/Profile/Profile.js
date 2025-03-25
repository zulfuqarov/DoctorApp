import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import DoctorCard from '../../components/Home/DoctorCard'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={{height: 500}}>

      </View>
      <ScrollView>
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // padding: 16,
    backgroundColor: "#fff",
  },
})