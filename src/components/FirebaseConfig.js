
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPucx5GoY63CdGNKfv1T_cdHxHfE1hggM",
  authDomain: "fruitora-2d889.firebaseapp.com",
  projectId: "fruitora-2d889",
  storageBucket: "fruitora-2d889.appspot.com",
  messagingSenderId: "1064566324266",
  appId: "1:1064566324266:web:606b98110218f825dd5753",
  measurementId: "G-7D7GCRZ5TR"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};