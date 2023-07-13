// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getFirestore
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJiehUtm1p44SxFRig7tcXeFUOQLhtDK4",
    authDomain: "c12-g21-m-java-react.firebaseapp.com",
    projectId: "c12-g21-m-java-react",
    storageBucket: "c12-g21-m-java-react.appspot.com",
    messagingSenderId: "546600937288",
    appId: "1:546600937288:web:3c09deb925ad3bb52a357d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)