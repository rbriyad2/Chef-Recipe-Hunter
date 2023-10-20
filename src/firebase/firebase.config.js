// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APIKEY,
  authDomain: REACT_AUTHDOMAIN,
  projectId: REACT_PROJECTID,
  storageBucket: REACT_STORAGEBUCKET,
  messagingSenderId:REACT_MESSAGINGSENDERID,
  appId: REACT_APPID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;