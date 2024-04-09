import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "./firebase.config";

export const CreatAuth = createContext(null);
const Authproviders = ({ children }) => {

    const creatUser=(email, passowrd)=>{
        return createUserWithEmailAndPassword(auth, email,passowrd)
    }

    const authinfo = { 
        creatUser
     }
    return (
        <CreatAuth.Provider value={authinfo}>
            {children}
        </CreatAuth.Provider>
    );
};

export default Authproviders;