
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCUmVoH5f-XP4-fA3n4SW9AzhIR1792daM",
  authDomain: "netflix-clone-c4b08.firebaseapp.com",
  projectId: "netflix-clone-c4b08",
  storageBucket: "netflix-clone-c4b08.appspot.com",
  messagingSenderId: "574079082763",
  appId: "1:574079082763:web:c4af5d8e431d0eb233820e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(qpp)

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
    } catch (error) {
        
    }
}