import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANTDW1JGKtbuBdBGjQ8upDke6WqO252U4",
  authDomain: "billingapp-134e9.firebaseapp.com",
  projectId: "billingapp-134e9",
  storageBucket: "billingapp-134e9.appspot.com",
  messagingSenderId: "387512509784",
  appId: "1:387512509784:web:20ad2ae047ff60985a312d",
  measurementId: "G-85TFJQCCG9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
