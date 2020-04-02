import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDtcn6WhUYUa_nHWoqTgbTM-KbdcDD0myU",
  authDomain: "e-commerce-platform-60f53.firebaseapp.com",
  databaseURL: "https://e-commerce-platform-60f53.firebaseio.com",
  projectId: "e-commerce-platform-60f53",
  storageBucket: "e-commerce-platform-60f53.appspot.com",
  messagingSenderId: "78542615843",
  appId: "1:78542615843:web:b2e358bf9e0fb56101c896",
  measurementId: "G-QSE61QXMLC",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
