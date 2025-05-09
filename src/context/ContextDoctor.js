import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Welcom from '../screens/Welcom/Welcom';
export const DoctorContext = createContext()

const ContextDoctor = ({ children }) => {
    const auth = getAuth();

    const [checkUser, setChekUser] = useState({
        checkUser: false,
        loading: true
    })

    const RegisterUser = async (data) => {
        setChekUser({
            checkUser: false,
            loading: true
        })
        try {
            const user = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const userId = user.user.uid

            await firestore().collection('users').doc(userId).set({
                userName: data.userName,
                userSurname: data.userSurname,
                email: data.email,
                password: data.password,
                phone: data.phone,
            });
            // setChekUser({
            //     checkUser: true,
            //     loading: false
            // })
        } catch (error) {
            console.log("Error creating user:", error);
            setChekUser({
                checkUser: false,
                loading: false
            })
        }
    }

    const CheckLoginUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setChekUser({
                    checkUser: true,
                    loading: false
                })
            } else {
                setChekUser({
                    checkUser: false,
                    loading: false
                })
            }
        })
    }

    useEffect(() => {
        CheckLoginUser()
    }, [])


    // Loading Screen Start
    if (checkUser.loading) {
        return (
            <Welcom />
        )
    }

    return (
        <DoctorContext.Provider value={{
            checkUser,
            RegisterUser,
        }}>
            {
                children
            }
        </DoctorContext.Provider>
    )
}

export default ContextDoctor

const styles = StyleSheet.create({})