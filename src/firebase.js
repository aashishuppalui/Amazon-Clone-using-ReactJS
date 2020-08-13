import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDnzbfueJSGn53i6vVklDMBQo2yokVkBvU",
  authDomain: "clone-54274.firebaseapp.com",
  databaseURL: "https://clone-54274.firebaseio.com",
  projectId: "clone-54274",
  storageBucket: "clone-54274.appspot.com",
  messagingSenderId: "1076477877306",
  appId: "1:1076477877306:web:d991bd276656f6b9586903",
  measurementId: "G-ZGGSHMQCXX",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
