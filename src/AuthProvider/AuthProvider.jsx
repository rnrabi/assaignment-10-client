import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import { GithubAuthProvider } from "firebase/auth";



export const authContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // social signin
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogIn = () => {
        return signInWithPopup(auth , githubProvider)
    }

    // signup user 
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login user
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const logOutUsr = () => {
        return signOut(auth)
    }


    // observe the user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUsr => {
            setUser(currentUsr)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        googleLogIn,
        githubLogIn,
        signUpUser,
        logInUser,
        logOutUsr
    }


    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}