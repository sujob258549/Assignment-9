import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const CreatAuth = createContext(null);
const Authproviders = ({ children }) => {

    const [user, setuser] = useState(null)

    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

    const creatUser = (email, passowrd) => {
        return createUserWithEmailAndPassword(auth, email, passowrd);
        

    }
    const loginInUser = (email, passowrd,) => {
        return signInWithEmailAndPassword(auth, email, passowrd)
    }

    // google
    const signInGoogle = () => {
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
        upadateprofile
    }
    return (
        <CreatAuth.Provider value={authinfo}>
            {children}
        </CreatAuth.Provider>
    );
};

export default Authproviders;