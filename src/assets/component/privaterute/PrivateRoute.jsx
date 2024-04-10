import { useContext } from "react";
import { CreatAuth } from "../firebase/Authproviders";
import { Navigate, useLocation  } from "react-router-dom"

const PrivateRoute = ({children}) => {

    const {user} = useContext(CreatAuth);
    const location = useLocation()

    if(user){
       return children;
    }
    return <Navigate to={"/login"} state={location?.pathname || '/'}></Navigate>
        
  
};

export default PrivateRoute;