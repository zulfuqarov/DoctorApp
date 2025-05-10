import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
import { getFirestore, collection, doc, setDoc, getDoc,onSnapshot } from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
import Welcom from '../screens/Welcom/Welcom';
export const DoctorContext = createContext()

const ContextDoctor = ({ children }) => {
    const auth = getAuth();
    const db = getFirestore();

    const [checkUser, setChekUser] = useState(false)
    const [loading, setLoading] = useState(true)

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

    const LogoutUser = async () => {
        try {
            await signOut(auth);
        } catch (error) {
        }
    }

    // const CheckLoginUser = () => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setChekUser(true)
    //         } else {
    //             setChekUser(false)
    //         }
    //         setLoading(false)
    //     })
    // }


    // const CheckLoginUser = () => {
    //     onAuthStateChanged(auth, async (user) => {
    //         if (user) {
    //             const userDocRef = doc(db, 'users', user.uid);
    //             const userSnap = await getDoc(userDocRef);
    //             if (userSnap.exists()) {
    //                 const userData = userSnap.data();
    //                 setChekUser(true);
    //             } else {
    //                 console.log("User document not found in Firestore!");
    //                 setChekUser(false);
    //             }
    //         } else {
    //             setChekUser(false)
    //         }
    //         setLoading(false)
    //     })
    // }


    const CheckLoginUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userDocRef = doc(db, 'users', user.uid);
    
                const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
                    if (docSnap.exists()) {
                        setChekUser(true);
                    } else {
                        console.log("User document not found in Firestore!");
                        setChekUser(false);
                    }
                    setLoading(false);
                }, (error) => {
                    console.log("Snapshot error:", error);
                    setLoading(false);
                });
    
                return () => unsubscribe();
            } else {
                setChekUser(false);
                setLoading(false);
            }
        });
    };
    


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
            LogoutUser
        }}>
            {
                children
            }
        </DoctorContext.Provider>
    )
}

export default ContextDoctor

const styles = StyleSheet.create({})