import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAmJe9c6r_yUfLWpJl3rpHJz9ByH3I61Gs",
    authDomain: "flipkart-clone-1a222.firebaseapp.com",
    projectId: "flipkart-clone-1a222",
    storageBucket: "flipkart-clone-1a222.appspot.com",
    messagingSenderId: "986895187480",
    appId: "1:986895187480:web:2cda5b7493ac38af854d6d"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// export 

export { auth };
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();