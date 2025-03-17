import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'

export const DoctorContext = createContext()

const ContextDoctor = ({ children }) => {

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