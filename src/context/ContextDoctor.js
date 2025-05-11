import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
import { getFirestore, collection, doc, setDoc, getDoc, onSnapshot } from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
import Welcom from '../screens/Welcom/Welcom';
import { useNavigation } from '@react-navigation/native';
export const DoctorContext = createContext()

const ContextDoctor = ({ children }) => {
    const { navigate } = useNavigation()
    const auth = getAuth();
    const db = getFirestore();

    const [checkUser, setChekUser] = useState(false)
    const [userData,setUserData] = useState(null)
    const [loading, setLoading] = useState(true)

    // register start
    const RegisterUser = async (data) => {
        setLoading(true)
        try {
            const user = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const userId = user.user.uid

            const userRef = doc(collection(db, 'users'), userId);
            await setDoc(userRef, {
                userName: data.userName,
                userSurname: data.userSurname,
                email: data.email,
                phone: data.phone,
                role: "user",
            })


            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Qeydiyyat tamamlandı!',
                text2: 'İstifadəçi uğurla yaradıldı!',
                visibilityTime: 2000,
                autoHide: true,
            });

        } catch (error) {
            console.log("Error creating user:", error);
            setLoading(false)
        }
    }
    // sigin start
    const signInUser = async (email, password) => {
        setLoading(true)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error('Giriş zamanı xəta:', error.message);
        }
    };
    // logout start
    const LogoutUser = async () => {
        try {
            await signOut(auth);
        } catch (error) {
        }
    }
    // Check Login User Start
    const CheckLoginUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setChekUser(true)
            }
            else {
                setChekUser(false)
            }
            setLoading(false)
        })
    }



    useEffect(() => {
        CheckLoginUser()
    }, [])


    // Loading Screen Start
    if (loading) {
        return (
            <Welcom />
        )
    }

    return (
        <DoctorContext.Provider value={{
            checkUser,
            RegisterUser,
            signInUser,
            LogoutUser,

        }}>
            {
                children
            }
        </DoctorContext.Provider>
    )
}

export default ContextDoctor

const styles = StyleSheet.create({})