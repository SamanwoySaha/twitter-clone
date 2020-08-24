import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAtmFrnFtIiVxGvYTCgKln-RyA8gWBRXlE",
    authDomain: "twitter-clone-8c03e.firebaseapp.com",
    databaseURL: "https://twitter-clone-8c03e.firebaseio.com",
    projectId: "twitter-clone-8c03e",
    storageBucket: "twitter-clone-8c03e.appspot.com",
    messagingSenderId: "606764790117",
    appId: "1:606764790117:web:db40fe8c3bf5af18e6b18c",
    measurementId: "G-GFBG8VJYBV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;