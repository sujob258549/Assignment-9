

import { CiLocationOn, CiStar } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
const Detail = () => {
    const allDetail = useLoaderData();
    const { id } = useParams();
    const singeldetail = allDetail.find(detail => detail.id === parseInt(id))
    console.log(singeldetail)
    return (
        <div className="w-[90%] mx-auto">
            {
                <div className=" grid grid-cols-1 items-center lg:grid-cols-2 py-10 gap-10">
                    <div className="">
                        <div className="bg-slate-200 p-5 rounded-lg">
                            <figure><img className="  min-h-screen object-cover" src={singeldetail.image} alt="Shoes" /></figure>
                        </div>
                    </div>

                    <div className=" gap-0">
                        <h2 className="text-2xl playfair py-2 font-semibold">{singeldetail.estate_title}</h2>
                        <hr />

                        <div className=" flex gap-4 py-3 items-center">
                            <h4 className="font-semibold">Facilities</h4>
                            <div className="flex gap-4 flex-wrap justify-center md:justify-start items-center">
                                <h2 className="tColor text-sm font-medium  text-center bg-[#c6ecdd5d] px-3 rounded-full py-2 md:py-3 md:px-6">{singeldetail.facilities[0]}</h2>
                                <h2 className="tColor text-sm  font-medium  text-center bg-[#c6ecdd5d] px-3 rounded-full py-2 md:py-3 md:px-6">{singeldetail.facilities[1]}</h2>
                                <h2 className=" text-sm font-medium  text-center bg-[#c6ecdd5d] px-3 rounded-full py-2 md:py-3 md:px-6">{singeldetail.facilities[2]}</h2>
                            </div>
                        </div>

                        <hr />
                        <p className="text-2xl font-bold py-5">Description</p>
                        <p className="text-sm pb-5 flex"><span >{singeldetail.description}</span></p>
                        <hr />

                        <div className="flex gap-10 py-5">
                            <p className="text-sm font-medium flex items-center"><FaHome className="text-2xl mr-3"></FaHome> Room:{singeldetail.other_info.rooms}</p>
                            <p className="text-sm font-medium flex items-center"><CiStar className="text-2xl text-yellow-500  mr-3"></CiStar> Rating:{singeldetail.other_info.rating}</p>
                        </div>
                        <hr />
                        <div className=" flex flex-wrap flex-col gap-5 py-5">
                            <p className="  text-[14px] "><span className="mr-5 font-semibold">Prise for One day : </span> {singeldetail.price}</p>
                            <p className="  text-[14px] "><span className="mr-5 font-semibold"> Area : </span> {singeldetail.area}</p>

                        </div>
                        <hr />
                        <div className="flex justify-between py-2">
                            <p className="text-sm font-medium flex items-center"> <CiLocationOn className="mr-3 text-2xl"></CiLocationOn><span className="font-bold"> {singeldetail.location}</span></p>
                            <p className="text-sm font-medium flex">Quelaty:<span className="font-bold ml-2"> {singeldetail.segment_name}</span></p>
                        </div>
                        <hr />
                    </div>
                </div>

            }
        </div>
    );
};

export default Detail;