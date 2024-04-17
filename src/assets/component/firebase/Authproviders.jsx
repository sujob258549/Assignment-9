import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const CreatAuth = createContext(null);
const Authproviders = ({ children }) => {

    const [user, setuser] = useState(null)
    const [loding , setloding] = useState(true);

    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

    const creatUser = (email, passowrd) => {
        setloding(false)
        signout();
        return createUserWithEmailAndPassword(auth, email, passowrd);
        

    }
    const loginInUser = (email, passowrd,) => {
        setloding(false)
        return signInWithEmailAndPassword(auth, email, passowrd)
    }

    // google
    const signInGoogle = () => {
        setloding(false)
        return signInWithPopup(auth, googleprovider)
            .then(result => {
                const loginUser = result.user;
                setuser(loginUser);
                console.log(result)
               
            })
            .catch(error => (
                console.error(error)
            ))
    }

    // github

    const signIngithub = () => {
        setloding(false)
        return signInWithPopup(auth, githubprovider)
            .then(result => {
                const loginUsers = result.user;
                setuser(loginUsers);
            })
            .catch(error => (
                console.error(error)
            ))
    }

    // manege user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
                console.log(user)
                setloding(false)
                 
            } 
            else {
                setuser(null);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    // loge out
    const signout = () => {
        return signOut(auth)
            .then(() => {
                setuser('')
            }).catch((error) => {
                console.error(error)
            });
    };

    // update data
    const upadateprofile = (name, image) => {
        setloding(false)
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const authinfo = {
        creatUser,
        loginInUser,
        signInGoogle,
        signIngithub,
        user,
        signout,
        upadateprofile,
        loding
    }
    return (
        <CreatAuth.Provider value={authinfo}>
            {children}
        </CreatAuth.Provider>
    );
};

export default Authproviders;