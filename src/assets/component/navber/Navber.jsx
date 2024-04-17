import { Link, NavLink } from "react-router-dom";
import './style.css'
import { useContext } from "react";
import { CreatAuth } from "../firebase/Authproviders";

const Navber = () => {
    const { user, signout } = useContext(CreatAuth);
    const navber = <>

        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/signup'}>Sign In</NavLink>
        <NavLink to={'/location'}>Location</NavLink>
        <NavLink to={'/profile'}>Prfile</NavLink>
        <NavLink to={'/updateprofile'}>Update Prfile</NavLink>

    </>
    return (
      <div className="border-b-2  z-50 bg-yellow-500">
          <div className="w-[90%] mx-auto">
            <div className="navbar p-0 py-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" manu menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navber
                            }
                        </ul>
                    </div>
                    <img className="w-20" src="https://i.ibb.co/zHN77Rj/images-removebg-preview.png" alt="" />
                </div>
                <div className="navbar-center manu  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navber
                        }
                    </ul>
                </div>
                <div className="navbar-end relative">
                    {user ? <div className="flex gap-2 items-center ">
                        <div className="tooltip text-xl font-medium" data-tip={user.displayName ? user.displayName : 'No name'}>
                            <img className="w-14 border border-white rounded-full" src={user?.photoURL ? user?.photoURL :"https://i.ibb.co/f1tc2Q5/240-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8-removebg-preview.png"} alt="NO Image" />
                        </div>

                        <button onClick={signout} className="btn text-xl font-medium text-white px-5 hover:text-black bg-[#7AA93C] rounded-md">Sign Out</button>
                    </div>

                        :
                        <Link to={'/login'} className="btn text-xl font-medium text-white px-5 hover:text-black bg-[#7AA93C] rounded-md">Login</Link>}
                </div>
            </div>
        </div>
      </div>
    );
};

export default Navber;