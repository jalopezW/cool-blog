import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBwB9aNRZ5XpsZSpNyrF70EZdMuhliFh3U",
  authDomain: "blog-8aee2.firebaseapp.com",
  projectId: "blog-8aee2",
  storageBucket: "blog-8aee2.appspot.com",
  messagingSenderId: "769992026586",
  appId: "1:769992026586:web:ffdc7c5289e452ca4438e3"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
