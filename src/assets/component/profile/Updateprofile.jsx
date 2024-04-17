import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CreatAuth } from "../firebase/Authproviders";
import { FaUser } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { CirclesWithBar } from "react-loader-spinner";

const UpdateProfile = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {upadateprofile , loding} = useContext(CreatAuth);
    if (loding) {
        return <div className="absolute top-[50%] left-[50%]">
           <CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                outerCircleColor="#4fa94d"
                innerCircleColor="#4fa94d"
                barColor="#4fa94d"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }

    const onSubmit = data => {
        console.log(data); 
        upadateprofile(data.name, data.photourl)
        
    };

    return (
        <div className="w-full md:w-[40%] mx-auto border-2 rounded-md my-10 shadow">
             <Helmet>
                <title>Hospitality Service | Update profile</title>
            </Helmet>
            <div><FaUser className="text-7xl mx-auto mt-12 p-2 border  border-black rounded-full"></FaUser></div>
            <h2 className="text-3xl pt-8 font-bold text-center">Update profile Information</h2>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">New name</span>
                    </label>
                    <input type="text" placeholder="Enter your new Name" name="name" className="input input-bordered" required {...register("name")} />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Photo URL</span>
                    </label>
                    <input type='text' name="photourl" placeholder="Enter your new Photo URL" className="input input-bordered" required {...register("photourl")} />
                </div>
                <div className="form-control mt-5">
                    <button className="btn bg-[#403F3F] hover:text-black shadow text-white">Update Profile</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;
