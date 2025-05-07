import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect,useState } from 'react'
import auth from '@react-native-firebase/auth';

export const DoctorContext = createContext()

const ContextDoctor = ({ children }) => {

    const [user, setUser] = useState("");

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            if (user) {
                console.log('kulanici var', user);
                setUser("yes")
            } else {
                console.log('kulanici yok');
                setUser("no")
            }
        });

        return () => unsubscribe();
    }
        , [])

    return (
        <DoctorContext.Provider value={{
            user,
            
        }}>
            {
                children
            }
        </DoctorContext.Provider>
    )
}

export default ContextDoctor

const styles = StyleSheet.create({})