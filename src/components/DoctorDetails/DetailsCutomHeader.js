import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import imageDoctor from "../../assets/img/DoctorImage.png"
import Group from "../../assets/img/Group.png"
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";

const DetailsCutomHeader = () => {
    
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerContainer}>
                    <View style={styles.leftContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
                            <Ionicons name="arrow-back" size={28} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Həkimin Məlumatı</Text>
                    </View>

                    <View style={styles.rightContainer}>
                        <TouchableOpacity>
                            <Ionicons name="heart-outline" size={28} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <Image
                source={imageDoctor} style={styles.imageDoctor} />
            <Image
                source={Group} style={styles.imageGroup} />
        </View>
    )
}

export default DetailsCutomHeader

const styles = StyleSheet.create({
    container: {
        // height: hp("53%"),
        // width: wp("100%"),
        flex: 1,
        alignItems: "center",
        // backgroundColor: "red"
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        width: "100%",
        paddingTop: 15,
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        marginLeft: 10,
    },
    imageDoctor: {
        width: wp("60%"),  // Ekranın 60%-ni əhatə edəcək
        height: hp("33%"), // Ekranın 35%-ni əhatə edəcək∆
        resizeMode: "contain", // Şəkili tam göstərmək üçün
        position: "absolute",
        bottom: 0,
    },
    imageGroup:{
        position: "absolute",
        zIndex: 10,
        top: "55%"
    }
})
