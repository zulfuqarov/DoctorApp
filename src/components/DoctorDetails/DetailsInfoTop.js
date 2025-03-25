import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const DetailsInfoTop = () => {
    return (
        <View style={styles.container}>
            {/* Doktor Bilgileri */}
            <View style={styles.detailsContainer}>
                <View style={styles.header}>
                    <Text style={styles.name}>David H. Brown</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>4.8</Text>
                        <Ionicons name="star" size={16} color="gold" />
                    </View>
                </View>
                <Text style={styles.specialty}>Psychologists | Apollo Hospital</Text>
                <View style={styles.timeContainer}>
                    <Ionicons name="time-outline" size={18} color="black" />
                    <Text style={styles.time}>10:30am - 5:30pm</Text>
                </View>
            </View>
            {/* Ayırıcı Çizgi */}
            <View style={styles.separator} />
            {/* Ek Bilgiler */}
            <View style={styles.infoContainer}>
                <View style={styles.infoBlock}>
                    <Text style={styles.infoValue}>15yr</Text>
                    <Text style={styles.infoLabel}>Təcrübə</Text>
                </View>
                <View style={styles.infoBlock}>
                    <Text style={styles.infoValue}>50+</Text>
                    <Text style={styles.infoLabel}>Müalicə Olunmuş</Text>
                </View>
                <View style={styles.infoBlock}>
                    <Text style={styles.infoValue}>$25.00</Text>
                    <Text style={styles.infoLabel}>Qiymət</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
    },
    detailsContainer: {
        marginBottom: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rating: {
        fontSize: 16,
        fontWeight: "600",
        marginRight: 5,
    },
    specialty: {
        color: "gray",
        marginTop: 5,
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    time: {
        marginLeft: 5,
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 10,
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    infoBlock: {
        alignItems: "center",
    },
    infoValue: {
        fontSize: 18,
        fontWeight: "bold",
    },
    infoLabel: {
        color: "gray",
    },
});

export default DetailsInfoTop;
