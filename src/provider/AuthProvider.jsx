import React, { createContext, useEffect, useState } from 'react';

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const Authcontext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setloading] =useState(true)

    const createUser = (email, password)=>{
        setloading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setloading(false)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logout = ()=>{
        setloading(false)
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
    setloading(false)
  });
  return ()=> unsubscribe()
    },[])

    const userinfo ={
        user,
        loading,
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