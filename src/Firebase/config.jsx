import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import React from 'react';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALe8EudOGzIj-jeSqehf_GOHFMU9cY--Y",
    authDomain: "portfilo-images.firebaseapp.com",
    projectId: "portfilo-images",
    storageBucket: "portfilo-images.appspot.com",
    messagingSenderId: "166541222782",
    appId: "1:166541222782:web:2f8148d0b70a9ca858092f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectFirestore = firebase.firestore();

export { projectFirestore };