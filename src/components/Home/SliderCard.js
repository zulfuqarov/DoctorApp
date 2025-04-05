import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
// const { width: windowWidth } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SliderCard = () => {
    return (
        <View style={styles.container}>
            {/* Header Bölməsi */}
            <View style={styles.header}>
                <Image
                    source={{ uri: "https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_1280.jpg" }}
                    style={styles.profilePic} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Nebi Zulfuqarov</Text>
                    <Text style={styles.profession}>Dentist</Text>
                </View>
                <Ionicons name="ellipsis-vertical" size={24} color="white" />
            </View>

            {/* Reytinq */}
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>4.8</Text>
                <Ionicons name="star" size={16} color="yellow" />
            </View>

            {/* Təfərrüatlar */}
            <View style={styles.details}>
                <View style={styles.detailItem}>
                    <Ionicons name="calendar-outline" size={18} color="#C0D4FB" />
                    <Text style={styles.detailText}>5 Oct</Text>
                </View>
                <View style={styles.detailItem}>
                    <Ionicons name="time-outline" size={18} color="#C0D4FB" />
                    <Text style={styles.detailText}>10:30pm</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2E6FF3',
        borderRadius: 16,
        padding: 16,
        marginVertical: 10,
        height: hp("16%"),
        flexDirection: 'column',
        justifyContent: "space-evenly",
        marginRight: 8,
        width: wp("65%"), 
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    profession: {
        fontSize: 14,
        color: '#C0D4FB',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    ratingText: {
        fontSize: 14,
        color: 'white',
        marginRight: 4,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailText: {
        fontSize: 14,
        color: 'white',
        marginLeft: 6,
    },
});

export default SliderCard;
