import * as firebase from 'firebase';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyC0k8Pa35l3jNo72XBEQruVtcr5QyJ9RnQ",
    authDomain: "nba-storage.firebaseapp.com",
    databaseURL: "https://nba-storage.firebaseio.com",
    projectId: "nba-storage",
    storageBucket: "nba-storage.appspot.com",
    messagingSenderId: "605867297988"
};
firebase.initializeApp(config);