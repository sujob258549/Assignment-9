
import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import StaticSection from "./StaticSection";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import Radualprograss from "../radialprograse/Radualprograss";



const Home = () => {
    return (
        <div className="w-[90%] mx-auto">

            <Helmet>
                <title>Hospitality Service | Home</title>
            </Helmet>

            <Slider></Slider>
            <div className="pt-16 md:pt-28">
                <h1 data-aos="fade-top" className="text-3xl md:text-5xl  font-bold pb-5 md:pb-10 text-center">Servoses section</h1>
                <div className="hero-content flex md:flex-row flex-col-reverse gap-10 ">
                    <div data-aos="fade-right" className="w-full md:w-[50%]">
                        <h1 className="text-2xl md:text-5xl font-bold">Our service</h1>
                        <p className="py-6">
                            A range of services offered to guests or customers in hotels, restaurants, bars, cruises, theme parks and other tourism and leisure facilities. These services include everything from the initial welcome of the guest to the provision of services aimed at providing a positive and memorable experience.</p>
                        <Link className="btn w-40 text-white bg-[#400f0fd9] flex items-center hover:text-black"><FaPhoneAlt className="text-xl font-bold"></FaPhoneAlt> Contact Us</Link>
                    </div>
                    <div data-aos="fade-left" className="w-full md:w-[50%]">
                        <img className='hover:transform hover:scale-110' src="https://hospitalityinsights.ehl.edu/hubfs/Untitled-1-Dec-18-2023-03-55-41-8861-PM.jpg" className=" rounded-lg" />
                    </div>
                </div>
            </div>
            <StaticSection></StaticSection>
            <Radualprograss></Radualprograss>
        </div>
    );
};

export default Home;