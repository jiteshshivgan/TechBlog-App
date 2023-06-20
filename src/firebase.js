import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyAKWNi7sv73HRLMFAe6AikLbdTkRgV6KeU",
    authDomain: "react-blog-4a0fa.firebaseapp.com",
    projectId: "react-blog-4a0fa",
    storageBucket: "react-blog-4a0fa.appspot.com",
    messagingSenderId: "871341117401",
    appId: "1:871341117401:web:5a2b842ac29f72899c53c8"
  };

  // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     

  export const firestore= firebase.firestore();;