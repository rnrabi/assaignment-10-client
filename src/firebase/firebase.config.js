// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlY498XkU_Q1HDG5m29Ud-0UDs4M8sRIU",
  authDomain: "assaignment-10-client.firebaseapp.com",
  projectId: "assaignment-10-client",
  storageBucket: "assaignment-10-client.appspot.com",
  messagingSenderId: "507546165381",
  appId: "1:507546165381:web:c0aa2fd6af41a21fd6c9ec"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);