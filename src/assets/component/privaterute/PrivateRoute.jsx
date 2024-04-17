import { useContext } from "react";
import { CreatAuth } from "../firebase/Authproviders";
import { Navigate, useLocation  } from "react-router-dom"
import { CirclesWithBar } from "react-loader-spinner";

const PrivateRoute = ({children}) => {

    const {user , loding} = useContext(CreatAuth);
   
    

    if(user){
       return children;
    }
    return <Navigate to={"/login"} state={location?.pathname || '/'}></Navigate>
        
  
};

export default PrivateRoute;