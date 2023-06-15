// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8J1jpItpH-BlUCZdoopOzQ9YSQWiP_tE",
    authDomain: "foo-bar-1db5f.firebaseapp.com",
    projectId: "foo-bar-1db5f",
    storageBucket: "foo-bar-1db5f.appspot.com",
    messagingSenderId: "195082397239",
    appId: "1:195082397239:web:c440a80cad7d4dc7e441b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    app, db
}