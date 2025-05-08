import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

export const DoctorContext = createContext()

const ContextDoctor = ({ children }) => {
    const auth = getAuth();
    const [checkUser, setChekUser] = useState(false)

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setChekUser(true)
            } else {
                setChekUser(false)
            }
        })

    }
        , [])

    return (
        <DoctorContext.Provider value={{
            checkUser,

        }}>
            {
                children
            }
        </DoctorContext.Provider>
    )
}

export default ContextDoctor

const styles = StyleSheet.create({})