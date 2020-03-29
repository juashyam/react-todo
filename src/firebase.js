import firebase from 'firebase'

/**
 * To get the Firebase config, first go to the Firebase Homepage (https://console.firebase.google.com/) and click on 
 * the Create New Project or the App Project Button. Also, make sure that you have logged into your google account.
 * 
 * In the Firebase project’s homepage, you will notice three circular icons. The first two will contain code 
 * that will help you connect the firebase project to an iOS and Android app respectively, while the third 
 * one will have code that will help you connect the project to a web app (which is what we want).
 * 
 * Click on it and copy the apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, 
 * and appId values.
 */
const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXX"
};
var fire = firebase.initializeApp(firebaseConfig);

export default fire;