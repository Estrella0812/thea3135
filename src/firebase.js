import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

function getApp(){
    const firebaseConfig = {
        apiKey: "AIzaSyBCjFHfKTPWXaln-tQy3owWRVjiNy-kJ6w",
        authDomain: "thea3135-6e13c.firebaseapp.com",
        projectId: "thea3135-6e13c",
        storageBucket: "thea3135-6e13c.appspot.com",
        messagingSenderId: "889777714937",
        appId: "1:889777714937:web:ce20ab32d27ea13c1e5428",
        measurementId: "G-0KHWT7YTDN"
      };
    
    const app = initializeApp(firebaseConfig);
    return app;
}

export default getApp;

