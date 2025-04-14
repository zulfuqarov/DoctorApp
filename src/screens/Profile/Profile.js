import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Personal from '../../components/Profile/Personal'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileTop from '../../components/Profile/ProfileTop'

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <ProfileTop />
      </View>
      <View style={styles.container}>
        <Personal />
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 16,
  }

})