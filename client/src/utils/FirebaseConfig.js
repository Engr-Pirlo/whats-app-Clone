import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAtpjrr-lIGrrL_hLXmfMO6V1SRH2D9q2Y",
    authDomain: "what-sapp-clone-14f2c.firebaseapp.com",
    projectId: "what-sapp-clone-14f2c",
    storageBucket: "what-sapp-clone-14f2c.appspot.com",
    messagingSenderId: "966773385358",
    appId: "1:966773385358:web:6ed3558e4a7dcd8b1941df",
    measurementId: "G-VB24E92HRP"
  };


const app  = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
 
