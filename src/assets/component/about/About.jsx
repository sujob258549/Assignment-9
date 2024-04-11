import { FaServicestack } from "react-icons/fa";
import { TbDeviceIpadStar } from "react-icons/tb";
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div>

            <div className="w-[90%] mx-auto">
                <div className="flex bg-slate-300 p-2 items-center my-8">
                    <button className="md:btn btn-sm rounded-none text-sm md:text-xl font-medium text-white bg-[#4f903574]">Hospitality</button>
                    <marquee direction="left" className="font-semibold text-[18px] ">
                        <p className="flex items-center"> Welcome to Our Hospitality
                            <span className="px-5 flex"><span><FaServicestack className="mr-3 text-yellow-600"></FaServicestack></span> Our servises</span>Hospitality Services means those services that you provide for your customers in the conduct of your business as a hotel, motel or restaurant or other operation described in the Declarations.</p>
                    </marquee>
                </div>

            </div>
            <div className="hero min-h-screen bg-base-200">

                <div className="w-[90%] mx-auto py-10 md:py-20">
                    <h1 className="text-3xl md:text-5xl  font-bold pb-10 md:pb-20 text-center">Welcome to Our Hospitality</h1>
                    <div className="hero-content flex md:flex-row flex-col-reverse gap-10">
                        <div className="w-full md:w-[50%]">
                            <h1 className="text-2xl md:text-5xl font-bold">Our Food service</h1>
                            <p className="py-6">
                                A range of services offered to guests or customers in hotels, restaurants, bars, cruises, theme parks and other tourism and leisure facilities. These services include everything from the initial welcome of the guest to the provision of services aimed at providing a positive and memorable experience.</p>
                            <Link className="btn w-40 text-white bg-[#400f0fd9] flex items-center hover:text-black"><TbDeviceIpadStar className="text-xl font-bold"></TbDeviceIpadStar> Get Started</Link>
                        </div>
                        <div className="w-full md:w-[50%]">
                            <img src="https://media.licdn.com/dms/image/C5112AQE5qR-BahRCMw/article-cover_image-shrink_600_2000/0/1520089172132?e=2147483647&v=beta&t=sVUJuB-nLkBEQdmppDfCkpQ5tRL7G0glim6DrKaK-cg" className=" rounded-lg" />
                        </div>
                    </div>
                    <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-10 py-10 md:py-20">
                        <img src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" className=" rounded-lg" />
                        <div>
                            <h1 className="text-2xl md:text-5xl font-bold">Our Room service</h1>
                            <p className="py-6">
                                A range of services offered to guests or customers in hotels, restaurants, bars, cruises, theme parks and other tourism and leisure facilities. These services include everything from the initial welcome of the guest to the provision of services aimed at providing a positive and memorable experience.</p>
                            <Link className="btn w-40 text-white bg-[#400f0fd9] flex items-center hover:text-black"><TbDeviceIpadStar className="text-xl font-bold"></TbDeviceIpadStar> Get Started</Link>
                        </div>
                    </div>
                   <div className="hero-content flex md:flex-row flex-col-reverse gap-10">
                   <div className="w-full md:w-[50%]">
                            <h1 className=" text-2xl md:text-5xl font-bold ">Our Resot service</h1>
                            <p className="py-6">
                                A range of services offered to guests or customers in hotels, restaurants, bars, cruises, theme parks and other tourism and leisure facilities. These services include everything from the initial welcome of the guest to the provision of services aimed at providing a positive and memorable experience.</p>
                            <Link className="btn w-40 text-white bg-[#400f0fd9] flex items-center hover:text-black"><TbDeviceIpadStar className="text-xl font-bold"></TbDeviceIpadStar> Get Started</Link>
                        </div>
                        <div className="w-full md:w-[50%]">
                       <img src="https://media.architecturaldigest.com/photos/576d98445ea3e586576ec49a/16:9/w_2580,c_limit/luxury-vacation-rental-sites-03.jpg" className=" rounded-lg" />
                       </div>
                    </div>
                    <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-10 py-10 md:py-20">
                        <img src="https://cdn.firstcry.com/education/2022/07/05124744/The-Park-10-lines-short-and-long-essay-for-children1.jpg" className=" rounded-lg rounded-2xl" />
                        <div>
                            <h1 className="text-2xl md:text-5xl font-bold">  our park servises</h1>
                            <p className="py-6">
                                A range of services offered to guests or customers in hotels, restaurants, bars, cruises, theme parks and other tourism and leisure facilities. These services include everything from the initial welcome of the guest to the provision of services aimed at providing a positive and memorable experience.</p>
                            <Link className="btn w-40 text-white bg-[#400f0fd9] flex items-center hover:text-black"><TbDeviceIpadStar className="text-xl font-bold"></TbDeviceIpadStar> Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;