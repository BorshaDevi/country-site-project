import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; //
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";
export const AuthContext =createContext(null)
const auth=getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading] =useState(true)
    
     

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }
    const gitSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }
    const logOut=()=> {
        setLoading(true)
        return signOut(auth)
    }
   useEffect(() => {
       const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
           console.log('this is form ',currentUser)
           setUser(currentUser)
           setLoading(false)
        });
        return () => {
            unSubscribe()
        }
   },[])

    const inOf={
       user,
       createUser,
       logOut,
       signIn,
       googleSignIn,
       gitSignIn,
       loading,
    }
    return (
        <div>
            <AuthContext.Provider value={inOf}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;