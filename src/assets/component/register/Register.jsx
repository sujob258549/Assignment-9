import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CreatAuth } from "../firebase/Authproviders";
import { Navigate } from "react-router-dom";



const Register = () => {
    const [shoandHideIcone, setShoandHideIcone] = useState(false)
    const [signupError, setsignupError] = useState('');
    const [successSignIn, setsuccessSignIn] = useState('');
    const { creatUser, upadateprofile } = useContext(CreatAuth)
    const handelsubmitRegiste = e => {
        e.preventDefault();
        setsignupError('')
        setsuccessSignIn('')
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photourl = e.target.photourl.value;
        const password = e.target.password.value;
        const conframpassowrd = e.target.conframPassword.value;
        const checked = e.target.checked.checked;
        if (password.length < 6) {
            setsignupError('password enter 6 carector or  a longer!! ');
            return;
        }
        if (password !== conframpassowrd) {
            return setsignupError('password and confam password No carect!!')
        }
        else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
            setsignupError('Please use a stronger password.');
            return;
        }
        if (!checked) {
            setsignupError('Please tramp and condition check!!');
            return;
        }

        console.log(name, email, photourl, password, conframpassowrd, checked);
        creatUser(email, password)

            .then(result => {
                console.log(result)
                upadateprofile(name, photourl)
                setsuccessSignIn('Seccess creat Your Acout Plese Logine Button click')
            })
            .catch(error => {
                console.log(error)
                setsignupError('email-already-in-use')
            })
        return <Navigate to={'/login'}></Navigate>

    }
    return (
        <div>
            <div className="py-10 mx-auto max-w-[90%]">

                <div>
                    <div className="card shadow shrink-0 w-full md:w-[50%]   bg-base-100 mx-auto my-10">
                        <h1 className="text-[35px] font-bold text-center pt-10">Register your account</h1>
                        <form className="card-body" onSubmit={handelsubmitRegiste}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Your Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Type your URL" name="photourl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email address</span>
                                </label>
                                <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input type={shoandHideIcone ? 'text' : 'password'} name="password" placeholder="Enter your password" className="input input-bordered" required />
                                <div className="absolute right-5 bottom-4" onClick={() => setShoandHideIcone(!shoandHideIcone)}>
                                    {
                                        shoandHideIcone ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                                    }
                                </div>
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Confirm Password</span>
                                </label>
                                <input type={shoandHideIcone ? 'text' : 'password'} name="conframPassword" placeholder="Enter your Confirm password" className="input input-bordered" required />
                                <div className="absolute right-5 bottom-4" onClick={() => setShoandHideIcone(!shoandHideIcone)}>
                                    {
                                        shoandHideIcone ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                                    }
                                </div>
                            </div>
                            <div className="pt-5">
                                <input type="checkbox" name="checked" />
                                <span className="ml-3 font-semibold text-[16px]">Accept Terms & Conditions</span>
                            </div>
                            {signupError && <p className="font-semibold text-red-600">{signupError}</p>}
                            {successSignIn && <p className="text-green-600 font-semibold">{successSignIn}</p>}
                            <div className="form-control mt-6">
                                <button className="btn hover:text-black shadow bg-[#403F3F] text-white">Register</button>
                            </div>
                        </form>
                        <p className="font-semibold text-[16px] pb-10 text-center">Already Have An Account? <Link to={'/login'} className="text-[#F75B5F]">Login</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;