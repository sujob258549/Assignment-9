import { useContext } from "react";
import { CreatAuth } from "../firebase/Authproviders";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Profile = () => {

    const {user} = useContext(CreatAuth);
    return (
        <div className="border-2 rounded-md w-full md:w-[70%] mx-auto p-5 mb-10 md:p-10">
            <p className="text-xl flex "><span className="mr"><FaUser></FaUser></span> <span className="font-semibold"> Your name :</span> <span className="ml-3 ">{user?.displayName ? user?.displayName : "No name input"}</span></p>
           <div className="w-60 py-5">
           <p className="text-xl font-semibold"> Your Photo url:  <span className="ml-3 font-medium brack">{user?.photoURL } </span> </p>
           </div>
           <p className="text-xl flex items-center"> <MdOutlineEmail className="mr-2 text-2xl font-semibold"></MdOutlineEmail> <span className="font-semibold"> Your Email :</span> <span className="ml-3 ">{user?.email ? user?.email : 'No email Input' }</span></p>
         
            
        </div>
    );
};

export default Profile;