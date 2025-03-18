import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryCard = ({ property1, name,icon }) => {
    return (
        <View style={[styles.container, property1 === "dark" ? styles.darkBg : styles.lightBg]}>
            <Icon
                name="doctor" // İkon ismini ihtiyacınıza göre değiştirebilirsiniz
                size={28} // w-7 ve h-7'ye denk gelir
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
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 24,
        position: 'relative',
        margin: 7
    },
    darkBg: {
        backgroundColor: '#33384B', // bg-darkfg için örnek
    },
    lightBg: {
        backgroundColor: '#F1F4F7', // bg-bgbg-0 için örnek
    },
    icon: {
        position: 'relative',
        width: 28, // !w-7
        height: 28, // !h-7
    },
    text: {
        fontFamily: 'Open_Sans-SemiBold', // Tailwind'deki font-family
        width: 56, // w-14
        textAlign: 'center',
        fontSize: 12, // text-xs
        fontWeight: '600', // font-semibold
        lineHeight: 15.6, // leading-[15.6px]
        position: 'relative',
        paddingTop: 10
    },
    darkText: {
        color: '#A0A0A0', // text-graygray-2
    },
    lightText: {
        color: '#33384B', // text-graygray-1
    },
});

export default CategoryCard;
