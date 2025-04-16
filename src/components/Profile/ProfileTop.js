import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileTop = ({ shoModalFunc }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image
                    source={{ uri: 'https://pngimg.com/uploads/doctor/doctor_PNG16019.png' }}
                    style={styles.avatar}
                />
                <View style={styles.nameContainer}>
                    <Text style={styles.firstName}>Nebi</Text>
                    <Text style={styles.lastName}>Zulfuqarov</Text>
                </View>
            </View>
            <TouchableOpacity onPress={shoModalFunc} style={styles.editButton}>
                <Text style={styles.editButtonText}>Düzəliş</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileTop

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,

    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // padding: 20,
        backgroundColor: '#fff',
        gap: 20,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    nameContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    firstName: {
        fontSize: 16,
        fontWeight: '700',
        color: '#222',
        marginBottom: 2,
    },
    lastName: {
        fontSize: 18,
        fontWeight: '500',
        color: '#555',
    },
    editButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    editButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
})
