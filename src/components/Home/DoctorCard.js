import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

const DoctorCard = () => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image
                    source={{ uri: "https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_1280.jpg" }}
                    style={styles.image}
                />
                <View style={styles.cardInfo}>
                    <Text style={styles.name}>
                        Jennifer Miller
                    </Text>
                    <Text style={styles.specialty}>
                        Pediatrician
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" ,alignItems: "center", justifyContent: "space-between"}}>
                <View style={styles.ratingSection}>
                    <Text style={styles.rating}>4.8</Text>
                    <Ionicons name="star" size={18} color={"#FFD700"} />
                </View>
                <View style={styles.timeSection}>
                    <Ionicons name="time" size={20} color={"#000"} />
                    <Text style={styles.timeText}>10:30am - 5:30pm</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.rescheduleButton}>
                <Text style={styles.rescheduleText}>Reschedule</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 16,
        padding: 20,
        height: windowHeight * 0.21,
        width: windowWidth * 0.85,
        marginBottom: 16,
        backgroundColor: '#fff',
        borderColor: '#E9F0FF',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    cardInfo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
    },
    specialty: {
        fontSize: 16,
        color: '#777',
    },
    ratingSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    rating: {
        fontSize: 16,
        fontWeight: '600',
        marginRight: 6,
    },
    timeSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 16,
        marginLeft: 8,
        color: '#444',
    },
    rescheduleButton: {
        marginTop: 10,
        backgroundColor: '#E9F0FF',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
    },
    rescheduleText: {
        color: '#2E6FF3',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default DoctorCard;
