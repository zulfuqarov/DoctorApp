import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeTop = ({ SearchButton }) => {
    return (
        <View style={styles.container} >
            <View style={styles.userSection}>
                <Image
                    source={{ uri: "https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_1280.jpg" }}
                    style={styles.profilePic}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                    <Text style={styles.userName}>Andrew Smith</Text>
                </View>
            </View>

            <View style={styles.iconSection}>
                <TouchableOpacity onPress={SearchButton}>
                    <Ionicons name="search" size={28} color="black" />
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <Ionicons name="heart-outline" size={26} color="black" />
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default HomeTop

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 10,
    },
    userSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    profilePic: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    textContainer: {
        marginLeft: 10,
    },
    welcomeText: {
        fontSize: 14,
        color: "gray",
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    iconSection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16, // React Native-də `gap` yalnız Flexbox içində istifadə oluna bilər
    },
});