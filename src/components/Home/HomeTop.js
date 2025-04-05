import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeTop = ({ SearchButton, showSearchModal }) => {
    return (
        <View style={[styles.container, { zIndex: SearchButton ? 10 : 0 }]}>
            {
                showSearchModal ?
                    <View style={styles.inputField}>
                        <TextInput
                            style={styles.input}
                            placeholder="Hekim və ya ixtisas axtarın"
                            placeholderTextColor="rgba(178,188,201,1)"
                            keyboardType="default"
                        />
                    </View>
                    :
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
            }

            <View style={styles.iconSection}>
                <TouchableOpacity onPress={SearchButton}>
                    <Ionicons name={showSearchModal ? "close" : "search"} size={28} color={showSearchModal ? "red" : "black"} />
                </TouchableOpacity>
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
        // gap: 16, // React Native-də `gap` yalnız Flexbox içində istifadə oluna bilər
    },
    inputField: {
        width: "90%",
        paddingHorizontal: 15,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        fontSize: 16,
        backgroundColor: "#f4f4f4",
        color: "black",
        borderRadius: 10,
    },
});
