// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEYGpwI1qsrDnUhVJHfD_euqi2Z3f_53Y",
  authDomain: "anti-anaemia.firebaseapp.com",
  projectId: "anti-anaemia",
  storageBucket: "anti-anaemia.appspot.com",
  messagingSenderId: "1028800428536",
  appId: "1:1028800428536:web:bb43cfdce9af3b62bfbe0d",
  measurementId: "G-K5GN370FFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)