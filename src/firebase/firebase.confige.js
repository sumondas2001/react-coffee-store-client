// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyC8K-HKiyyO7y5DaEn6kwnHO2tD83P4NQo",
     authDomain: "react-coffee-store-bd0a2.firebaseapp.com",
     projectId: "react-coffee-store-bd0a2",
     storageBucket: "react-coffee-store-bd0a2.appspot.com",
     messagingSenderId: "795992685232",
     appId: "1:795992685232:web:822e82e495202988ad1975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;