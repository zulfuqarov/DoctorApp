import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DetailsAbout = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.selectDateText}>Ətraflı Məlumat</Text>

           
            <Text style={styles.description}>
                Dr. Elçin Məmmədov — 15 illik təcrübəyə sahib olan tanınmış kardioloqdur. 
                O, bir çox beynəlxalq konfranslarda iştirak etmiş və xəstələrinin sağlamlığı 
                üçün ən son tibbi texnologiyalardan istifadə edir. Xəstələrinə fərdi yanaşması 
                və yüksək peşəkarlığı ilə seçilir.
            </Text>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    selectDateText: {
        fontSize: wp("6%"),
        fontWeight: 'bold',
        color: 'black',
        letterSpacing: 0.5,
    },
    description: {
        fontSize: wp("4%"),
        color: 'gray', // Açıq qara
        lineHeight: 22, // Daha rahat oxumaq üçün sətir aralığı
        textAlign: 'justify',
        paddingVertical: 8,
    },
});

export default DetailsAbout

