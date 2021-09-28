import { initializeApp } from '@firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc} from 'firebase/firestore/lite';
import { getAuth,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDPZLs0ajUOvHoqJJUuxYzXM1n7BF8sw_s",
    authDomain: "lexo-db.firebaseapp.com",
    projectId: "lexo-db",
    storageBucket: "lexo-db.appspot.com",
    messagingSenderId: "822941385463",
    appId: "1:822941385463:web:51216c2a5089e740d1c9f2",
    measurementId: "G-8XDR9FC7B0"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const firestore = getFirestore();


const provider = new GoogleAuthProvider();  
provider.setCustomParameters({prompt : 'select_account'});


export const createUserProfileDocument = async (userAuth, additionalData) => {
    console.log(userAuth, additionalData);
    if(!userAuth) return;
    const snapShot  = await getDocs(collection(db, 'users'));
    const userRef = doc(db, 'users', userAuth.uid);
    if(!snapShot){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;