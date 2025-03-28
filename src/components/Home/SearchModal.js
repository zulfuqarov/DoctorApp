import { StyleSheet, Text, View, Dimensions, StatusBar, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import DoctorCard from './DoctorCard';

const { width, height } = Dimensions.get('window'); // Ekran genişliğini almak için

const SearchModal = ({ setShowSearchModal }) => {
    return (
        <TouchableWithoutFeedback onPress={() => setShowSearchModal(false)}>
            <View style={styles.container}>
                <TouchableWithoutFeedback >
                    <View style={styles.container2}>
                        <ScrollView>
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
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SearchModal

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Solgun siyah arka plan
        position: "absolute",
        width: width,
        height: height - 205,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        bottom: 0,
    },
    container2: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "100%",
        height: "85%",
    }
})
