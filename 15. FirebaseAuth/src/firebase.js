import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
export const auth = firebase.auth();

export function signOut() {
  auth
    .signOut()
    .then(() => {
      console.log("User signed out successfully");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
}

export const getUser = firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("GetUser", user);
  }
});
