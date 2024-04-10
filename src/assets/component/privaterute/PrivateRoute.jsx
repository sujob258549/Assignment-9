import { useContext } from "react";
import { CreatAuth } from "../firebase/Authproviders";
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {

    const {user} = useContext(CreatAuth);

    if(user){
       return children;
    }
    return <Navigate to={"/login"}></Navigate>
        
  
};

export default PrivateRoute;