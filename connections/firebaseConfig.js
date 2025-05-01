import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
apiKey: "AIzaSyBp6eRZ11si7PCgnTjl73faO5y256DHz28",
authDomain: "medlink-d0a33.firebaseapp.com",
projectId: "medlink-d0a33",
storageBucket: "medlink-d0a33.firebasestorage.app",
messagingSenderId: "964419694027",
appId: "1:964419694027\:web\:d4575262536fd609951a4e",
measurementId: "G-Q7FQ0032RP"
};

const app = initializeApp(firebaseConfig);
const authDb = initializeAuth(app, {
persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const MyDb = getFirestore(app);

export { authDb, MyDb };
