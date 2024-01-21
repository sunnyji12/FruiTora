
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDK9WyjumKpqOGPbg3kmOZHukiL0tgtRhM",
  authDomain: "fruit-delivery-536bf.firebaseapp.com",
  databaseURL: "https://fruit-delivery-536bf-default-rtdb.firebaseio.com",
  projectId: "fruit-delivery-536bf",
  storageBucket: "fruit-delivery-536bf.appspot.com",
  messagingSenderId: "109929857333",
  appId: "1:109929857333:web:51dc7a673f19fe5de28c7c",
  measurementId: "G-CKTF43XPYS"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};


