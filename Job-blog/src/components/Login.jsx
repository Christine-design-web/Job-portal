import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const Login = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const handleLogin = () =>{
        signInWithPopup(auth, googleProvider).then((result) => {
           
            const user = result.user;
            
          
          }).catch((error) => {

            console.error("Authentication error:", error);
           
            const errorMessage = error.message;

            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });

    }
  return (
    <div className="h-screen w-full flex items-center justify-center">

        <button className="bg-blue px-8 py-2 text-white rounded" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login