import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Personal from '../../components/Profile/Personal'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileTop from '../../components/Profile/ProfileTop'
import DoctorProfile from '../../components/Profile/DoctorProfile'
import { DoctorContext } from '../../context/ContextDoctor'

const Profile = () => {
  const { userData } = useContext(DoctorContext)
  const [showModal, setShowModal] = useState(false)
  const shoModalFunc = () => {
    setShowModal(!showModal)
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <ProfileTop showModal={showModal} shoModalFunc={shoModalFunc} />
      </View>
      <View style={styles.container}>
        {
          userData.role === "user"
            ? <Personal setShowModal={setShowModal} showModal={showModal} />
            : <DoctorProfile setShowModal={setShowModal} showModal={showModal} />
        }
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