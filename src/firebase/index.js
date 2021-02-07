import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyCviibf8x5UEBQrqyKwBf46784JOLtDxLs",
  authDomain: "klutch-todo.firebaseapp.com",
  projectId: "klutch-todo",
  storageBucket: "klutch-todo.appspot.com",
  messagingSenderId: "73597702061",
  appId: "1:73597702061:web:bb458c85fedccf1e701b24",
  measurementId: "G-L0GWFMWK5T",
});
firebase.analytics();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const googleSignIn = async () => {
  await auth.signInWithPopup(googleAuthProvider);
};

export const signOut = async () => {
  await auth.signOut();
};

export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export const taskRef = firestore.collection("tasks");

export const saveNewTask = async ({ title, content }) => {
  await taskRef
    .add({
      title: title,
      body: content,
      uid: auth.currentUser.uid,
      creator: auth.currentUser.displayName,
      timestamp: timestamp,
      isCompleted: false,
    })
    .then(() => {
      alert("Task saved!");
    })
    .catch((error) => alert(error));
};

export default firebase;
