import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyCeKAMFlJ698a8fyAymunDa-d0onmuC2EY",
    authDomain: "freakshop-ecommerce.firebaseapp.com",
    projectId: "freakshop-ecommerce",
    storageBucket: "freakshop-ecommerce.appspot.com",
    messagingSenderId: "1052869925208",
    appId: "1:1052869925208:web:52353b42fdcb0df19e6d2d"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){    
    return firebase.firestore(app)
}


