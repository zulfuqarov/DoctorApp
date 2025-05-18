import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState, useRef } from 'react'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
import { getFirestore, collection, doc, setDoc, getDoc, onSnapshot, updateDoc } from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
import Welcom from '../screens/Welcom/Welcom';
import { useNavigation } from '@react-navigation/native';
export const DoctorContext = createContext()

const ContextDoctor = ({ children }) => {
    const navigation = useNavigation()
    const auth = getAuth();
    const db = getFirestore();

    // const [checkUser, setChekUser] = useState(false)
    const [userUid, setuserUid] = useState(null)
    const [userData, setUserData] = useState()
    const FirstRegister = useRef(false)
    // const [loading, setLoading] = useState(true)

    // register start
    const RegisterUser = async (data) => {
        FirstRegister.current = true;
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
                img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
                role: "user",
            })
            const userSnapshot = await getDoc(userRef);
            if (userSnapshot.exists()) {
                const data = { ...userSnapshot.data(), id: userSnapshot.id };
                setUserData(data);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomePage' }],
                });
            } else {
                console.log("Belə bir sənəd mövcud deyil.");
                return null;
            }

            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Qeydiyyat tamamlandı!',
                text2: 'İstifadəçi uğurla yaradıldı!',
                visibilityTime: 2000,
                autoHide: true,
            });

            setTimeout(() => {
                FirstRegister.current = false;
            }, 1000);

        } catch (error) {
            console.log("Error creating user:", error);
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Qeydiyyat zamanı xəta!',
                text2: 'İstifadəçi yaradıla bilmədi!',
                visibilityTime: 2000,
                autoHide: true,
            });
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
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
            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Giriş tamamlandı!',
                text2: 'İstifadəçi uğurla daxil oldu!',
                visibilityTime: 2000,
                autoHide: true,
            });
            console.log("Giriş uğurlu:");
        } catch (error) {
            // console.error('Giriş zamanı xəta:', error.message);
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Giriş zamanı xəta!',
                text2: 'Email və ya şifrə səhvdir!',
                visibilityTime: 2000,
                autoHide: true,
            });
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        }
    }

    // logout start
    const LogoutUser = async () => {
        try {
            await signOut(auth);
            setuserUid(null)
            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Çıxış tamamlandı!',
                text2: 'İstifadəçi uğurla çıxdı!',
                visibilityTime: 2000,
                autoHide: true,
            });
        } catch (error) {
            console.error('Çıxış zamanı xəta:', error.message);
        }
    }

    const autoLogout = async () => {
        try {
            await signOut(auth);
            setuserUid(null)
        } catch (error) {
            console.error('Çıxış zamanı xəta:', error.message);
        }
    }

    // get user data start
    const getUserData = async (userId) => {
        try {
            const docRef = doc(db, 'users', userId);
            const userSnapshot = await getDoc(docRef);

            if (userSnapshot.exists()) {
                const data = { ...userSnapshot.data(), id: userSnapshot.id };
                setUserData(data);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomePage' }],
                });
            } else {
                console.log("Belə bir sənəd mövcud deyil.");
                return null;
            }
        } catch (error) {
            console.log("Error getting user data:", error);
            autoLogout()
        }
    };

    // updatet data start
    const updateUserData = async (data) => {
        try {
            const docRef = doc(db, 'users', userData.id);
            await updateDoc(docRef, data);
            const unsubscribe = onSnapshot(doc(db, 'users', userData.id), (doc) => {
                setUserData({
                    ...doc.data(),
                    id: doc.id,
                });
            });
            console.log("User data updated successfully");
            // Toast.show({
            //     type: 'success',
            //     position: 'top',
            //     text1: 'Məlumat yeniləndi!',
            //     text2: 'İstifadəçi məlumatları uğurla yeniləndi!',
            //     visibilityTime: 2000,
            //     autoHide: true,
            // });
        } catch (error) {
            console.log("Error updating user data:", error);
            throw error;
        }
    }

    // Check Login User Start
    const CheckLoginUser = () => {
        onAuthStateChanged(auth, async (user) => {
            if (FirstRegister.current) {
                console.log("ilk qeydiyyat")
                setuserUid(null)
                return;
            };

            if (user) {
                setuserUid(user.uid)
            }
            else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            }
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


    return (
        <DoctorContext.Provider value={{
            userData,
            RegisterUser,
            signInUser,
            LogoutUser,
            updateUserData,
        }}>
            {
                children
            }
        </DoctorContext.Provider>
    )
}

export default ContextDoctor

const styles = StyleSheet.create({})