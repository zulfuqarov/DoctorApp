import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect } from 'react'
import { authDb } from '../connections/firebaseConfig'

// auth import
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

export const DoctorContext = createContext()

const ContextDoctor = ({ children }) => {

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(authDb, (user) => {
    //         if (user) {
    //             console.log("Giriş yapmış kullanıcı:", user.email);
    //         } else {
    //             console.log("Kullanıcı çıkış yapmış.");
    //         }
    //     });
    //     return unsubscribe;
    // }, []);



    return (
        <DoctorContext.Provider value={{}}>
            {
                children
            }
        </DoctorContext.Provider>
    )
}

export default ContextDoctor

const styles = StyleSheet.create({})