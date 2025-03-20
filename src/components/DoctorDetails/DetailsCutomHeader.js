import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import imageDoctor from "../../assets/img/DoctorImage.png"
import Group from "../../assets/img/Group.png"
// import Group from "../../assets/img/Apple.png"
const { width, height } = Dimensions.get('window');

const DetailsCustomHeader = ({ navigation, route }) => {
    // const { name } = route.params || {};

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.leftContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
                        <Ionicons name="arrow-back" size={28} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}> Doctor’s Info</Text>
                </View>

                {/* Sağ tərəfdə axtarış və favori düymələri */}
                <View style={styles.rightContainer}>
                    {/* <TouchableOpacity>
                        <Ionicons name="search" size={28} color="white" />
                    </TouchableOpacity> */}
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" size={28} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
                <Image
                    source={imageDoctor} style={styles.imageDoctor} />
                <Image
                    source={Group} style={styles.imageGroup} />
        </View>
    );
};

export default DetailsCustomHeader;

const styles = StyleSheet.create({
    container: {
        height: height * 0.43,
        backgroundColor: "#2E6FF3",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
    },
    headerContainer: {
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 65,
        alignItems: "center",
        paddingHorizontal: 15,
        elevation: 0,
        width: "100%"
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButton: {
        padding: 8,
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        marginLeft: 10,
    },
    // rightContainer: {
    //     flexDirection: "row",
    //     alignItems: "center",
    //     width: "80",
    //     justifyContent: "space-between",
    // },
    imageDoctor: {
        height: 270,
        width: 206,
        resizeMode: "contain",
        position: "absolute",
        bottom: "0",
        zIndex: 2,
    },
    imageGroup: {
        width: "100%",
        resizeMode: "contain",
        position: "absolute",
        top: "50%",
        zIndex: 1,
    }
});
