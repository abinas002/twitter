// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAve8XvRIj6WZKVV8LWNxsItCrvx4WJXRQ",
  authDomain: "twitter-v2-c7c28.firebaseapp.com",
  projectId: "twitter-v2-c7c28",
  storageBucket: "twitter-v2-c7c28.appspot.com",
  messagingSenderId: "424699726458",
  appId: "1:424699726458:web:f464fc0b096998cde089c3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage();
export {app, db, storage};