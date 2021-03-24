import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDBgtVYv7URrgJuLEV63EJFRZ9aK3kxpfA",
    authDomain: "simpliortask.firebaseapp.com",
    projectId: "simpliortask",
    storageBucket: "simpliortask.appspot.com",
    messagingSenderId: "806758722496",
    appId: "1:806758722496:web:1080c5d744ef785cfd3625"
};

var fire = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default db;
