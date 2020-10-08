import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBk_NulfCRAmQ7LSOtifKHIPYo5MT8k9ls",
    authDomain: "spending-habits-34ef7.firebaseapp.com",
    databaseURL: "https://spending-habits-34ef7.firebaseio.com",
    projectId: "spending-habits-34ef7",
    storageBucket: "spending-habits-34ef7.appspot.com",
    messagingSenderId: "1098789962697",
    appId: "1:1098789962697:web:94e20dae67cb2e9d329e18",
    measurementId: "G-8WD38BER5Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage();
export default firebaseApp.firestore()