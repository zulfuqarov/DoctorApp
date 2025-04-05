import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CategoryCard = ({ property1, name,icon }) => {
    return (
        <View style={[styles.container, property1 === "dark" ? styles.darkBg : styles.lightBg]}>
            <Icon
                name="doctor" 
                size={28} 
                color={property1 === "dark" ? "#F1F4F7" : "#33384B"}
                style={styles.icon}
            />
            <Text style={[styles.text, property1 === "dark" ? styles.darkText : styles.lightText]}>
                {name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: wp("5%"),
        paddingVertical: hp("1%"),
        borderRadius: 24,
    },
    darkBg: {
        backgroundColor: '#2E6FF3', 
    },
    lightBg: {
        backgroundColor: '#F1F4F7', 
    },
    icon: {
        position: 'relative',
        width: 28, 
        height: 28, 
    },
    text: {
        fontFamily: 'Open_Sans-SemiBold', 
        width: "100%", 
        textAlign: 'center',
        fontSize: 12, 
        fontWeight: '600', 
        lineHeight: 15.6, 
        position: 'relative',
        paddingTop: 10
    },
    darkText: {
        color: 'white', 
    },
    lightText: {
        color: '#33384B', 
    },
});

export default CategoryCard;
