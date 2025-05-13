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
    const navigation = useNavigation()
    const auth = getAuth();
    const db = getFirestore();

    const [checkUser, setChekUser] = useState(false)
    const [userUid, setuserUid] = useState(null)
    const [userData, setUserData] = useState()
    const [loading, setLoading] = useState(true)

    // register start
    const RegisterUser = async (data) => {
        setLoading(true)
        navigation.reset({
            index: 0,
            routes: [{ name: 'Welcome' }],
        });
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

            setLoading(false)
            setChekUser(true)

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
        navigation.reset({
            index: 0,
            routes: [{ name: 'Welcome' }],
        });
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
            setuserUid(null)
        } catch (error) {
        }
    }

    // get user data start
    const getUserData = (userId) => {
        const docRef = doc(db, 'users', userId);

        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                setUserData(docSnap.data());
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomePage' }],
                });
            } else {
                console.log("No such document!");
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            }
        }, (error) => {
            console.log("Error getting user data:", error);
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        });

        return unsubscribe; // cleanup için geri döndür
    };

    // Check Login User Start
    const CheckLoginUser = () => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setChekUser(true)
                setuserUid(user.uid)
            }
            else {
                setChekUser(false)
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            }
            setLoading(false)
        })
    }


    // Check Login User
    useEffect(() => {
        CheckLoginUser()
    }, [])

    // get user data strat
    useEffect(() => {
        if (userUid) {
            getUserData(userUid);
        }
    }, [userUid])


    // Loading Screen Start
    // if (loading && !userData) {
    //     return (
    //         <Welcom />
    //     )
    // }

    return (
        <DoctorContext.Provider value={{
            userData,
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