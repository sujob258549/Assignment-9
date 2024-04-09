// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQp3WJ4BCdzb29uFiJbIJezDHoNbBNTJA",
  authDomain: "assinment-9-react.firebaseapp.com",
  projectId: "assinment-9-react",
  storageBucket: "assinment-9-react.appspot.com",
  messagingSenderId: "258507718924",
  appId: "1:258507718924:web:8b8b74a6fa9f2696ec8929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;