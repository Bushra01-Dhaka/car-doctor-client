import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //for sign up  (creating users)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //for sign in
    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    //for google signin
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
        
    }

    //for github signin
    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,gitProvider);
    }

    //logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    //Set an authentication state observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current User", currentUser);
            setLoading(false);
        })
        return () => {
           return unSubscribe();
        }

    },[])
    
    const authInfo = {
       user,
       loading,
       createUser,
       signIn,
       googleSignIn,
       githubSignIn,
       logOut
    }
    return (
        
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
       
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;