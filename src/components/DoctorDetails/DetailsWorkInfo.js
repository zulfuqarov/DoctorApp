import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DetailsWorkInfo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>İş Saatları</Text>

            <View style={styles.row}>
                <Text style={styles.label}>Həftənin tək günləri:</Text>
                <Text style={styles.time}>09:00 - 18:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Həftənin cüt günləri:</Text>
                <Text style={styles.time}>10:00 - 17:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={[styles.label, styles.offDay]}>Bazar günü:</Text>
                <Text style={[styles.time, styles.offDay]}>İşləmir</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 8,
    },
    title: {
        fontSize: wp("5%"),
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    label: {
        fontSize: wp("4%"),
        color: '#555',
    },
    time: {
        fontSize: wp("4%"),
        fontWeight: 500,
        color: '#000',
    },
    offDay: {
        color: 'red',
    },
});

export default DetailsWorkInfo;
