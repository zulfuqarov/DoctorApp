import { StyleSheet, Text, View, Dimensions, StatusBar, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import DoctorCard from './DoctorCard';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';


const SearchModal = ({ setShowSearchModal }) => {
    return (
        <SafeAreaView style={{ width: wp("100%"), position: "absolute", height: hp("100%") }}>
            <View style={styles.container}>
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
            </View>
        </SafeAreaView>
    )
}

export default SearchModal

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: wp("100%"),
        height: "90%",
        justifyContent: "center",
        marginTop: 60,
        paddingHorizontal: 10,
    },
    container2: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "100%",
        height: "60%",
    },

    inputField: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 7, // Paddingi küçülttük
        borderWidth: 1,
        borderColor: "rgba(244,244,246,1)",
        borderRadius: 16,
        backgroundColor: "rgba(250,250,252,1)",
    },
    input: {
        flex: 1,
        fontSize: 14, // Font boyutunu küçülttük
        color: "#333",
    },

})
