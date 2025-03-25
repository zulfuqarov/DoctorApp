import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        letterSpacing: 0.5,
    },
    description: {
        fontSize: 16,
        color: 'gray', // Açıq qara
        lineHeight: 22, // Daha rahat oxumaq üçün sətir aralığı
        textAlign: 'justify',
        paddingVertical: 8,
    },
});

export default DetailsAbout

