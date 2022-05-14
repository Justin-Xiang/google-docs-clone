// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkCQY5f7qh6sCDniyDv1noweLM4Oo0_EE",
  authDomain: "docs-clone-19fae.firebaseapp.com",
  projectId: "docs-clone-19fae",
  storageBucket: "docs-clone-19fae.appspot.com",
  messagingSenderId: "781357799008",
  appId: "1:781357799008:web:323e68af5e6c8edb719505",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
