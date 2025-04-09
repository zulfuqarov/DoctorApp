import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DoctorImage from '../../assets/img/DoctorImage.png'; // Gerekirse require('./pic.png')
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ChatView = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={DoctorImage} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>David H. Brown</Text>
                    <Text style={styles.subtitle}>Psychologists</Text>
                </View>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="call-outline" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="videocam-outline" size={24} color="#333" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatView;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp('100%'),
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    textContainer: {
        marginLeft: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
    },
    actions: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 16,
    },
});
