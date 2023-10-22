import React, { createContext, useEffect, useState } from 'react';

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const Authcontext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logout = ()=>{
        return signOut(auth)
    }

    const googleLogin =()=>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const githubLogin=()=>{
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (loggeduser) => {
    setUser(loggeduser)  
  });
  return ()=> unsubscribe()
    },[])

    const userinfo ={
        user,
        createUser,
        signIn,
        logout,
        googleLogin,
        githubLogin,
    }
    return (
        <Authcontext.Provider value={userinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;