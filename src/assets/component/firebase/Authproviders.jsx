import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const CreatAuth = createContext(null);
const Authproviders = ({ children }) => {

    const [user, setuser] = useState(null)
    console.log(user)

    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

    const creatUser = (email, passowrd) => {
        return createUserWithEmailAndPassword(auth, email, passowrd)
    }
    const loginInUser = (email, passowrd) => {
        return signInWithEmailAndPassword(auth, email, passowrd)
    }

    // google
    const signInGoogle = () => {
        return signInWithPopup(auth, googleprovider)
            .then(result => {
                const loginUser = result.user;
                setuser(loginUser);
            })
            .catch(error => (
                console.error(error)
            ))
    }

    // github

    const signIngithub = () => {
        return signInWithPopup(auth, githubprovider)
            .then(result => {
                const loginUsers = result.user;

                setuser(loginUsers);
            })
            .catch(error => (
                console.error(error)
            ))
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser)

        })

        return () => {
            unsubscribe();
        }
    }, [])

    const signout = () => {
        return signOut(auth)
            .then(() => {
                setuser('')
            }).catch((error) => {
                console.error(error)
            });
    }

    const authinfo = {
        creatUser,
        loginInUser,
        signInGoogle,
        signIngithub,
        user,
        signout
    }
    return (
        <CreatAuth.Provider value={authinfo}>
            {children}
        </CreatAuth.Provider>
    );
};

export default Authproviders;